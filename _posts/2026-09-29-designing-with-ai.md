---
layout: post
title: "Designing With AI: Then & Now"
description: My current AI design and engineering stack and how I got here
tags:
    - technology
    - design
    - engineering
    - artificial intelligence
    - work
permalink: /blog/designing-with-ai
image: /assets/img/2026-09-29-neural-network.jpg
---

<figure class="cover">
<img alt="Neural network drawn on a cutting mat" src="/assets/img/2026-09-29-neural-network.webp" />
</figure>

## Training wheels

I first got hands-on with training neural networks through [Kadenze](https://www.kadenze.com), an online learning platform for the arts and creative technology. I joined its founding team as a designer in 2014, at the end of my second year of design school at CalArts. [Parag Mital](https://pkmital.com) later came on as Director of Machine Intelligence, and after the public launch in 2015 he added an exciting AI course to the catalog: _Creative Applications of Deep Learning with TensorFlow_. Kadenze placed real value on lifelong learning, and I took the cue; some time after I graduated with my BFA in 2016, I dug into the course to build new skills.

It's been about ten years since then. Today I spend most of my working hours directing many of those networks' successors at once and designing the environments they work in. This post captures what changed in between, the tools I use now, and what excites me about the near future of this domain.

{% include soft-break.html %}

## Just the stack, please
Here's a straightforward tool summary if you'd rather skip the post:

**Context**

- [Bee](https://bee.computer): transcribes my face-to-face conversations
- [screenpipe](https://screenpipe.com): records my screen and logs what I browse into my daily notes
- [Gemini](https://support.google.com/meet/answer/14754931) and [Grain](https://grain.com): transcribe my virtual meetings
- [Spokenly](https://spokenly.app) with [Parakeet](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3): offline dictation for talking to agents
- [Obsidian](https://obsidian.md): the notes vault every tool reads from and writes back to
- [MCP](https://modelcontextprotocol.io): lets agents reach my texts, email, and Google accounts
- [Tailscale](https://tailscale.com/): connects my always-on Mac Mini to my MacBook and phones
- [Syncthing](https://syncthing.net/): keeps my MacBook and Mac Mini filesystems in sync

**Planning**

- [Claude Code](https://claude.com/product/claude-code): my main agent harness, in the terminal and on my phone
- [skills.sh](https://skills.sh) and the [OpenClaw skills directory](https://openclawdir.com/skills): where I find open-source agent skills

**Build**

- [herdr](https://herdr.dev) in [Ghostty](https://ghostty.org): runs many terminal panes and Claude Code sessions side by side
- [Devin](https://devin.ai/desktop): the agent-friendly IDE I open when I want my hands on the code

**Design**

- [Impeccable](https://impeccable.style): design vocabulary, audits, and live browser iteration for agents
- [Nano Banana](https://deepmind.google/models/gemini-image/): most of my serious image generation

{% include soft-break.html %}

## Learning the machinery

Parag's course had me working with Python and early TensorFlow inside Jupyter notebooks. One of the first exercises taught a network to paint a photo: feed it pixel coordinates, let it guess a color for each, and watch a gray smear resolve into a picture over many rounds of gradient descent. A network learns a function from examples; the function starts as a coarse approximation of something, and you watch it get progressively less wrong over runs. It got deeper after that: autoencoders that squeezed an image into a handful of numbers and rebuilt it, Deep Dream run through Google's Inception until every cloud had a dog's face, style transfer on Oxford's VGG, a DCGAN, and a character-level RNN that learned to write text with the cadence of English and none of the sense.

I revisited neural networks as a creative tool a few years later. The last classical network I trained by hand came out of the COVID lockdowns of 2020–2021. Walks were the only reliable way out of the house. Derrick Schultz's [Artificial Images](https://www.youtube.com/@ArtificialImages) courses were the best school around for artists who wanted to train their own models. For months I photographed organic textures and plant life on those walks and built a dataset of about 200 images. I augmented it to thousands and trained StyleGAN2-ADA on it in Google Colab. Then I pushed the results through further convolutions, interpolations, and style translations to make abstract video art.

<figure>
    <img src="/assets/img/2026-09-27-nature-dataset-grid.webp" alt="Grid of twelve close-up photos of plants, flowers, and lichen-covered rock" loading="lazy">
    <figcaption>Organic textures from my walks</figcaption>
</figure>

What stuck from those side projects was a conceptual feel for the machinery: a model is a compressed statement about its data, its latent space has a geography you can walk, and the most interesting outputs can live in the interpolations between things it has seen. I've tried to keep a participatory ethic and the willingness to try things outside my comfort zone at the center of how I adapt to an era defined by AI acceleration. That's worth more than any tool I've learned to use in production since then.

{% include soft-break.html %}

## The multi-agent future

In the summer of 2021 I joined Amazon's Alexa Voice Services team, where I led design for emerging voice and multimodal technologies. Onboarding was the first time I heard "agent" used the way everyone uses it now: a program with some autonomy that pursues goals on a user's behalf.

Most of the industry was racing for sole category dominance with one assistant to rule every device. AVS bet on a hierarchy of agents serving one user or group instead. You can see that bet in Amazon's public programs: Alexa Custom Assistant licensed the underlying technology so partners could build agents of their own. The Voice Interoperability Initiative worked toward agents that could share a device and hand tasks to one another.

On one project, I designed [multi-agent attention systems](/work/amazon-alexa) for TVs from partners like Vizio, Samsung, and LG, where Alexa had to coexist with the manufacturer's own assistant: how a person picks which agent they're addressing, how each keeps its brand identity, who gets the attentional real estate and when, and how cooperating agents hand off control mid-task.

<figure>
    <video class="lazy" poster="/assets/video/2021-08-02-alexa-multi-agent-poster.webp" controls playsinline data-src="/assets/video/2021-08-02-alexa-multi-agent.mp4"></video>
    <figcaption>Multi-agent selection (Vizio and Alexa)</figcaption>
</figure>

My org also paid to fill my home with smart home tech that worked with as many assistants as I could bear, so I could dogfood Alexa while developing empathy for users in a multi-agent environment. At the time I had no way to know whether the multi-agent bet would be right, but it rewired my intuitions about multimodality and orchestration. Looking at the agents chaining workflows together on the frontier today, I'd say leadership's forecasts were sound. True to form: one of Amazon's Leadership Principles is that leaders Are Right, A Lot.

{% include soft-break.html %}

## Eating around the entrées

The near universal adoption of transformer-based model architectures is the sharpest dividing line for a decisive before/after in the arc of successive capability gains. On one side: GANs, CNNs, and RNNs, networks I could open up and train myself on rented clusters. On the more capable side: transformers and the large language models built on them, exorbitantly expensive to train with hundreds of millions of parameters (trillions now if you're counting in 2026).

ChatGPT launched at the end of 2022 while I was in paid training for full-stack software engineers at Amazon deepening fundamentals under my years of web development. Corporate AI usage policies and warnings came down from the top within a couple months. I avoided AI entirely for my training assignments because using it would have defeated the purpose of immersing myself in an environment built to practice traditional software engineering.

When it came to my personal work that winter, the models began to take on meaningful chunks of ancillary work around craft: research, ideation, organization, validation, and more. As models trained specifically on coding tasks improved, they also carried bigger slices of prototyping and implementation. Core design stayed mine. A model could write a plausible component, but it took a lot of pushing to get things over the bar in almost all cases. _The last 10% is 90%_ has never felt so true as a maxim.

On Presidents' Day weekend in 2023, I drove six hours up from Los Angeles to stay at an investor's home in Sutro Heights while he was traveling. Years earlier, he'd said a couple things that shaped my career, and now he'd offered his place so I could feel out a move to San Francisco. Young people were pouring back into the city and energy was amassing around AI.

Another guest I'd never met answered the door when I pulled up around 10 PM. I woke before dawn, swam out of the 4 AM riptides at Ocean Beach, and made the decision to relocate then and there while walking back up to the house's infrared sauna. Around the last week of February, I read the first of those corporate AI policies in that living room and felt the shape of change to come in my body. By April, I had signed a lease in Alamo Square with the guy who'd answered the door. We still live in that condo today.

<figure class="mt-100">
<div class="carousel">
    <a data-fslightbox="ocean-beach" data-href="/assets/img/2026-09-27-ocean-beach.webp"><img src="/assets/img/2026-09-27-ocean-beach.webp" alt="Ocean Beach before dawn, cypress trees silhouetted against deep blue surf" loading="lazy"></a>
    <a data-fslightbox="ocean-beach" data-href="/assets/img/2026-09-27-ocean-beach-currents.webp"><img src="/assets/img/2026-09-27-ocean-beach-currents.webp" alt="Danger sign at Ocean Beach warning of rip currents" loading="lazy"></a>
    <a data-fslightbox="ocean-beach" data-href="/assets/img/2026-09-27-sutro-sauna.webp"><img src="/assets/img/2026-09-27-sutro-sauna.webp" alt="A figure silhouetted inside a red-lit infrared sauna" loading="lazy"></a>
</div>
<figcaption>The moment I knew I could</figcaption>
</figure>

<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/6AIEypVSWSiBWgZdYL0Jnr?utm_source=generator" width="100%" height="152"
    frameBorder="0" allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

{% include soft-break.html %}

## Tomorrow becomes today

Frontier lab releases in late 2025 were another dramatic step forward. Google's [Nano Banana](https://deepmind.google/models/gemini-image/) releases made big strides in image quality and intent matching, and Anthropic found something special with Claude Opus 4.5. What distinguished this jump was that it was the first time an end user could launch largely autonomous code-native workflows that accomplished general tasks of significant value without taking on an involved engineering project. Almost overnight, I was living in a terminal for mundane clerical tasks and even design subtasks. I'd used the command line my whole career, but for build tools and scaffolding, not all of this! I started rebuilding nearly every way I use a computer around the shift, and I haven't stopped.

The multi-agent future showed up on schedule (and in person). In the first week of February 2026, what felt like the whole city's developer community (and apparently [Ashton Kutcher](https://x.com/SiVola/status/2019278493226508644)) lined up [around the block](https://x.com/swyx/status/2019233831732277698) for the first ClawCon at [Frontier Tower](/blog/frontier-tower), one of several [OpenClaw](https://openclaw.ai) events and hackathons I attended and helped facilitate there. OpenClaw founder Peter Steinberger spoke at ClawCon and returned later for a vibecoding night to lecture and work hands-on with attendees. A truly general harness had arrived and engineers on the frontier embraced multi-agent hierarchies almost immediately. Crushed lobster in the floorboards and preconfigured Mac Minis sold from an [agent-operated vending machine](https://x.com/om_patel5/status/2044225790032691437?s=20) were the proof. ClawCon was booking stadiums soon after.

<figure class="flex-center mv-100">{% twitter https://x.com/swyx/status/2019233831732277698 %}
</figure>

Engineering automation kept improving, but design quality from generated code still lagged even after Anthropic's Claude Design release. I wrote [_Seeing Like a Designer_](/blog/perceptual-reasoning-gap) at the start of this year to name what was missing. Models can describe a render, but they lack a vocabulary of visual axes (weight, scale, contrast, texture) to judge it against intent, and without that vocabulary you can't steer them either. Give a model those words, and "this looks wrong" becomes a judgment it can make and "more geometric" becomes a direction it can travel.

Around the same time, [Paul Bakaus](https://www.paulbakaus.com) began building [Impeccable](https://impeccable.style), "the missing design vocabulary for agents." I met him by chance at a health conference in May, overheard him describing it, and got nerdsniped. He graciously sat down with me for an extra hour of one-on-one onboarding. He also read my blog post and appreciated that it independently named the problem he was solving. Soon after, I used Impeccable to build five projects in a week, and it still anchors how I design natively in code.

{% include soft-break.html %}

## The stack, phase by phase

There's a recurring pattern where a step change in frontier model capabilities absorbs the value prop of countless third-party and open-source tools, which collapses the stack. The same step conversely extends developers' reach into the near possible, and like a hydra's heads, new tools sprout where the old ones were cut down. That oscillating contraction and expansion of tooling is only speeding up as models contribute more to recursively improving themselves.

Here's where my stack sits today.

### Context

Everything starts as context, and I'd rather not be the one who remembers or retrieves all of it anymore. I lean on prosthetic knowledge: _information that a person does not know, but can access as needed using technology_ (a phrase I credit to Rich Oglesby's [eponymous art and technology blog](https://www.tumblr.com/prostheticknowledge)). Face-to-face chats become [Bee](https://bee.computer) transcripts; virtual meetings become [screenpipe](https://screenpipe.com), [Gemini](https://support.google.com/meet/answer/14754931), or [Grain](https://grain.com) transcripts; cron jobs on an always-on Mac Mini pull it all into my [Obsidian](https://obsidian.md) vault many times a day. Texts, email, and my Google accounts are reachable through [MCP](https://modelcontextprotocol.io) servers and CLI tools when a project needs them.

Visual references move differently than in the moodboard days of old. On my laptop, screenpipe logs what I browse for inspiration into that day's note and keeps a continuous record of my screen for when I need to remember that Cool Purple Thing I saw on [are.na](https://www.are.na) last Thursday. On my phone, references go into a photo cloud album that I pull into an agent's filesystem scope on demand. From there, models can analyze a collection to output tokens that shape creative direction or write prompts for other tools.

My own prompts sometimes start as speech. I use [Spokenly](https://spokenly.app) in offline mode with NVIDIA's free, local [Parakeet](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3) transcription model so I can hold down a hotkey and talk to agents through my MacBook. Voice came naturally to me after the Alexa years. Dogfooding a houseful of assistants taught me to change the way I speak when I give a machine a command, and that habit carried straight over once agents could listen.

Conversations flow in on their own. References get summoned. The Mac Mini doubles as an always-on home server, connected to my laptop and two phones via [Tailscale](https://tailscale.com/) and synced with my MacBook's filesystem via [Syncthing](https://syncthing.net/). Long-running tasks survive a closed clamshell, and I keep the full power of macOS even when I'm working from an Android phone.

### Planning

Some ideas start as a hand-typed note, a page of paper, or a whiteboard diagram. All of them get pulled early into a shaping session with an agent, usually [Claude Code](https://claude.com/product/claude-code) in the terminal (or the mobile app connected to a desktop terminal), running custom skills I've built. The one I use most is `/socratic`, which draws my thinking out one question at a time until something concrete falls out; `/metaprompt` fleshes out and force-multiplies the prompts I hand to other tools.

I occasionally install skills from first-party marketplaces or open ones like [skills.sh](https://skills.sh) and the [OpenClaw skills directory](https://openclawdir.com/skills). I limit the skills I invoke by habit since consistent prompting yields more consistent results. Everything else gets handled by skills that choose which other skills to run based on my prompt and the session's context. Tuning these fragile orchestration systems can turn into a colossal recursive time sink, so I try my best to use the skills I need to get the work done and keep the work ahead of the workflow without giving up incremental gains to workflow for too long.

### Build

I use an agent runtime called [herdr](https://herdr.dev) inside [Ghostty](https://ghostty.org): a terminal multiplexer where I run several Claude Code sessions in parallel. It's closer to switching between a bunch of simultaneous text-based role-playing games than to typing code in an IDE.

I used to hand autonomous threads that needed less monitoring to [Conductor](https://www.conductor.build). I do that less now because herdr and Claude Code's native subagents and worktrees cover the same ground. [Devin](https://devin.ai/desktop) (formerly Windsurf) is the IDE I open when I want my hands on the code. Some edits are faster to code by hand than to explain; some agent misses are stubborn enough to fix by hand.

### Design

[Impeccable](https://impeccable.style) runs inside Claude Code and gives me control at a level that makes the most sense for designers: spacing rhythm, type, contrast, and utilities for upholding many pillars of overall system quality instead of just shipping a pile of components. Four things allow Impeccable to stand out as a powerful agent skill for design outcomes:

- Its moveset of design operations that corresponds to a project's lifecycle (categorically: create, evaluate, refine, simplify, harden, system)
- A `DESIGN.md` spec with a JSON sidecar, which Impeccable interprets more reliably than any spec Claude rolls on its own or pulls from another generic skill
- Audits that catch AI slop, contrast failures, and similar craft crimes where fluency shows first or is most obviously lacking
- Live iteration that enables WYSIWYG in the browser but ships code natively instead of working like the "no-code" tools of yesteryear

When a design needs imagery, most of my serious generation runs through [Nano Banana](https://deepmind.google/models/gemini-image/).

Parallel work is where design still hurts. Worktrees let autonomous threads run without interfering with one another or with project state, but design often means addressing several elements at once for the overall gestalt, in context. Split them across worktrees and I can't see how my best choices look together. Keep them in one and the agents collide: fixing one thing undoes another behind my back until I open the browser preview.

[Jem Gold](https://jem.computer) took a stab at this combinatorics problem back in 2016 with [René](https://v10.jem.computer/projects/rene/), a declarative design tool that generated every combination of the fonts, colors, and spacing you specified, let you converge on what worked, then diverge again at higher fidelity. I'd spent the start of my career building resources for creative technologists, and René was one of the projects that got me excited about the future of creative tools. The best of both worlds today might be a flow like Impeccable's live iteration that backgrounds and multiplexes in that spirit: hit multiple elements at once, let them converge, preview them together, and intelligently avoid intersections. For now it's either too slow and clunky or too hard to judge.

### Review

Review depth scales with a pull request's intent and scope. For a simple visual component, a live localhost instance is usually already open in my browser, so I check it with my own eyes or try to break it. If it lints, the tests pass, and it looks and works like it should, it probably merges without me opening the diff; with today's tools, hand-reviewing an agent's pass on a button is a waste of time. The project's agent loops catch most anomalies through maintained test coverage or later optimization passes. For larger PRs I invoke an automated code review, and when I do read a diff, it's to check for something I already know I'm looking for.

### Docs

Documentation carried a lot of weight in my design systems work at Amazon. I opened the xApp design system effort with a detailed audit of best practices in design systems and accessibility drawn from sources like [_Design Better_](https://designbetterpodcast.com/) and my notes from [Clarity Conference](https://www.clarityconf.com/). That report secured cross-org buy-in for my preferred strategy on the design engineering side of things. To drive adoption, I hosted office hours, led pair programming sessions with engineers consuming and implementing the system, and helped evolve and maintain the spec. Today it would all come together in a rich documentation site: principles up front, with production components running live in sandboxes backed by state machines. [Storybook](https://storybook.js.org) was my favorite for this in the past, but I'd explore newer tools before committing to one now.

Vercel's [Web Interface Guidelines](https://vercel.com/design/guidelines) are a solid reference I can point to in `CLAUDE.md` or similar agent primers. They present a living set of short, imperative rules for interactions, layout, content, forms, and performance that a person can scan and an agent can apply during generation (Vercel ships them as an `AGENTS.md` file too). Vercel's reach in UI with [shadcn/ui](https://ui.shadcn.com/) has been particularly large, and its growth owes a lot to clever architecture. Vercel has done well to prioritize open standards and tasteful defaults in anticipation of an agent-centric web, but there's a fine line between a world with great defaults and one where everything on the web looks the same (again!).

{% include soft-break.html %}

## Building higher cathedrals

This month's big launch was [TypeSafe AI](https://typesafe.ai/blog/introducing-system-one-models-and-jev)'s Jev: a model built to make fast, sensible, consistent decisions. I first heard the founding hypothesis a year earlier on a hike with a TypeSafe engineer. A design that clamps degrees of freedom for the model's outputs buys predictability without purely deterministic behavior. The architecture (more than the cost and speed gains) is the interesting part: it makes intelligence better glue between a widening range of inputs and common-sense outputs. Paul wants the same for Impeccable with "next step prediction," which I read as chained design decisions that compose whole units of work without taking the designer's voice. Better glue means better joinery, sturdier walls, and eventually, higher cathedrals. Somewhere up the chain the experiences start to transcend sense altogether, the point where Clarke said technology and magic become indistinguishable.

That optimism became a research proposal I co-wrote this summer with Jem, whose work on René and other creative tools has shaped my path for at least a decade. It didn't win a [Thinking Machines interactivity grant](https://thinkingmachines.ai/news/interactivity-research-grants/), but it was a good exercise in imagining the near possible. A revised version may become its own post.

{% include soft-break.html %}

Ten years ago, I was watching the neural networks of old paint photographs crudely. Today, in San Francisco at the foot of the AI singularity, I'm still watching functions get less wrong—now I get to decide what they're for, and how my ways of working will grow with them.

If you got this far, I'd greatly appreciate your feedback on this post, opinions about the future of AI tooling and agentic engineering, suggestions for anything I should try next, or whatever else you have to share. {% include snippets/twitter-dm.html %} and let's talk shop.
