---
id: 336
title: "Breaking Down Dropbox's Sync Engine Rebuild"
date: '2020-10-19T18:50:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=336'
permalink: /breaking-down-dropboxs-sync-engine-rebuild/
categories:
    - 'Engineering Blog Breakdowns'
    - Uncategorized
---

One of the best ways to gain technical understanding is to observe how established companies reason about and write about their technical challenges. As a product manager, being able to read between the lines of a technical document is a crucial skill and can be the difference between nuance and confusion.

In this article, we explore [Dropbox’s decision to rebuild their technological core](https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine). In doing so, we call out some of the factors that led them to this situation in the first place, the lessons that can be learned from their path, and how a product manager can help in these situations.

**Original article:** [Rewriting the heart of our sync engine](https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine)

#### **Things Should Work How You Think They Should**

> ***Durability everywhere is hard***
> 
> *Dropbox also aims to “just work” on users’ computers, no matter their configuration. We support Windows, macOS, and Linux, and each of these platforms has a variety of filesystems, all with slightly different behavior. Under the operating system, there’s enormous variation in hardware, and users also install different kernel extensions or drivers that change the behavior within the operating system. And above Dropbox, applications all use the filesystem in different ways and rely on behavior that may not actually be part of its specification.*

Product managers are the APIs to their products. Insofar as there is a need to work with your team, you will have to be the face to the outside world. Many products, to those who aren’t working on them day in and day out, can be reduced very simply. For example, Dropbox syncs files. While this is great for a sales pitch, it belies the complexities and caveats that comprise the fiber of your product. Limitations that are clear to you are invisible to outsiders. Hence, it’s critically important for you as a product manager to have both a detailed, on-the-ground view to work with the engineering team directly, as well as a high-level view to keep in touch with how your users and/or peers see you.

A product that works intuitively is rare, and is never an accident.

Nobody cares about the intricacies of your edge cases. No small part of your job is to translate the *intent* of an outside request into the specific requirements that your team relies on to help them navigate the network of hidden tradeoffs and decisions that have to be made.

This mindset should feed back into your strategy decisions as the product manager. Ad hoc decisions to support requests may suffice in the moment, but rarely lead to a cohesive vision. Constantly receiving requests that you’re unable to fulfill indicates the lack of a consistent, intuitive outward presentation. Use these moments as feedback to realign your product with the realities of your users.

- - - - - -

#### **Local Maximums**

> *But despite its success, Sync Engine Classic was deeply unhealthy. In the course of building Smart Sync, we’d made many incremental improvements to the system, cleaning up ugly code, refactoring interfaces, and even adding Python type annotations. We’d added copious telemetry and built processes for ensuring maintenance was safe and easy. However, these incremental improvements weren’t enough.*
> 
> *Shipping any change to sync behavior required an arduous rollout, and we’d still find complex inconsistencies in production. The team would have to drop everything, diagnose the issue, fix it, and then spend time getting their apps back into a good state. Even though we had a strong team of experts, onboarding new engineers to the system took years. Finally, we poured time into incremental performance wins but failed to appreciably scale the total number of files the sync engine could manage.*

A local maximum is a point that is higher than all the points immediately around it, but not necessarily the highest point that’s attainable (see illustration). The tricky thing about local maximums is that when you reach one, any step you take in any direction will necessarily be a downgrade, *even* steps that will ultimately lead you to a global maximum.

