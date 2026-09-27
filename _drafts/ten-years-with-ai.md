---
layout: post
title: Ten Years of Working With AI
description: From training neural nets by hand to designing the room agents work in, and the stack I use now as a design engineer
tags:
  - technology
  - design
  - engineering
  - artificial intelligence
  - work
permalink: /blog/ten-years-with-ai
---

<!--
Title options:
1. Ten Years of Working With AI
2. From Autoencoders to Agents
3. Glue, Joinery, Cathedrals
-->

I first got hands-on with training neural networks through Kadenze, an online learning platform for the arts and creative technology. I joined its founding team as a designer in 2014 at the end of my second year of design school at CalArts. [Parag Mital](https://pkmital.com) later came on as Director of Machine Intelligence and contributed an exciting AI course called *Creative Applications of Deep Learning with TensorFlow* to Kadenze's online course catalog after its public launch in 2015. Taking cues from the value the company placed on lifelong learning, I dug into the course content to develop more skills some time after graduating with my BFA in 2016.

It's been around ten years since then and today I spend most of my working hours simultaneously directing many of those networks' successors and iteratively designing the environments they work in. This post captures what changed in between, the tools I regularly use now (which will likely seem stale by the end of the next season), and what I'm excited about in the near future of this domain.

{% include soft-break.html %}

## Learning the Machinery

Parag's course had me working with Python and early TensorFlow inside Jupyter notebooks. One of the first exercises taught a network to paint a photo by feeding it pixel coordinates, letting it guess a color for each, and resolve a gray smear into a picture over many rounds of gradient descent. I remember this demo for how well it balanced simplicity with impact in trying to illustrate what these networks are capable of. They learn a function from examples which starts as a coarse approximation of something, and then you watch the function progressively get less wrong over runs. From there it went deep fast: autoencoders that squeezed an image into a handful of numbers and rebuilt it, Deep Dream run through Google's Inception until every cloud sprouted dog faces, style transfer on Oxford's VGG, a DCGAN, and a character-level RNN that learned to write text with the cadence of English and none of the sense.

I revisited neural networks as a creative tool a few years later. The last classical network I trained by hand came out of the COVID pandemic lockdown in 2020, when almost everyone had screen time to spare, walks were the only reliable way out of the house, and Derrick Schultz's [Artificial Images](https://www.youtube.com/@ArtificialImages) courses were the best school around for artists who wanted to train their own models. %%is that sentence too long? maybe break it up%% I photographed organic textures and plant life on those walks for months to build a dataset of about 200 images, augmented it to thousands of images, and trained StyleGAN2-ADA on it in Google Colab, tweaking parameters to generate more satisfying outcomes. I pushed the results through further convolutions, interpolations, and style translations with some manual touches at the end to make abstract video art. [TK LATER: maybe a collage of dataset photos — ask Stedman]

None of that work was for a paycheck. What stuck was a feel for the machinery: a model is a compressed statement about its data, its latent space has a geography you can walk, and the most interesting outputs live in the interpolations between things it has seen.

%% rewrite this after juxtaposing with the above paragrph, has some run-on and poorly structured sentences %%
I touched this stuff at the time mostly out of curiosity and admiration for the impressive features made possible by the combined machine learning expertise of many of my former colleagues at Kadenze. I didn't do anything consequential with what I learned for years, but there's something about even the simplest learning projects that catalyzes a frequently irrevocable shift in the feel one has for the shape of a tool after the first attempts to make literally anything with it. I've tried to keep that participatory ethic and willingness to try new things outside of my comfort zone at the center of my adaptive approach in our current era defined by AI acceleration. That's probably a more valuable thing to have taken away from this course than any of the tools I've learned to use in a production capacity since then.

{% include soft-break.html %}

## The Multi-Agent Future

In the summer of 2021 I joined Amazon's Alexa Voice Services team, where I led design for emerging voice and multimodal technologies. Onboarding was the first time I heard "agent" used the way everyone uses it now: a program that pursues goals on a person's behalf, with some autonomy.

Most of the industry was racing for sole category dominance, one assistant to rule every device. AVS bet on a hierarchy of agents serving one person instead. You can see that bet in Amazon's public programs: Alexa Custom Assistant licensed the underlying technology so partners could build agents of their own, and the Voice Interoperability Initiative worked toward agents that could share a device, scope themselves by context, trade information, and hand a task to one another when a request fell outside their lane.

Part of my job was designing what that bet looks like on a screen. On TVs from partnered vendors like Vizio, Samsung, and LG, Alexa had to coexist with the manufacturer's own assistant in the same interface. I designed [multi-agent attention systems](/work/amazon-alexa) for those shared devices: how a person picks which agent they're addressing, how each agent keeps its brand identity without muddying the shared context, who gets the attentional real estate and when, and how cooperating agents hand off control mid-task. I was designing for agent orchestration years before I'd encountered that phrase in wider tech industry discourse (yes, we even called it agent orchestration internally back then). 

During those years, I had no way to know whether the multi-agent bet would be right. I did know it was rewiring my intuitions about multimodality and orchestration, and I held onto that. Taking stock looking out at the many agents chaining workflows together on frontier today and the many challenges yet to be solved, I'd say leadership's forecasts were sound. True to form... one of Amazon's hallowed cultural principles is that leaders should be right a lot. %%make this flow a little better%%

%%one thing i missed in that whole paragraph is how my changing device usage shaped these intuitions and my personal multimodal interaction patterns too. my org encouraged me to tile my home with smart home tech at the company's expense. the goal was to make hardware selections that interfaced with as many different assistant products as I could bear so i could dogfood alexa across many contexts and modalities, compare it to other assistant interactions, and develop deep empathy for all the value and pain points that the agent interoperability priorities were aiming to address. i was home alone gesturing aggresively toward invisible radar chips and shouting strange incantations at glowing orbs long before anyone reposted memes about operating Wispr Flow with muzzles and foot pedals. %%

{% include soft-break.html %}

## Eating Around the Entrée

%%the following paragraph is pretty bad. The first sentence sucks in a lot of ways. Training on a laptop, yeah, maybe theoretically true, but not empirically. I rented clusters to do those.

Yeah, it's just needs a little work, fix this paragraph. %%
The line through my decade runs through architecture. On one side sit GANs, CNNs, and RNNs, things I could open up and train on a laptop. On the other sit transformers and the large language models built on them.

%%stop talking about me crossing lines or whether this figurative voice is weird. Just I'm just trying to say what happened at what time. i rewrote some of this, make the grammar smoother%%
I crossed that line in a classroom. ChatGPT launched at the end of 2022 while I was in paid training for full-stack software engineers at Amazon. Within a couple of months, the corporate AI usage policies and warnings were handed down from up top. I remember feeling the shape of change to come in my body while reading one such policy in a Sutro Heights living room around Presidents' Day of 2023. The homeowner that living room belonged to was an investor who'd said some small things to make a meaningful impact on my career years before. He invited me to visit while he was away traveling so I could feel out my appetite for relocating to San Francisco to build new things as young people poured back into the city after pandemic desertion and energy amassed around advancements in AI.

I'd already made the decision earlier that weekend as I walked the path back up to the house's infrared sauna after swimming out of the 4 AM riptides on Ocean Beach below. The guy who answered the door for me at the Sutro Heights home the night before was the first person I saw after the six hour drive up from Los Angeles. That was just before the last week of February; by April, he and I had signed a lease for a condo in San Francisco's Alamo Square Historic District. We still live together today.

%%the narrative is really good here for color, but i need it cleaned up for style and flow and so it flows into the next part better. lot of chronological jumping and location names, confusing%%

That winter the models took on the work around the craft: research, ideation, organization, validation. They carried big chunks of prototyping and implementation, too %%say it's because of advancements in models trained on coding tasks specifically%%. Core design stayed mine. A model could write a plausible component but it took a lot of pushing to get things over the bar. *The last 10% is 90%* has never felt so true as a maxim.

{% include soft-break.html %}

## Tomorrow Becomes Today

The frontier models deployed in the last months of 2025 moved the line again in a palpable way. Google made large strides forward with image generation quality and intent matching in the Nano Banana releases. Anthropic found something special with Claude Opus 4.5. The models moved from the edge of my work to eating larger chunks out of its center at an alarming pace. Almost overnight, I was living in terminal emulators and it felt all but impossible to live outside command line interfaces for too long. I started rebuilding nearly every way I use a computer around this shift and have continued to do so; the change won't stop coming.

The multi-agent future showed up on schedule, and in person. Over the first week of February 2026, what felt like half of San Francisco's AI developers lined up around the block for OpenClaw launch events and hackthons I attended and helped organize at [Frontier Tower](/blog/frontier-fitness-center). A truly general harness had arrived, and a building full of engineers grokked the hierarchy of agents very rapidly once the right kind of utility was on the table. I've never seen that much mindshare and excitement captured by the organic launch of an open-source developer tool; the aftermath of crushed lobster meat stuck in the floorboards and the preconfigured Mac Minis being sold out of an agent-operated vending machine were testaments to that. As crazy as that all was, something about the pace of the AI frontier today tells me it may not be long before I see it again. The AVS multi-agent forecast was at least five years early, and it seems to have been largely correct in this tier of the arena where the early adopters and innovators have been defining the metagame for tomorrow's means of production.

Long-running engineering automation has kept improving. Design quality from generated code still lags behind it noticeably. I wrote [Seeing Like a Designer](/blog/perceptual-reasoning-gap) in January 2026 to think through what's missing and which avenues for progress seemed most promising to me. Models can look at a render and describe it, but they lack a vocabulary of visual axes (weight, scale, contrast, texture) to judge the render against intent, and the same missing vocabulary means you can't reliably steer them. Give a model those words and "this looks wrong" becomes a judgment it can make and "more geometric" becomes a direction it can travel—a distance even, when usefully parameterized.

Around the same time, Paul Bakaus began working on [Impeccable](https://impeccable.style), which calls itself "The missing design vocabulary for agents." I met him by chance at a health conference in May. I'd overheard him describing his new project to someone else, started asking questions, and he gave me an extra hour one on one: a full onboarding, plus a long detour through work history and hobbies. He read the essay and appreciated how it independently recognized the problem he was building against. Impeccable became the workhorse of my design engineering after that evening, and it still anchors a lot of how I design natively in code with AI.

{% include soft-break.html %}

## The Stack, Phase by Phase

Here is the stack, organized by where it sits in the life of a project. While modular and context-dependent, many of the labeled phases hold across different undertakings. The tools change faster, and in one direction: the stack gets simpler every time the models improve. %%i dont think that one direction bit is actually my opinion. more like there is an oscillating pattern where even a step change in model capability within the frontier labs can eat the capabilities of counteless third-party or open-source tools. almost as soon as that collapses the stack, it also increases developers' reach into the near possible and like a hydra, new shiny useful things almost immediately pop up where old tools were cut down. the predictable response from many who are attempting to scurry out of the massive looming shadow of the Permanent Underclass is to skip the stages of grief, rip off the bandaid before switching costs grow too large, and change whatever needs changing about what it means to do computer work. The rate of oscillation only stands to increase from here as AI models begin making larger and more significant contributions to recursively improving their own intelligence. %%

%%anwyay yeah make allat flow and such%%

### Capture

%%link to each tool or other thing like skills.md when it's first mentioned in the rest of the post here%%

Everything starts as context, and I'd rather not be the one who remembers or retrieves every single bit of it anymore. An approach informed by the concept of prosthetic knowledge now takes precedence (I credit Rich Oglesby with coinage of the phrase in his [eponymous art and technology blog](https://www.tumblr.com/prostheticknowledge), which defines it as *information that a person does not know, but can access as needed using technology*). Many important conversations I have today get captured automatically with frequently evolving chains of hardware and software. Face-to-face ones become [Bee](https://bee.computer) transcripts; virtual meetings become screenpipe, Gemini, or Grain transcripts; cron jobs on an always-on Mac Mini pull all of it into my Obsidian vault many times a day. Texts, email, and my Google accounts are reachable through MCP servers and CLI tools, so an agent can read them when a project needs them.

Visual references move differently now than in the web app moodboard days of old. On my laptop, screenpipe watches me browse for inspiration and writes a description of the session, with URLs, into that day's note under the right heading. It crawls the operating system's accessibility tree and watches everything else I do on my screen while its active to keep a continuous record I can come back to when I need to remember that Cool Purple Thing I saw on are.na last Thursday. It can even use those recordings to develop an understanding of how I work with context over time and build modular automations for anything I want. On my phone, references go into an album in my photo cloud. Agents can reach that album through MCP; in practice I pull it down on demand into a local folder inside the agent's filesystem scope for some specific task on a project. Direction can even autonomously flow out of those media collections now as the models analyze them to abstract language that shapes creative direction, write generative prompts for other tools, or balance the weights of the various aesthetic directions which might inform a creative approach (defining the preferred boundaries of the latent space for a specific task or project scope). Conversations flow in on their own. References get summoned. Either way I can annotate later, through an agent on my phone or laptop or in Obsidian on any of my devices.

### Framing

Some ideas start as a hand-typed note, a page of paper, or a whiteboard. All of them get pulled early into a shaping session with an agent, usually Claude Code in the terminal or the mobile app, running custom skills I've built for various purposes. The one I use most is `/socratic`, which draws my thinking out one question at a time until something concrete falls out; `/metaprompt` often fleshes out and force multiplies the prompts I hand to other tools. I've used both while writing this post (e.g. to grab those nature photos from the cloud, compose a grid saved as a new image, and mark that image up in the post source). I also use free open-source skills I've installed from various agent marketplaces or skills.md. I try to limit the number of skills I manually invoke by habit. Consistent prompting helps yield more consistent results and this feels like one of the safe place to form habits in a world that's changing so fast; just start using other skills instead when current ones lose utility or favor. Thankfully there are skills to dynamically and autonomously select which skill to use based on prompts and context, so that covers other things I'm not manually invoking every session. I'll can list my skills or dig up docs if I'm not getting the results I'd like, but I don't remember the last time I did this; it's been a while.

### Exploration and build

The runtime is herdr inside Ghostty: a terminal multiplexer where I run several Claude Code sessions side by side, each on its own thread of the problem (or on entirely unrelated tasks). It's closer to constantly switching between a bunch of different simultaneously ongoing text-based role-playing games than typing code in an IDE (I'm still so surprised at how rarely that happens now and how quick things took to get there).

I used to hand more autonomous threads that needed less monitoring to Conductor. I do that less now, because herdr and Claude Code's native subagents and worktrees cover the same ground with fewer moving parts and more generality. Devin (formerly Windsurf) is the IDE I open when I want my hands on the code. Some edits are faster to code than to explain; some agent misses are stubborn enough to fix by hand; sometimes I want to read the code to understand it and 15+ years of habit has gotten me pretty used to doing that in an IDE.
%%i think this speech section is ok here idk. %%
On the topic of explanation speed, multimodal input and tools that support it (new age third-party dictation apps, intelligent transcription models, etc.) have picked up a lot of steam too. I like to use Spokenly on offline mode with the free and local Nvidia Parakeet transcription model to hold down a hotkey and speak to agents through my Macbook. While an abrupt rise in the frequency of voice interaction felt like a strange change to many (see again: memes about Wispr Flow muzzles or using court stenomasks for quieter transcription), it came very naturally to me after speaking with computers every day for years with all the smart devices the Alexa work piled up in my living space.
%%maybe some tone edits here%%
Something odd has happened in the last few months though: my frequency of speech input at my main workstation has declined sharply. I'm not really sure why. If I had to guess, I may be regressing to typing as a comfortable default as a result of some stressful life events and shifting a lot of variables around my workspace frequently. I wrote and chatted with type much more often than I spoke during the formative social years of my adolescence and something about the brain-language-fingers feedback loop feels more comfortable and natural to me than communicating my ideas with speech (especially when doing so involves precise intent). I assume my speech input frequency will swing back up with time. I'd love to see the day where multimodal input accommodates even stranger inputs like spoken onomatopoeia or interpretive dance to make something of more energetic and animated work styles.

### System design and polish
%%use unordered list here to enumerate advantages%%
Impeccable runs inside Claude Code and gives me control at the level a designer works: spacing rhythm, type, contrast, the difference between a system and a pile of components. Four things earn its place: its moveset of design operations; a DESIGN.md spec with a JSON sidecar, which Impeccable interprets more reliably than any spec Claude rolls on its own or pulls from a generic skill; audits that catch AI slop, contrast failures, and similar craft crimes where fluency shows first; and live iteration in the browser.

### Review

Review depth scales depending on the intent and scope of pull requests and the range can be fairly wide. One concrete case is a simple visual component. A live localhost instance is usually already open in my browser, so I check it with my own eyes or try to break it by interacting. If the change is small, passes the eyeball test, and shows no visual regressions, it probably merges without me opening the diff. I don't need to hand-review an agent's pass on a button component if it lints, the tests pass, and it looks and works like it should; with today's tools, that's a waste of time. The project's agent loops catch anything strange through iteratively maintained test coverage, or clear it out eventually through optimization passes over time. I might manually invoke an automated code review for larger PRs or in a pinch, where the agent can rely on code quality heuristics to identify and correct any issues. I'll usually only actually read a diff to double check for something I already know I'm looking for rather than to assess general code quality. %%does this belong with next paragraph? or maybe just needs a better segue%% If I undertook an extensive design systems project today or were working across an appropriately mature product, I might put some automated visual regression checks in place and visualize components on a documentation alongside their specs and/or in a sandbox with state machines to assist review efforts.

### Docs

The first reader of my docs is an agent. The agent also wrote them with me, and it's probably the primary author if we're going by word volume. %%dig up more meat from the amazon design system research on documentation and beef this up. can maybe talk about storybook here. one thing missed was the vercel guidlines inspiration and the vercel design engineering principles. good to talk about conventions for agents browsing web that came out of conventions like robots.txt. relevant here is also the COMMS.md convention I invented: Create a COMMS.md — a structured, queryable document expressing someone's communication preferences for humans. https://openclawdir.com/skills/comms-md-0pe1c8 im pretty sure i hosted my comms.md at some point for other people's agents to find, but idr if it's still on my website. include if you can find it, dw if not.%%

{% include soft-break.html %}

## Glue

%%reduce superfluousness here%%
The frontier news I've been chewing on for the last two weeks is Jev. TypeSafe AI came out of stealth on September 15, 2026 with Jev as its first model, and it calls Jev a System One Model (a nod to Kahneman's fast, intuitive System 1), built to make fast, sensible, consistent decisions that software can use directly. I first heard the founding hypothesis a year earlier, on a hike with a TypeSafe engineer.

