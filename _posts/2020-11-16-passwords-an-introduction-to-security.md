---
id: 344
title: 'Passwords: An Introduction to Security'
date: '2020-11-16T18:54:00+00:00'
author: dcai
layout: post
guid: 'http://50.116.20.245/?p=344'
permalink: /passwords-an-introduction-to-security/
categories:
    - 'Technical Explainers'
    - Uncategorized
---

#### **An Introduction to Security**

The mentality of computer security is somewhat non-standard, making it difficult to empathize with when the need arises. A working understanding of the fundamental principles, along with grasping some of the common patterns on user-facing surfaces, goes a long way in preparing yourself for whatever incidents may arise (though let’s hope there are few and far between).

Passwords are a perfect introductory security topic. Every user has experience with them, and they build on some of the fundamental principles of security.

This article will take a different form from other PMTL articles. The article will be built around a series of hypothetical straw man arguments, taking an intentionally naive (but intuitive) approach. This allows for a more natural progression of ideas, as well as seamlessly addressing the branching complexity of topic.

**“What’s the core problem we’re solving?”**

Before we talk about passwords, we should first reflect on the fundamental problem that we’re trying to solve. The goal of any identity system is to 1) identify a user (i.e. tell them apart from all the other users) and 2) verify that someone is who they say they are.

**“Let’s give each user with an identifier, like username or email.”**

This solves the first requirement (identify a user) but doesn’t allow us to verify. I could type in your username or email, but that doesn’t mean I’m you.

**“Let’s require a second piece of information that only the user would know, so it can’t be guessed.”**

Great, this is a password! A piece of private information that’s kept secret from others so we can be reasonably confident that if a user knows it, it’s probably them. How would we store this secret information?

**“We’ll store it the same way we store the identifier — they can go in a database together.”**

> This is where we reach our first quirk of security-thinking.
> 
> Security engineers simultaneously build systems that are hard to break into *and* hard to make use of if broken into. You have to do your best to prevent hackers from getting in in the first place, but everything still has to be built on the assumption that eventually, hackers will get in. Building layers of protection buys you time and extra security in the event of a hack, and makes your overall security posture more robust by not relying on a single protection mechanism.

In that spirit, our response is “What if our storage is compromised? Then they’ll have all the identifiers *and* passwords.” To protect against this, we would have to make the passwords unusable even if the hackers saw all of them.

**“How?”**

If the passwords the hackers accessed were the exact same as what a user enters on our login page, then we’re out of luck. We have to store the passwords in some transformed format, so if a hacker were to enter into the login page, it would fail.

**“Then how do *we* know if a password is correct?”**

The simple system would have just compared the password a user entered to what was stored. If we transform the input, then we can’t do that direct comparison.

What we can do instead is have a pre-agreed upon set of transformations, then store the output of that transformation. When a user logs in, we apply those transformations on the inputted password and compare the output to what we have stored.

**“So for the transformation, could we just reverse the password string?”**

This is on the right track, but that transformation is a bit too simple. If hackers got in, they could un-reverse the passwords and they’ll be back in business. We need a transformation that is difficult to perform “backwards”.

**“What about storing the length of the password?”**

Better! This is certainly far more difficult to reverse, but on the flip side it doesn’t provide us much validation. If all we knew about the correct password was that it had 10 characters in it, any 10 character input would suffice, and our accounts could be hacked without even getting into the passwords database. We need less overlap between inputs that map to the same output, to still tell them apart.

**“I’ve heard about ‘hashing’…”**

Imagine you were to write out a list of every single possible password, make a copy of that list, then randomly draw lines connecting an entry from one list to an entry on the other.

That would be the perfect “transformation” for our purposes. We could designate one list the “pre-transformation” input and the other list the “transformed output”. To perform the “transformation”, we would look up the input and find the corresponding output.

This would be guaranteed to have a unique output for every input, and since the connections are totally random, there’s no way to reverse-engineer what the input is based on the output.

This is the role that a **hash function** serves. It’s a mathematical function that will return a random output for every input. Mechanically, it computes the outputs on the fly instead of having a massive, pre-generated list, but conceptually it works the same as the “two lists with connecting lines” solution described above.

A hash function’s security comes from being difficult to reverse. We can illustrate this property with a simple example:

- Imagine you’re given two paints of different colors to mix together into a third color
- Doing this is very easy
- Now imagine you’re given that resulting color, and told to find two colors that mix together to form it
- This will require lots of trial and error, and there’s no way to confirm if the two colors you found were the original two colors.

A hash function operates on that same principle. By making it time consuming and difficult to reverse (sometimes to the point where we don’t even know how to reverse it), it becomes infeasible to try and compute the original input given a hashed output.

A couple notes:

- There is a set of well-known, published hashing algorithms. These often come with the ability to “seed” it with a random input so different instances of the same algorithm don’t all produce the same output.
- The specific mathematics powering hash functions are complex and obtuse, so we will take them at their word.
- Actually, we don’t have to take them at their word because the academic and computer security world actively attempts to poke holes in each new hashing algorithm (i.e. find ways to reverse it). This serves as the basis of our trust in these hash functions.

*Tying this back to our passwords case study*

By storing the hashed passwords, we can:

- Verify a user’s identity by “hashing” their inputted password and comparing the output to the hash we pre-computed when they first set their password.
- Protect against a password breach because the hackers would only see the hashed outputs. This may be obvious, but putting the hashed output into the password box on a login page would hash it *again*, getting a new output that still doesn’t match the original hash.

A hacker who has access to the hashed passwords could still try and figure out what the original inputs were by trying an input and seeing if it matched one of the outputs, but trying to run that against a password of reasonable length would take quite some time:

- Let’s assume a 10 character password made up of a-zA-Z and 0-9. That’s 62 options at each position.
- 62^10 = 839,000,000,000,000,000 options to try
- With even longer passwords and stronger (aka slower) hash functions, the hacker will be waiting for quite a while before they can break into any accounts.

> This is the second quirky concept in security.
> 
> A lot of modern computer security is based on the concept that while you *could* try all the possible solutions (brute-force), there are so many options that even with the fastest *imaginable* computer, it would take far too long (multiple human lifetimes) to try every solution.

- - - - - -

*If this is all new to you, feel free to end here. If you’re hanging on, keep reading.*

*There’s a flaw in the plan I just described.*

- - - - - -

There is one flaw to this hashing plan:

**“What if a hacker knows the hashing algorithm used and, before they attack your password database, pre-compute the hashed output of every possible password? Sure it’s difficult to reverse a hashing algorithm, but if we have an answer key of inputs –&gt; outputs, we can just look up the solution.”**

This is a valid threat, and it has a couple different names:

- Pre-compute attack
- Dictionary attack
- Rainbow table attack

This is certainly a viable way to approach the problem as a hacker, with one caveat: We can’t actually store *every* possible password. Using our above password requirements, which are mild-strength at best, a pre-computed table would take up 350 *billion* gigabytes of storage. In comparison, a high-end personal computer would have a couple thousand gigabytes of storage at best. Your phone only has a couple hundred, if you’re lucky.

There is a way around this though. People’s passwords usually are not random combinations of letters and numbers, they’re words. Sure, sometimes we substitute “a” with “@”, but these permutations are easily predictable, as are the common passwords people use (“password”, “welcome”, etc). We could simply pre-compute the hashes of this much smaller input set, which would be a lot more feasible to store.

Having this precomputed list won’t give access to *every* user, but it may cover *enough* users to make a hack worth it.

This is where salts come in.

A salt is a randomly generated string that is appended to the end of the original password *before* it is hashed. For example:

```
<pre class="wp-block-preformatted">password: letmein
salt: lijsa923nzls152s
input to hash: letmeinlijsa923nzls152s
hash output: 693a3b34c93e415fb3640e9a827b8af7
```

Every password will have its own salt, and we can simply store it in plain sight, next to the password. When a user enters their password, we can repeat this transformation (append the salt, then hash) to check for validity.

**“How does this stop a dictionary attack?”**

Remember, a hacker’s list of pre-computed hashes can only include a subset of all possible passwords, for space reasons. We know that if a hacker plans on making such a list, it’ll only contain popular passwords / english words / etc.

As long as the user’s password with the salt appended to it *isn’t in that list*, then we’ve thwarted the hacker.

By adding a random string to every password before it gets hashed, we’ve effectively made every password a random string in terms of its likelihood of being included in the pre-computed table.

If a user’s password is already strong (randomly created, and is long), then this provides minimal benefit, but if a user’s password is something like “password”, which is sure to be included in every pre-computed hash list, then we’ve now obfuscated the password enough that it won’t show up.

**“Should we be concerned that the salt is stored in plain sight?”**

Nope! With salts, our password database would contain:

```
<pre class="wp-block-preformatted">username:
    - hashed password: 693a3b34c93e415fb3640e9a827b8af7
    - salt: lijsa923nzls152s
```

It’s impossible to reverse-engineer the original input from a hashed output. Hash functions are constructed such that there’s no notion of “getting closer” — knowing a portion of the input doesn’t help. With this information, a hacker would still have to re-run the hash function against their list of common inputs, with the salt appended. By having unique salts per user, we force them to have to do this as many times as we have users, and that’ll only crack the users whose passwords appear in their lists.

This brings a hacker right back to square one — trying to brute-force their way into the passwords, negating the benefit of their pre-computed lists and making the operation infeasible in a reasonable amount of time.

**In summary:**

- Salts add random gibberish to a password before it’s hashed
- Pre-computed tables won’t include gibberish, for space efficiency reasons
- By transforming every password into gibberish, we’ve made it exceedingly unlikely for the outputted hash to appear in pre-computed hash lists
- This negates the benefit of pre-computed hash lists, and brings the hacker back to square one — a brute force attack

- - - - - -

If you feel confident in your grasp on this material, try reading [Dropbox’s blog post](https://dropbox.tech/security/how-dropbox-securely-stores-your-passwords) on how they secure their passwords.

*Additional reading from the web*

- [How to store a salt](https://security.stackexchange.com/questions/17421/how-to-store-salt)
- [How to salts prevent dictionary attacks](https://stackoverflow.com/questions/420843/how-does-password-salt-help-against-a-rainbow-table-attack)
- [How are hash functions irreversable](https://security.stackexchange.com/questions/11717/why-are-hash-functions-one-way-if-i-know-the-algorithm-why-cant-i-calculate-t)