<figure class="wp-block-image" id="yui_3_17_2_1_1650048613677_94">![dropbox-local-maximum-illustration.png](https://images.squarespace-cdn.com/content/v1/5eecfd10923cc52983dbbc17/1602438943248-NC9E4HTVBQIVK9MX6EM3/dropbox-local-maximum-illustration.png?format=1500w)</figure>The engineers at Dropbox aren’t stupid, and certainly not the ones who work on their technological core. But just as ad hoc decisions as a product manager will lead to a disjointed strategic position, incremental decisions as a technical framework will look good in the moment but ultimately leave you stuck, at a local maximum.

To be clear, no one intends to build towards a local maximum. But myriad factors can ultimately lead a team down this course, including:

- Mis-estimation of future needs
- Lack of a long-term vision to guide short-term decisions
- Pressure to produce immediate results without time to consider consequences
- Failure to predict fundamental paradigm shifts, which can often — by definition — be un-predictable

It’s important to keep this perspective when joining a team as the “fresh perspective”. While it’s true that offering a look with fresh eyes and a clear mind can spot ideas that might otherwise be missed, some of those ideas may already have been considered by the team. A product manager’s role is not just to describe the ideal state, but also to help the team get there. Some ideas can be blindingly obvious and, had the team been started today, would’ve been the uncontested winner. That doesn’t mean it’s easy for the team to *transition* from where they are now to where they should be. Any step forward will, in the short term, also be a step down. A product manager’s true job is to navigate a team through the valleys, to their next peak.

As an ending note, [this tweet by Box CEO Aaron Levie](https://twitter.com/levie/status/1302320793825673218?s=20) is hilariously on point:

> *Shout out to all the product managers out there that are now dealing with all the annoyingly limitless ramifications of seemingly small decisions that the CEO made 10 years ago.*

- - - - - -

#### **Data Models**

> *There were a few root causes for these issues, but the most important one was Sync Engine Classic’s data model. The data model was designed for a simpler world without sharing, and files lacked a stable identifier that would be preserved across moves. … Changing the foundational nouns of a system is often impossible to do in small pieces, and we quickly ran out of effective incremental improvements.*

This wouldn’t be a PMTL article without a technical explainer so at last, here we are.

A data model is the structure that encapsulates all the relevant data for a given system. The layout of the data model is important because it must be universal and, therefore, consistent. The data model is a concept used by all component systems as a contract for what data will be present in a particular context, similar to how APIs are used *between* systems as a contract for their communication.

Whenever a structure is used widely, and especially if it’s used for coordination, it becomes incredibly difficult to change it in any significant way. To do so would break existing assumptions for how the system should work (hence the term “breaking change”), and require a significant migration effort to ensure no data gets left behind.

Let’s illustrate this problem with a (significantly) simplified guess of how Dropbox’s data model for a file might look.

```
<pre class="wp-block-code">```
- file
    - owner
    - title
    - parent
    - contents
```
```

Computers can uniquely identify a file via its location on the computer (which is why you can’t have two things with the same name in the same folder). For example:

`/User/davidcai/home/Desktop/pmtechlessons/articles/dropbox-breakdown.txt`

could describe a draft of this article that sits in a folder in a folder on my computer’s desktop.

Using the information provided in this data model, Dropbox could recursively unwrap the `parent` field until it had much the same thing:

`Path = owner + [recursive-unwrap: parent] + title`

Given that Dropbox syncs within your computer’s file system, this is a pretty reasonable path forward.

Now let’s introduce file sharing. The file would now have to be in *multiple* user’s accounts, which might lead us to change `owner` and `parents` to a list, to capture everyone the file is shared with:

```
<pre class="wp-block-code">```
- file
    - owners --> list
    - parents --> list
    ...
```
```

How do you identify the file now? There are multiple paths that are valid. You could choose one, but what if that person moves the file? Now the old identifying path is out of date, plus you have to update everyone else who also had access to the file!

This is where the “stable identifier” mentioned in the excerpt would help. If every article had a unique ID, this problem could be solved. But the original data model didn’t include space for an ID! To introduce this change, not only would every line of code that referred to a file have to be updated, but we’d have to ensure every file also got an ID assigned to it. This is a massive undertaking, and a risky one too.

We could narrow the scope by only adding IDs to shared files, but then we’re back to the earlier of this article: will this internal inconsistency prevent you from presenting an intuitive product externally?

This is the problem with having a data model that doesn’t fit your use cases anymore. To contend with a paradigm shift, by no fault of their own, the old sync engine was now woefully inadequate for handling files in the new, shared-filed world.

This example perfectly summed up each of the three lessons of this article:

1. Present an intuitive product that works how others think it should.
2. A series of correct decisions in the moment can still lead to a poor outcome down the line.
3. Data models are seriously tricky.

- - - - - -

Engineering blog posts, especially well-written ones from reputable software companies, provide valuable high-level insight into what engineering challenges a company faces and how they approached the problem. By reading them, you not only familiarize yourself with the terminology, but also with the core challenges you’ll be dealing with as a product manager in your own company.