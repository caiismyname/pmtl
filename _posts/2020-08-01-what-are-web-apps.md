---
id: 322
title: 'What are Web Apps?'
date: '2020-08-01T18:46:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=322'
permalink: /what-are-web-apps/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

Web apps are one of the “default” product types that product managers should have experience with. In this article, we’ll cover what a web app is, along with its fundamental components, each of which will get a deep dive in a later article.

For aspiring product managers, building a web app is one of the most accessible and fastest ways of building the experience to learn the basic concepts in modern software development.

#### **Introduction**

A web app is an application that runs in your browser (Chrome, Safari, Firefox, Edge).

`Web` –&gt; It’s delivered to your computer over the internet when you visit the site. There’s nothing to “install” beyond the browser you’re using, unlike apps on the iOS App Store or Google Play Store.

`App` –&gt; It’s an interactive application. This distinction is in contrast to “static” webpages. On a technical level, a web app is typically built with JavaScript code and likely involves some sort of state management at minimum. In contrast, a “static” webpage simply displays information (text, images, videos), but can’t handle any complicated interactions. For the “know it when you see it” types, compare this website (pmtechlessons.com) to Google Maps — one definitely feels more like an “application”.

Web apps are so prevalent because of their ease of access — any modern browser suffices, and there’s no need for installs. As PMs, we’re all acutely aware of the difficulty of getting users to download an app, so someone optimizing for ease of access may choose a web app. Another benefit is versatility — modern web browsers are largely equal in their feature set from a developer’s perspective, so there’s no need to manage multiple versions for Chrome vs. Safari. And since it runs in the browser, the underlying operating system (Mac, Windows, iOS, Android) doesn’t matter either!

From a developer standpoint, web apps have some distinct advantages as well:

- **Continuously Deployed:** Have you ever gone to Facebook to find it down, only for it to reappear on the next refresh? That’s because each time a user visits your web app, it pulls a new\* version from your servers. Any updates you make are instantly available to your users. This means new features, bug fixes, and even addressing crashes can happen super quickly, without the need to go through an app review or wait for the user to update their version.
- **JavaScript is everywhere:** While every developer will have their own favorite pet programming language, one thing they can’t deny is [JS’s popularity](https://insights.stackoverflow.com/survey/2020#most-popular-technologies). It’s more commonly used than Swift/Objective-C, C#, and even Java. Chances are they’ve already used it, and there will probably be a Stack Overflow answer for the bug they’re fixing.
- **Flexibility and freedom:** In isolation, most apps look good. But when you zoom out, you start to see a lot of similarities across their paradigms. The truth is, there are boundaries to the abilities and creative expression of apps, and they’re defined by Apple and Google through the APIs, resources, and capabilities they make available to developers. On the web, your only limits are your ideas and imagination. This also gives you the freedom to [ignore app store policies](https://www.theverge.com/2020/6/18/21296180/apple-hey-email-app-basecamp-rejection-response-controversy-antitrust-regulation) you may disagree with.

*\*Technically there is caching involved, but for the purposes of abstraction, we can assume it’s fresh.*

- - - - - -

#### **Components of a web app**

A standard web app will consist of three “logical” code components: A database (DB), frontend (FE), and a backend (BE).

> In programming terminology, “logical” loosely means “virtual”. It’s used in context of concepts that have both a “physical” meaning as well as one that is semantically imposed by the programmer. For instance, if I had a 3-subject notebook where one section was dedicated to math, one to english, and one to history, I would have three *logical* notebooks — one for math, one for english, one for history — even though I only have one *physical* notebook. The concept of “notebook” has two variations — 1) a place for notes for a particular class and 2) a physical book of notes.

**Databases**

The database is a permanent store of data associated with the application. “Permanent” is the key word here. To illustrate, think back to the first type of program you wrote, probably something to print “Hello, \[name\]”. To get the name, your program asked the user to type it in, but promptly forgot about it once the program was done running. If you were to run it again, you’d have to enter your name again.

Using a database allows an application to stash information so next time you visit, you can pick up where you left off — imagine if every time you visited Facebook, you had to recreate your whole profile. A database is table stakes for any application that involves user-specific data.

Databases also allows for storage of large amounts of content needed for your application — think Amazon’s product listings, or comments on a reddit thread. They also handle internal data used by your application that may not ever be seen by a user, but are critical for the internal processes that support user-facing features.

**Frontend**

The frontend controls the user-interactable portions of the app. I phrased that particularly, instead of saying “the user interface”, because too often “front end” becomes equivalent with “visual elements” and migrates closer and closer to “design”, an equivalence that is increasingly false and misleading.

Yes, the frontend (and thus, frontend engineers) are responsible for building the visual components of the app, but that statement in itself belies the complexity of a proper front-end component architecture. [FE engineers are also responsible for the state management, an increasingly complex production toolchain, and a constantly shifting landscape of tools.](https://increment.com/frontend/when-frontend-means-full-stack/) I highly recommend the [linked read](https://increment.com/frontend/when-frontend-means-full-stack/) to get a sense for the increasing scope of FE engineers, even if the tech listed is foreign to you.

**Backend**

The backend simply refers to code that is not run on the client itself (in this case, the frontend). This usually means code running on servers, which communicate with the frontend through a series requests over the internet, governed by APIs.

The distinction between what goes in the frontend and the backend is largely defined by tradeoffs. Because you control everything about your servers, they are more reliable, consistent, flexible, private, and powerful than the client machine. However, anything that happens on the backend needs to be passed through the internet from the client to the server and back again. This travel time introduces some amount of lag every time it happens, in addition to whatever time is needed to run the code in the first place.

This lag doesn’t just introduce spinners all over your UI and slow down the perceived speed of your application — it introduces dependencies and points of failure. Still, there are certain things that are worth the tradeoff and should live in the backend:

- **Intensive, proprietary, or sensitive processing of data** is better off in the controlled environment of your server.
- **Complex internal operations** that spawn from a single frontend action. For example, deleting a user account might involve deleting their contact information, their photos, their messages, etc. Having a server handle all the steps of “deleting an account” rather than have the frontend try and make all the calls itself reduces the complexity and gives the developer more flexibility in implementation.
- **Access to privileged information.** Being able to perform validation on the request and restricting access to sensitive databases is good security practice.

- - - - - -

As a Product Manager, you won’t have to decide where code should reside. However, knowing the tradeoffs and implications of where code lives helps you understand why the application behaves the way it does, and who to go to for specific issues.