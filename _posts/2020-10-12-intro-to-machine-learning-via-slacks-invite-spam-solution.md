---
id: 332
title: 'Introduction to Machine Learning'
date: '2020-10-12T18:49:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=332'
permalink: /intro-to-machine-learning-via-slacks-invite-spam-solution/
categories:
    - 'Engineering Blog Breakdowns'
    - 'Technical Explainers'
    - Uncategorized
---

## **via *Slack’s Invite Spam Solution***

One of the best ways to gain technical understanding is to observe how established companies reason about and write about their technical challenges. As a product manager, being able to read between the lines of a technical document is a crucial skill.

This [blog post by Slack’s Machine Learning team](https://slack.engineering/blocking-slack-invite-spam-with-machine-learning/) provides an incredibly accessible and clean-cut entrypoint for learning about machine learning. In this breakdown, we cover the basic technical aspects of what machine learning is, and what product managers need to know to utilize machine learning effectively.

**Original article:** [Blocking Slack Invite Spam With Machine Learning](https://slack.engineering/blocking-slack-invite-spam-with-machine-learning/)

## **Learning**

> ***Bringing in ML***
> 
> *The situation above, where a series of rules were being updated based on a stream of historical data, is exactly the sort of thing machine learning can do a lot better and cheaper than humans. We call this sort of problem a “supervised” machine learning problem, where we have a label (an invite being spam) that we want a machine to predict. However, to teach a machine to do it, you need data. In particular, for each of our observations (invites) we need historical records of:*
> 
> *Labels – a ground truth for thing we want to predict going forward*
> 
> *Features – some set of facts about the observation which is sufficient to have predicted the label*

Think about how you learned your first language. Chances are you can’t enumerate every single rule and exception, yet somehow you still have commanding grasp, able to converse fluently. Through hearing your parents, teachers, TV shows, friends, and everyone else around you speak and provide countless examples of what a correct sentence sounds like and correcting your mistakes, you eventually learn how to produce proper, coherent sentences.

Machine learning is a similar process. Machine learning is largely agnostic to semantics of the subject it is learning. Instead, given enough examples, it will extract the relevant information from a problem statement, make its own deductions, and provide an answer.

Machine learning can handle a multitude of question types, the simplest of which is classification. Classification is simply identifying which category something belongs to. The simplest form of classification is binary, where there are only two categories. Slack’s spam use case fits perfectly — an invite is either spam, or it is not.

This simplifies the problem dramatically. With only two categories, the model can focus on a single question: *“Is this spam?”.* The signals in each case can only point in one of two directions — spam or not spam. To contrast this simplicity, imagine trying to distinguish between different breeds of dogs.

[English Springer Spaniel or Welsh Springer Spaniel?](http://www.vetstreet.com/our-pet-experts/seeing-double-14-look-alike-dog-breeds-can-you-tell-them-apart). The machine learning algorithm not only has to distinguish between two very similar looking dogs, but it first has to deduce that the dog is one of those two in the first place. Any signal can pull in multiple directions. Let’s just stick with our binary classification for now.

### **Labels**

When learning a language, the people around us constantly give feedback, most of which could be boiled down to “yes, that was a correctly formed sentence” or “no, I don’t know what you’re saying”. In machine learning terminology, this amounts to a *“label”,* a known-answer to the problem the ML system is trying to solve. Since a machine has no intrinsic understanding of the problem, it must rely on the labels to determine if it’s moving in the right direction. There are advanced training methodologies that can actually train themselves with minimal human input, but our basic model will still need our intervention, hence the term “supervised machine learning”.

Collecting labels, while a straightforward task, can range from trivial to capture, such as piggybacking off of Slack’s existing infrastructure, to [being so large that everyone is thankful someone else did the work](http://www.cs.toronto.edu/~kriz/cifar.html).

### **Features**

On the surface, a sentence is just a sentence, but there can actually be many ways of describing a given sentence. There’s the obvious:

- What words are in it
- What is the order of the words

But there are other elements as well:

- What are the lengths of the words?
- Are the words verbs? Nouns? Adjectives?
- What was the sentence right before it? After it?

Features refers to all these different characteristics of the input. Since a machine learning algorithm has no intrinsic understanding of the problem, we need to give as much description of the inputs as possible so that it has the maximum surface area over which to learn. The algorithm can always learn which features are actually irrelevant, but it can’t compensate if you leave out key features — imagine if you were asked to distinguish between dog breeds, but were only given the names of their owners.

Turning inputs into their component features for the algorithm is critical to the success of a machine learning algorithm, and careful thought should be put into the task.

- - - - - -

## **Explaining**

> ***Model design***
> 
> *While simpler than most other models, this offers a few advantages:*
> 
> *It can easily handle a large number of features.It is easy to debug — for every invite the model thinks is spam, we can easily say why it thought so.*

The description of the model is beyond the scope of this breakdown, and isn’t particularly actionable information for product managers anyways. Instead, I want to use this opportunity to highlight something unique about Slack’s model:

> *for every invite the model thinks is spam, we can easily say why it thought so.*

This is actually a fairly rare characteristic of models, and likely only exists because the problem is so straightforward. Machine learning models don’t solely rely on the inputted features to make their decisions. In more complex models, such as neural networks, the model actually takes the inputs and synthesizes *it’s own* features that only it understands. These synthesized features may have a correlation to a real world element, or it may be a pattern so subtle that only a computer looking at thousands of examples could pick up on. When it comes to sophisticated machine learning models, it’s usually impossible to explain why it came to particular conclusion.

This rears its head in a particularly ugly fashion when it comes to algorithmic bias — bias in a model’s output is generally a reflection of bias in its training data. However, since we don’t know what a model is doing to come to its conclusions, we can’t concretely explain why a particular bias is showing up, nor can we easily “tweak” the model to account for the bias.

- - - - - -

## **Deploying**

> ***Model Serving***
> 
> *Often, the biggest hurdle going from a model that can predict something accurately on data “offline” to having an impact in the product is figuring out how to run and score that model “online”. This is particularly a hurdle for data scientists, who often have the tools for the former but not the latter.*

A more relevant problem for product managers is the organizational hurdles when it comes to cross-team collaboration. Many of the tools used for creating, training, and testing machine learning models are wholely independent of the tools used for building, testing, and launching the actual product.

At best, these differences are simply disconnection issues, and building a set of API bridges can resolve the problem. However, there are many more risk factors when it comes to integrating machine learning into an already-deployed product.

- The set of features required by the model may not be available, or available in the correct form, in the product.
- The model may run too slowly to be integrated into a live, production setting.
- The model may have performed well in testing, but not when deployed to real users.
- The model simply doesn’t solve a problem the product team has.

As product managers responsible *every* aspect of a product, it’s important to think about these concerns early on when considering a machine learning solution, and actively working to mitigate these risks. This often looks like how you’d validate any other product feature:

- Create a set of functional requirements that the model and its integration must meet.
- Build a basic version of the model to test the integration and uncover any weaknesses.
- Continuously test the model’s performance on real production use cases, instead of a static set of sample data.

By digging into the details rather than hand-waving away the implementation, you can save both your product team and the machine learning team a lot of trouble.

- - - - - -

Engineering blog posts, especially well-written ones from reputable software companies, provide valuable high-level insight into what engineering challenges a company faces and how they approached the problem. By reading them, you not only familiarize yourself with the terminology, but also with the core challenges you’ll be dealing with as a product manager in your own company.