---
id: 338
title: "Breaking Down Netflix's Video Gatekeeper"
date: '2020-10-26T18:51:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=338'
permalink: /breaking-down-netflixs-video-gatekeeper/
categories:
    - 'Engineering Blog Breakdowns'
    - Uncategorized
---

One of the best ways to gain technical understanding is to observe how established companies reason about and write about their technical challenges. As a product manager, being able to read between the lines of a technical document is a crucial skill and can be the difference between nuance and confusion.

[This article is about Netflix’s video liveness management system](https://netflixtechblog.com/re-architecting-the-video-gatekeeper-f7b0ac2f6b00), but really it’s a case study in how underlying technology decisions can ultimately affect a product’s user experience. It also provides an opportunity to introduce caches, publisher-subscriber architecture, and the unique requirements of a highly scalable architecture.

**Original article:** [Re-Architecting the Video Gatekeeper](https://netflixtechblog.com/re-architecting-the-video-gatekeeper-f7b0ac2f6b00)

Because the excerpts I’ve pull out are somewhat disconnected from the [main article](https://netflixtechblog.com/re-architecting-the-video-gatekeeper-f7b0ac2f6b00), I’ve taken the liberty to summarize the general points of the article, so the excerpts can be discussed in context.

*Summary*

- The *Title Operations* team manages the *liveness* of a video — a set of requirements that need to be met before the video can be released. The *Gatekeeper* system is the underlying technology that supports this endeavor.
- Gatekeeper monitors when a piece of content’s metadata met all the liveness criteria before making the content available.
- The old Gatekeeper system was *event-driven*, meaning it responded whenever there was a change in a video’s metadata.
- There’s a lot of content on Netflix: [over 50k titles](https://www.whats-on-netflix.com/news/how-long-would-it-take-to-watch-all-of-netflix/).

- - - - - -

#### **I/O and Caching**

> ***The Tech***
> 
> *Hollow, an OSS technology we released a few years ago, has been best described as a total high-density near cache:*
> 
> *Total: The entire dataset is cached on each node — there is no eviction policy, and there are no cache misses.High-Density: encoding, bit-packing, and deduplication techniques are employed to optimize the memory footprint of the dataset.Near: the cache exists in RAM on any instance which requires access to the dataset.*

Hollow is the tech that will power the team’s eventual solution, so the author is introducing it early on to set the stage and provide some clues regarding the direction that their solution will take. At its core is the notion of caching.

Caching is best explained by first introducing the notion of hierarchy within memory. While memory may appear to be a singular concept, it’s actually broken into different levels. Each level can be primarily identified by a tradeoff along the speed/storage continuum: We can build slow memory that can hold a lot of information, or fast memory that can hold a little information, but memory that has the best of both worlds (fast, and lots of storage) is hard to make and expensive.

> **What does the speed of memory mean?**
> 
> When information needs to be stored in or retrieved from memory, some physical process must occur in the hardware. The speed of memory refers to how this can happen. A process’s speed can be constrained by the speed at which it can fetch its inputs or store its outputs.

Caching refers to moving information from slower, larger memory to faster, smaller memory. It’s like studying in a library, and bringing the books you’re using over to your desk. The shelves in the library can hold more books than your desk can, but it’s easier to have the books on your desk, rather than going to the shelf every time you needed to look something up.

This example also helps illustrate another complexity of caching — when studying, we don’t need *every* book in the library, just the ones relevant to our class. Similarly, caching is most efficient when you can fit all the information needed into the cache. If a particularly difficult class requires so many books that you can’t fit them all on your desk, every once in a while you’ll still have to go to the stacks to search for a missing book. This is known as a *cache miss*. Every cache miss reduces the benefits of having a cache (if you have to resort to the slower memory more often than not, then you’re not really experiencing the benefits of the faster cached information).

Knowing what we know about caches, the benefits of Hollow now come into focus:

- Its high-density properties enable more information to be stored in the system, helping enable …
- .. its totality. If we can store *everything* in the cache, we can fully experience the speed benefits of caches.

This is especially pertinent when we take into account a major limitation of the old system:

> *This process was completely I/O bound and put a lot of load on upstream systems.*

By having all the necessary information in the cache, there’s no need for I/O (transferring information) to other systems, leading to a massive speedup in how fast information can be processed.

- - - - - -

#### **Publisher-Subscriber**

> ***The Improvement***
> 
> *With this infrastructure, each time a change is detected in a source application, the updated record is encoded and emitted to a Kafka topic. A new component that is not part of the source application, the Hollow Incremental Producer service, performs a repeating cycle at a predefined cadence. During each cycle, it reads all messages which have been added to the topic since the last cycle and mutates the Hollow state engine to reflect the new state of the updated records.*

Kafka refers to *Apache Kafka* a publisher-subscriber (pubsub) system. Pubsub is a way of managing inter-system communications at scale. To understand why this system is needed, it’s best to start with a simple system and identify its drawbacks.

For this example, let’s imagine a restaurant, with waiters taking orders and bringing food to the guests.

In its most basic form, a guest orders food from the waiter, who brings to the order to the kitchen. When the food is ready, the waiter brings it back out to the guest. This can scale to small number of concurrent guests, since waiters can handle more than just one guest.

<figure class="wp-block-image" id="yui_3_17_2_1_1650048693844_94">![netflix-waiter-illustration.png](https://images.squarespace-cdn.com/content/v1/5eecfd10923cc52983dbbc17/1602438739280-UB2B035S9MU6R4QV5RG3/netflix-waiter-illustration.png?format=1500w)</figure>However, there is still an upper limit to how many orders a single waiter can manage. We can partially scale the restaurant by hiring more waiters, but each waiter still needs to know who the food is going to. If the number of guests keeps increasing, the number of waiters keeps increasing, and the waiters are still fundamentally limited by having to keep track of who ordered what.

Theoretically if the waiters could ignore what a guest ordered and just bring them the next dish that was available, the restaurant would run a lot faster.

A waiter managing the relationship between a guest and their food is the basic client-server dynamic, and the same overhead of managing the “who ordered what” metadata applies in computer systems.

Pubsub shifts that relationship entirely. Instead of waiters bringing food out, imagine we turned the restaurant into a buffet. The waiters still take orders so the kitchen knows how much food to make, but now the guests themselves are responsible for getting the food they want, and the waiters just have to put the food into the right tray in the buffet.

<figure class="wp-block-image" id="yui_3_17_2_1_1650048693844_118">![netflix-pubsub-illustration.png](https://images.squarespace-cdn.com/content/v1/5eecfd10923cc52983dbbc17/1602438760958-0VN8327IYI72HKLICX83/netflix-pubsub-illustration.png?format=1500w)</figure>By uncoupling the notion of “who ordered what” from the cooking process, we’ve significantly reduced the amount of overhead required to maintain the system. At Netflix’s scale (every one of those 50K+ titles), this amounts to a significant reduction in the processing time for their Gatekeeper system, compared to their previous event-driven system (akin to listening to and responding to every order as it came in).

Pubsub and client-server both accomplish the same fundamental goal, but one is total overkill at small scales while the other is wholely inadequate at large scale. These technology and paradigm transitions are what a lot of teams spend their time thinking about and executing, and provides a window into the question of “What exactly does everyone at Netflix do?”. As product managers, it’s important to recognize that every given technology has its limitations, and while a transition to a new system may not appear to bring any new features on the surface, they comprise the very technical foundation that your product is built upon.

- - - - - -

#### **Developer Happiness**

> ***The Intangible Result***
> 
> *Perhaps even more beneficial than the performance gains has been the improvement in our development velocity in this system. We can now develop, validate, and release changes in minutes which might have before taken days or weeks — and we can do so with significantly increased release quality.*

The author points out some auxiliary benefits beyond simply speeding up the Gatekeeper system:

- A deterministic system to allow replay of the system, useful for post-mortem analyses.
- A pre-production (PREPROD) environment that can quickly test changes before releasing, validating new features and identifying potential bugs before they can affect users.

> **Determinism**
> 
> A *deterministic* process is one where the outputs are always the same if the inputs are the same. A random number generator is nondeterministic. Sorting a list is deterministic. A system that drops messages with some known percentage is non-deterministic (you don’t know which messages will be dropped). A system that is guaranteed to process every message in order is deterministic.
> 
> Unless explicitly designed to be non-deterministic, software should be deterministic. This provides guarantees for programmers to build assumptions against, and also makes debugging much easier.

No developer sets out to build a system which is hard to maintain or iterate upon, but over time, the buildup of hundreds of incremental changes may lead teams to a state where seemingly trivial tasks are massive undertakings. It’s obviously non-ideal to be there in the first place, but if it’s already happened, bearing the upfront cost to improve the system not only increases developer happiness and productivity, but also results in a system that behaves how the product manager assumes it to behave. The closer a product manager’s abstract understanding of a system aligns with how the system actually works, the more effectively both sides will be able to operate.

- - - - - -

Engineering blog posts, especially well-written ones from reputable software companies, provide valuable high-level insight into what engineering challenges a company faces and how they approached the problem. By reading them, you not only familiarize yourself with the terminology, but also with the core challenges you’ll be dealing with as a product manager in your own company.