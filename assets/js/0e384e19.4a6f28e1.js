"use strict";(self.webpackChunkinteractive_docs=self.webpackChunkinteractive_docs||[]).push([[976],{2440:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});s(6540);var n=s(4848),r=s(8453);const i={id:"why-rust",title:"Why Rust?",sidebar_position:1,description:"Why Rust on serverless, and what is this site?"},o=void 0,a={id:"why-rust",title:"Why Rust?",description:"Why Rust on serverless, and what is this site?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/why-rust",permalink:"/serverless-rust.github.io/docs/why-rust",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"why-rust",title:"Why Rust?",sidebar_position:1,description:"Why Rust on serverless, and what is this site?"},sidebar:"tutorialSidebar",next:{title:"Fundamentals",permalink:"/serverless-rust.github.io/docs/category/fundamentals"}},h={},l=[];function c(e){const t=Object.assign({p:"p",a:"a",blockquote:"blockquote",ol:"ol",li:"li",em:"em"},(0,r.R)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Are cost, sustainability and performance something you value as a developer? A system that's faster, costs less money and has less impact on our planet? Sounds like a win to me."}),"\n",(0,n.jsxs)(t.p,{children:["In his ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=UTRBVPvzt9w",children:"2023 re:Invent Keynote Dr. Werner Vogels"})," introduced the idea of ",(0,n.jsx)(t.a,{href:"https://www.thefrugalarchitect.com",children:"The Frugal Architect"}),". Quoting directly from the website, they are a"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Set of simple laws for building cost-aware, sustainable and modern architectures - Dr. Werner Vogels"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The Frugal Architect follows 7 laws and these laws are covered in depth ",(0,n.jsx)(t.a,{href:"https://www.thefrugalarchitect.com",children:"on the website"}),". These laws are:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://thefrugalarchitect.com/laws/make-cost-a-non-functional-requirement.html",children:"Make Cost a Non-Functional Requirement"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://thefrugalarchitect.com/laws/systems-that-last-align-cost-to-business.html",children:"Systems that Last Align Cost to Business"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://thefrugalarchitect.com/laws/architecting-is-a-series-of-trade-offs.html",children:"Architecting is a series of trade-offs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://thefrugalarchitect.com/laws/unobserved-systems-lead-to-unknown-costs.html",children:"Unobserved Systems Lead to Unknown Costs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://thefrugalarchitect.com/laws/cost-aware-architectures-implement-cost-controls.html",children:"Cost Aware Architectures Implement Cost Controls"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://thefrugalarchitect.com/laws/cost-optimization-is-incremental.html",children:"Cost Optimization is Incremental"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://thefrugalarchitect.com/laws/unchallenged-success-leads-to-assumptions.html",children:"Unchallenged Success Leads to Assumptions"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Clearly, cost is a big part of these laws. But as covered in the initial quote sustainability plays a big role as well. Cost can be considered to not just mean monetary cost but the cost to our planet."}),"\n",(0,n.jsxs)(t.p,{children:["Roughly an ",(0,n.jsx)(t.a,{href:"https://youtu.be/UTRBVPvzt9w?t=3720",children:"hour and 2 minutes (who's counting)"})," into Werner's keynote he discusses different programming languages and their efficiency. The headline number:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Ruby & Python are more than 50x more expensive than C++ and Rust"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For anyone who's tried to program in C++, you might recoil slightly at the first suggestion there. Re-writing entire systems into C++ might not be the most practical solution. But Rust, now we are talking."}),"\n",(0,n.jsx)(t.p,{children:'As well as giving you cost, performance and sustainability benefits. Rust is also extremely secure, gives you strong typing, memory safety and has a hype train so long that the Stack Overflow Developer Survey should really start re-branding itself to the "What\'s the second best language because we know Rust is #1 survey?"'}),"\n",(0,n.jsx)(t.p,{children:"This isn't a suggestion that you should go right now and re-write every part of your system in Rust.  It's not even that you should abandon your current development toolchain for Rust as there is more to consider in a wider organisational context than just the programming language itself. Developer skills, re-training, the simple fingers on keyboard time needed to re-write something that exists."}),"\n",(0,n.jsx)(t.p,{children:"However, if you are looking for a language that is fast, effecient, safe, and a joy to program with, then you should stronly consider Rust.  And as you start to think about building new things, Rust should be at the top of your mind. Whether you are running your application on a server, a container or using serverless technologies."}),"\n",(0,n.jsxs)(t.p,{children:["And when you couple Rust's performance and low resource consumption with serverless services that are cost you money ",(0,n.jsx)(t.em,{children:"per millisecond"})," that your code is running. Rust is tailormade for Servelress."]}),"\n",(0,n.jsx)(t.p,{children:"If you've gotten this far and not immediately running to start re-implementing your system in Rust then thank you for sticking around. What we wanted to put together with this website is a resource, a tool and a set of templates that allow you to quickly get started with bringing Rust into your serverless systems.  Some of the patterns and template are cut in a way that you can drop your own business logic and just get started.  It also contains resources and tips that we wish we had when we first started with Rust and serverless."}),"\n",(0,n.jsx)(t.p,{children:"By laying out some of these patterns and techniniques, our hope is that it will give you the ability to focus on implementing your systems in Rust, without worrying how that fits into the wider serverless ecosystem."}),"\n",(0,n.jsxs)(t.p,{children:["I'd recommend starting with the ",(0,n.jsx)(t.a,{href:"./getting-started/your-first-lambda",children:"Your First Lambda"})," tutorial first. From there, feel free to have a look around."]}),"\n",(0,n.jsx)(t.p,{children:"A quick call-out, this website isn't hear to teach you the deep internals of the Rust language. Nor is it going to teach you about serverless architectures. There are plenty of fantastic resources on the internet covering those topics."}),"\n",(0,n.jsx)(t.p,{children:"What we aim to give you, is a resource you can come back to over and over again as you start to build out your serverless Rust systems."}),"\n",(0,n.jsx)(t.p,{children:"If you'd like to contribute or noticed one of our inevitable spelling mistakes (or rogue Oxford commas) then please raise an issue on the GitHub repo."}),"\n",(0,n.jsx)(t.p,{children:"Otherwise, happy building!"}),"\n",(0,n.jsx)(t.p,{children:"James and Benjamen"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.R)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}}}]);