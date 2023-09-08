---
id: 324
title: Abstraction
date: '2020-09-08T18:46:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=324'
permalink: /abstraction/
categories:
    - 'General Product Management'
    - Uncategorized
---

Why are some features trivially easy to implement, while others require a whole rearchitecting of the system to achieve? One of the main reasons is proper (or improper) abstractions within the codebase.

Product managers need to have a fundamental understanding of abstractions to better build intuition around the more technical concepts of modern software development.

Abstraction is a core concept that enables codebases to grow and scale without becoming overwhelming. To understand how it works in code, let’s start by examining its day-to-day meaning.

An “abstract concept” is one that can be discussed without needing to invoke any particular real-world connotations. It is “disassociated from any specific instance” (Merriam-Webster).

With any abstract idea, there can be many specific instances that can fulfill the abstract concept. For example, the abstract concept of “having fun” can manifest as playing video games, playing basketball, reading a good book, or any number of other things. While none of them are necessarily related to each other, they can all be connected because they are ways of “having fun.”

What does this look like in code?

Think about Facebook’s newsfeed. You can find all sorts of content types in the feed — a photo, albums, videos, ads, links, life updates, polls, etc — but when it comes to populating the newsfeed with content, it’s all the same. There’s something user-generated to display, then a like button, a comment button, and a share button.

The concept of “an entry in the newsfeed” is abstract — it can take on any of the forms listed above — and still fit into any given slot in the feed, with the same set of action buttons sitting underneath.

- - - - - -

#### **The Power of Proper Abstractions**

With the benefit of a little hindsight, the newsfeed example is an obvious place to deploy abstraction over content types. There is a clear “slot” which many different pieces can fill. It may take time to build the shell in which differing content will reside, but that shell and its surrounding machinery can be reused effortlessly to meet different use cases that product dreams up.

This is an example of an abstraction gone right. Some other key points to look for:

- Pieces that are reused are reused *exactly*. There’s no custom re-fitting to meet the needs of new use cases. Abstraction is most effective when it is truly grab-and-go. The more stops you have to make along the way, the closer you come to re-building the code each time.
- The scope doesn’t increase. A simple abstraction that expands to cover more and more use cases is liable to take on extraneous information that leads us away from the first point. A tight, lean abstraction will have a longer lifespan.
- The abstraction has lasted without much maintenance. The longer the abstraction is serving you, the longer it will likely serve. The sign of a truly great abstraction is one that works so well you never have to reconsider it.

This all sounds code-y, how is it useful for product managers?

Good abstractions take time to think through, build, and refine. It’s the reason why the time to build the first widget is often much greater than the time to build the next 10, or even 100. If what you’re building will have replicated use cases in the future, let your engineering team know. Giving insight into future plans allows engineers to identify potential for optimization, such as building the v1 with the proper abstractions already in place to set up v2 through v100 for success.

- - - - - -

#### **The Pitfalls of Poor Abstraction**

Abstraction is often referred by the acronym DRY — Don’t Repeat Yourself. The idea is to save programmers rote, repetitive work by reusing what’s already made, and to prevent errors from having to re-implement a concept over and over.

This leads us to the first pitfall:

**Poor abstraction is worse than repeating yourself.** It seems like the worst case scenario is for a bad abstraction to devolve into simply writing new code for every case, which is no worse than if we didn’t have abstraction before. However, there are overhead costs and compatibility issues that come from trying to cram square pegs into round holes. Sometimes you end up needing to subvert the code that was intended to help you.

Bad abstractions aren’t just a tax on the developer, it can also seep into the product mindset. Over time, PMs will develop a sense for which portions of the codebase have smooth sailing, and which are full of roadblocks. A feature mired in ineffective abstractions may never get love because the effort needed to iterate is not worth the hassle. A PM might develop a habit of thinking inside-the-box in order to satisfy a finicky system, which is exactly the opposite of what abstraction should enable — rapid iteration with intentionally different ideas. **A bad abstraction can weigh down the product thinking.**

- - - - - -

#### **Conclusion**

Choosing to bring in an abstraction [is inherently a gamble](https://jesseduffield.com/beginners-guide-to-abstraction). The team is betting that the up-front work now will be worth the efficiency gains down the line. A lot of this decision making rests on the engineering team, but product can and should help inform the direction by providing a clear map of where the product will be going over its next iterations.

If there’s code already bogged down by a poor abstraction (identifiable by the symptoms above), have a talk with your engineering leads. Share your intended plans for the product and ask if there’s a way to amend or remove it to better support your future plans. Take action early to ensure you don’t let it seep into your own product thinking.

*For a more technical perspective on abstractions in code, take a look at* [*this blog post from Jesse Duffield*](https://jesseduffield.com/beginners-guide-to-abstraction/)*.*