---
id: 380
title: 'Why Are M1 Macs So Fast?'
date: '2021-04-26T19:09:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=380'
permalink: /why-are-m1-macs-so-fast/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

I recently bought an M1 MacBook Air, and it is [**fast**](https://appleinsider.com/articles/20/11/17/m1-benchmarks-proves-apple-silicon-outclasses-nearly-all-current-intel-mac-chips). The key component is its M1 ARM processor, created by Apple. Over the past few years, Apple’s custom-built processors for its iPhones and iPads have been consistently increasing in performance, bordering on high-end desktop performance. With its M1 laptop-class processor, Apple finally met and far exceeded the performance of existing Intel processors.

This article goes back to the roots of PMTL and will explain, in completely non-technical terms, *why* Apple’s M1 is so fast.

## **What Makes a Processor Fast?**

The M1 is fast. In common benchmarks, it beats out almost every existing Intel-based Mac.

A “fast” processor is simply one that can perform more operations in a given amount of time. Obviously the type of operation matters but fundamentally, it’s just about getting more shit done.

There are two ways to do this:

- Do each thing faster
- Do more things at once

- - - - - -

## **Do Each Thing Faster**

Up to a point, you can make a processor go faster just by making it to go faster. There are physical, hardware-based improvements that contribute to this.

**Clock Speed**

Represented in hertz (e.g. 3.2GHz) — which literally means [“times per second”](https://medium.com/swlh/what-does-gigahertz-ghz-actually-mean-c72151da6a1d) — a computer’s clock speed is its definition of time. The number defines how many operations it can perform in a second. Increasing its clock speed is like hitting fast-forward on time — it just goes faster.

There are physical limitations on this however, including the amount of heat produced, and a lower-bound on how much space we can leave between transistors, and unfortunately we’re starting to run up against their practical limitations.

So, having a “fast enough” clock speed is necessary, but not sufficient for a fast processor, and it’s not the unique reason why the M1 Macs are fast.

**Coprocessors**

You’ve heard of CPUs vs. GPUs right? Very reductively, a CPU can do everything, while a GPU can only do graphics things, but it can do them faster than a CPU can. It’s just specialization.

Apple has been slowly taking this concept further. Below are some (largely marketing) names of specialized processors they’ve added over the years:

- Secure Enclave (encryption)
- M-series Motion Coprocessors (accelerometers)
- Neural Engine (AI and ML)
- U-series Ultra-wideband radio (no use case yet)

In the M1, they’ve doubled down on this strategy, with specialized coprocessors for:

- Image Processing
- Digital Signals (e.g. music decompression)
- Video Encoding

Taken in total, the M1 has a lot of specialization, which means it can outperform a general CPU on a wide variety of specific tasks. These focus areas are specifically chosen by Apple with knowledge of what their software will be asking their processors to do. Apple can built the exact processor they need, instead of having to hope that a general CPU is good enough at those specific tasks.

- - - - - -

## **Do More Things At Once**

Multi-core processors have existed for a while. Having more cores (core = the unit that actually performs operations) in your processor will allow it do to execute more operations at once and indeed, almost all modern processors have multiple cores, often 4 or more.

Unfortunately, having multiple cores requires having specific software that can take advantage of them all at once (“parallel programming”) and in short, this is both difficult to do right, and also not applicable to all types of software.

So like a fast clock speed, having multiple cores is necessary but not sufficient for having a fast processor.

Instead, Apple’s M1 relies on “Out of Order Execution” to “do more things at once.” To explain, let’s set that phrase aside and dig into another buzzword, ARM.

- - - - - -

## **ARM**

For our purposes, you can think of ARM as a programming language for the processor. The other option is called “x86”, and is what Intel and AMD use.

Just like actual programming languages, ARM and x86:

- Have fundamental design differences that lead to different dis/advantages
- Are not compatible with each other

The latter is why it’s such a big deal that Apple switched *from* Intel (x86) *to* its own ARM processors. They’ve done a [ton of work](https://screenrant.com/apple-rosetta-2-explained/) to make the transition smooth and unnoticed by end users.

The former is why their own processors are so much faster.

- - - - - -

## **Layers of Abstraction**

Computers are layers of abstraction piled on top of each other. Unfortunately, abstractions are [leaky](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/), meaning that while how a system does something *shouldn’t*matter, in practice it does.

The purpose of a programming language is for the programmer to express a series of tasks to be done, then translate those tasks into a more basic format that a lower level system can understand. A compiler takes code from a (human) programmer and turns it into assembly (code for the processor). An ISA (which is the generic term for ARM and x86) turns assembly into actions within the processor.

Theoretically (with a non-leaky abstraction), how fast a processor can execute its operations should depend only on the characteristics of the processor, not on the instructions its given. Unfortunately, a divergent design decision between ARM and x86 has leaked through.

Remember that

> An ISA turns assembly into actions within the processor

These actions are represented by “instructions”, which are small pieces of data that the processor reads.

The abstraction that leaked through:

- x86 instructions don’t have a fixed length. They can be as short as 1 byte, are commonly 2-3 bytes, and can go up into the tens of bytes.
- ARM instructions are all 4 bytes long

- - - - - -

## **Back to Doing More Things At Once**

Earlier we stated

> Apple’s M1 relies on “Out of Order Execution” to “do more things at once.”

Out of Order Execution (OoOE) is the technique of looking for instructions that can be run anytime (vs. instructions that *depend* on another instruction to finish first) and executing those instructions when the processor has a spare moment. This works because not all instructions require full use of the processor. For example, reading a file from the hard drive requires the processor to kick it off, but then it’s just waiting on the hard drive to send the data. The processor can do other things while it waits.

For OoOE to be effective, there needs to be a lot potential instructions to choose from to increase the probability of finding an instruction that *can* be executed out of order and to pick the *most* advantageous instruction to execute.

This is where our leaky abstraction comes in.

In order to have a queue of pending instructions to choose from, the processor needs to separate a stream instructions into individual instructions. In ARM, this separation is dead simple — there’s a new instruction every 4 bytes. In x86, the processor needs to check every single spot (since there’s no way of knowing where the next instruction is, because they all vary in length), and then perform additional logic to figure out how long each instruction is once it finds the start of a new instruction. This is complex, and takes a while.

In fact, it’s so much easier on ARM that the M1 has twice as many “find the next instruction” separators than current top-line x86 processors.

This is why Apple’s M1, in switching from x86 to ARM, is so much faster. ARM makes it much easier to “do more things at once.”

- - - - - -

## **Implications**

The M1 is Apple’s first lap/desktop processor, Apple has a tiny share of all computers, and Apple certainly won’t be selling its processors to other manufacturers anytime soon. Because we’re only at the start of this transition, it’s hard to say definitely what industry trends will shift.

However, Intel’s new CEO just announced a [major strategic shift](https://stratechery.com/2021/intel-unleashed-gelsinger-on-intel-idm-2-0/) for the company, which has been hearing increasing rumblings in the background ever since the first Apple ARM chip rumor started.

And as long as Apple continues to deliver on its ARM performance, Microsoft’s Windows, PC manufacturers, and server chip manufacturers will be forced to find similar performance gains.

One note: execution still matters. This article addresses the most prominent feature — “Apple switched from Intel (x86) to ARM” — but even with the advantages brought by ARM, Apple’s chip design team still needed to deliver. They just also have a damn good chip design team.

- - - - - -

## **Sources**

The majority of the knowledge in this article comes from the incredibly comprehensive and accessible writing of Erik Engheim, including:

- [Why Is Apple’s M1 Chip So Fast?](https://debugger.medium.com/why-is-apples-m1-chip-so-fast-3262b158cba2)
- [What Does RISC and CISC Mean in 2020](https://medium.com/swlh/what-does-risc-and-cisc-mean-in-2020-7b4d42c9a9de_)

If you liked the concepts presented in this article, Erik’s articles will go further in depth, and have tons of links to other interesting reads as well.