---
id: 320
title: DevOps
date: '2020-08-24T18:45:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=320'
permalink: /terminology-pt-6-devops/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

#### **Software Engineering Terminology Part 6**

*This is part of a multi-part series of software engineering terminology explainers for product managers.*

#### **Concepts Explained:**

- **Pipeline**
- **CI/CD (Continuous Integration / Continuous Deployment)**
- **Environments**
- **Build**
- **Deploy**

Writing code isn’t the end of the journey. When the final line of code is merged, a series of processes begin to deploy the code out into the world and ensure that everything goes smoothly. These tasks together are generally referred to as **DevOps**, a contraction a “development” and “operations”.

The basic infrastructural concept used in DevOps is the **pipeline**. A pipeline is not necessarily an explicit piece of software — it’s the concept of running a series of operations in a particular order. However, many companies use software to manage their pipelines, such as Jenkins. Conceptually, the benefits they bring are similar to [scripts](https://www.pmtechlessons.com/terminology-pt-1-daily-coding), but on a larger scale.

Pipelines are critical in enabling **CI/CD**, or *Continuous Integration / Continuous Deployment*. There are pedantic differences between CI and CD, but they’re so often said in the same breath that the differences aren’t worth discussing. The important part of both terms is “continuous”. Whenever changes are made to the code, they can immediately start making their way into production. This is in contrast to a “release” model where finished code has to wait to be released, such as in an app store where updates have to be individually published.

The majority of work within a CI/CD pipeline falls into two categories: testing and packaging. We covered testing in a [previous article](https://www.pmtechlessons.com/terminology-pt-5-tests), so suffice it to say that the entire battery of tests are run against every code change before the code is released.

The need for the second step, “packaging”, stems from the concept of environments. An **environment** refers to a particular combination of software and hardware, down to their versions. For example, the developer working on a feature has their own *development environment*: their laptop and the versions of software on it. That software probably has some tradeoffs in it, running in a mode that is less efficient, but enables easier development and debugging.

The actual code powering the app in the real world is running in a different, *production environment*. The software used should be the same, but it will have chosen performance over ease of debugging. The hardware will be industrial servers, not a laptop.

Each difference leads to a potential point of failure when translating code from the development environment to the production environment, and the CI/CD pipeline incorporates steps to both perform that translation, as well as testing to ensure compatibility.

In certain languages, code will need to be compiled into a different format for execution — just like apps have development and production environments, code has “writing” and “executing” “environments” (so to speak). Compilation is sometimes referred to as “building” the code, and the term **build** has come to represent a set of changes making their way through the pipeline. If at any point something goes wrong, we say “the build failed.”

If the build succeeds, the pipeline ends by **deploying** the code, putting it in the production environment to start serving your users.

*Putting it together*

**DevOps** refers to the **CI/CD pipelines** that deploy our code. They handle testing, as well as translating code from a development **environment** to production. Once the **build** succeeds, it is **deployed** to production.