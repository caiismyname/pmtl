---
id: 314
title: 'Web Development'
date: '2020-08-03T18:43:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=314'
permalink: /terminology-pt-3-web-development/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

#### **Software Engineering Terminology Part 3**

*This is part of a multi-part series of software engineering terminology explainers for product managers.*

#### **Concepts Explained:**

- **Domain**
- **Cookie**
- **Server**
- **Cache**

An application on the web starts with a user visiting the site by entering your URL (e.g. [google.com](http://google.com/)). But websites aren’t just one page, and you’ll notice that you don’t go to [foogle.com](http://foogle.com/) to access your settings or [hoogle.com](http://hoogle.com/) to access your contacts. How does this happen?

Think of a website as an apartment building. To get to the apartment, you enter the building’s address, but to visit a specific person who lives there, you go to their unit. But you wouldn’t say a person lives at “Unit 100, San Francisco”, you would still include the apartment’s address.

Similarly with a **domain**, every page that lives under the site still has the base address of the building, but each has their own “unit number” (in this case, a *subdomain*, such as `myaccount.google.com`). The `myaccount.` is the unit number, and the `google.com` is the apartment building’s address.

Once a user visits your site, how do you recognize them? Sure, you could have them log in every time, but wouldn’t it be nicer to recognize them without any extra work? Enter **cookies**. Cookies are little bits of information that a website leaves on user’s browser. The next time the user visits, the site can read the information in the cookie. The information in the cookie can vary, from innocent things like “this person likes dark mode” all the way up to persistent trackers that let advertisers know what you’ve been searching for. Their intentions may vary but at their core, they’re just little bits of information for websites to consume.

We’ve explained how you find a website (**domains**) and how websites can remember information about users (**cookies**), but how does a website appear on your computer in the first place?

The phrase “visit a website” is a bit misleading — when a website loads, your browser isn’t going anywhere. In fact, the bits that represent the website are actually being transferred *to* your computer over the internet (think of the internet like a set of pipes through which information flows). The bits of the website are given to your computer by another computer that you specified via its web address. That other computer is called a **server**, since it’s *serving* the website to you.

If you run a popular website, your server is going to receive lots of requests and after a certain point even the fastest server is going to have trouble keeping up, slowing down the experience for your users. How can we lighten the load?

The first thing we have to realize is that “the internet” is not a perfect abstraction. While it seems like you can be instantly connected to people across the world, the truth is data still needs time to get there. While that time is negligible on a human scale, its significant on a computer scale. Thus, physical proximity still matters when it comes to speed.

Second, not all components of a website are equal. When logging into your email, the interface’s logos and colors will be the same every time you load the page — only the emails themselves change.

With this in mind, a solution emerges. We can place static (i.e. not changing) content in *other* servers that are spread out across a geography, called a **cache**. When a user visits our site now, they load some parts of the site from the nearest cache and only call our main server for the critical pieces, thus lessening the total work our server needs to do.

Caches need to be careful that they aren’t keeping data for too long (“cache invalidation” problems arise), and that the information they keep is still relevant (if no one requests the content in the cache, then it’s never used), but if deployed properly they play a major role in keeping your servers running.

*Putting it together*

Websites are addressed using **domains**, which is like an apartment building for its subcomponents. **Cookies** let websites “remember” information about you. **Servers** deliver the actual website, and **caches** help speed up the delivery.