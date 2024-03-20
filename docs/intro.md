---
id: why-rust
title: Why Rust?
sidebar_position: 1
description: Why Rust on serverless, and what is this site?
---

Are cost, sustainability and performance something you value as a developer? A system that's faster, costs less money and has less impact on our planet? Sounds like a win to me.

In his [2023 re:Invent Keynote Dr. Werner Vogels](https://www.youtube.com/watch?v=UTRBVPvzt9w) introduced the idea of [The Frugal Architect](https://www.thefrugalarchitect.com). Quoting directly from the website, they are a 

> Set of simple laws for building cost-aware, sustainable and modern architectures

The Frugal Architect follows 7 laws and these laws are covered in depth [on the website](https://www.thefrugalarchitect.com). These laws are:

1. [Make Cost a Non-Functional Requirement](https://thefrugalarchitect.com/laws/make-cost-a-non-functional-requirement.html)
2. [Systems that Last Align Cost to Business](https://thefrugalarchitect.com/laws/systems-that-last-align-cost-to-business.html)
3. [Architecting is a series of trade-offs](https://thefrugalarchitect.com/laws/architecting-is-a-series-of-trade-offs.html)
4. [Unobserved Systems Lead to Unknown Costs](https://thefrugalarchitect.com/laws/unobserved-systems-lead-to-unknown-costs.html)
5. [Cost Aware Architectures Implement Cost Controls](https://thefrugalarchitect.com/laws/cost-aware-architectures-implement-cost-controls.html)
6. [Cost Optimization is Incremental](https://thefrugalarchitect.com/laws/cost-optimization-is-incremental.html)
7. [Unchallenged Success Leads to Assumptions](https://thefrugalarchitect.com/laws/unchallenged-success-leads-to-assumptions.html)

Clearly, cost is a big part of these laws. But as covered in the initial quote sustainability plays a big role as well. Cost can be considered to not just mean monetary cost but the cost to our planet.

Roughly an [hour and 2 minutes (who's counting)](https://youtu.be/UTRBVPvzt9w?t=3720) into Werner's keynote he discusses different programming languages and their efficiency. The headline number:

> Ruby & Python are more than 50x more expensive than C++ and Rust

For anyone who's tried to program in C++, you might recoil slightly at the first suggestion there. Re-writing entire systems into C++ might not be the most practical solution. But Rust, now we are talking.

As well as giving you cost, performance and sustainability benefits. Rust is also extremely secure, gives you strong typing, memory safety and has a hype train so long that the Stack Overflow Developer Survey should really start re-branding itself to the 'What's the second best language because we know Rust is #1 survey?'... Name to be worked on.

This isn't a suggestion you should go right now and re-write every part of your system in Rust. There is more to consider in a wider organisational context than just the programming language itself. Developer skills, re-training, the simple fingers on keyboard time needed to re-write something that exists.

But as you start to think about building new things, Rust should be at the top of your mind. Wether you are running your application on a server, a container or using serverless technologies.

And when you couple Rust's performance and low resource consumption with serverless services that are cost you money *per millisecond* that your code is running. Well, you have a match made in heaven.

If you've got this far and not immediately ran to start re-implementing your system in Rust then thankyou for sticking around. What we wanted to put together with this website is a resource, a tool and a set of templates that allow you to quickly get started bringing Rust into your serverless systems. 

Giving you the ability to focus on implementing your systems in Rust, without worrying how that fits into the wider serverless ecosystem.

I'd recommend starting with the [Your First Lambda](./getting-started/your-first-lambda) tutorial first. From there, feel free to have a look around. A quick call-out, this website isn't hear to teach you the deep internals of the Rust language. Nor is it going to teach you about serverless architectures. There are plenty of fantastic resources on the internet covering those topics.

What we aim to give you, is a resource you can come back to over and over again as you start to build out your serverless Rust systems.

If you'd like to contribute or noticed one of our inevitable spelling mistakes (or rogue Oxford commas) then please raise an issue on the GitHub repo.

Otherwise, happy coding! 

James and Benjamen