---
id: 309
title: 'Elements of Coding'
date: '2020-07-20T18:40:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=309'
permalink: /terminology-pt-1-elements-of-coding/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

- **Terminal**
- **CLI**
- **Scripting**

In the early days of programming, computers were expensive — a university could afford just a single computer. The computer was housed in a room somewhere and to access it, you used a ***terminal*** connected it. Today, the terminal is an application that accepts typed commands and performs the associated tasks, reminiscent of how we used to interact with early computers. They’re sometimes called “Command Lines” (you type a *line* of *commands*), which leads us to **Command Line Interfaces (CLIs)**.

A CLI allows a developer to operate a program from the terminal. In some cases (usually for developer-oriented tools), this is the only way to interact with a program. Most developers are familiar with the terminal, and since the terminal has existed as long as computers have, tools and [standards have been built up around how command line applications should behave](https://en.wikipedia.org/wiki/Unix_philosophy). This affords familiarity to the developer, and also allows for **scripting**.

**Scripting** is writing a small, lightweight “program” whose main purpose is to run other programs. “Program” is in quotes because scripts typically don’t have the complexity or logic of traditional computer code. Rather, they’re a series of instructions that allow a large number of tasks to be executed automatically.

Scripts save developers time by automating tedious tasks, as well as creating consistency for a given task. A shared script within a team ensures everyone performs a task the same way.

*Putting it together*

**Scripts** automatically run a series of tasks by calling their **CLIs**. Developers runs scripts and CLIs from the **terminal**.