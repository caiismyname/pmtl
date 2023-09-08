---
id: 312
title: 'Software Development Processes'
date: '2020-07-27T18:42:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=312'
permalink: /terminology-pt-2-software-development-processes/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

#### **Software Engineering Terminology Part 2**

*This is part of a multi-part series of software engineering terminology explainers for product managers.*

#### **Concepts Explained:**

- **IDE**
- **Version Control**
- **Git**

At its core, code is just text. You could technically write code in Microsoft Word or Google Docs. However, developers prefer to use purpose-built programs for writing code that offer a number of advantages. These programs *integrate* many useful functions into one *environment* for development, and hence are called **Integrated Development Environments (IDE)**.

IDEs typically offer:

- Sensible navigation of the files in a codebase, specific to the programming language being used
- The ability to run the code from within the IDE
- A debugger (a tool for running code line-by-line to help determine where a bug is occurring)
- Version control integration
- Autocomplete for the programming language, preventing tedious typing of common idioms
- Code highlighting to quickly visually parse the structure of the code
- Customization for programmers to work *exactly* how they want to

The most lightweight are those built in to the terminal (the most popular being `vim` and `emacs`) and are little more than standard text editors. Modern IDEs include Microsoft’s VSCode, JetBrain’s suite of IDEs (including IntelliJ, PyCharm, and CLion), and platform-specific IDEs like Apple’s xCode and Google’s Android Studio (required to make apps for iOS and Android, respectively).

- - - - - -

But all these tools wouldn’t be much use if the code wasn’t saved somehow.

Let’s think about the various saving paradigms we’re familiar with.

First is the standard file-save, like you would for a class paper. This would work for yourself, but what if you wanted to try out a wonky idea while still keeping a backup of your working code? You could make a copy, but keeping track of which is which quickly gets out of hand. Plus, emailing the files back and forth with teammates would be a nightmare.

We could try Google Docs style live-sharing. This solves the problem of sharing with teammates, but how do you work on different things at once? A teammate could be re-writing a component that your code currently depends on. You could again make copies, but then which counts as the “current” version, yours or theirs?

To solve these problem all at once, developers use **Version Control** tools, the most popular of which is **Git**.

The first feature is *versioning*. Versioning is just fancy saving — each time you save, you give that version of the code a name. A chronological history of all these saved versions is kept so that if at some point in the future your code isn’t working, you can look back and revert to a version that works.

The second feature is *control*. Control decides which version of the code is the “actual” code at any point in time through a process called “branching”. A branch is an abstraction that represents a different version of the code that’s being worked on. It allows team members to develop different features without getting in each other’s way with their changes. When a branch is finished, Git has special merging processes to incorporate the changes back into the main code, as well as everyone else’s branches, keeping everyone up to date.

A third, implicit feature of version control is that its code repository runs on a separate server. Every time you “save” your code (“commit, then push”, in Git terminology), it gets sent to that server. This means code lives in at least two places: your local computer, *and* the Git server, providing a backup should something happen to your computer.

- - - - - -

## Putting it together

Developers use **IDEs** to make writing code easier. They save their work and enable multi-person teamwork through **version control** systems like **Git**.