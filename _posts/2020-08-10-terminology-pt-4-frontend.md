---
id: 316
title: 'Frontend Development'
date: '2020-08-10T18:43:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=316'
permalink: /terminology-pt-4-frontend/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

#### **Software Engineering Terminology Part 4**

*This is part of a multi-part series of software engineering terminology explainers for product managers.*

#### **Concepts Explained:**

- **GUI**
- **Native apps**
- **Cross-platform**
- **Responsive**
- **Breakpoints**

Remember how we talked about early computers just being [terminals](https://www.pmtechlessons.com/terminology-pt-1-daily-coding)? The counterpart to a text-based terminal is a graphical interface for the user, or **GUI** (“Graphical User Interface”, pronounced “gooey”). A GUI refers to the visual components of an application, and almost every consumer-facing product has one.

Facebook’s Newsfeed? That’s a GUI.

Gmail’s compose box? That’s a GUI.

The arcane menu system on your smart TV? That’s a GUI.

GUIs are expected by default in products today, so we need a more specific set of phrases to differentiate them.

The most obvious line to draw is mobile apps vs. desktop. Colloquially, mobile apps are called **native**, since they are native to the platform, as opposed to web apps, which run in a browser and not directly on the platform itself.

Native apps are not accessed through a web browser; they’re downloaded from their respective app stores. They have access to the system-level APIs that the platform (iOS or Android) provides that web apps don’t get access to. They are written with different frameworks and programming languages than web apps, and typically have a dedicated team for each platform.

An growing trend is to develop **cross-platform** code that is written once and can be run on multiple platforms, including React Native, Xamarin, and Flutter. These frameworks do allow for code reuse, but are a relatively new category that’s still working out some kinks, and in the end, some features still require native code to work properly.

Web apps, on the other hand, aren’t tied to a specific platform and therefore need to handle all platforms. This mostly means accounting for different input methods (touch vs. keyboard/mouse) and screen sizes (from a smartphone up to a desktop computer). We describe a web app’s ability to handle these variables as its **responsiveness**. In most cases, this involves making sure the UI has the appropriate layouts for each screen-size breakpoint. **Breakpoints** are predefined dimensions that serve to delineate different categories of devices, commonly smartphones, tablets, laptops, and desktops. Different UI paradigms are deployed to make the most effective use of space for each form factor.

Many front-end libraries have built-in handling for responsiveness, but you should always check with your devs and make sure you know how each breakpoint is handled. When modifying or launching new features, don’t forget to evaluate the feature on all form factors, not just the one you use.

*Putting it together*

Modern apps all have **GUIs**, a graphical interface for the user. GUIs are built differently depending on if they’re **native** vs. web apps. Native apps are custom to the platform, but increasingly **cross-platform** frameworks are emerging to unify the code. On web apps, we need to handle all screen-size **breakpoints** through our app’s **responsiveness**.