---
layout: post
title: "The Models [Don't] Have Eyes"
date: 2026-01-27
description: Closing generative UI's perceptual intelligence gap
tags: [technology, design, engineering, code, artificial intelligence]
permalink: "/blog/perceptual-intelligence-gap"
#image:
---

Anyone who's vibecoded for more than an afternoon knows the pattern: the AI nails your component logic, wires up your state management, even writes reasonable tests. Then it spends 46 turns failing to center a play button in a circle.

The memes write themselves. But underneath the frustration is a real architectural limitation worth understanding.

{% include soft-break.html %}

## The Problem: The Models [Don't] Have Eyes

As the name suggests, large language models process the world through language [or more abstractly, text; see also [*Text Is the Universal Interface* by Roon](https://scale.com/blog/text-universal-interface)]. When they write CSS, they're pattern-matching against millions of code examples, statistically converging on what syntactically looks like correct styling. But style isn't syntax. The true primitive of visual design is human optical perception, and that's a black box these models presently have little access to.

This matters because metric correctness and optical soundness are often very different things.

The play button problem is a rather trivial example that is likely solved for in most instances today, but it is nonetheless illustrative of the greater issue. Put a triangle inside a circle. The mathematically centered position, equal padding on all sides, looks wrong. The visual weight of the triangle pulls leftward. Every designer knows you nudge it right by a few pixels until it feels centered. That "feel" is the gap.

The naive approach (metric centering) is trivially encodable. The correct approach (optical centering) requires either:

1. Geometric construction heuristics, which exist but are rarely encoded *generally* in training data (as opposed to datasets just including plenty of optically sound examples)
2. A feedback loop with strong visual perception

Current models don't rely strongly on either. They generate style values, imagine what visual output probably looks like based mostly on diffing against expected patterns from text samples and sometimes a snapshot, and call it done. There's a lack of rigor in the intermediate perceptual verification step of the feedback loop.

{% include soft-break.html %}

## Why Multimodal Doesn't Solve This (Yet)

"But Claude/GPT-4 can see images now!" True. However, bolting vision onto a language model doesn't automatically create perceptual intelligence. The model can usually describe what it sees decently well, but it can't yet reliably evaluate whether what it sees matches optical intent before tracing that evaluation back to the specific style values that need adjustment.

The missing piece is a causal link: perception → aesthetic judgment → code modification → verification loop. Abstractly, this is solving for taste, but that's a superset of the more precisely defined problems in scope here that offer excellent places to start.

The previous generation of UI engineering saw visual regression testing tools like [Percy](https://percy.io) that solved a related problem for humans: snapshot the UI, diff against baseline, flag unexpected changes. But that's change detection, not aesthetic evaluation. And it still requires humans to judge whether changes are improvements.

VLA models for robotics are solving this in 3-space and the time domain. Implementations for 2-D screen media would be dramatically simpler, but I don't know in detail what multimodal efforts in this space look like today that mechanistically rely on a rigorous (if dimensionally constrained) VLA loop. Later extensions could include motion design, 3D tools like Blender, and potentially interface paradigms we haven't seen yet.

{% include soft-break.html %}

## The Workarounds (And Why They're Insufficient)

The current hacks:

- **Style bibles in context**
[Vercel's Web Interface Guidelines](https://vercel.com/design/guidelines), [Refactoring UI](https://refactoringui.com): helpful, but you're just cramming best practices into a text window. No perceptual grounding
- **Agentic tool use**
Vercel's [React Best Practices](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) and [Web Interface Guidelines](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines) skills: these are like code snippets on steroids in that allow the models to better apply guidelines intelligently to codebases not included in training data
- **Human-in-the-loop feedback**: necessary now, but defeats the point of higher quality generative UI automation at scale
- **Training on "things people like to look at"**: model weights converge on the class of aesthetically pleasing outputs, which gets you directionally correct results more often but lacks precision. The results are inexact and not reliably reproducible; they are the result of statistical convergence rather than perceptual reasoning.

None of these give models the ability to see their own output and judge it the way a designer would. They are all workarounds that are necessary today but do not address the root issue.

{% include soft-break.html %}

## What Would Actually Work

A lightweight perception-action loop for UI generation:

1. Model generates styling code
2. Code renders to pixels
3. Vision model evaluates rendering against perceptual criteria (not just "does this match the mockup" but "does this look right"—initially at the consumer level, then later to the standards of professional design critique)
4. Evaluation feeds back an explicit loss function with basis in perceptual heuristics; the gradient signal allows explicit correction
5. Iterate until loss is minimized to yield perceptually sound results that users and designers alike expect (on par with and eventually exceeding human capability)

This isn't terribly speculative; it's just VLA with lower-dimensional output. Consider typographic rag: the ragged edge of a text block where lines break at different lengths. A good rag flows smoothly; a bad one creates distracting shapes or awkward word breaks. You want models that can see, articulate, and correct something like this (which corresponds exactly to the vision-language-action loop). Interestingly, a sizable number of practicing designers can't do this very well either. Most have trained perception and action, but the tradition of craft practice has historically neglected the language step (articulation). Models that close this loop could outperform many humans at the craft layer with futher iteration eventually unlocking the taste layer.

The infrastructure exists. I'm sure it's being actively developed in some shops. Nonetheless, frontier models are still left wanting despite impressive capability gains with December 2025 releases. Someone needs to build the appropriate training pipelines for perceptual reward models tuned to screen media in order to advance the frontier further. Today's models can view and describe output, but until they can actually *see,* aesthetically evaluate, and *act* on what they perceive, vibecoding will remain stuck at 90% magic, 10% hair-pulling. That final 10% is where taste lives.