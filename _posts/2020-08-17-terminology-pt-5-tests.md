---
id: 318
title: 'Why is Testing Important?'
date: '2020-08-17T18:44:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=318'
permalink: /terminology-pt-5-tests/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

#### **Software Engineering Terminology Part 5**

*This is part of a multi-part series of software engineering terminology explainers for product managers.*

#### **Concepts Explained:**

- **Testing**
- **Regression**
- **Coverage**

Building a feature doesn’t just involve writing code. The next step is **testing** the code. On a basic level, we want to ensure that the code we’re shipping is correct, reliable, and as bug-free as we can make it. On a small, single-feature app, maybe we could test our code changes by simply playing with the app before we release the code, ensuring our feature still works as intended. But as apps expand in complexity, this quickly becomes unsustainable. There are too many flows to test, and the permutation space quickly expands as you add more variables (user accounts, user data, previous actions, etc).

Not only that, but there are also many unseen components that need testing. Perhaps you built an internal service that supports a feature. Maybe you integrated a new database operation to support an upcoming feature. This code might not be triggered by the UI, but are still important to the app nonetheless.

> Just because something isn’t user-facing doesn’t mean it has no effect on the user.

To solve this problem, developers write tests for their code. Tests are written for a specific component within the code, and mimic the possible scenarios that could occur. By running through the scenarios and ensuring the results match what’s expected, we can ensure our new code is doing what we intended. As our codebase grows, so does our test base. At every point in our history, we have a full set of tests that describe what our code should do, so if at any point a new feature breaks an old test, we can fix that bug before we release. In other words, our codebase is prevented from **regressing**.

Testing isn’t a panacea though.

Tests are still code, and like any code, could have bugs. Sometimes the tests are wrong or forgot a case, and a bug slips through. While we don’t write tests for tests, we do want to make sure our tests stay up to date with our code, and we fix any mistakes that we find.

How well you can exercise your codebase via tests is known as **coverage**. It refers to what percentage of your code is run if you were to run all of your tests. Ideally this number is always near 100%, but certain portions may just be untestable (usually libraries, boilerplate code, or other language specific cruft). While test coverage isn’t a perfect metric (testing every line of code doesn’t ensure you caught every test case), low test coverage is indicative of a lax testing culture.

Writing tests isn’t always fun. Writing tests happens after the feature is already done. It’s yet another codebase to deal with. Like any code, it can be finicky and difficult to work with. However, a healthy testing culture is an important part of good code hygiene, and allowing the extra time for good tests to be written helps your team avoid bugs and headaches in the future.

*Putting it together*

**Tests** are scalable ways of ensuring our code does what we intend. They validate the functionality of new features, and ensure existing features haven’t been broken. We measure the state of our tests via its **coverage**, which is a simple but imperfect metric for judging how much of our code has been tested.