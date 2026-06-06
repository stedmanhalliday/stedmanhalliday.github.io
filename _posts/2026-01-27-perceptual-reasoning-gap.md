---
layout: post
title: "Seeing Like a Designer"
date: 2026-01-27
description: Generative UI's missing primitive is a vocabulary, not sight
tags: [technology, design, engineering, software, artificial intelligence]
permalink: "/blog/perceptual-reasoning-gap"
image: /assets/img/2026-01-27-perceptual-reasoning-gap.webp
---

![Perceptual reasoning neural network](/assets/img/2026-01-27-perceptual-reasoning-gap.webp)

## The Missing Primitive Is a Vocabulary

Anyone who's vibecoded for more than an afternoon knows the pattern: the AI nails your component logic, wires up your state management, even writes reasonable tests. Then it spends 46 turns failing to center a play button in a circle.

The memes about centering a div write themselves. But underneath the frustration is a real architectural limitation.

{% include soft-break.html %}

## The Problem Isn't Sight

It's tempting to say the models can't see. They can, after a fashion. Large language models process the world through language [or more abstractly, text; see [_Text Is the Universal Interface_ by Roon](https://scale.com/blog/text-universal-interface)], and the multimodal ones can take in an image and describe it well enough. The deeper problem is what they can't do *with* what they see.

When a model writes styles, it's pattern-matching against millions of code examples, statistically converging on what syntactically looks like correct styling. But syntax isn't style. The true primitives of visual design are feature detectors in human optical perception, and above those, a learned vocabulary for reasoning over what the detectors report. That vocabulary is more than perceptual; it's connotative, a sediment of cultural and artistic meaning laid down across every altarpiece, poster, and illuminated page, all the way back to the painted bulls of Lascaux. Tens of thousands of years of people tacitly agreeing on what marks signify and how forms feel.

The model isn't working with *nothing* here. The latent space of language, plus whatever design sense its training instilled, is already a representation of some of that inheritance. It just isn't a good enough one yet. It stays too coarse for "this looks wrong" to be a reliable move the model can make, or "more geometric" a direction it can travel with much confidence.

So I'd reframe the gap as one of perceptual *reasoning*, not perception. Sight is the cheap part.

Metric correctness and optical soundness are often very different things. The play button problem is trivial and mostly solved today, but it illustrates the larger issue. Put a triangle inside a circle. The mathematically centered position, equal padding on all sides, looks wrong; the visual weight of the triangle pulls leftward. Every designer knows you nudge it right by a few pixels until it feels centered. That "feel" is the gap, and "visual weight" is exactly the kind of vocabulary the model doesn't have.

Metric centering is trivially encodable. Optical centering needs either geometric construction heuristics, which exist but are rarely encoded in training data as general rules, or a feedback loop with strong visual perception. Current models lean on neither. They generate style values, imagine what the output probably looks like by diffing against patterns from text samples and sometimes a snapshot, and ship it. The intermediate step, perceptual verification, is where the rigor's missing.

{% include soft-break.html %}

## Two Gaps From One Absence

The missing vocabulary opens two gaps, not one.

The first is the **perceptual gap**, the one above: the model can't reliably judge whether what it rendered matches optical intent, much less trace that judgment back to the specific values that need to change. The loop (perception, judgment, revision, verification) never closes.

The second is quieter and just as limiting: the **steering gap**. Even when the output is salvageable, you can't reliably *direct* it. Tell a model "more geometric, lower contrast, more volumetric depth" and you're mostly hoping, because those axes aren't represented precisely enough for it to act on them. They live in its general grasp of language and nowhere more exact. Design intent, today, is insufficiently addressable.

Both gaps are the same absence wearing two faces. Give the model a vocabulary of nameable visual axes and "this looks wrong" becomes a judgment it can render; "more geometric" becomes a direction it can travel. Evaluating a design and steering one turn out to be the same capability seen from either side.

{% include soft-break.html %}

## A System That Can Only Converge

Underneath both gaps is a mismatch in how models pursue a design at all.

A model runs design as monotone convergence: explore a little, then narrow toward a goal state until it's done. That's how it handles most tasks, and for most tasks it's right. Design isn't most tasks. Design is iterated divergence and convergence (a double diamond, if you've seen the diagram), where each convergence reframes the problem and seeds the next round of divergence. You don't aim at a known target. You generate options, commit to one, learn what the commitment reveals, and open the problem back up.

A system that can only converge can't design. It can only finish.

And here the vocabulary matters again, because divergence needs something to diverge *along*. Without nameable axes, "try something different" is just noise. With them, the model can propose a coherent next move: lower the contrast, make the forms more organic, push the depth. You choose the branch. That's the difference between a slot machine and an instrument.

{% include soft-break.html %}

## Why the Obvious Fixes Fall Short

"But the models can see images now." True. Bolting vision onto a language model doesn't hand it perceptual reasoning. It can describe what it sees; it still can't reliably evaluate whether what it sees matches intent and then act on the gap. Describing is not judging.

Today's workarounds all run into the same ceiling. Style bibles in context ([Vercel's Web Interface Guidelines](https://vercel.com/design/guidelines), [Refactoring UI](https://refactoringui.com)) cram good heuristics into a context window with no perceptual grounding. Agentic skills like Vercel's [React Best Practices](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) apply those heuristics more intelligently to unfamiliar codebases, but they still can't *see*. Tools like [0xdesign/design-plugin](https://github.com/0xdesign/design-plugin) generate variations for a human to judge, which just hands the judgment back to you. Training on "things people like to look at" nudges the weights toward pleasing output, but that's statistical convergence, not reasoning; directionally right, never precise.

Visual regression tools like [Percy](https://percy.io) had the right shape for an earlier era: snapshot, diff, flag changes. But that's change detection, not aesthetic judgment; a human still decides whether a change is an improvement. None of these give the model a way to see its own output and judge it the way a designer would. They're necessary workarounds, not fixes.

{% include soft-break.html %}

## What It Would Take

The fix isn't more sight. It's a vocabulary: a set of visual axes the model can reason in and a person can recognize. Designers already carry this informally: weight, scale, color, space, texture, form, the contrast dimensions you'd name in a critique. Make them precise and shared enough that the model and the designer are pointing at the same thing, and "this looks wrong" stops being ineffable.

Get that, and the loop can finally close: generate, render to pixels, evaluate the render against the axes ("does this look right," not just "does this match the mockup"), correct, repeat. The same vocabulary, run the other direction, is what you steer with. It's a vision-language-action loop with unusually low-dimensional output, and the pieces for it exist.

Consider typographic rag, the ragged edge of a text block where lines break at different lengths. A good rag flows; a bad one throws distracting shapes and awkward breaks. You want a model that can see that, name it, and fix it. A fair number of working designers can't name it either: craft training leans hard on perception and action and neglects articulation. A model that closes the loop could out-articulate most of us at the craft layer, and with more iteration, start reaching the taste layer above it.

Correctness is only the floor, and it's the least interesting part. Once those axes are steerable they stop being error-correction and become an instrument you can play. You can push a dimension past "right" into something deliberately strange, hold two of them in tension, chase an effect you couldn't have named going in. That's the consequence I'm actually excited about: not models that stop making ugly interfaces, but a controllable surface for expression, where a designer decides how far to push each axis and why. Closing the gap makes design correct; the steering it opens up is what makes design expressive.

{% include soft-break.html %}

Today's models can view an interface and describe it. Until they can see it, reason about it in a vocabulary, and act on what they find, vibecoding stays at 90% magic and 10% hair-pulling. That final 10% is where taste lives, and taste turns out not to be mystical. It's a vocabulary: a finite set of things you learned to notice and name. Make it legible to a model and the 10% gets tractable.

The point of doing that isn't a model that designs without us. It's a model you can actually direct, one that moves along axes you name, so the person with the taste stays in the loop and gets more done with it. Eyes were never the bottleneck. The words for what the eyes are doing were.

Do you have thoughts on this post? I'd greatly appreciate your feedback. {% include snippets/twitter-dm.html %} and let's talk shop.
