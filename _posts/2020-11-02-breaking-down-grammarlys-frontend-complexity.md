---
id: 340
title: "Breaking Down Grammarly's Frontend Complexity"
date: '2020-11-02T18:52:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=340'
permalink: /breaking-down-grammarlys-frontend-complexity/
categories:
    - 'Engineering Blog Breakdowns'
    - Uncategorized
---

One of the best ways to gain technical understanding is to observe how established companies reason about and write about their technical challenges. As a product manager, being able to read between the lines of a technical document is a crucial skill and can be the difference between nuance and confusion.

A common misstep by product managers is assuming a feature is simple. There is always complexity underneath the surface, and oftentimes the features that appear the simplest are doing the most work behind the scenes. In [this post by the Grammarly team](https://www.grammarly.com/blog/engineering/part-1-how-grammarly-tackles-hidden-complexity-in-front-end-applications/), the authors discuss where complexity may arise, and the steps they take to combat it. In this breakdown, we’ll identify where product managers can contribute to managing complexity, and what might happen if you don’t.

**Original article:** [How Grammarly Tackles Hidden Complexity in Front-End Applications](https://www.grammarly.com/blog/engineering/part-1-how-grammarly-tackles-hidden-complexity-in-front-end-applications/)

#### **Complexity Is A Multiplier**

> *But the damage from a spiraling project like this doesn’t always end with the last commit and deploy: the consequences can extend to ruined architecture, reduced team morale, and increased risk of employee attrition. And that can all happen before the project even ships, when there can be a risk of actual physical dangers resulting from malfunctioning software.*

Intuitively, complexity can sink a feature. That’s a given. What the authors are getting at here is a more subtle yet pernicious side effect. Even setting aside the technical concerns with a highly complex project, we can identify the product management repercussions.

**Descoping.** Successful features build momentum. A small experiment that sees a metric lift will not only generally bring a positive glow, but also provide confidence in the team’s strategy, execution, and direction. A small experiment gets leveled up into an MVP, then a V2. Through this process, complexity is necessarily managed — the notion of the *Minimum Viable Product* is a testament to ordering and layer complexity as necessary. However, improper descoping as a fearful reaction to complex feature may lead to the initial iteration to fall *under* the bar even for an MVP, killing the idea before it even has a chance.

**Asymptotic timelines.** As you get closer to launching a feature, the smallest tasks that stand between you and release can suddenly feel like a mountain (or for students, imagine the writeup at the end of a major project). It goes without saying that the more complex a feature is, the taller those mountains will appear to be.

**Mirages.** In talking about *Dropbox’s Sync Engine Rebuild*, I described the importance of a product’s capabilities matching outsiders’ intuitive expectations. The more moving parts in a feature, the more brittle it becomes. While you may be able to deliver the original vision, the product becomes very rigid to its original requirements, leaving you without the flexibility to naturally grow and meet evolving demands.

**Viscous cycles.** Every codebase has its “black holes”, areas so decrepit, unmaintained, or obtuse that no developer wants to go near it. “Tech debt” tickets pile up around it. The team turns a blind eye and finds increasingly clever ways to develop around this wart on the codebase. Any portion of the code that gains a reputation of being hard to work with will quickly fall victim to a own death sentence of its own prescription.

- - - - - -

#### **Think Before You PRD**

> *For example, opening a window is a straightforward action for the user, so if we receive a requirement to create a window in the product, we may think it’s a pretty straightforward component to add. But how many different types of windows are there? And how many functions can they perform?*
> 
> *As a user, one doesn’t think, “I’m going to open a window of type 17, and clicking this button needs to update three database entries.” It just opens. But as engineers, trying to encode this as a program involves different methods of pulling the handle, updating handle state, and other details. Before we start working with complexity at the code level, we need to understand the task more fully.*
> 
> *Once that aspect of the request was understood, more requirements appeared. These snowballing requirements help our user, but they bring additional complexity to our architecture—particularly because we didn’t account for them from the beginning.*

Any user can describe the features that they want in a product. It takes a product manager to describe the ways it can go wrong, and what to do when it happens. A *Product Requirements Document* should take care to address this in two ways:

**Describe it like an engineer.** One of the main purposes of PMTL — and the general concept of understanding technical concepts even as a product manager — is so you can better communicate with your engineering team. Being able to view a feature from a developer’s point of view is a great way to identify edge cases and ambiguity. Careful consideration of the different states possible, error conditions, and specific expectations for results will address the majority of questions. The more clarity and decisions you provide (*“Default to window of type 17, unless the user already has a window open, in which case create a window of type 3”*), the easier the task is for your developers to execute.

**Build a church, don’t lay bricks.** A PRD won’t ever capture *every* requirement and decision necessary. While discussions between product and engineering will naturally occur to resolve these, you can help your engineering team get a head start by pointing them in the right direction. Empowering your engineers to think about the feature like a product manager (similar to how you think about the like an engineer) will give them a more fundamental understanding of the product. Explaining the goals and desired outcomes — along with how the decisions you’ve made help achieve those goals — acts as a guide when there are two *seemingly* equal choices. Everyone making decisions on their own, yet in alignment towards the same greater goal, can lead to increased team productivity, fewer surprises, and maybe even a few good ideas that you hadn’t thought of.

- - - - - -

Engineering blog posts, especially well-written ones from reputable software companies, provide valuable high-level insight into what engineering challenges a company faces and how they approached the problem. By reading them, you not only familiarize yourself with the terminology, but also with the core challenges you’ll be dealing with as a product manager in your own company.