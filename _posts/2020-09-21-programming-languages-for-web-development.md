---
id: 326
title: 'Programming Languages for Web Development'
date: '2020-09-21T18:47:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=326'
permalink: /programming-languages-for-web-development/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

*This article is adapted from the* ***Programming Languages*** *section of the* [*Algorithms Interview Prep Course*](https://www.pmtechlessons.com/interview-prep)*. Find out more and get access to the course* [*here*](https://www.pmtechlessons.com/interview-prep)*, which includes an expanded version of this post that covers even more languages.*

In this article, we’ll go over the languages commonly used in web development. As product managers, it’s important to have a basic framework to understand how the technical components fit together. Becoming familiar with the roles each language plays makes it easier to converse technically with your engineering counterparts. This article presents the languages roughly in order of frontend to backend.

#### **HTML / CSS**

There’s debate to whether HTML and CSS are technically “programming languages”, which arises from the fact that they are not used to write “code” per se. Rather, they’re a set of syntax rules that describe and manipulate text into graphical webpages. HTML is “Hyper **Text** Markup Language” and CSS is “Cascading **Style** Sheets”.

HTML and CSS form the core of what our web browsers will display as “websites”, but it’s becoming increasingly rare to write it by hand. More often, frontend frameworks powered by JavaScript will have their own ways of creating a UI, which they in turn will use to generate the resulting HTML and CSS. JS can also manipulate (move, hide, edit) elements within the HTML, further blurring the line between the two.

#### **JavaScript / TypeScript**

JavaScript (JS) is the foundational language of the internet. Almost every modern website uses JS. It’s used to build, or is involved with, a host of familiar tools:

- React
- JSON (JavaScript Object Notation)
- NodeJS

JS is primarily used to create client-side code (code that runs on a user’s device, instead of a server) but can be used for server-side applications as well. This code can cover a variety of use cases, from:

- Sending tracking information about website usage patterns
- Making calls to a server
- Powering an in-browser game
- Handling complex state logic in a single-page-application

JS has built a reputation for sometimes being [difficult](https://github.com/denysdovhan/wtfjs), but given its position of dominance in the web-app space, it’s hard to imagine JS going anywhere anytime soon.

JS is defined by a standard (ECMAScript), which enables others to modify and extend the language. The most notable of these is Microsoft’s TypeScript, which is a more opinionated and structure approach to JS.

#### **PHP**

PHP is a language primarily used for server-side development. In fact, while likely not as familiar to recent-grads as JavaScript, it powers a [significant portion of web servers on the internet](https://w3techs.com/technologies/comparison/pl-js,pl-php). Additionally, the [chart](https://w3techs.com/technologies/comparison/pl-js,pl-php) in the previous link illustrates the splits between high-traffic sites using JS vs. the long tail using PHP, helping explain the familiarity gap.

In saying that PHP is used by many web servers, it’s important to note that “web server” is not the same as “website”. A website is a construct for the user, to represent the page that is displayed in browser when a URL is visited. The literal manifestation of that website is the webpage that you see, made from HTML (see above). A web server is the computer that serves that page to the browser. Having a server behind a site allows for dynamic generation of webpages, such as filling it out with user-specific information. In fact, all websites have some form of server behind the scenes.

So, the earlier statement “PHP is used by many web servers” refers to these behind-the-scenes servers. The ability reason about the components of a modern web app are critical for a PM, and you can learn more about [web apps here](https://www.pmtechlessons.com/what-are-web-apps).

#### **Ruby**

Ruby is a general purpose language that has found a home in web development as a server-side language.

Ruby was designed to be an easy-to-use language, and its creator Yukihiro Matsumoto describes it best ([Wikipedia](https://en.wikipedia.org/wiki/Ruby_(programming_language))):

> *Matsumoto has said that Ruby is designed for programmer productivity and fun, following the principles of good user interface design.*
> 
> *“I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of Ruby language.” He stresses that systems design needs to emphasize human, rather than computer, needs.*

Ruby’s use in web development has been aided by the popular framework Ruby On Rails.

The role of the community of software developed around a language is an understated but vital part of a language’s success and adoption. A somewhat chicken-and-egg problem, popular languages all have some superstar libraries that are used by most who use the language. The existence of such libraries helps signify the credibility of a language, and also provides incentive to developers to choose the language so they can utilize the library. This aspect of languages is so important that many come with a (or multiple) marketplace specifically for distributing packages:

- Python’s pip
- JavaScript’s NPM
- Ruby’s RubyGems

#### **SQL**

SQL is a language built specifically for querying a database, hence “Structured Query Language”. It’s used in many database systems, including MySQL and Postgres. SQL is so narrow and focused that it’s impractical to do anything else with it.

SQL also differs from the rest of the languages on this list in that it is *declarative*. Almost all programming languages you’re familiar with have been *imperative*, meaning the programmer describes *how* the program is to achieve its result (think for-loops and if-statements). A *declarative* language instead has the programmer describe the precise result it wants to achieve, and will then perform the necessary computations in order to return the corresponding results. It’s a different mode of thinking, which suits the database world particularly well.

Most developers are only interacting with a database to retrieve information. Modern databases are built on complex codebases that have hidden nuances and gotchas. SQL handles this mismatch by having an optimized compiler that can execute the queries with maximum efficiency, without relying on the programmer to know those tricks themselves.

> **Compilers**
> 
> Programming languages go hand-in-hand with compilers. Many languages are *compiled* languages, meaning that after the programmer has finishing writing their code in the language, another program (the compiler) will take the code and turn it into a different language.
> 
> The purpose of translating code from one language to another lies in abstraction stack that computers are built on. Processors only understand a very basic form of computer program (think `1`s and `0`s), while humans work best with the features a programming language provides. Compilers bridge the gap by allowing humans to write code how they want, and computers to receive code how they prefer.
> 
> In the case of databases, the compiler translates the SQL query into commands native to the language that the database was built with.

In fact, most SQL queries aren’t even exposed to the developer, instead hidden behind an [API](https://www.pmtechlessons.com/what-is-an-api) built for the language they’re using.