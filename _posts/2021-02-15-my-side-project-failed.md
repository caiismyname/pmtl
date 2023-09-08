---
id: 118
title: 'My Side Project Failed'
date: '2021-02-15T18:25:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=118'
permalink: /my-side-project-failed/
categories:
    - 'Early-Career Product Manager'
    - 'Side Projects'
    - Uncategorized
---

This article is the first of a two-part miniseries on side projects. In this article, I’ll describe a failed side project and the lessons you can take away from it. The next article will accompany the launch of my latest project — stay tuned!

- - - - - -

## RunPlanner

I’m a long-distance runner, and an important aspect of achieving success is planning the arc of your training in the months leading up to a race. To help me, I wanted to build a smart training calendar that took goals and auto-filled a training plan.

In the six months I spent working on it, all I managed to do was build what amounted to a calendar. I learned a ton of technical skills along the way, including building my first major React app and my first usage of MongoDB, but the actual product was a failure.

- - - - - -

## Problem 1: Scope

The first — and ultimately, fundamental — problem I faced was improper scope. At work, every feature I manage has a PRD. We ensure the end goal is crisp and articulate, so everyone involved moves in the same direction. We lay out specific requirements, explicitly stating what’s in and out of scope for this version (often an MVP).

For RunPlanner, I neglected to do any of that. Fearing that extra process would turn the project into work, I loosely defined the product as “smart training calendar” and never got specific about what features that would entail. More importantly, I never drew a line marking when the MVP was complete. In failing to do so, I was always aiming for a moving target, one that was so vague it was hard to see.

**Takeaway: Side projects are green-field problems and as such, require you to bring your own discipline. Apply the product management frameworks and habits you’ve learned through books, internships, and jobs. While it may feel artificial and stilted, these mechanisms exist to ensure a project is actually completed.**

A second, more difficult problem to see was scope creep in my tech stack. As a CS Major a year removed from school, I wanted to flex my programming skills as much as possible, and made the decision to write *everything* myself, from the front-end down to the database protocols.

Everyone will agree that doing projects is the best way to develop these skills, but developing technical skills is often antithetical to actually building a functioning product. When working with a technology for the first time, that technology should be the end, not a means. You should select the simplest sufficient project and focus your effort on learning, not also trying to think about product management in parallel.

In my case, what slowed the development pace was trying to learn two new, major components simultaneously — React, a front-end application framework, and MongoDB, a database that required much more infrastructure than a plug-and-play solution like [Firebase Cloudstore](https://firebase.google.com/products/firestore/). Had I only tackled one or the other, I may have been able to overcome the split focus, but dealing with both meant that I would spend days untangling my own systems, making no forward progress.

**Takeaway: Be honest with your skill level — many companies build products to make developers’ lives easier. Using pre-built tools speeds up your development process, and frees up mental space for you to tackle bigger problems.**

**Takeaway: Be explicit about your goal — technical development or product building. Either is fine, but make a choice and stick with it. Doing both is not a recipe for success.**

- - - - - -

## Problem 2: Motivation

A second-order problem causing by not having specific product milestones was that progress practically invisible.

Since I didn’t define my end-state, I would often build 90% of a feature, then waste time woodshedding around the edges.

The MVP of RunPlanner didn’t come into form until month 5, at which point I was already starting to burn out on the project. The MVP wasn’t a very good product, and had I seen it at month 2, I would have been better able to reevaluate my goal, pivot, or cut my losses and abandon the project. Instead, I spent half a year on something that wasn’t compelling to even myself, hemorrhaging motivation along the way.

Another negative behavior spiral that accompanies motivation loss is only working on what already works.

One tenant of deliberate practice is

> While regular practice might include mindless repetitions, deliberate practice requires focused attention and is conducted with the specific goal of improving performance. [-James Clear](https://jamesclear.com/beginners-guide-deliberate-practice)

When overall motivation wanes, so does motivation to spend difficult, focused effort on the elements of the project that are broken. An error that has you on the fifth page of Google results, a nondeterministic bug that you can’t reproduce consistently. It’s much easier to work on “candy” — futzing with colors on the UI, refactoring code that already works.

Spending time on the “candy” doesn’t make any meaningful progress on the project, but when unmotivated, it’s the easiest thing that we can convince ourselves to do.

**Takeaway: Be aware of negative habits that *feel* productive, but are really an avoidance mechanism that replaces meaningful progress.**

- - - - - -

## Conclusion

Completing a side project requires just as much planning, clarity, and structure as projects from your day job or school, often more. Before starting, plan for how you work and what (specifically) you’re working on — it’s just as important as doing the work itself.