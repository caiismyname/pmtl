---
id: 307
title: 'What is an API?'
date: '2020-07-11T18:38:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=307'
permalink: /what-is-an-api/
categories:
    - 'Best Of'
    - 'Technical Explainers'
    - Uncategorized
---

APIs are the backbone of modern software development, to the point that they’re just assumed to be understood. However, a fundamental understanding of what makes a good API will bring nuance to the conversation and allow for more robust frameworks and systems to be developed. Product managers should understand the importance of developing a good API for their products.

*This article is written to be understandable even if you’ve never written a line of code in your life. But if you have, we think we can still teach a thing or two.*

## **Let’s get started**

One abstraction that isn’t given much thought is “code”. When generalized, it refers to any file with computer code, with no hint towards its structure. Indeed when you first start programming, your entire program may just be one file and this abstraction holds, but as you grow into larger, more complex systems, we need a more descriptive mental model.

Let’s think of our program as a whole like a restaurant, and the “code” specifically as the kitchen and everyone in it. At a simple hotdog stand, the entire kitchen staff could be one person — akin to your “code” being the single file of code you wrote. But as you scale up, move into a bigger building, and start serving more customers, you’re going to need a bigger kitchen staff. Sure, there’s still the person making the hot dog, but you’ll need someone to do the dishes, to work the register, to make french fries.

This is more similar to how code in a real product works; there are many components, each with their own job specialty. The term “code” falls away, and we can say our “program” is made up of multiple “components”.

Now let’s say it’s the lunchtime rush, and there’s a flood of customers coming through the door, all trying to get hotdogs for lunch. There’s no time for chitchat in the kitchen — everyone has to understand everyone immediately so they can run at maximum efficiency.

Let’s imagine what would happen if the kitchen staff didn’t understand each other:

- “An order of fries” → What size? Ketchup on the side? To-go or dine-in?
- The hotdog maker and fries maker might keep making their food separately, leaving it up to the person in the front to figure out what goes with what.
- The dishwasher might keep washing trays, without knowing the hotdog maker actually needs more plates.

This is where APIs come in. The API is akin to the french fry maker telling everyone “When you ask for fries, I need to know the size and if they want ketchup”. It’s the dishwasher saying “If you need more plates, you have to specifically request plates, otherwise I’ll keep washing trays”.

**It’s each individual component setting the ground rules for how everyone else talks to them.**

An API is an Application Programming Interface. An API allows a component to *interface* with the rest of the program. An API is not an explicit component in your code, nor can you really point to a line of code and say “that’s the API”. Rather, it’s the abstract idea of setting guidelines for inter-component communication.

Without APIs, the hotdog maker, the dishwasher, and the cashier can’t coordinate with each other, and no one can get the items they need. With APIs, they know exactly how to talk to each other, and the kitchen runs smoothly.

- - - - - -

## **There are some other considerations about APIs.** 

**Implementations are hidden**

Notice how the dishwasher didn’t ask for input on how he washed the dishes, nor did he tell anyone how he washes the dishes. That’s because from the hotdog maker’s perspective, it doesn’t matter if the dishes were cleaned with a sponge vs. a brush vs. a fine-tooth comb. They wants clean plates, not details.

Good APIs don’t expose the details of implementation, because it’s unnecessary for the user of the API. It also offers flexibility to the owner of the API. The dishwasher can one day decide to buy a dishwashing machine instead of washing by hand, and the rest of the kitchen doesn’t need to change anything about how they operate — they just keep requesting clean dishes, and clean dishes keep coming.

**APIs control permissions**

An implicit part of the hotdog maker’s job is that she controls access to the hotdogs. It sounds sort of obvious, but imagine if she wasn’t there and everyone just grabbed the hotdogs when they needed them. No one would know if they ran out of hot dogs. And they probably don’t want the dishwasher to grab hotdogs without washing his hands first (come to think of it, we don’t want *anyone* grabbing hotdogs without washing their hands).

By putting an API in front of a resource and enforcing usage of the API (asking the hotdog maker) instead of directly manipulating the resources (grabbing the hotdogs themselves), we have a chance to enforce requirements about how the hotdogs are used. This includes logistical issues like “Keep track of when hotdogs are taken”, and permissions issues such as “The dishwasher can’t grab hotdogs unless he has washed his hands.”

It might seem silly now, but imagine instead of hot dogs, it was the location data of your phone. Now we want to make sure everyone’s washed their hands, right?

**APIs enforce standards**

If the cashier took down orders on a piece of paper that was passed to the hotdog maker, but the hotdog maker was only listening for orders and never looked at the paper, no hotdogs would get made.

APIs not only enforce that everyone is saying the same thing, they make sure everyone is saying the same thing *the same way*.

**APIs scale**

In our kitchen example, we talked about APIs as the way that kitchen staff communicate with each other. But APIs are used at every level up and down the stack. The restaurant needs to order supplies from a store. Maybe the restaurant signs onto a delivery platform that has its own ordering system. All of these situations need a robust, well-defined system of communication, an API.

Here, the API communicates with the restaurant as a whole, not the individual kitchen staff (remember “Implementations are hidden”), but the same principles apply.

- - - - - -

Next time you go to a restaurant, think about how you’d design an API for each staff member you see.