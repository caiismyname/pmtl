---
id: 330
title: 'Backend Programming Languages'
date: '2020-10-05T18:48:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=330'
permalink: /backend-programming-languages/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

*This article is adapted from the* ***Programming Languages*** *section of the* [*Algorithms Interview Prep Course*](https://www.pmtechlessons.com/interview-prep)*. Find out more and get access to the course* [*here*](https://www.pmtechlessons.com/interview-prep)*, which includes an expanded version of this post that covers even more languages.*

There isn’t one dominant programming language for backend tasks like there is JavaScript for webapps, but some languages are more popular than others. The languages in this article are wide-ranging in their use cases, but all could conceivably be used in a server-side setting. In this context, “server” does not specifically refer to “web server” that returns web pages, but rather a more generic computer that performs an application’s heavy lifting behind the scenes.

The use cases for these languages start to depart from the realm of a standard, consumer-facing product manager and may be more suited for a Technical Product Manager. That being said, knowing a little about how backends are built goes a long way in developing trust and rapport with your engineering team.

## **Java**

Java is the workhorse of the enterprise world. It is often the “default” programming language in many corporations (or at least, in many CS classes), and it has a little bit of everything for everyone. It’s flexible enough to support most programming paradigms, but with enough in-built mechanisms that make it suitable for large-company development (in ways that lighter languages like Python aren’t).

One of the most notable elements of Java is its use of the JVM, or *Java Virtual Machine.*

**Virtual Machines (VMs)**

A virtual machine is a computer program that emulates another computer. For example, running a GameBoy emulator on your laptop is a form of virtual machine.

In the software industry, VMs allow for hardware to be “anonymized”. The ability to run your preferred OS regardless of the actual OS of the physical computer you’re using comes in handy when renting out space in a server rack or on a cloud provider like AWS. It means that regardless of what hardware your provider chose, you can still develop with the [environment](https://www.pmtechlessons.com/terminology-pt-6-devops) that you’re familiar with and that all your existing code is written for.

The JVM has its own specific “language” that all Java code is translated to. Because it’s a virtual machine, it can run on any operating system that has support for the JVM — and *many* computers have support for the JVM. The result of this is that as long as both your development computer and the target computer have JVM support, you don’t need to worry about compatibility issues. The intermediate step of translating Java into “JVM language” abstracts away the details of the underlying computer, providing ultimate portability.

Java is the language of Android app development, as well as a viable option for web development. While Java doesn’t run in the browser (unlike JavaScript), it can still be used on the server side to handle requests and generate the resulting webpages that are sent back to the browser.

Oh, and Java has nothing to do with JavaScript.

## **Bash**

Bash is less of a programming language and more of a “scripting” language — that is, a language used to write [scripts](https://www.pmtechlessons.com/terminology-pt-1-daily-coding).

In full-time software engineering jobs, automated scripts do more than save a few seconds and keystrokes. They ensure consistency between runs, and can be pre-programmed for failure cases to ensure fallbacks are triggered gracefully. They won’t accidentally typo a command, or forget how to perform an operation halfway through. In short, they excel in all the areas where humans don’t, making them great tools for efficient working habits, as well as essential parts of [DevOps systems](https://www.pmtechlessons.com/terminology-pt-6-devops).

There’s also a slight misnomer going on here.

When you open your terminal, the window that opens may *look* like a peak into the soul of your computer, but it’s in fact just another program. This program, called a *shell*, specializes in navigating around your filesystem (open the shell back up and try `cd ~` followed by `ls`) and running other programs.

Historically, different operating systems had different shells. On macOS, the default shell is Bash, while on Windows, it’s PowerShell. These shells serve the same purpose, but are built to work with the specific operating system and have slight differences in the specifics.

Bash is the language used to write scripts for the Bash shell. A bit confusing, definitely esoteric, and a fun peak into the [history](https://en.wikipedia.org/wiki/Unix#/media/File:Unix_history-simple.svg) of early modern computers.

## **C / C++**

C and C++ are closely related, C++ being an extension of C. For purposes here, they represent the same style of programming language.

C is one of the oldest programming languages, at almost 50 years, with a strong connection to Unix.

**Unix**

Wander around programming languages long enough and you’re bound to run into Unix, which can be hard to explain in the modern era of software and computers.

Today, there are two dominant consumer operating systems: Apple’s macOS and Microsoft’s Windows. (In the software world, there’s a third, Linux, which we’ll get to).

However, in the early stages of computer development, there were many competing operating systems, created by companies and universities. Back then, operating systems were closely tied to the hardware they ran on, and one of Unix’s notable achievements was its portability across hardware. This led to its rise in popularity and ultimately, its adoption into a standard known as POSIX.

Linux was another operating system of the time, founded on [different ideological principles](https://en.wikipedia.org/wiki/Richard_Stallman), but largely similar from a technical perspective, and even more so after the POSIX standard was introduced.

Today, these operating systems live on in server environments (Linux) — where the operating system has a significantly different goal than consumer focused OSes — or as the original roots for the macOS operating system.

As an artifact of its time, C is a *low-level* language. If you imagine computers as a stack of technologies built upon each other, the very bottom layer would be the physical processor, and the top level the GUI that a user interacts with. C operates lower this stack (closer to the hardware level) than other languages in this guide.

Being a low-level language means exposing aspects of a computer that are abstracted away in other languages, such as manually managing a program’s memory.

**Memory management**

Memory management is deals with storage of the information (variables, etc.) that a program produces while operating. In some languages, declaring a variable automatically prompts the language to automatically create space for and remember the location of that variable.

C offers no such luxuries.

Because C intentionally doesn’t try to do much for your program, it also doesn’t get in the way of things you’re trying to do. This makes it ideal for writing highly optimized or space efficient code, since the programmer can eliminate unnecessary margins. It’s sort of like walking into a friend’s messy bedroom that has their belongings strewn everywhere, but somehow they always know where everything is.

C’s ability to manipulate low-level constructs makes it the ideal candidate for *systems programming*. Systems programming refers to creating software for other software to use, rather than creating applications for the user directly. Examples include implementing compilers for other programming languages, creating operating systems, and implementing databases.

## **Go**

Go is modern programming language developed by Google, based on C. In a sentence, it’s a modern take on C. From [Wikipedia](https://en.wikipedia.org/wiki/Go_(programming_language)):

> *The designers were primarily motivated by their shared dislike of C++.*

Go is typically used in places where C would also be appropriate. A large part of its benefit — having been developed in the modern era of software engineering — is its emphasis on safety, along with some modern syntactical conveniences.

**Safety**

When working with low level languages, the programmer must be careful in some of their most basic operations. For example, C will let you write code that overwrites arbitrary portions of memory, potentially corrupting your own program, or worse. The ability to directly manipulate memory is a double-edged sword. This is in addition to all the other standard perils of any computer program, such as missing error cases or having mismatched assumptions around the structure of data.

Safety refers to built-in guardrails of a language that either highlights or prevents a programmer from undertaking these destructive operations.

Modern languages like Go have a different attitude than older languages. While earlier languages were pragmatic and comprehensive by necessity, modern languages tend to be more opinionated on various aspects of programming. Niche languages can be created, some even [just for fun](https://github.com/samshadwell/TrumpScript) (this link is worth the click).