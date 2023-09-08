---
id: 370
title: 'Lessons From My Latest Side Project (BlogBacklog)'
date: '2021-03-22T19:05:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=370'
permalink: /lessons-from-my-latest-side-project/
categories:
    - 'Side Projects'
    - Uncategorized
---

I made a tool called [BlogBacklog](file:///Applications/iA%20Writer.app/Contents/Resources/Templates/Sans.iatemplate/Contents/Resources/blogbacklog.com), which scrapes a blog for links to its content, then emails those links to you on a regular cadence. Lots of blogs have newsletters for *new* content, but only a static archive of already-published articles. BlogBacklog turns that archive (*backlog*) into a “newsletter”.

I find this valuable because the best blogs have extensive histories, and far more great articles than I can read in one sitting. Spreading out the consumption allows me to consume their content at a sustainable pace.

One note, BlogBacklog doesn’t actually send the *content* of an article over email, just the link. I find this to be a trivial difference in functionality, and ensures that BBL isn’t construed as stealing content from a blog.

*Consider this a “soft launch” of* [*BlogBacklog*](file:///Applications/iA%20Writer.app/Contents/Resources/Templates/Sans.iatemplate/Contents/Resources/blogbacklog.com)*. I would love if you checked it out, and sent me (caiismyname2012@gmail.com) any feedback you have, including and especially blogs that don’t work yet!*

## [***Check out BlogBacklog 👉 blogbacklog.com***](https://blogbacklog.com/)

- - - - - -

## **Lesson 1: Build For Yourself**

I built BlogBacklog to solve a problem I actually had. This is critical when it comes to successful (a.k.a. finished) side projects: you should have at least one guaranteed user, and that user should be yourself.

In doing so, your motivation becomes concrete, and you understand your user persona. There’s no guessing of what your users want, and no risk of building a product that no one will use.

Paul Graham (a founder of Y Combinator) wrote in ([*Organic Startup Ideas*](http://paulgraham.com/organic.html)):

> The best way to come up with startup ideas is to ask yourself the question: what do you wish someone would make for you?

and

> Organic ideas are generally preferable to the made up kind, but particularly so when the founders are young. It takes experience to predict what other people will want. The worst ideas we see at Y Combinator are from young founders making things they think other people will want.
> 
> So if you want to start a startup and don’t know yet what you’re going to do, I’d encourage you to focus initially on organic ideas. What’s missing or broken in your daily life? Sometimes if you just ask that question you’ll get immediate answers.

Don’t dream big, or dream theoretically. Just build for your own needs.

- - - - - -

## **Lesson 2: Make It Easy To Work On**

I spent six months on a [previous failed project](http://pmtechlessons.com/my-side-project-failed). My work pattern was sporadic, long gaps punctured with weeks of active development. As time went on, so did the length of the gaps. Once I stopped working, I immediately dreaded starting again, because starting again was such a painful process:

- I kept forgetting how to actually run the app and all its components (it sounds stupid, but it’s true)
- I didn’t know what I was working on last
- I didn’t know what I was supposed to do next
- I didn’t remember how my code worked

Dread is powerful. If you dread something you *need* to do, it ruins your whole day. If you dread something you *don’t have to* do, then you just won’t do it. I took very explicit steps to ensure working on BlogBacklog was frictionless, including:

- Never closing the terminal and IDE windows, so I wouldn’t have to re-do my setup
- Keeping a list of every command I needed to run and what it did
- Creating a lightweight Kanban system so when I had time to work, I just had to pick up the next task
- Incorporating tools to solve repeated problems. I had a hard time telling if my changes were helping or hurting, so I built a lightweight test suite to check my work.
- Scoping the project down so it all fits in your head, so you don’t have to re-learn code you already wrote

- - - - - -

## **Lesson 3: Lessons In Programming**

I have a bachelor’s and master’s in computer science, and was ready to enter the workforce as a proper software engineer. This isn’t to brag, it’s just to say that I have meaningful experience writing code. With that in mind, I want to share with you the concepts that were totally foreign to me that I learned for the first time during this project:

- How URL routing *actually* works
- What a templating engine is, and why I should use one
- How to sort a list of JavaScript objects by their values
- How to traverse an HTML DOM tree
- What an HTML DOM tree is

Learning never ends. I almost certainly won’t use most of what I learned here, but the time I spent learning was also time spent practicing a far more valuable skill: facing a problem and finding a solution.

Side projects are filled will discouragement, setbacks, and totally random, inscrutable error messages. The true value isn’t a slick UI or a slide deck presenting a theoretical company. It’s building up your muscle of facing a problem and slowly, methodically, *persistently* working towards the solution.

*That’s* the main lesson of side projects.

- - - - - -

## **Bonus**

Some of my favorite blogs that motivated me to build this, and featured heavily in my testing:

- [Kalzumeus](https://www.kalzumeus.com/greatest-hits/)
- [Overreacted](https://overreacted.io/)
- [James Clear](https://jamesclear.com/articles)﻿