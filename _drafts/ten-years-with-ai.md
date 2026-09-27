---
layout: post
title: "Ten Years of Working With AI"
description: "From training neural nets by hand to designing the room agents work in, and the stack I use now"
tags: [technology, design, engineering, artificial intelligence, work]
permalink: "/blog/ten-years-with-ai"
---

<!--
Title options:
1. Ten Years of Working With AI
2. From Autoencoders to Agents
3. Glue, Joinery, Cathedrals
-->

I first got hands-on with training neural networks through Kadenze, an online learning platform for art and creative technology. I joined its founding team as a designer in 2014, at the end of my second year of design school at CalArts, and Parag K. Mital came on as Director of Machine Intelligence around the 2015 launch. After I graduated in 2016, I took his course: *Creative Applications of Deep Learning with TensorFlow*.

Ten years later I spend most of my day directing those networks' descendants, several at a time, and designing the room they work in. This is a note on what changed in between, and on the tools I use now, phase by phase. The stack will date fast. The phases won't.

{% include soft-break.html %}

## Learning the Machinery

The course was Python 3 in Jupyter notebooks on an early TensorFlow. One of the first exercises has a network learn to paint a photograph: feed it pixel coordinates, let it guess a color for each, and over many rounds of gradient descent a gray smear resolves into a picture. It's still the cleanest demonstration I know of what these systems do. They learn a function from examples, and you watch the function get less wrong. From there it went deep fast: autoencoders that squeezed an image into a handful of numbers and rebuilt it, Deep Dream run through Google's Inception until every cloud sprouted dog faces, style transfer on Oxford's VGG, a DCGAN, and a character-level RNN that learned to write text with the cadence of English and none of the sense.

I kept at it on my own time. The last classical network I trained by hand came out of the 2020 lockdown, when walks were the only reliable way out of the house and Derrick Schultz's [Artificial Images](https://www.youtube.com/@ArtificialImages) courses were the best school going for artists who wanted to train their own models. For months I photographed organic textures on those walks, built a dataset of about 200 images, augmented it, and trained StyleGAN2-ADA on it in Google Colab. Then I pushed the results through convolutions, interpolations, and style translation until they became abstract video art. [TK LATER: maybe a collage of dataset photos — ask Stedman]

None of that work was for a paycheck. What stuck was a feel for the machinery: a model is a compressed statement about its data, its latent space has a geography you can walk, and the most interesting outputs live in the interpolations between things it has seen.

{% include soft-break.html %}

## Are Right, A Lot

In the summer of 2021 I joined Amazon's Alexa Voice Services team, where I led design for emerging voice and multimodal technologies. Onboarding was the first time I heard "agent" used the way everyone uses it now: a program that pursues goals on a person's behalf, with some autonomy.

Most of the industry was racing for sole category dominance, one assistant to rule every device. AVS bet on a hierarchy of agents serving one person. You can see that bet in Amazon's public programs. Alexa Custom Assistant licensed the underlying technology so partners could build agents of their own, and the Voice Interoperability Initiative worked toward agents that could share a device, scope themselves by context, trade information, and hand a task to one another when a request fell outside their lane.

Part of my job was designing what that bet looks like on a screen. On TVs from vendors like Vizio, Samsung, and LG, Alexa had to coexist with the manufacturer's own assistant in the same interface. I designed [multi-agent attention systems](/work/amazon-alexa) for those shared devices: how a person picks which agent they're addressing, how each agent keeps its brand identity without muddying the shared context, who gets the attentional real estate and when, and how cooperating agents hand off control mid-task. It was orchestration design before most of the industry had a word for orchestration.

Amazon has a leadership principle called Are Right, A Lot. In 2021 I had no way to know whether the multi-agent bet would be right. I did know it was rewiring my intuitions about multimodality and orchestration, and I kept them.

{% include soft-break.html %}

## Around the Craft

The line through my decade runs through architecture. On one side sit GANs, CNNs, and RNNs, things I could open up and train on a laptop. On the other sit transformers and the large language models built on them.

I crossed that line in a classroom. ChatGPT launched in late November 2022 while I was in Amazon Technical Academy, the company's full-stack software engineering program. I've been a web developer my whole career; the academy was a chance to deepen the fundamentals under that work—and it put me in a room full of engineers the week the ground moved. Within a couple of months, the corporate AI usage policies and warnings had arrived. I couldn't resist moving to San Francisco to be closer to the action for much longer; my lease was signed by April.

That winter the models took on the work around the craft: research, ideation, organization, validation. They carried big chunks of prototyping and implementation, too. Core design stayed mine. A model could write a plausible component, and it could not tell you whether the component was any good.

{% include soft-break.html %}

## The Center of Everything

Late 2025 moved the line again. Google shipped Nano Banana for images and Anthropic shipped Claude Opus 4.5, and models moved from the edge of my work to the center of all of it. I started rebuilding nearly every way I use a computer around them.

The multi-agent future showed up on schedule, and in person. During OpenClaw launch week, the first week of February, what felt like half of San Francisco's developers piled into one building on Market Street for events I helped organize at [Frontier Tower](/blog/frontier-fitness-center). A truly general harness had arrived, and a building full of engineers grokked the hierarchy of agents in about a week. The AVS bet was five years early, and it was right.

Long-running engineering work kept getting better. Design quality from generated code lagged well behind it. In January I wrote [Seeing Like a Designer](/blog/perceptual-reasoning-gap) to name why. Models can look at a render and describe it, but they lack a vocabulary of visual axes (weight, scale, contrast, texture) to judge the render against intent, and the same missing vocabulary means you can't reliably steer them. Give a model those words and "this looks wrong" becomes a judgment it can make and "more geometric" becomes a direction it can travel.

