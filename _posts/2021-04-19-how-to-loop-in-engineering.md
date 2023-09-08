---
id: 378
title: 'How to "Loop In Engineering"'
date: '2021-04-19T19:08:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=378'
permalink: /how-to-loop-in-engineering/
categories:
    - 'General Product Management'
    - Uncategorized
---

[Common advice](https://svpg.com/product-management-vs-engineering/) for new product managers is to “loop in engineering” early in the process of feature development.

There’s a class of advice that I personally take issue with: *advice where the plan and the goal are the same*. If your goal is to “loop in engineering”, your plan to do so can’t also be “to loop in engineering”. See also: common presentation advice, “talk slower”, which you can achieve if you simply “talk slower”. 🙄

Here’s my advice for turning this goal into a plan.

- - - - - -

## **Define Your Goal**

“Looping in engineering” is ultimately an action. To develop the proper process, we first need establish for ourselves *why* we’re going to engineering.

**Ideas and Ownership**

One reason is to broaden ownership of a feature. A simple approach for turning [masons into missionaries](https://sacredstructures.org/mission/the-story-of-three-bricklayers-a-parable-about-the-power-of-purpose/) is for developers to have the idea for the feature they’re working on themselves. Bringing an unmet user need to the team and asking for their input works as an ad hoc brainstorm. Once someone shows a particular interest, you can work with them specifically to flesh out a solution, generating buy-in by default along the way.

In doing so, you spread ownership of the feature to the developer you’re working with, and empower them to have their own takes, directions, and ideas. It’s like having a second product manager. Do this for the majority of your features, and you’ll have a bought-in, empowered, and enthusiastic team that will start to identify opportunities *on their own* and present them to you.

Further reading on the concept of “product engineers” is [this article by Sherif Mansour](https://sherifmansour.medium.com/product-engineers-f424da766871).

**Implementation**

Sometimes you have an idea ready to go and need to start the process of turning the idea into reality.

In earlier stages, your focus will be on feasibility, looking for validation that it can be done, tweaking the requirements so it becomes possible, or identifying additional development work needed to make it possible.

Later on, focus shifts to generating buy-in. Within your team, this involves explaining the context and motivation for a feature, perhaps how it fits into your overall product plan. If you’re talking with partner teams, prioritization and resourcing come into play as well.

- - - - - -

## **Take a Guess**

Before presenting an idea for the first time (no matter how early do you this, there still has to be a first time for every feature), take time to think through your best guess for engineering requirements, feasibility concerns, level-of-effort estimations, and blockers. Write it out and hold on to it.

As a baseline, doing so shows respect to the engineers you’re talking with.

This exercise also helps develop your [technical product sense](https://www.pmtechlessons.com/technical-product-sense). By taking your own stab, then correcting with new information, you *actively* engage and utilize the technical knowledge you’re amassing. It more starkly calls out incorrect assumptions or gaps in your knowledge, and provides the immediate context to reincorporate the new information. This builds a mental model of the technology stack that you can then slot information into, rather than trying to organize and recall a bundle of tangled facts.

A great place to do this naturally is in the design ideation phase. While working with your designer, act as your eng lead and use this exercise to predict what they’ll say.

- - - - - -

## **Process**

How you present features to engineering is ultimately a matter of personality and working style, but I’ve found success by using a “pre-grooming”.

This is a small meeting with just myself, my eng lead, and our designer (when a feature calls for design work), off-cycle with our full-team grooming meeting. Grooming itself is too big a forum to introduce features for the first time since all team members will identify the same obvious concerns, which means it’s not a good use of *everyone’s* time. Pre-grooming allows those obvious concerns to be called out, and the off-cycle timing gives me (product) and our designer time to work on changes in response to the feedback.

At grooming, a more vetted idea is presented, and individual team members’ speciality expertise can provide nuanced feedback, rather than the coarse, basic feedback that’s given in pre-grooming.

Of course, not *everything* is routed through this meeting. Simple features (“simple” is a subjective bar that moves with your knowledge and your team’s ability) skip this step, and for features heavy in one specific, niche area, I go directly to the subject-matter expert to do the pre-groom. Ideas that are developed in partnership with your team have the pre-groom process built in to their ideation.

Not every feature makes it out of pre-grooming either. I’d estimate a 70% pass rate, with the remaining 30% being shelved. It’s still a worthwhile exercise even if your pass rate is lower since this is a valuable, tight feedback loop that develops your technical familiarity. I’ve also seen ideas re-emerge from the graveyard after some time has passed and work in the intervening sprints has now changed our outlook on the feature.

- - - - - -

A pre-grooming isn’t the only way to loop in engineering, but with whatever solution you come up with, keep in mind:

- Be clear on your goals for the interaction
- Make an attempt on your own before going to engineering
- Reincorporate your learnings and update your mental model of your tech stack
- Don’t try to capture all feedback at once; start with a small group and obvious issues, then expand to a larger group and more nuanced concerns