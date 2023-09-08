---
id: 358
title: 'Why Technical Details Matter in Interviews'
date: '2021-02-01T19:00:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=358'
permalink: /nfc-and-interviews/
categories:
    - 'Early-Career Product Manager'
    - 'General Product Management'
    - 'Job Interviews'
    - Uncategorized
---

As an APM interviewer, one of my questions was “Design a self-driving ride-share car experience.” More often than not, the interviewee would describe some variant of “tap your phone to unlock the car”, implying the use of NFC. This is the sort of design that, at a high level, can be nodded-along to and seen as sophisticated and modern. However, without understanding the details about NFC, the interviewee will miss some obvious edge cases.

In fact, no interviewee has ever acknowledged even two of the details I describe below, let alone all of them. While this is a relatively small portion of the experience, it’s merely an example; I see the same lack of rigor in other, even more obvious situations where an awareness of how the technology functions would warrant even just an acknowledgement of the edge cases and downsides.

## The Promise of NFC

NFC — Near Field Communication — allows for transferring small amounts of data (on the order of single-digit kilobytes) between devices compatible to a standard. Since the data is well-formed, there is no need for prior synchronization, set, or special processing. On top of that, the user interface is largely physical — bring the two components close to each other (4cm tolerance, though some UI guidance rounds down and says “touch the devices”).

NFC is a simple concept, and most users’ interaction with it (Apple/Google Pay) easily conveys its strengths. Indeed, we can simply sum up the intended experience, as it relates to the interview question, as “When the car arrives, tap your phone to the door and it will unlock.”

- - - - - -

## What No One Mentions

**Power**

At the most basic level, the phone has to have power. Some devices have a “power reserve” mode to \[allow NFC access to mass transit if the phone dies\](https://support.apple.com/en-us/HT209495), but this is decidedly an OS feature, not one available to every 3rd party app.

We all assume the happy path for users, and even in our primary experience with Apple/Google pay — normal store hours, standard shopping routine — there’s no need to consider extraordinary circumstances. But ride shares cover significantly more abnormal situations — traveling, out drinking — which increase the likelihood of a dead or dying phone. What’s the offline backup?

Equally impressive to designing a slick experience is identifying and solving the new challenges that arise in a new problem space.

**Tap Surface**

Where is the NFC chip in your phone? 4cm is greater than the difference between the top and bottom of your phone, and perhaps even side to side. How will users know where to aim?

How do you design the tap targets on the car itself? Are they on all doors? What about the trunk, for the airport use case?

As familiar as \_we\_ might be with contactless payments, this is still a relatively new phenomenon for the majority of people in the US. I personally was reluctant to believe that tapping my credit card would register a payment — how will you convince users this \_totally new\_ paradigm is actually real?

**NFC != Secure**

Nothing about NFC is inherently secure. We may believe that because the primary use case is payments, but in fact an incredible amount of engineering work — including utilizing a proprietary secure hardware storage unit on iPhones — has been done to ensure its security in those applications.

While our use case is less sensitive, it’s still vulnerable to less sophisticated attacks, such as a malicious actor replacing the car’s NFC apparatus, like a gas station credit card skimmer.

**Processing**

Whose internet connection do you trust more, the car’s or the user’s? No matter where you choose to perform the processing, can you sketch the basic system design needed to validate that a car and user pair match up?

To recall the earlier section, can you outline the cryptographic needs to ensure that a spoofed device will be detected, or that man-in-the-middle attacks can’t hijack the protocol?

NFC payments exist in highly controlled environments. NFC Tags to open a website or download an app are low-risk, one-directional information transfers. This is a novel situation, with significantly increased variability and higher-than-normal stakes. While the mechanics look the same, the decisions and details need to be rethought.

- - - - - -

## Conflating Technology With its Use Cases

And finally, what about the alternatives? Bluetooth, Bluetooth LE, a pin pad and code, unlocking over the internet, are all viable options as well. At the very least, nothing about our prior conversation even alluded to the existence of alternatives, all of which accomplish the same thing, and exist in the same tradeoff continuum.

It’s easy conflate a technology with its most common use case. A more rigorous an holistic approach would be rooted in the experience you’re trying to create and the requirements it needs to meet, without being prescriptive on the details or implementation.