It's a wise bet. Clamping the degrees of freedom in how information flows through a model, moderately, buys outputs that are predictable without being fully deterministic. The cost and speed gains are real, and they're the least interesting part. A decision model like this makes intelligence better glue: the layer that binds a widening range of inputs to common-sense outputs.

Paul has a similar ambition for Impeccable's roadmap: a move from next-token prediction to what he calls "next step prediction." My interpretation of that is chained decisions that compose whole units of work, which agents execute with growing autonomy, without taking the creative voice away from the designer. %%add links to important people throughout post like Paul Bakaus website. do it at first mention, not here.%%

Better glue means better joinery, walls, and eventually cathedrals. We'll soon be able to capture a wider range of multimodal inputs, return more reliable outputs that make sense, and let that compound. Somewhere up the chain the experiences start to seem like they transcend sense altogether, the point at which Clarke said technology and magic stop being distinguishable.

That optimism became a research proposal I co-authored with [Jem Gold](https://jem.computer)  [TK: proposal link] this summer for the [Thinking Machines interactivity research grants](https://thinkingmachines.ai/news/interactivity-research-grants/). Jem's research, prototypes, and projects at the intersection of design, expression, and intelligent computation have deeply inspired me over the last ten years and change. Her work and words shaped a good part of my path, especially when owning the design systems work at Amazon. We wrote it because the future of radically transcendent and borderline magical interfaces for creative expression excited both of us. It's a wonderfully reassuring feeling to have collaborated with a friend and mentor with a kindred spirit whose work I regard this highly and who wanted to build something this cool together. [TK: how to frame the outcome]

%%soft break include here pls%%

Ten years ago, I was watching the neural networks of old paint photographs crudely. Today in San Francisco at the foot of the AI singularity, I'm still watching functions get less wrong—now I get to decide what they're for and how I and my ways of working will grow with them over time.

Do you have thoughts on this post? I'd greatly appreciate your feedback, opinions about the future of this space, suggestions for anything I should try next, or whatever else you have to share. {% include snippets/twitter-dm.html %} and let's talk shop.
