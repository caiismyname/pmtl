---
id: 346
title: "Mobile Apps: A Product Manager's Perspective"
date: '2020-11-23T18:54:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=346'
permalink: /mobile-apps/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

#### **A Product Manager’s Perspective**

The “stereotypical” tech product is a mobile app. It’s the most tangible form of technology, one that almost everyone has experience with and opinions about. In this article, we’ll discuss the areas where mobile app development differs from other programming projects, and how product managers can respond to those differences.

#### **Release cycles**

Being on the inside of product development makes it easy to forget that the version of the app you’ve been testing internally isn’t the same as the version that’s available to your users.

In a web app, a user hits your servers every time they visit, giving you control over what is returned and making the latest changes immediately available. Mobile apps must instead be released through Apple or Google’s app stores, with the following implications:

**New code reaches users at the speed of updates.** Pervasive autoupdate settings have made this less of an issue in recent years, but apps versions are still at the mercy update processes, whether that be the autoupdate system or the users themselves. This delay means that users won’t immediately receive your changes, whether those are feature releases or emergency bug fixes.

**Apps are subject to approval.** Apple and Google monitor the apps in their stores to offer users the assurance that they’re generally stable and virus-free. However, this puts app developers at the mercy of Apple and Google’s store policies. For most standard features, a product manager just needs to have a general awareness of the rules of each platform. Though recently, [debates](https://www.theverge.com/2020/8/13/21367963/epic-fortnite-legal-complaint-apple-ios-app-store-removal-injunctive-relief) over what policies Apple and Google should be allowed to dictate and enforce has become an ideological battle between app developers and the platforms they run on.

There are standard ways to manage these issues. These techniques may skew towards “project management”, but the product/project role is often combined anyways.

**Regular release cadences.** Many mobile app teams have a release schedule, since they don’t have the luxury of releasing code whenever it’s ready. By setting expectations ahead of time, developers have deadlines to work against, product managers know what changes are in each release, and external teams have a reliable cadence to make assumptions with.

**Remote configurable feature flags.** Feature flags are controls that can “turn on” a given change or feature in an app, without needing to modify the app’s code (a.k.a. releasing an update). The standard setup is:

1. The team sets up a server that hosts a set of configuration values. Typically, a mapping of `feature: status`
2. Integrated into the code of every feature is a call to the configuration server to determine its status. If enabled, it can proceed normally and if not, it can exit without doing anything, thus “disabling” the feature.
3. Teams can then enable and disable features by modifying the server without having to re-release the app, offering near-real-time control similar to web apps.

- - - - - -

#### **Variability**

As product managers, we tend to bias towards being much more interested and involved with technology than the average consumer. We upgrade our devices more often, buy higher-end models when we do, and generally keep up with the state of the art. It’s easy to get assume that everyone has a FaceID iPhone and uses AirPods all day, but this is just a reflection of a tech-worker’s bubble.

The majority of users likely do not have the same setup as you. This can vary in a lot of dimensions.

Phones themselves have different:

- Screen sizes
- Storage capacities
- Processor / RAM abilities
- Camera configurations / abilities
- Cellular data plans

A user’s immediate environment can affect:

- Network strength
- Lighting conditions
- Attention

There are even significant behavioral norms:

- Phone vs. computer as primary computing device
- Personal ownership of a device, vs. shared usage with siblings / parents / children
- Embrace vs. distrust of technology

Computers have become increasingly monolithic in use cases; users adopt a standard mindset when approaching computer-based tasks. Phones are incredibly personal, and are expected to adapt to the situation of the user.

User personas can help codify expectations around these variables, but ultimately a product manager will have to make decisions around what the least common denominator is and what tradeoffs they’re willing to make given a particular set of variables.

Product managing a mobile app will also inevitably reveal the paradigm differences between iOS and Android. These run deeper than the surface UI level, and require a separate, dedicated article to discuss. Product managing for the opposite platform that you personally use will be a grating, slogging experience in the beginning, but you’ll come out of it a more flexible and nimble product manager.

- - - - - -

#### **Reliance**

The mobile app development process differs from other types of programming in one significant way: much of the functionality of a mobile app is reliant on SDKs (Software Development Kits, basically bundles of pre-made software) provided by the platform.

Every programming language comes with a “default library”, a set of pre-implemented functions for the programmer to use. These are semantic-less building blocks that rely on a programmer to shape them into something meaningful to the user. iOS and Android have these as well, but *also* lump in things like “take a picture”, “show a new page”, or “play this podcast in the background”. SDKs control access to features in a way that can dictate exactly how your app is allowed to function. This tends to be more restrictive with new SDKs, with a tendency towards offering more access as the SDK matures.

For those who haven’t programmed before, the difference is akin to buying ingredients at the grocery store versus buying prepackaged meals. Prepackaged meals are convenient and handle a lot of necessary work, but you’re limited to what is offered and have little in the way of customization or flexibility.

At the time of this writing, two excellent examples of this effect are voice assistant apps and iOS 14 widgets. Many companies have integrated with Alexa, Google Assistant, and Siri, but the basic structure of all the “apps” are the same: Issue a specifically worded command, and the assistant will reach into the app for the corresponding action. It’s obviously easier to integrate with Alexa/GA/Siri than to build your own voice assistant from scratch, but the stiff nature of all these apps shows the limitations of what developers can do with what’s been provided.