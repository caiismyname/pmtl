---
id: 328
title: "Breaking Down Facebook's Redesign"
date: '2020-09-28T18:48:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=328'
permalink: /breaking-down-facebooks-tech-stack-rebuild/
categories:
    - 'Engineering Blog Breakdowns'
    - Uncategorized
---

One of the best ways to gain technical understanding is to observe how established companies reason about and write about their technical challenges. As a product manager, being able to read between the lines of a technical document is a crucial skill and can be the difference between nuance and confusion.

In this post, we’ll read [Facebook’s engineering blog post detailing their web app redesign](https://engineering.fb.com/web/facebook-redesign/) and provide commentary around some key points in the article. I recommend reading over their [post](https://engineering.fb.com/web/facebook-redesign/) once, then reading this article, *then* reading the original [post](https://engineering.fb.com/web/facebook-redesign/) one last time and seeing what you pick up the second time around.

**Original Article:** [Rebuilding our tech stack for the new Facebook.com](https://engineering.fb.com/web/facebook-redesign/)

The authors split the post in four main categories of optimization. From their subtitles:

- *Rethinking CSS to unlock new capabilities*
- *Code-splitting JavaScript for faster performance*
- *Modernizing data-fetching to get it as early as possible*
- *Route maps and definitions for faster navigation*

These categories represent different approaches for optimizing different aspects of the site, but underlying all of them is a fundamental concept that drives all of the changes: **shrink the code size**.

The basic premise is that the more code you have to send over the network to the client app, the slower your app will be. In this situation, the app is more constrained by network performance (how fast the computer can download the necessary files) than it is by the computer’s performance itself (how fast its processor can execute the code). The work described in the post mostly amounts to increasingly clever ways of optimizing the amount of code that is sent over the network.

Let’s dig in.

- - - - - -

## **Defining the Process**

> *Throughout the process, we anchored our work around two technical mantras:*
> 
> *As little as possible, as early as possible. We should deliver only the resources we need, and we should strive to have them arrive right before we need them.*
> 
> *Engineering experience in service of user experience. The end goal of our development is all about the people using our website. As we think about the UX challenges on our site, we can adapt the experience to guide engineers to do the right thing by default.*

Establishing these mantras is extremely important from a project-level perspective. Any technical plan — especially one as large and ambitious as this — will inevitably accumulate riders and amendments as though it were a proposal to congress. By focusing the goal of the redesign and distilling them into a catchy and understandable one-liner, the teams working on the redesign are empowered to say no to superfluous changes.

The second point (*“Engineering experience in service of user experience”*) also acts as a counter to the first (*“As little as possible, as early as possible”*). Left unchecked, there’s likely no end to the optimizations senior engineers can come up with (as an intern, I was on a team that tried to [do just that](https://github.com/facebook/prepack)). By filtering engineering ideas through the lens of “in service of user experience”, the team has a heuristic with which they can decide what is actually useful.

Through the experts examined below, we’ll see how *As little as possible, as early as possible* is reflected in the various optimizations the teams chose to implement.

- - - - - -

## **What You Write Isn’t What You Get**

> ***Generating atomic CSS to reduce homepage CSS by 80 percent***
> 
> *On our old site, we were loading more than 400 KB of compressed CSS (2 MB uncompressed) when loading the homepage, but only 10 percent of that was actually used for the initial render. We didn’t start out with that much CSS; it just grew over time and rarely decreased. This happened in part because every new feature meant adding new CSS.*
> 
> *We addressed this by generating atomic CSS at build time. Atomic CSS has a logarithmic growth curve because it’s proportional to the number of unique style declarations rather than to the number of styles and features we write. This lets us combine the generated atomic CSS from across our site into a single, small, shared stylesheet. As a result, the new homepage downloads less than 20 percent of the CSS the old site downloaded.*

In the early days of the web, WYSIWYG (“What you see is what you get”, pronounced “wizzy-wig”) was a groundbreaking concept. You can see it today in SquareSpace page editor — the edits you make are reflected in a live preview, and that preview is exactly what you’ll see when you publish the changes.

In simple programs, the exact code written by the programmer is more-or-less executed by the computer, in a WYSIWGY style. But as a program grows and the amount of code increases, it becomes less and less sustainable to take a programmer’s code at their word. Code habits that might have been reasonable in a smaller project, when replicated across thousands of programmers, will eventually lead to enough bloat that the CSS on Facebook takes up more memory than was available on the Apollo landers.

This is where *build tools* come in. *Build tools* are part of the build process, where code written by the programmer is cleaned up, optimized, and compacted for use by the computer. Facebook’s approach of `generating atomic CSS at build time` is an example of this. During the build process, Facebook will take the CSS written by the programmer, combine it with all the rest of the CSS in the app, and then break it up into small, independent chunks (aka “atomic” chunks). The build process can then identify which chunks are actually used and critically, which chunks are repeated and need only be included once.

They could have also achieved this through writing a CSS style guide and forcing every developer to manually check that they weren’t duplicating their CSS when they submit their code, but not only would this be unpopular, ineffective, and unlikely to succeed, it’s also against the ethos of a software company. Creating automated tools to eliminate redundancies is the [style of thinking](https://www.pmtechlessons.com/terminology-pt-6-devops) that enables Facebook to grow and operate at the scale it does.

- - - - - -

## **Prioritizing Code**

As product managers, we’re familiar with prioritization, deciding which tickets are the most important and need to happen before the others. With that in mind, this next section should come naturally.

> ***Incremental code download***
> 
> *When someone is waiting for a page to load, our goal is to give immediate feedback by rendering UI “skeletons” of what the page is going to look like. This skeleton needs minimal resources, but we can’t render it early if our code is packaged in a single bundle, so we need to code-split into bundles based on the order in which the page should be displayed. However, if we do this naively (i.e., by using dynamic imports that are fetched during render), we could hurt performance instead of helping it. This is the basis of our code-splitting design of JavaScript Loading Tiers: We split the JavaScript needed for the initial load into three tiers, using a declarative, statically analyzable API.*
> 
> *Tier 1 is the basic layout needed to display the first paint for the above-the-fold content, including UI skeletons for initial loading states.Tier 2 includes all the JavaScript needed to fully render all above-the-fold content. After Tier 2, nothing on the screen should still be visually changing as a result of code loading.Tier 3 includes everything that is only needed after display that doesn’t affect the current pixels on the screen, including logging code and subscriptions for live-updating data.*

Before continuing, I recommend looking through the [screenshots they’ve provided](https://engineering.fb.com/web/facebook-redesign/) to get a sense for what belongs in each of the tiers.

The mechanism of code-splitting is simple: instead of sending all of the code at once, break it up into components that can each be sent when needed.

The standard approach to code-splitting originated from separating unnecessary components of an app, for example a client view and an admin view: a user will only see one view at a time, so by breaking the code into a client component and an admin component, we can reduce the code sent to only what’s necessary for a given view.

Facebook’s approach adds a new dimension to this concept: priority.

Even after trimming the code sent to the minimal set of necessary components, they were able to further optimize the *user experience* by reordering how elements were sent. Recall the second mantra:

> *Engineering experience in service of user experience.*

Two common UI metrics are *time-to-first-load* and *jitter*. Time-to-first-load refers to the time it takes for the app to draw something onscreen, giving the appearance of responsiveness and reassuring the user that the application is still working. Jitter refers to any re-rendering of the page after it has been rendered. If you’ve ever loaded an article only for it to randomly push your scroll position further down because it *finally* loaded an ad, that’s jitter.

Facebook has prioritized the *order* of what their app loads based on these two metrics.

Putting the skeleton at the highest priority ensures a fast time-to-first-load, which allows the user to cognitively adjust to the page’s layout even before any content is populated. Tier 2 fills out the skeleton loaded in Tier 1 with actual content, but they’ve made a point to explicitly call out their commitment to minimizing jitter:

> *After Tier 2, nothing on the screen should still be visually changing as a result of code loading.*

Getting the design of the skeleton right is crucial to succeeding in this goal, a case study in coordination between engineering constraints, design requirements, and UXR guidance.

- - - - - -

## **Market Efficiencies in Code**

> ***Using JavaScript budgets to prevent code creep***
> 
> *Tiers and conditional dependencies help us deliver just the code necessary for each phase, but we also need to make sure the size of each tier stays under control over time. To manage this, we’ve introduced per-product JavaScript budgets.*
> 
> *We set budgets based on performance goals, technical constraints, and product considerations. We allocated page-level budgets and subdivide the page based on product boundaries and team boundaries. Shared infra is added to a carefully curated list and given its own budget. Shared infra counts against all pages’ budgets, but modules within it are free for product teams to use. We also have budgets for code that’s deferred, conditionally loaded, or loaded on interaction.*

I’m highlighting this section as an interesting technique for maintaining the improvements the team has achieved in this redesign. The metaphor of a budget works in more dimensions than just restricting spending:

- Just as real budgets can expand to account for pay-raises and inflation, it’s conceivable that as average internet-speeds increase, or further compression or code-optimization technologies mature, the budget can increase to allow for a higher spending by the engineer teams while still delivering on the expected experience.
- The notion “sometimes you have to spend money to make money” is reflected in the allocation of shared infra(structure), which may incur a hit to a team’s budget in the short term but in the long-term, allow the team more flexibility in development.

Future-facing thinking about how to maintain improvements is another concept that product managers should be able to empathize with. As a product manager faced with decisions around which tech-debt tickets to take on, asking how the work done now will be maintained and supported in the future can be another dimension in evaluating which items are really worth the team’s time.

- - - - - -

## **Static and Lazy**

A couple terms have been used repeatedly throughout the article:

- Static / Dynamic
- Pre-fetch / Pre-load
- Lazy loading
- Serial / Parallel

Let’s work through these using some examples from the article:

> ***Preloading data on the initial server request to improve startup***
> 
> *Many web apps need to wait until all their JavaScript is downloaded and executed before fetching data from the server. With Relay, we know statically what data the page needs. This means that as soon as our server receives the request for a page, it can immediately start preparing the necessary data and download it in parallel with the required code.*

Static and dynamic are opposites: static is still and unchanging, while dynamic is flexible and unpredictable. For a piece of code to be *static* and to perform *static analysis* on it means that the code will not change when run, and therefore can be “predicted” in advance.

A basic example is the following snippet:

```
<pre class="wp-block-preformatted">a = 12
b = 31
c = a + b

request.receive().then(
    return(c)
)
```

Looking at this code, we can determine that no matter what happens in the request, we’ll be returning the value of `c`, and furthermore, nothing can change the value of `c`.

A *static analyzer* would reveal that instead of running through the code and performing the operation `c = a + b` every time, the program can pre-compute the value of `c` as `43` and rewrite the code to return that value immediately, with no impact on the correctness of the code.

```
<pre class="wp-block-preformatted">request.receive().then(
    return(43)
)
```

Information that can be gleaned statically is information that can be pre-determined without knowing anything about the user, request, or situation. By using their Relay tool, Facebook has gained static analysis abilities that allows them to “know statically what data the page needs.” Getting a head start on the data that needs to be returned means getting a head start on returning the data, and these marginal gains add up.

> ***Prefetching resources as early as possible***
> 
> *It’s common for client-side applications to wait until a page is being rendered by React to download the code and data needed for that page. Often this is done using React.lazy or a similar primitive. Since this can make page navigation slow, we instead start our first request for some of the necessary resources even before a link is clicked:*

Pre-fetching (or pre-loading, same difference) is the act of beginning a process (in this case, requesting some data from the server) before the program knows *for sure* that the data is needed. This is inherently a risk, since the guess could always be wrong and the effort wasted, but if the prediction is right, the program will have saved the time of having to load a resource and is able to respond to the user’s request immediately.

Pre-fetching relies heavily on the strength of its prediction heuristics, and Facebooks has laid out an theirs plainly:

- Start the loading process when a user’s mouse hovers over a link
- Load the code when a user begins the click (a click is actually two parts: the mouse button going down, then going back up. Click-and-drag is a feature that exploits this distinction)

Sometimes, pre-fetching doesn’t even need to be based on an event. For example, it’s highly likely a user will scroll through their newsfeed, so while only the first couple posts are crucial for the initial loading process (think “Tier 2”), the app can begin to pre-fetch the next posts as soon as there’s bandwidth available.

> ***Parallelizing code and data download***
> 
> *We do a lot of lazy loading of code on the new site, but if we lazy load the code for a route and the data-fetching code for that route lives inside of that code, we end up with a serial load.*

Lazy-loading is the conceptual opposite of pre-fetching. It’s a bet that a certain resource *won’t* be used, and thus delays its download until it’s proven to be needed. This can be advantageous on infrequently used pages, or if a resource is too large to download or computationally expensive. By choosing to approach a resource lazily, the program “wins” its bet by reducing the total work it has to do if the resource isn’t used.

- - - - - -

Engineering blog posts, especially well-written ones from reputable software companies, provide valuable high-level insight into what engineering challenges a company faces and how they approached the problem. By reading them, you not only familiarize yourself with the terminology, but also with the core challenges you’ll be dealing with as a product manager in your own company.