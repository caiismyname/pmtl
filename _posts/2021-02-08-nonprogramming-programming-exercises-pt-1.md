---
id: 360
title: 'Non-Programming Programming Exercises'
date: '2021-02-08T19:01:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=360'
permalink: /nonprogramming-programming-exercises-pt-1/
categories:
    - 'Job Interviews'
    - Uncategorized
---

To empathize with your engineering team, you need to *think* like a programmer.

I hear all the time from friends and family that I approach things in a “nerdy” or “robotic” way. I find this to be mostly a compliment. I wasn’t *born* like this, but studying CS in college has transformed the way I think. I subconsciously see things as though they’re programs and data structures, both at work as a product manager and just normal things in my daily life.

This transfer happened to me in one direction (programming –&gt; life), but I think that a connection can be made in the opposite direction as well (life –&gt; programming). To try, I’ve outlined some “exercises” rooted in (semi-)normal daily life that illustrate some computer science concepts. The first is the classic CS problem of caching, and the second is meant to create an environment that prompts a programmer-y state of mind.

## **Optimize Your Homescreen Cache**

Caches are small, speedy storage areas. Putting the most frequently accessed information in a cache allows code to access it faster than if it were in a slower form of memory. Memory is not worth discussing in detail here, but thankfully we have a good-enough proxy: The homescreen(s) of you phone.

Intuitively, the first page is more easily accessible than the second, the second more so than the third, etc. Hence, the first page will be our cache.

Within the first page, there must be certain spots that are *even more* favorable. The dock, perhaps, or the few spots that naturally fall under your thumb. Those are *even higher value*. They’re like a cache within a cache.

**The exercise is:**

> Instead of trying to preemptively organize your screen by the functions of the apps, or the colors, or anything else, treat the spots like a cache.
> 
> Identify the Tier 1 locations (dock, thumb, etc.), Tier 2 (rest of the first page), and the rest (remaining pages)Start with all your apps on the second page (not in the cache)As you use your phone, move apps in and out of the cache correspondingly
> 
> If maintaining “tier 1” / “tier 2” locations seems unwieldy, try simply ordering the apps, top-to-bottom, left-to-right, in LRU order (see below). This illustrates the equally well.

Managing a cache is primarily an exercise in deciding what to remove when the cache is full. Optimal algorithms for managing a cache are complex and domain dependent. We can instead use a generally applicable, simple algorithm: Least Recently Used.

In a line, the algorithm is “When you run out of space, remove the thing that was used the longest time ago.”

In pseudocode:

```
<pre class="wp-block-preformatted">if there are free spots in the cache:
    move the just-used app into the cache
else if the cache is full:
    identify and remove the app that was last used the longest time ago (least recently used)
    insert the new app into the cache
```

This exercise accomplishes a number of different goals:

- The purpose of a cache is now far more tangible than if you were to just read an explainer
- Understanding the tradeoff of meeting the general case while failing in some specialized cases
- Illustrating the power of frameworks: If you already had a homescreen organization system, I’m sorry for messing it up. But now you know about another option, and can integrate elements of an LRU cache into your system. If you didn’t have one, try thinking about other ways you can systematically organize your “data” (apps).

- - - - - -

## **Scheduling Yourself**

“Edge cases” are situations that are outside the normal usage path, but are still possible and therefore must be dealt with. Proper handling of edge cases requires:

1. Identifying the edge cases
2. Resolving them in a consistent, logical manner

Both are straightforward in their goal, but difficult to execute in practice. As product managers, your most frequent interaction with edge cases will likely be during development or testing, when engineers discover ambiguities in the spec and come to you for resolution.

To experience the difficulty of both identifying and consistently resolving edge cases, we’ll move to a domain much more familiar to PMs: the calendar.

**The exercise is:**

> Plan out, to the exact minute, an ideal schedule for every minute of your week.
> 
> For extra difficulty, use repeating rules whenever possible.

Try it, and see if the challenges you ran into line up with mine:

- Events that repeat don’t necessarily repeat in a consistent manner.
- The timing — or even existence — of some events is dependent on the timing of another. It’s difficult to, in-advance, say when something will happen.
- You can double-book yourself to represent two possible options, but the decision tree quickly grows to triple and quadruple booking.
- Many decisions are of equivalent (in)significance.

And that just represents the process of *building* a product. When it comes time to actually follow your schedule, you might find that:

- It’s inaccurate
- It’s inefficient
- The choices you made while creating the schedule don’t align with your desires when following your schedule
- You forgot about things

These are the same problems engineers encounter when trying to follow a PRD, testing a product, or how you’ll feel when you finally use the product. Try the exercise, and you’ll build some user empathy for the process.