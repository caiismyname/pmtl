---
id: 342
title: 'Interview: Jeffrey Fabian'
date: '2020-11-09T18:53:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=342'
permalink: /jeffrey-fabian-apm-map-interview/
categories:
    - 'Conversations and Interviews'
    - 'Side Projects'
    - Uncategorized
---

### **Co-Creator of** [**APM Map**](https://apmmap.co/)

This is an interview with Jeffrey Fabian, co-creator of [APM Map](https://apmmap.co/), a site I’m sure many readers are already familiar with. Jeffrey is a full-time software engineer who helped built APM Map as a side project.

In this interview, we cover some of his technical decisions, how he handled learning new technologies, kept up motivation and accountability over the 5 months of development, and some takeaways regarding the engineering/product relationship.

Enjoy!

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><div class="nv-iframe-embed"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="675" loading="lazy" src="https://www.youtube.com/embed/S893tcvWXs0?feature=oembed" title="Interview: Jeffrey Fabian, Co-Creator of APM Map" width="1200"></iframe></div></div></figure>- - - - - -

## Transcript

Jeffrey: Hi everyone, my name is Jeff, co-ceator of APM Map, software engineer at Mailchimp, and recent college grad (last year).

**David: So Jeff made APM Map, and I wanted to ask a couple questions around how he built this, some of the decisions he made, and his experience working very closely with a PM counterpart on a two-person team to bring this project to life.**

#### **Technical decisions**

**D: The first question is, so PMTL’s audience is focused on introduction technical aspects of product management, so I was hoping you could walk us through some of your technology choices and the decisions you had to make while building APM Map.**

J: I’ll preface my answer by saying that I think most were uninformed decisions, this being a side project, something I wanted to do out of exploration and curiosity. That was the driving force from the get-go. So, part of it was “what am I familiar with?” React was an industry standard for front-end stuff, Material UI had good docs and also seemed to have a lot of popularity, enough support, and a lot of engineers like it. Gatsby, the framework which everything was built on, was just super interesting to me.

I didn’t know much about static site generation, the idea of basically having a web app, but having it be pre-built to have the speed and snappiness of a static site was really appealing. We weren’t doing anything super complicated, just wanted the resources out in the world and have them be fast and accessible. So that was the thought process I went through. Over time, it turned out to fit our needs pretty well.

**D: So you mentioned that you used a static site generator. Could you elaborate on what that means and the benefits you gain from going in that direction.**

J: This is still a fairly new concept to me, but the idea is that way back when before every site was a web app and had fully-fledged applications, it was just HTML/CSS/JS functionality. Given the bandwidth and where front-end tech was, that was really all we needed. Over time, the industry was like “whoa, we can do so much with JavaScript, we can do so much with styling, and make sites a lot more beautiful and dynamic.” And so we get the rise of React, of newer front-end technologies that brought the idea of “we are building something super powerful, but on the web it’s still something that needs to be optimized for speed”, so static site generation is a hybrid.

So we have an app and know how the vast majority of the site works before it’s even hosted on the web, let’s take advantage of that. There’s Webpack that bundles your React code in a way that builds things efficiently by understanding its dependencies. And Gatsby which can translate and organize those bundles into pure HTML/CSS/JS. Ultimately, let’s take this fully fleshed out application that offers a lot of functionality, but let’s get a lot of that logic out up front and build something that’s easily navigable and can be fast for a user experience. It’s almost like a pseudo-compiled website. It’s a web app in terms of functionality but it navigates as if it were just HTML and CSS.

**D: So you touched these concepts being new to you, and you were exploring them as you went along. Building side projects is something we like to emphasize as a way to develop your technical abilities. It’s one of the most direct and efficient ways to understand these concepts yourself. How did you approach this larger concept as a whole, as someone without experience specifically in webapps, and what did you do when you got stuck?**

J: What was nice about the upfront decisions is that these are industry standards to a large extent, and had a lot of community support. Especially with Gatsby, it has a strong open-source community, constant issues being opened, questions. So I was fortunate in that whenever I ran into a bug, it was a bug that somebody else had found at some point. I would often find myself on pages that were two, three years old, where the issue was eventually fixed or someone found a workaround.

On a more spiritual note, that’s just a day in the life of an engineer. You’ll always find some bug, some *thing* that’s like “what the heck is going on, I don’t get it.” I think on that note, some of my experience has been helpful in not immediately panicking and freaking out when it just doesn’t make sense. It never makes sense in the beginning, but you just keep going and learn as you go.

**D: Yeah, in my experience side projects had a tendency to die a death of a thousand cuts. A framework won’t compile, you can’t find the latest version of this other framework, and all these things just add up to a snowball of frustration and the feeling of “this isn’t worth it”, so it’s reassuring to hear that even a professional software engineer experiences this, and that it just comes with developing software.**

J: Yeah, and I’ll just add that a big help was having Michelle by my side, my product manager, who led the vision and thought a lot about why we were doing what we’re doing. Because if it’s just out of sheer enjoyment, frustration seems to defeat the purpose, and the project will just go in the parts bin. But having that larger goal helps bring it to life, push forward.

#### **Taking on roles**

**D: I love that you mention that, and want to explore it a little more. As you mentioned, this is a two person operation, with you taking on the more engineering side and Michelle the product side. But as with any startup, I’m sure there were lots of tasks that bled over your “defined roles”. I’m curious to know what sort of things did you take on that you didn’t expect? What elements of running this project as such a lean team, found the hardest?**

J: I mean, it was definitely a super flexible role definition. What I was most surprised at was my role as a pseudo-designer. At my day job, I’m used to designs being fleshed out and thought through, “here’s what they look like”. I don’t do much front-end work professionally, but the bits that I have have just been reverse engineering with your eyes. But for APM Map, I had to make decisions about “how do I want this to look”, “why am I designing it in this way”, and that ties back into the cross-functional product *and* engineering side. What’s easy, what’s hard, why would we even do this in the first place, is it useful?

Being so close to the code, seeing how things move and shift, I basically had a designer’s eye as I was going through it. There was always an underlying question of whether it was worth it. Sometimes — Michelle can attest to this — I would be like “this is so cool and animated!” but it didn’t do much for a feature set, and would end up like “oops, spent a little too much time on that.”

#### **Feature creep**

**D: Designs are always something where we start assuming that just because we’ve seen a lot of them, we know how to generate them but when the task comes, it’s a totally different challenge.**

**Pivoting back to the engineering side, you were basically the entire engineering team whereas in a larger company, there’re a couple roles that you’d play: tech lead, engineering, scrum manager. What advice do you have for someone in a one-man operation, rolling all these roles into yourself and having to make all these decisions. How do you balance those conceptual responsibilities?**

J: So this is a two-part answer: how do I manage that within myself, and how do I manage that with another person.

I would summarize it as finding the balance between dreaming and building. I am the type of person who can’t be thinking about ideation if I’m building something. Those are two very different parts of my brain, and the context switching would drain me more than the actual doing. I had a schedule that worked for myself. Ideation was important and you don’t want to miss an opportunity to take things to the next level, but it’s also distracting. Something about building, you just need to get in there, zone in, and figure out the bug so you can actually make the thing come to life. So, being cognizant about that. It’s basically my way of saying “feature creep”.

I personally love the term “minimum *loveable* product”. I love it because I think viability is almost too constricting, especially if you’re invested and passionate about what you’re building. It’s like “ah, it doesn’t matter if it’s viable or if I can technically ship it. I don’t *love* it.” That was an important thing that Michelle and I had to balance as we were going through the ideation, some of the cool ideas.

Being explicit about which mode you’re in helps with moving forward but not closing all the doors around you.

**D: Feature creep is a super common affliction with side projects, where you don’t have as strict business goals or product requirements as in a work setting. It’s easy to go crazy with things like animations as you said, but if the goal is to build and launch a product like you did, it does get in the way of priorities and timelines.**

**You mentioned having these two concrete mindsets that you adopt. Did you have any other techniques that kept feature creep in check as you went through this process — how long was this overall process?**

J: Building and thinking through stuff, probably 5 months.

**D: That’s a long time, even at a larger company scale. So how did you manage that over the entire time?**

J: It was tricky because we both had too much on our plates. In theory, you can ideate and optimize for what’s important and prioritize for months, know and understand the business value. On my end, I talked about what I would want to build, what’s easy, feasible, better.

What helped manage the whole thing was creating really concrete milestones, because I was kind of skeptical about it at first, but being like “This is MVP insofar as this is something we feel is complete. Maybe not something we share out, but is a ‘thing’ that we can recognize.” And then we had a soft launch, a waitlist, for people to generate interest and know what APM Map is. Even though the full launch wasn’t until the third month, it help having those in between months and kept a tight loop between me and product, reminded me of what the value we’re building was, and gives you that checkpoint to give yourself a break.

I’m really hard on myself in that I want it to be perfect, right? But it will never be perfect and if you want that, you’ll never ship it. That’s the reality of it, so the more we had some concrete next step, the more I was willing to just say “screw it, let’s ship it.” Like bubbling in the last answers before turning in a test — whatever’s done is done.

But realistically you have multiple chances to iterate and make it better, which feels great because you’re not actually done and you do have space for these other things. It took us 5 months to bring this to life but it was always kind of living the whole time. We were always paying attention to it.

**D: It’s interesting in how some of the phrases you used mimic what we’re used to in our work lives. You mentioned releases, checkpoints. I think sometimes we have this negative reaction that all this process and bureaucracy at work, it’s pointless, I hate it. But left to your own devices, we still revert back to some of them. There is some value in having these defined roles, steps, process to rely on.**

J: Huge plus one to that. We didn’t have daily standups or anything, so it didn’t get in our way, but it was good to have a living document that we’re commenting on. Keep each other in check. Process isn’t terrible, but I am tired of it most of the time though.

#### **Working with a product manager**

**D: So as we’re nearing the end, I wanted to ask what have you learned from working so closely with a product counterpart? From an engineering perspective, what is desireable and effective coming from a product manager?**

J: So in my experience working with a couple PMs, both professionally and in this case, it always comes down to communication. Being clear and effective. And as an engineer, getting specific about what the thing you’re talking about is. That’s everything for me. Being so close to the ground, seeing the code and what’s being changed — it’s only a little frustrating, but also confusing if product comes and tries to communicate an idea that’s really loose and can mean 50 different things to an engineer.

You can’t just say “homepage”, there’re 50 different parts to the homepage. A trivial example, but that’s super key, being able to communicate. It’s something that’s especially important in the day-to-day, describing something in the feature set and why it’s important, means getting to the heart of it and being precise about what’s being said.

**D: Everyone says communication is important, but no one breaks it down. I think precision and accuracy is a great way to put it. I’ve had the same example in my own work, and we have these weird, unexpected results because of it.**

J: And this is something I’ve learned in my professional life. It wasn’t really a problem for APM Map, but trying to be more descriptive than you are prescriptive. Saying the value, what you’re trying to achieve, and leaving the potential avenues for how something’s going to be built as open as possible. If product’s saying “this is the feature we want”, engineers and designers, we’re creative people, we’ll find some way to go about it.

D: That’s a great way to put it, and a great place to end. Just one last question, would you want to be a PM?

J: *\[laughs\]* I think I would. I always knew in the back of my mind, I wasn’t someone who was just “leave me alone, I just want to keep my head down and code”. I enjoy the focus time but I think I do love the role of the “product engineer”, being intimately tied to what you’re building and being creative about it, and in some way is really what a PM does. So yeah, why not. I’m not there now, but in another life, maybe.

- - - - - -

A huge thanks to Jeffrey Fabian for doing this interview, and to him and Michelle for creating [apmmap.co](http://apmmap.co/)! For those who haven’t seen it yet, APM Map is your one-stop destination for navigating your APM recruiting journey. Discover resources on everything from finding APM programs to acing your final onsite interviews — all with the help of our incredible mentors.

Jeff is also writing bi-weekly newsletter issues for [Second Generation](https://secondgen.substack.com/about) where he shares his evolving thoughts on wealth, and how to understand it, with first-generation college graduates in mind. Subscribe at <https://secondgen.substack.com/about>