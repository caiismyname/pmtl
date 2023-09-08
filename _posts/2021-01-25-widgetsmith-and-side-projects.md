---
id: 356
title: 'Widgetsmith and Side Projects'
date: '2021-01-25T18:59:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=356'
permalink: /widgetsmith-and-side-projects/
categories:
    - 'Engineering Blog Breakdowns'
    - 'Side Projects'
    - Uncategorized
---

[David Smith](https://www.david-smith.org/about/) is an independent Apple developer, part of a [larger universe of tech and Apple commentators](https://www.relay.fm/shows). He is unique in having published 59 apps over his 12 year career as a one-person app maker, his most recent being [Widgetsmith](https://apps.apple.com/us/app/widgetsmith/id1523682319), which offers the ability to create a wide range of widgets for iOS 14. Widgetsmith has been an incredible success, peaking at #1 in the app store and — at time of writing — sitting at 62, ahead of apps like Uber, ESPN, Grubhub, and Calm. And remember, he’s a single developer.

His approach to his career is a shining example of the larger value of working on side projects. Though this is his full time job, the lessons he describes and perspective he brings are just as valuable to those trying to gain knowledge through side projects.

This article is based on and contains excerpts from [his interview on Jon Gruber’s Daring Fireball Podcast on 9/20/2020](https://daringfireball.net/thetalkshow/2020/09/30/ep-297).

- - - - - -

Smith describes part of the process of developing Watchsmith, an app he created before Widgetsmith that set much of its foundation:

> ***33:30 David Smith:*** I went through 5 or 6 different editor screens: how can I make something that isn’t totally intractable to a common user, that is a clear, straightforward way that I can create this complexity and give you so much choice … let you choose exactly what is shown. And all of the things that ultimately Watchsmith ended up being, that level of sophistication that I needed to squeeze into something useable was something I don’t know that I would have had the time or idea about for widgets if I hadn’t through that for the watch.
> 
> When I was applying it to widgets, it made sense to just carry it over. … If I hadn’t gone through that process with Watchsmith, it would’ve been hard for me to come up with it for widgets.

The main takeaway is that he had already practiced the problems he had to solve for Widgetsmith with his work on Watchsmith. Practicing can take multiple forms, two of which are indicated here.

First, he’s already been in this situation. Many of [Smith’s apps](https://david-smith.org/apps/) follow in a theme — health / fitness / wellness apps, and recently, widget-sized utilities. Product management requires domain knowledge, and Smith has built expertise in the space. In this specific example, he happened to solve the exact problem (an editor that gracefully handles complexity of finicky elements) in a previous app. Luck favors the prepared, and Smith, by virtue of his persistent work in a focused direction, has come prepared.

Second, projects allow you to practice the entire *lifecycle* of skills needed to succeed as a product manager. These include:

- **Technical Skills:** Some elements of programming, like setting up a project structure, a git repo, and installing libraries and packages, are commonplace in *all* projects. While you may have to learn them the first time around, they should eventually become like writing your name on a test — habitual, non-thinking.
- **Platform-Specific Skills:** Different projects will have different areas of technical depth. A web app will require a MERN stack or something similar. An iOS app will rely on Apple’s own SDKs. These skills are not quite as broad as the first set, but are still generalizable to other projects of the same form. Attempting more projects in the same stack will build your expertise, and you’ll find yourself working faster and aiming more ambitiously with each subsequent project.
- **Work Skills:** Personal productivity habits are crucial to achieving any results outside of a structured work or school environment. Learn how you work most efficiently, what to do when you don’t feel like working, and most importantly, how to work through lulls in motivation to finish projects.
- **Project Management Skills:** Side projects aren’t subject to OKRs or roadmaps, but you’ll quickly run into an even bigger constraint — your ability and time. Get frustrated with yourself enough times, and you’ll soon hone your sense for task estimation and which features are *truly* important to implement.

Working on side projects is the most holistic way of “practicing” product management. You’re refining myriad skills, not just the programming language you’re using.

- - - - - -

> ***40:00 Jon Gruber:*** You spent all of this time obsessing over making watchfaces and it gave you insight into “Oh, all of a sudden I realize why Apple does X, Y, and Z. I was always bugged by that but now I see why: when you don’t do that, it stinks.”
> 
> ***David Smith:*** You don’t really understand something until you’ve really had to build it from the ground up and made all the mistakes, made watchfaces that look terrible. Even simple things that seem simple, like “How do you lay out the numbers on a clock?” is ***incredibly*** hard. 12, 11, 10 have multiple digits but they have to look balanced and reasonable next to 2 and 3. The modern Apple Watches are not square, they’re oblong, they need to look reasonable.

No product is simple, and you can prove it by trying to replicate an existing, “simple” product. Some good starters are a recipe manager, basic social network, or todo list.

Simple apps are only possible because the team behind them have worked through the choices that bring complexity. No good, intuitive app has also come with a web of settings pages.

The difficulty in managing the complexity in a product comes from having to make a large volume of decisions, each of which must remain cohesive with the others and stay focused on the larger goal. When done well, these decisions are transparent to the user, difficult to spot even when trying to pontificate about it. A more effective way to identify — and practice making — these decision points is to replicate the functionality of an existing, well designed product.

Copying as an exercise brings two advantages:

- You’re freed from making directional and opinionated decisions, and left with a pure exercise in managing the complexity that results from your decisions.
- You can try your ideas while maintaining a reference guide from the original company, likely created by teams who have thought about and tested each decision far more than you have.

- - - - - -

> ***1:00:30 Jon Gruber:*** You could also pick what font the clock was. What did I pick? I picked the system font. In the Chicago 12 era, it was Chicago 12, then when they changed it to Charcoal, I changed it to Charcoal, and it was just the exact size and shape of the system font. And if it wasn’t going to be the system font — and sometimes when I’d play with it — it’d be a smaller version of the system font. Like, the system font in that era was Chicago 12, that was the menubar font, that we had on all our iPods. The Finder, for filenames, would use Geneva, which was their bitmapped version of Helvetica.
> 
> Well that was sort of a system font too — it wasn’t the same font, it was Geneva vs. Chicago, but it was what the system used for lists of things. So you might set your clock to be Geneva 9. And that still looked like it was part of the system. I remember thinking “Oh, that’s clever. It’s not a menu, it’s just a clock, so maybe it should be Geneva 9.” And it just gets you, as an avid user, into that thinking of junior level UI designer. Which is a great gateway into thinking like a software designer.

Intentionally designed products (you can disagree with Apple’s aesthetics, and even with their intentions, but you can’t deny that they are *intentional*) are fantastic case studies in decision making and product sense. Use your experience as a user to inform your development as a product thinker.

All users can give vague, emotion-based feedback; experts pinpoint the exact set of elements without which a product would fall apart.

Try the following exercises:

- What were alternative decisions the team could have made, and why didn’t they make them? Be specific — what would break, appear disjointed, or just plain look weird?
- Notice which parts of the experience you *don’t* remember. The decisions you notice are the ones you disagree with, but they’re just counterexamples. Find the examples.

- - - - - -

I don’t know David Smith personally, but I have been a big fan of his apps and [podcast](https://www.relay.fm/radar) for years. This interview is a great illustration of why.

- [David Smith’s Blog](https://www.david-smith.org/)
- [Under the Radar (podcast)](https://www.relay.fm/radar)
- [Download Widgetsmith](https://apps.apple.com/us/app/widgetsmith/id1523682319)