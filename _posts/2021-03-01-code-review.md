---
id: 363
title: 'Why PMs Should Care About Code Review'
date: '2021-03-01T19:02:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=363'
permalink: /code-review/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

On the face of it, code reviews seem to work against product managers. They delay releases, take up everyone’s time, and don’t have tangible outputs. Plus, you can validate features yourself, and often have tests and/or a QA team to check your work. So why bother with code reviews?

Code reviews are important because they’re a major touchpoint within the development team. Just as [your engineers are the primary “user” of your product management](https://www.pmtechlessons.com/why-pms-should-be-technical), **other engineers on the team are the primary users of an engineer’s code.**

## **Engineering Culture**

**Flexibility**

At the most basic level, code review ensures more than one engineer sees new code. Even if they have no feedback, this is useful in and of itself because it forces the team to up-to-date with changes in the code *that they aren’t directly involved with.* When the time comes for them to work on it, they’ll already have familiarity. Engineers on the team become flexible.

Imagine an assembly line with each worker having a dedicated task. For a building a car, one worker might be responsible for attaching the door, while another paints the body. These workers don’t have flexibility in their skills. The painter can’t start attaching doors without significant training, and vice versa. This is what happens if changes aren’t socialized within the team.

Low communication and familiarity throughout the codebase creates bottlenecks when a certain area needs more attention. Code reviews increase communication and familiarity.

**Culture**

Reviews also allow for mentorship and teaching, especially from senior developers and engineering leads to junior or newer members of the team.

It’s the responsibility of a lead engineer to set the standard for how code is written, and to make directional decisions regarding architecture, design patterns, and adoption of new tools. Code reviews are a tangible opportunity for them to manifest these standards and decisions. Listening to a presentation about code style is easily forgettable. Feedback on which specific parts of your code can be improved is internalized, and will stick in the long term.

The standard of code that passes code review establishes the long-term engineering culture of a team.

- - - - - -

## **Code Quality**

There’s also the specific purpose of code reviews: improving the code.

It’s important not to conflate “code review” with “quality assurance or “testing”. To understand why, we first have to understand that a functioning product is not necessarily a *correct* product.

Testing is not a foolproof solution, and problems can exist without being obviously visible. Imagine a contacts app that checks for updates 100 times a minute. While the app will function properly, clearly something is wrong with its sync behavior.

Just because the product meets your requirements doesn’t mean it did so in the best way possible. Products that are built to *just barely* meet requirements often find themselves stuck in [local maximums](https://www.pmtechlessons.com/breaking-down-dropboxs-sync-engine-rebuild), unable to iterate further.

Code review surfaces decisions that are fine now, but will cause tech debt later. It catches short-term optimizations that have long-term costs. Part of this process will require delaying a release as a feature is reworked to be more sustainable, better suited for growth and iteration. As a PM, understand what that entails, and be empathetic to the process.

Simply put, code reviews catch mistakes and improve the quality and stability of the codebase.

- - - - - -

## **What Can PMs Do To Help?**

Reading this article is a great first step — understanding the purpose and importance of reviews, and not trying to eliminate them as unnecessary process.

The most obvious way to help is to be sympathetic to the time it takes to perform a review — and correct any mistakes. Plan for reviews when scoping a sprint, and allow ample time before launches for reviews to occur, consulting with the engineering team to determine how much time is needed.

The next step is to pay attention to the structural issues that crop up during reviews. Product managers aren’t in a position to fix specific technical problems, but you can affect the process around it. Regularly speak with your engineers to identify where things are falling behind, what has become so cumbersome that it needs a refactor, etc, and use your influence to make it easier to correct those mistakes.

If your engineers need some time to re-write a component in order to eliminate a class of repeated bugs, give them cover to take that on. If some engineers aren’t quite understanding a new technique the team is adopting, ask what types of tasks would be helpful to get them up to speed, and rearrange the backlog to assist their learning.

Though you might not understand the specific issues, you still have the ability to nudge things in the right direction.

- - - - - -

*For a more detailed look at how code reviews should be run (from an engineering perspective), check out* [*Palantir’s Code Review Best Practices*](https://medium.com/palantir/code-review-best-practices-19e02780015f)*.*