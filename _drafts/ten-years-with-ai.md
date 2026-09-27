---
layout: post
title: "Working With AI: Past & Present"
description: My current AI design and engineering stack and how I got here
tags:
  - technology
  - design
  - engineering
  - artificial intelligence
  - work
permalink: /blog/working-with-ai
---

*Just here for shop talk? [Skip the story](#the-stack-phase-by-phase) to get to the stack.*

- [Bee](https://bee.computer): transcribes my face-to-face conversations
- [screenpipe](https://screenpipe.com): records my screen and logs what I browse into my daily notes
- [Gemini](https://support.google.com/meet/answer/14754931) and [Grain](https://grain.com): transcribe my virtual meetings
- [Obsidian](https://obsidian.md): the notes vault every tool reads from and writes back to
- [MCP](https://modelcontextprotocol.io): lets agents reach my texts, email, and Google accounts
- [Tailscale](https://tailscale.com/): connects my always-on Mac Mini to my MacBook and phones
- [Syncthing](https://syncthing.net/): keeps my MacBook and Mac Mini filesystems in sync
- [Claude Code](https://claude.com/product/claude-code): my main agent harness, in the terminal and on my phone
- [skills.sh](https://skills.sh) and the [OpenClaw skills directory](https://openclawdir.com/skills): where I find open-source agent skills
- [herdr](https://herdr.dev) in [Ghostty](https://ghostty.org): runs many Claude Code sessions side by side
- [Conductor](https://www.conductor.build): where I used to send long autonomous threads
- [Devin](https://devin.ai/desktop): the IDE I open when I want my hands on the code
- [Spokenly](https://spokenly.app) with [Parakeet](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3): offline dictation for talking to agents
- [Impeccable](https://impeccable.style): design vocabulary, audits, and live browser iteration for agents

I first got hands-on with training neural networks through [Kadenze](https://www.kadenze.com), an online learning platform for the arts and creative technology. I joined its founding team as a designer in 2014, at the end of my second year of design school at CalArts. [Parag Mital](https://pkmital.com) later came on as Director of Machine Intelligence, and after the public launch in 2015 he added an exciting AI course to the catalog: *Creative Applications of Deep Learning with TensorFlow*. Kadenze placed real value on lifelong learning, and I took the cue; some time after I graduated with my BFA in 2016, I dug into the course to build new skills.

It's been about ten years since then. Today I spend most of my working hours directing many of those networks' successors at once and iteratively designing the environments they work in. This post captures what changed in between, the tools I use now (which will likely seem stale by the end of next season), and what excites me about the near future of this domain.

{% include soft-break.html %}

## Learning the Machinery

Parag's course had me working with Python and early TensorFlow inside Jupyter notebooks. One of the first exercises taught a network to paint a photo: feed it pixel coordinates, let it guess a color for each, and watch a gray smear resolve into a picture over many rounds of gradient descent. I remember that demo for how well it balanced simplicity with impact. A network learns a function from examples; the function starts as a coarse approximation of something, and you watch it get progressively less wrong over runs.

It got deeper after that: autoencoders that squeezed an image into a handful of numbers and rebuilt it, Deep Dream run through Google's Inception until every cloud had a dog's face, style transfer on Oxford's VGG DCGAN, and a character-level RNN that learned to write text with the cadence of English and none of the sense.

I revisited neural networks as a creative tool a few years later. The last classical network I trained by hand came out of the COVID lockdowns of 2020–2021. Almost everyone had screen time to spare, and walks were the only reliable way out of the house. Derrick Schultz's [Artificial Images](https://www.youtube.com/@ArtificialImages) courses were the best school around for artists who wanted to train their own models.

For months I photographed organic textures and plant life on those walks and built a dataset of about 200 images. I augmented it to thousands, trained StyleGAN2-ADA on it in Google Colab, and tweaked parameters until the outcomes got more satisfying. Then I pushed the results through further convolutions, interpolations, and style translations, with some manual touches at the end, to make abstract video art.

<figure>
    <img src="/assets/img/2026-09-27-nature-dataset-grid.webp" alt="Grid of twelve close-up photos of plants, flowers, and lichen-covered rock" loading="lazy">
    <figcaption>Organic textures from my walks</figcaption>
</figure>

What stuck from those side projects was a conceptual feel for the machinery: a model is a compressed statement about its data, its latent space has a geography you can walk, and the most interesting outputs can live in the interpolations between things it has seen.

Curiosity drove most of it, along with admiration for what my former Kadenze colleagues had built with their combined machine learning expertise. I didn't do anything consequential with what I learned for years. Still, even the simplest learning project can permanently shift your feel for the shape of a tool; it only takes a first attempt to make literally anything with it. I've tried to keep that participatory ethic and the willingness to try things outside my comfort zone at the center of how I adapt to an era defined by AI acceleration. That's probably worth more than any tool I've learned to use in production since then.

{% include soft-break.html %}

## The Multi-Agent Future

In the summer of 2021 I joined Amazon's Alexa Voice Services team, where I led design for emerging voice and multimodal technologies. Onboarding was the first time I heard "agent" used the way everyone uses it now: a program with some autonomy that pursues goals on a user's behalf.

Where intelligent assistants were concerned, most of the industry was racing for sole category dominance with one assistant to rule every device. AVS bet on a hierarchy of agents serving one end user (or family of consumers) instead. You can see that bet in Amazon's public programs: Alexa Custom Assistant licensed the underlying technology so partners could build agents of their own, and the Voice Interoperability Initiative worked toward agents that could share a device, scope themselves by context, trade information, and hand tasks to one another when a request fell outside their lane.

Part of my job was designing screen interactions for those capabilities. On TVs from partnered vendors like Vizio, Samsung, and LG, Alexa had to coexist with the manufacturer's own assistant in the same interface. I designed [multi-agent attention systems](/work/amazon-alexa) for those shared devices: how a person picks which agent they're addressing, how each agent keeps its brand identity without muddying the shared context, who gets the attentional real estate and when, and how cooperating agents hand off control mid-task. I was designing for agent orchestration years before I encountered the phrase in wider tech industry discourse (yes, we even called it agent orchestration internally back then).

<figure>
    <video class="lazy" poster="/assets/video/2021-08-02-alexa-multi-agent-poster.webp" controls playsinline data-src="/assets/video/2021-08-02-alexa-multi-agent.mp4"></video>
    <figcaption>Multi-agent selection (Vizio and Alexa)</figcaption>
</figure>

The work changed how I lived with devices too. My org paid to fill my home with smart home tech, and the goal was to pick hardware that worked with as many different assistants as I could bear. That let me dogfood Alexa against other assistants across contexts and modalities, and build empathy for the potential value and pain points that agent interoperability priorities aimed to address. I was home alone gesturing aggressively toward invisible radar chips and shouting strange incantations at glowing orbs across the room way before it became cool to say mean things to the little guys inside your computer.

At the time I had no way to know whether or not the multi-agent bet would be right. I did know it was rewiring my intuitions about multimodality and orchestration, and I held onto them. Looking out at the many agents chaining workflows together on the frontier today and the many challenges yet to be solved, I'd say leadership's forecasts were sound. True to form: one of Amazon's hallowed Leadership Principles is that leaders Are Right, A Lot.

{% include soft-break.html %}

## Eating Around the Entrées

The near universal adoption of transformer-based model architectures is perhaps the sharpest dividing line for a decisive before/after in the arc of successive capability gains. On one side: GANs, CNNs, and RNNs, networks I could open up and train myself on rented clusters. On the more capable side: transformers and the large language models built on them, exorbitantly expensive to train with hundreds of millions of parameters (trillions now if you're counting in 2026).

ChatGPT launched at the end of 2022 while I was in paid training for full-stack software engineers at Amazon deepening fundamentals under my years of web development. Corporate AI usage policies and warnings came down from the top within a couple months (they smelled like the distinct fears of panicked policymakers faced with intractable-to-quantify risk). I avoided AI entirely for my training program assignments because using it would have defeated the purpose of immersing myself in an environment built to practice software engineering the traditional way.

When it came to my personal projects however, the models began to take on meaningful chunks of ancillary work around design craft that winter: research, ideation, organization, validation, and more. As models trained specifically on coding tasks improved, they also carried bigger slices of prototyping and implementation. Core design stayed mine. A model could write a plausible component, but it took a lot of pushing to get things over the bar in almost all cases. *The last 10% is 90%* has never felt so true as a maxim.

On Presidents' Day weekend in 2023, I drove six hours up from Los Angeles to San Francisco to stay at an investor's home in Sutro Heights while he was away traveling. Years earlier, he'd said a couple small things that made a meaningful impact on my career and life, and now he'd offered his place so I could feel out my appetite for moving to San Francisco. Young people were pouring back into the city after its pandemic desertion and energy was massing around advancements in AI.

Another guest I'd never met answered the door that first night when I pulled up around 10 PM—the first face I'd spoken to all day. We chatted briefly while he showed me the house before I turned in for the night. I woke before dawn and immediately braved the cold outside. I made the decision to move within the hour, walking the path back up to the house's infrared sauna after swimming out of the 4 AM riptides at Ocean Beach. I read the first of those corporate AI policies in that house's living room around the last week of February and I felt the shape of change to come in my body. By April the guy from the door and I had signed a lease on a condo in San Francisco's Historic Alamo Square District. We still live there today.

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

## Tomorrow Becomes Today

The frontier models deployed in the last months of 2025 moved the line again in an immediately palpable way. Google made large strides in image generation quality and intent matching with the Nano Banana releases. Anthropic found something truly special with Claude Opus 4.5. The models moved from the edge of my work to eating larger chunks out of its center at an alarming pace after that. Almost overnight I was tabbing to and from a terminal emulator constantly for ever more mundane and general clerical tasks and even design subtasks. I'd been a web developer since day one of my career and regular CLI usage was normal... but for build tools and code scaffolding, not all of this! I started rebuilding nearly every way I use a computer around this shift and I haven't stopped because the change hasn't settled either.

The multi-agent future showed up on schedule (and in person). Over the first week of February 2026, what felt like the whole city's developer population lined up around the block for [OpenClaw](https://openclaw.ai) launch events and hackathons I attended and helped organize at [Frontier Tower](/blog/frontier-fitness-center). A truly general harness had arrived and a building full of engineers embraced multi-agent hierarchies very quickly once the right kind of utility was on the table. OpenClaw's strength was its versatility; it was hard to find something it couldn't force into interoperable submission (which is one of a few reasons I offboarded after some months of building after the launch hype had waned). I've never seen the organic launch of an open-source developer tool capture that much mindshare and excitement. Crushed lobster meat stuck in the floorboards and preconfigured Mac Minis sold out of an agent-operated vending machine in the back of the event space were the proof.

As crazy and unprecedented as all that was, something about the current pace of the frontier tells me I may see excitement like that again before long. The AVS multi-agent forecast came at least five years ahead of today's status quo and it looks largely correct in this tier of the arena where early adopters and innovators are defining standard practice for tomorrow's means of production.

Long-running engineering automation has kept improving. Design quality from generated code still lags noticeably behind it. I wrote [*Seeing Like a Designer*](/blog/perceptual-reasoning-gap) at the beginning of this year to think through what I felt was missing at the time and which avenues for progress looked most promising to me. Models can look at a render and describe it, but they lack a vocabulary of visual axes (weight, scale, contrast, texture) to judge the render against intent, and the same missing vocabulary means you can't reliably steer them. Give a model those words, and “this looks wrong” becomes a judgment it can make. “More geometric” becomes a direction it can travel—a specified distance within a subspace, at that—when usefully parameterized.

Around the same time [Paul Bakaus](https://www.paulbakaus.com) began working on [Impeccable](https://impeccable.style), which calls itself "The missing design vocabulary for agents." I met him by chance at a health conference in May. I overheard him describing his new project to the host of the event as it was winding down and got nerdsniped. I started asking questions, so Paul graciously sat down with me one on one for an extra hour. He walked me through a full personal onboarding and we chatted about work history and hobbies. He read my essay and appreciated that it had independently recognized the problem he was building against. Impeccable became the workhorse of my design engineering process after that evening during a week where I built five different projects with it.  It still anchors a lot of how I design natively in code with AI which is surprising after this many months (most third party tools and skills don't live very long in my workflows these days).

{% include soft-break.html %}

## The Stack, Phase by Phase

A single step change at a frontier lab can absorb the capabilities of countless third-party and open-source tools, and the stack collapses. The same step conversely extends developers' reach into the near possible, and like a hydra's heads, new tools sprout where the old ones were cut down. The predictable response from people scrambling to escape the looming umbra of the Permanent Underclass (guilty) is to force skip the stages of grief, rip off the bandaid before switching costs grow, and change whatever needs changing about computer work then and there. That oscillating contraction and expansion of tooling is only speeding up as models contribute more to recursively improving themselves.

Here's where my stack sits today. Don't take notes, just use it or lose it; I'm almost certain that at least one thing in the toolbox which feels crucial to me today will be forgotten by year's end.

### Capture

Everything starts as context, and I'd rather not be the one who remembers or retrieves every bit of it anymore. An approach informed by prosthetic knowledge takes precedence now. (I credit Rich Oglesby with coining the phrase on his [eponymous art and technology blog](https://www.tumblr.com/prostheticknowledge), which defines it as *information that a person does not know, but can access as needed using technology*.)

Many of my important conversations now get captured automatically by ever-evolving chains of hardware and software. Face-to-face chats become [Bee](https://bee.computer) transcripts; virtual meetings become [screenpipe](https://screenpipe.com), [Gemini](https://support.google.com/meet/answer/14754931), or [Grain](https://grain.com) transcripts; cron jobs on an always-on Mac Mini pull all of it into my [Obsidian](https://obsidian.md) vault many times a day. Texts, email, and my Google accounts are reachable through [MCP](https://modelcontextprotocol.io) servers and CLI tools, so an agent can read them when a project needs them.

Visual references move differently now than in the web app moodboard days of old. On my laptop screenpipe can watch me browse for inspiration, write a description of the session with URLs of anything I might want to find later, and log it in that day's note under the right heading. While it's active, it crawls the operating system's accessibility tree and records everything else I do on screen, so I have a continuous record to come back to when I suddenly need to remember that Cool Purple Thing I saw on [are.na](https://www.are.na) last Thursday. It can even use those recordings to learn how I work with context over time and build modular automations for anything else I want.

On my phone references go into an album in my photo cloud. Agents can reach that album through MCP; in practice I pull it down on demand into a local folder inside the agent's filesystem scope for a specific task or project. Creative and strategic tasks can even flow straight out of those collections autonomously now. Models can analyze them to abstract language which shapes creative direction, writes generative prompts for other tools, or balances the weights of the aesthetic directions that might inform an approach (defining the preferred boundaries of the latent space for a task or project).

Conversations flow in on their own. References get summoned. I can annotate anything later through an agent or Obsidian on any of my devices. Setting up a Mac Mini as an always-on home server synced to my laptop and two phones via [Tailscale](https://tailscale.com/) has been a great enabler of continuity for me since the spring. Long-running autonomous tasks won't shut down if I close my clamshell or the mobile apps. The secret sauce for this setup has been syncing my MacBook's filesystem with the Mac Mini's via [Syncthing](https://syncthing.net/). This means the Mini starts off where my MacBook work halted and that I still retain the full benefits of my local filesystem and the power of macOS even while working from e.g. an Android phone. Toggling [`--remote control`](https://code.claude.com/docs/en/remote-control) on by default makes sessions easy to pick up over the network by just choosing them from a list they're already on, whereas [`--teleport`](https://code.claude.com/docs/en/claude-code-on-the-web#from-cloud-to-terminal) or [`--resume` and `--continue`](https://code.claude.com/docs/en/sessions) are useful options for navigating networked Claude sessions more manually. It is a powerful blessing and curse to be able to increase shareholder value from any toilet; use it with care.

### Framing

Some ideas start as a hand-typed note, a page of paper, or a whiteboard. All of them get pulled early into a shaping session with an agent, usually [Claude Code](https://claude.com/product/claude-code) in the terminal or the mobile app, running custom skills I've built for various purposes. The one I use most is `/socratic`, which draws my thinking out one question at a time until something concrete falls out; `/metaprompt` often fleshes out and force-multiplies the prompts I hand to other tools. I used both while writing this post (e.g. to grab those nature photos from the cloud, compose a grid saved as a new image, and mark that image up in the post source similarly to how I display other media on different blog posts that the agent queried).

I also use free, open-source skills I've installed from first-party marketplaces or open ones like [skills.sh](https://skills.sh) or the [OpenClaw skills directory](https://openclawdir.com/skills). I try to limit the number of skills I invoke manually by habit. Consistent prompting techniques yield more consistent results, and that feels like one of the safe places to form short-lived habits in a world changing this fast—when a skill loses utility or favor, I just start using another. Thankfully, other skills can select which skill to use based on a prompt and session context, which covers most things I don't invoke by hand (this has become noticeably more reliable throughout the year). I can list my skills or dig up docs if I'm not getting the results I'd like, but I don't remember the last time I did.

Optimizing and maintaining these nascent, fragile orchestration systems can very quickly become a colossal recursive time sink without attentive limits. It's important for me to remember to stay focused on the work as a first-class citizen so that the never-ending quest to build really lovable and powerful workflows doesn't surreptitiously become the antithesis of productivity. Just use the skills you need to get the work done and don't worry too much about catching 'em all.

### Exploration and build

I use an agent runtime called [herdr](https://herdr.dev) inside [Ghostty](https://ghostty.org): a terminal multiplexer where I run several Claude Code sessions in parallel, each on its own thread of the problem (or on an entirely unrelated task). It's closer to switching between a bunch of simultaneous text-based role-playing games than to typing code in an IDE. I'm still surprised at how rarely I do the latter these days, and how suddenly things got there.

I used to hand autonomous threads that needed less monitoring to [Conductor](https://www.conductor.build). I do that less now because herdr and Claude Code's native subagents and worktrees cover the same ground with fewer moving parts and more generality. [Devin](https://devin.ai/desktop) (formerly Windsurf) is the IDE I open when I want my hands on the code. Some edits are faster to code than to explain; some agent misses are stubborn enough to fix by hand; sometimes I want to read the code to understand it, and 15+ years of habit have me used to doing that in an IDE.

Speaking of explanation speed, multimodal input has picked up a lot of steam too, along with the tools that support it (new-age third-party dictation apps, smarter transcription models, and so on). I like to use [Spokenly](https://spokenly.app) in offline mode with NVIDIA's free, local [Parakeet](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3) transcription model so I can hold down a hotkey and speak to agents through my MacBook. The abrupt rise in voice interactions with agents felt like a strange change to many (see: memes about Wispr Flow muzzles, or court stenomasks for quieter transcription in the workplace). It came naturally to me after years of talking to computers every day, with all the smart devices the Alexa work piled up in my living space.

Something odd has happened in the last few months, though: I speak to my main workstation much less often. I'm not really sure why. If I had to guess, I'm regressing to typing as a comfortable default after some stressful life events and a lot of shifting variables around my physical workspace location. I typed and chatted far more than I spoke during the formative social years of my adolescence, and the brain-language-fingers feedback loop still feels more natural to me than speech, especially when I need precise intent for something like instructing a machine. I assume my speech input will swing back up with time. I'd love to see the day when multimodal input accommodates even stranger inputs like spoken onomatopoeia or interpretive dance to make something of more energetic and animated work styles.

### System design and polish

[Impeccable](https://impeccable.style) runs inside Claude Code and gives me control at a level that makes the most sense for designers: spacing rhythm, type, contrast, and utilities for upholding many pillars of overall system quality instead of just shipping a pile of components. Four things allow Impeccable to stand out as a powerful agent skill for design outcomes:

- Its moveset of design operations that corresponds to a project's lifecycle (categorically: create, evaluate, refine, simplify, harden, system)
- A `DESIGN.md` spec with a JSON sidecar, which Impeccable interprets more reliably than any spec Claude rolls on its own or pulls from another generic skill
- Audits that catch AI slop, contrast failures, and similar craft crimes where fluency shows first or is most obviously lacking
- Live iteration that enables WYSIWYG in the browser but ships code natively instead of working like the "no-code" tools of yesteryear

Parallel work is where design still hurts. Worktrees have been a great way to split up a repository so different threads can run autonomously without interfering with one another or with project state. They don't work as well for design. I often want to address more than one element at a time for the overall gestalt, and I need to see everything together in context.

That sets comprehensive context against independent iteration. Put each element in its own worktree, and I can't easily see how my best choices look together, or follow a path where they play off one another and converge on the solution I want. Keep everything in one worktree, and the autonomous agents often conflict. Fixing one thing undoes another, all behind my back, and I can't see it until I open the browser preview. It makes everything unwieldy.

The best of both worlds might be a flow like Impeccable's live iteration that does a better job of backgrounding and multiplexing: hit multiple elements at once, let them converge to an acceptable state, preview them together, and intelligently avoid intersections. For now it leaves me wanting. It's either too slow and clunky or too hard to judge.

### Review

Review depth scales with the intent and scope of a pull request, and the range can be fairly wide. Take a simple visual component. A live localhost instance is usually already open in my browser, so I check it with my own eyes or try to break it by interacting. If the change is small, passes the eyeball test, and shows no visual regressions, it probably merges without me opening the diff. I don't need to hand-review an agent's pass on a button component if it lints, the tests pass, and it looks and works like it should; with today's tools, that's a waste of time.

The project's agent loops catch most anomalies through iteratively maintained test coverage or clear them out over time through optimization passes. For larger PRs or in a pinch, I might invoke an automated code review that leans on code quality heuristics to find and correct issues. When I actually read a diff, it's usually to double-check for something I already know I'm looking for, not to assess general code quality.

### Docs

The first reader of my docs is an agent. The agent also wrote them with me, and it's probably the primary author if we're judging word for word. Documentation carried a lot of weight in my design systems work at Amazon. I opened the xApp design system effort with a detailed audit of best practices in design systems and accessibility drawn from sources like [*Design Better*](https://designbetterpodcast.com/) and my notes from [Clarity Conference](https://www.clarityconf.com/). That report secured cross-org buy-in for my preferred strategy on the design engineering side of things. To drive adoption, I hosted office hours, led pair programming sessions with engineers consuming and implementing the system, and helped evolve and maintain the spec. If I undertook an extensive design systems project today, or worked across a mature enough product, I might add automated visual regression checks and show components alongside their specs, or in a sandbox with state machines, to help review. I've used [Storybook](https://storybook.js.org), Design System Manager from InVision (RIP), and probably at least one other tool I'm forgetting for purposes like this in the past, but I'm convinced that there are better and easier ways to accomplish this today.

Vercel's [Web Interface Guidelines](https://vercel.com/design/guidelines) are a solid reference I can point to in `CLAUDE.md` or similar agent primers. They present a living set of short, imperative rules for interactions, layout, content, forms, and performance that a person can scan and an agent can apply during generation (Vercel ships them as an `AGENTS.md` file too). The team's writing on [design engineering](https://vercel.com/blog/design-engineering-at-vercel) is also helpful. Vercel's reach in UI with [shadcn/ui](https://ui.shadcn.com/) has been particularly large. Its growth has benefitted a great deal from tasteful defaults and convenient and clever architectural differentiation, but this is where I get careful: there's a fine line between a world with great defaults and one where everything on the web looks the same (again!). Similarly to how work should come before workflow, it's important not to forget to keep the human designer's inventiveness and idiosyncratic craft sensibilities in the driver's seat. How much or how little that happens will differ for everyone, but I think we all feel that work is changing very much very quickly and it's beneficial not to lose ourselves as automation accelerates.

Vercel moved the way it did in anticipation of agents representing an ever increasing percentage of browser use (more strong positioning atop another correct forecast by an incumbent). The conventions for agent readability on the web and elsewhere coming fro Vercel and other firms frequently descend from older conventions. Just like how [sitemap.xml](https://www.sitemaps.org/protocol.html) revealed a site's information architecture to search engine crawlers as structured data and [robots.txt](https://www.robotstxt.org) told crawlers where not to go, [llms.txt](https://llmstxt.org) gives a language model a markdown map of where to look. I invented one of my own called [COMMS.md](https://stedmanhalliday.com/.well-known/COMMS.md). It's a simple, structured, queryable document that sets out a person's communication preferences for humans and agents. Mine lives on my site for other people's agents to find, and an [OpenClaw skill](https://openclawdir.com/skills/comms-md-0pe1c8) helps anyone create their own. The idea is that if someone wants their agent to write me an email I feel positive about, it can do that with high confidence quickly by just visiting that document hosted on my website.

{% include soft-break.html %}

## Glue

The frontier news I've been chewing on for the last two weeks is Jev. [TypeSafe AI](https://typesafe.ai/blog/introducing-system-one-models-and-jev) came out of stealth on September 15, 2026, with Jev as its first model. It calls Jev a System One Model (a nod to Kahneman widely influential text on human judgment, *Thinking, Fast and Slow*), built to make fast, sensible, consistent decisions that software can use directly. I first heard the founding hypothesis a year earlier on a hike with a TypeSafe engineer.

It's a wise bet. Moderately clamping the degrees of freedom in how information flows through a model buys outputs that are predictable without being fully deterministic. The cost and speed gains are real, and they might be the least interesting part. A decision model like this makes intelligence better glue: the layer that binds a widening range of inputs to common-sense outputs.

Paul has a similar ambition for Impeccable's roadmap: a move from next-token prediction to what he calls "next step prediction." I interpreted this as architecting chained design decisions that compose whole units of work, which agents execute with increasing autonomy without taking the creative voice away from the designer.

Better glue means better joinery, walls, and eventually cathedrals. We'll soon capture a wider range of multimodal inputs, return more reliable outputs that make sense, and let that compound. Somewhere up the chain the experiences start to seem like they transcend sense altogether, the point at which Clarke said technology and magic stop being distinguishable.

That optimism became a research proposal I co-authored with [Jem Gold](https://jem.computer) this summer for the [Thinking Machines interactivity research grants](https://thinkingmachines.ai/news/interactivity-research-grants/). Jem's research, prototypes, and projects at the intersection of design, expression, and intelligent computation have inspired me for ten years and change. Her work and words shaped a good part of my path, most saliently when co-owning the design systems work at Amazon. The many possible futures of borderline magical interfaces for creative expression excited both of us and it was rewarding to collaborate with a friend, mentor, and kindred spirit whose work I regard highly.

The proposal didn't receive a grant. It was nonetheless a good exercise in surveying the frontier to imagine the near possible. Jem's feedback was to rewrite it for hosting and address a couple of things we're both less than satisfied with; I'll consider that for a future blog post.

{% include soft-break.html %}

Ten years ago, I was watching the neural networks of old paint photographs crudely. Today, in San Francisco at the foot of the AI singularity, I'm still watching functions get less wrong—now I get to decide what they're for, and how my ways of working will grow with them.

If you got this far, I'd greatly appreciate your feedback on this post, opinions about the future of AI tooling and agentic engineering, suggestions for anything I should try next, or whatever else you have to share. {% include snippets/twitter-dm.html %} and let's talk shop.