Around the same time, Paul Bakaus started [Impeccable](https://impeccable.style), which calls itself "The missing design vocabulary for agents." I met him by chance at a health conference. I overheard him describing it, started asking questions, and he gave me an extra hour one on one: a full onboarding, plus a long detour through work history and hobbies. He'd already read the essay. It named the problem he was building against. Impeccable became the workhorse of my design engineering, and it anchors most of what follows.

{% include soft-break.html %}

## The Stack, Phase by Phase

Here is the stack, organized by where it sits in the life of a project. The phases hold whether I'm building a token system or a landing page. The tools change faster, and in one direction: the stack gets simpler every time the models improve.

### Capture

Everything starts as context, and I'd rather not be the one who remembers it. Conversations get captured automatically. Face-to-face ones become [Bee](https://bee.computer) transcripts; virtual meetings become screenpipe, Gemini, or Grain transcripts; cron jobs on an always-on Mac Mini pull all of it into my Obsidian vault many times a day. Texts, email, and my Google accounts are reachable through MCP servers and CLI tools, so an agent can read them when a project needs them.

Visual references move differently. On my laptop, screenpipe watches me browse for inspiration and writes a description of the session, with URLs, into that day's note under the right heading. On my phone, references go into an album in my photo cloud. In theory an agent can reach that album through MCP; in practice I pull it down on demand into a local folder inside the agent's filesystem scope for that project. Conversations flow in on their own. References get summoned. Either way I can annotate later, through an agent on my phone or laptop or in Obsidian on any of my devices.

### Framing

Some ideas start as a hand-typed note, a page of paper, or a whiteboard. All of them get pulled early into a shaping session with an agent, usually Claude Code in the terminal or the mobile app, running custom skills I've built for the purpose. The one I use most is `/socratic`, which draws my thinking out one question at a time until something concrete falls out; `prompt-master` handles the prompts I'll hand to other tools. This post came out of one of those interviews.

### Exploration and build

The runtime is herdr inside Ghostty: a terminal multiplexer where I run several Claude Code sessions side by side, each on its own thread of the problem. It's closer to managing a small studio than to typing.

I used to hand longer, more autonomous threads to Conductor. I do that less now, because herdr plus Claude Code's native subagents and worktrees cover the same ground with fewer moving parts. Devin is the IDE I open when I want my hands on the code, and that happens rarely (less every month). Some edits are faster to type than to explain; some agent misses are stubborn enough to fix by hand; sometimes I need to read the code to understand it.

### System design and polish

Impeccable runs inside Claude Code and gives me control at the level a designer works: spacing rhythm, type, contrast, the difference between a system and a pile of components. Four things earn its place: its moveset of design operations; a DESIGN.md spec with a JSON sidecar, which Impeccable interprets more reliably than any spec Claude rolls on its own or pulls from a generic skill; audits that catch AI slop and contrast failures, which is where fluency shows first; and live iteration in the browser. My own site runs on it.

### Review

Review depth scales with what a pull request touches, and the range is wide. The concrete case is a visual component. A live localhost instance is usually already open in my browser, so I check it with my own eyes. If the change is small, passes the eyeball test, and shows no visual regressions, it probably merges without me opening the diff. I don't need to hand-review an agent's pass on a button component if it lints, the tests pass, and it looks and works like it should; with today's tools, that's a waste of time. The project's agent loops catch anything strange through tests, or clear it out later through optimization passes.

### Docs

The first reader of my docs is an agent. The agent also wrote them with me, and it's probably the primary author.

{% include soft-break.html %}

## Glue

The frontier news I've been chewing on for the last two weeks is Jev. TypeSafe AI came out of stealth on September 15 with Jev as its first model, and it calls Jev a System One Model (a nod to Kahneman's fast, intuitive System 1), built to make fast, sensible, consistent decisions that software can use directly. I first heard the founding hypothesis a year earlier, on a hike with a TypeSafe engineer.

It's a wise bet. Clamping the degrees of freedom in how information flows through a model, moderately, buys outputs that are predictable without being fully deterministic. The cost and speed gains are real, and they're the least interesting part. A decision model like this makes intelligence better glue: the layer that binds a widening range of inputs to common-sense outputs.

Paul has a similar ambition for Impeccable's roadmap, a move from next-token prediction to what he calls "next step prediction." My read is chained decisions that compose whole units of work, which agents execute with growing autonomy, without taking the creative voice away from the designer.

Better glue means better joinery, walls, and eventually cathedrals. Capture a wider dynamic range of multimodal input, return outputs that make sense, and let that compound. Somewhere up the chain the experiences start to seem like they transcend sense altogether, the point at which Clarke said technology and magic stop being distinguishable.

That optimism became a research proposal [TK: proposal link] for the [Thinking Machines interactivity research grants](https://thinkingmachines.ai/news/interactivity-research-grants/), co-written with [Jem Gold](https://jem.computer), who has researched and built in this field for more than ten years. Her work and words shaped a good part of my path. We wrote it because the future excited both of us, and it's good to have a kindred spirit, and a mentor I regard this highly, willing to build it with you. [TK: how to frame the outcome]

In 2016 I watched a network learn to paint one photograph. I'm still watching functions get less wrong—now I get to decide what they're for.

Do you have thoughts on this post? I'd greatly appreciate your feedback. {% include snippets/twitter-dm.html %} and let's talk shop.
