---
layout: post
title: "Q&A: Why are toxic, competitive attitudes so common in the design community?"
date: 2017-11-22
author: Stedman Halliday for [Prototypr](https://blog.prototypr.io/)
description: "Structural and historical rationales for fellowship and competition in design practice"
tags: [design, engineering, software, code, community]
---

![Massimo Vignelli](/assets/img/2017-11-22-massimo.webp)

<p class="mt-200"><em>Q&A is a column in which I'll post long-form answers to thought-provoking questions. This particular question and its answer are reposted from thread in <a href="https://www.facebook.com/groups/340004709510141">Designers Guild</a>, a Facebook community that I moderate. Designers Guild consists of 10,000+ designers committed to discussing, learning, and growing together.</em></p>

<h2 class="mt-200">The question</h2>

_A number of discussions last week revolved around design's prevailing cultural prioritization of competition over cooperation (the collaborative ethos we often see in software development and engineering circles, especially in open-source communities)._

Some quotes for context:

> *There's a heavy tendency for designers to compete and contrast themselves with one another rather than cooperate…*
>
> *I guess what I'm not understanding is why designers are less primed to being good at working together in an open-source context than engineers…*
>
> *I've also seen design folks click [sic] out into camps, and compete with each other when there was no reason to… (yikes, why do we do that, it's like we need the pat on the back or the recognition…)*

It would seem that toxic, competitive attitudes which impede collaboration are a widely recognizable problem in the design industry. But the question is: _where does the mindset behind the toxicity come from?_

{% include soft-break.html %}

## The answer

One easy answer that addresses the cultural difference between design and software engineering in this regard is rooted in software's historical context.

### A brief history of collaboration in software development

**Software has grown into the monolith it is today with transparency, openness, and community hardwired into its DNA.**

Because software development originated in academic research environments, the principles of cooperation and openness for the sake of collective intellectual advancement were easy carryovers from the scientific and academic communities. It also helped that software was not the massively commoditized industry that it has since become; originally there was little incentive to stray from this model.

Richard Stallman effectively spearheaded the free software movement when he announced the GNU Project. In 1985, he founded the [Free Software Foundation](https://fsf.org) and penned the [GNU Manifesto](https://www.gnu.org/gnu/manifesto.html), enumerating his reasons for believing so strongly in the values that free software promulgates. Some standout excerpts:

> *I consider that the Golden Rule requires that if I like a program I must share it with other people who like it. Software sellers want to divide the users and conquer them, making each user agree not to share with others. I refuse to break solidarity with other users in this way. I cannot in good conscience sign a nondisclosure agreement or a software license agreement…*
>
> *So that I can continue to use computers without dishonor, I have decided to put together a sufficient body of free software so that I will be able to get along without any software that is not free…*
>
> *Everyone will be permitted to modify and redistribute GNU, but no distributor will be allowed to restrict its further redistribution. That is to say, proprietary modifications will not be allowed. I want to make sure that all versions of GNU remain free…*
>
> *Once GNU is written, everyone will be able to obtain good system software free, just like air…*
>
> *Copying all or parts of a program is as natural to a programmer as breathing, and as productive. It ought to be as free.*
>
><cite>—Richard Stallman, <em>GNU Manifesto</em></cite>

<blockquote class="bigquote">In a word, what Stallman values so staunchly (in addition to freedom) can be described as <em>fellowship.</em></blockquote>

Linus Torvalds followed in Stallman's footsteps with the open release of the Linux kernel's source in the early 1990s (later relicensed under a GNU General Public License: a free software license authored by Stallman himself). The combination of GNU's free software and operating system with the Linux kernel brought about the first entirely free software environment for users. Neither that achievement, nor the entirety of the modern-day Linux ecosystem (not to mention countless other technologies) would be possible without the spirit of fellowship that united thousands of volunteer developers with the aim of constructive collaboration.

The idea of fellowship propagated even further throughout the development community with the advent of the World Wide Web. Tim Berners-Lee proposed and executed his early vision of the Web at CERN, another research environment where open informational exchange was a value of paramount importance. Furthermore, the Web was created for exactly that purpose: it enabled researchers to exchange and browse information with far more efficiency… and exchange they did!

<figure>
    <img alt="Tim Berners-Lee" src="/assets/img/2017-11-22-berners-lee.webp" />
    <figcaption>Tim Berners-Lee at CERN in 1994 next to an early iteration of the World Wide Web.</figcaption>
</figure>

Collaboration and the willing exchange of information continue to be absolutely crucial to the world of software development today. It's not difficult to see how these ethics are structurally enforced by some undeniable industry realities, specifically:

- The idea that "everything is built on something that was built on something that was built in 1970" encourages borrowing code as a productive and necessary practice.
- Carefully reading documentation (authored by some other developer) and searching for sources of previously shared information (e.g. Google-fu and browsing Stack Overflow) are some of the most essential platform-independent skills for any professional developer out there today.

So far, this historical background does an alright job of explaining how collaboration has been valuable to software development in the past, but we still lack a satisfactory answer to our main question.

<blockquote class="bigquote">I believe that the essential differences in each industry's culture surrounding willing collaboration come down to categorical differences in how creative value is construed.</blockquote>

### Why is fellowship valuable to engineers?

As a discipline, engineering is outcome-oriented and largely favors vertical progression. Achievement usually means rigorously honing a focused skillset and digging deeper to spawn new technical outcomes within a specific scope or domain. As an analogy, consider two miners, each in search of a different mineral—let's say iron and lead. The iron miner has no real interest in unearthing lead other than to trade it with the lead miner for the iron ore that they recover, and the lead miner has a similar attitude. They've staked different claims and stated different goals, so they're not truly competing with one another. However, each stands to gain immensely from collaborating with the other.

By trading ore with one another and sharing mining secrets and techniques, the miners can increase both of their yields. It doesn't even matter if the result is that the iron miner extracts more lead ore: they would've used the same amount of mining resources in their search for iron anyway, but now they can earn revenue by trading with their neighbor. Similarly for the lead miner, all the lead ore that they are trading with the iron miner to obtain would've been inaccessible to them anyway, seeing as the iron miner has already staked their claim on that land. This is now ore in the hand that can be traded for at face value rather than prospected for with expected losses.

In a similar fashion, developers don't really see themselves as direct competitors with others who happen to be digging a different hole (they may often view each other as indirect competitors in the abstract, which leads to rampant impostor syndrome and software development's own brand of toxic and condescending attitudes, but that's another story).

<figure>
    <img alt="Coal miners" src="/assets/img/2017-11-22-miners.webp" />
    <figcaption>"Real miners don't use Pascal." 🙄</figcaption>
</figure>

Additional value can also be created on massive scales when insights arise from the intersection of a developer's own vertical progress with their understanding of parallel innovations. This is similar to the [correlation between artistic hobbies and scientific achievement](https://priceonomics.com/the-correlation-between-arts-and-crafts-and-a/). To summarize, Nobel-Prize-winning scientists are 280% as likely to have a hobby in the arts as are scientists in general. The underlying theory is that experience and vertical achievement in the sciences can cross-pollinate with avocational creative exploration to lend new insights to the scientist's practical career endeavors.

<figure>
    <img alt="Nobel scientist hobbies" src="/assets/img/2017-11-22-nobel-hobbies.webp" />
    <figcaption>A University of Michigan study found that elite scientists have a particular affinity for artistic hobbies.</figcaption>
</figure>

A good example of value created by crossover innovation in software is how neural networks (a highly academic subject confined to the relatively inaccessible fields of machine learning and deep learning research only a few years ago) are now a fairly commonplace component of consumer technology products. This couldn't have happened without parallel research in the fields that artificial intelligence is applied to, such as imaging (computer vision and image recognition) and language and acoustics (speech recognition and natural language processing). A neat example that demonstrates both of these ideas is the application of deep learning to [visual art processing](https://blogs.nvidia.com/blog/2016/05/25/deep-learning-paints-videos/) and [style transfer](https://shafeentejani.github.io/2016-12-27/style-transfer/) (the abilities of AI to identify the styles of a images and apply them to other images).

<figure>
    <img alt="Deep Photo Style Transfer" src="/assets/img/2017-11-22-style-transfer.webp" />
    <figcaption>Researchers from Cornell University and Adobe take an original photo (left) and a reference image (center) as input and combine them output a new image (right). This technique is called <a href="https://arxiv.org/abs/1703.07511">Deep Photo Style Transfer</a>.</figcaption>
</figure>

It turns out that accepting help and being helpful in return are… well, helpful! In the famed words of Sir Isaac Newton (from a letter to Robert Hooke about collaboration, of all subjects):

> *If I have seen further it is by standing on ye sholders [sic] of Giants.*
>
> <cite>—Sir Isaac Newton, letter to Robert Hooke</cite>

<blockquote class="bigquote">It doesn't discredit developers to borrow the techniques that they use to achieve their goals because it is the rigor behind executing outcomes that is valued and celebrated.</blockquote>

That's not to say that the creativity and ingenuity involved in execution are not praiseworthy (in fact, they are frequently lauded). It's just that the first and most important question in software development is whether or not the outcome actually works.

<blockquote class="bigquote">Ultimately, being a developer is all about having the grit to corral everything together into a practical outcome.</blockquote>

### Why do designers systematically fail to value fellowship?

In contrast to software engineering's cultural endorsement of vertical progression, creative disciplines (design included) largely incentivize horizontal progression. This is an inevitable consequence of rewarding the originality of outcomes and intellect over the rigor of process. For a long time, being a big-name designer hasn't been about developing reliable and repeatable processes to consistently meet industrial goals. Instead, the idea of success in the design world has largely revolved around the ability to effectively wield cultural capital and trade on style, voice, and personality.

To return to the mining metaphor, imagine if the miners from before had redefined their success along the terms of who has claimed the best stake (not to be confused with the stake that has the highest mineral yield… just the "best" stake, whatever that may arbitrarily mean). The game then becomes all about seeking out new ground, staking a claim, and defining your hole according to criteria that position it as superior to all others dug before it. Within this value system and with these judgment criteria, every miner actually is in direct competition with the next. The design analogs:

- **Seeking out new ground**—generating and executing on an "original" concept or aesthetic
- **Staking a claim**—accepting credit for the intellectual labor involved in the generating novelty and/or success of a project
- **Touting your hole as superior**—cleverly rationalizing your design decisions; criticizing others' design decisions in equal or greater measure; utilizing past successes, cultural knowledge, voice, and cultural identity to increase your brand profile as a designer

<blockquote class="bigquote">In other words, an inordinate amount of the work concerns talking about the work in order to convince others of the the value of the design solution and, by extension, the designer's originality and intellect.</blockquote>

I'll let Mike M. tell it:

> *Everyone who ever told you good work sells itself was a lying jerk… I was told that good work, really good work, sold itself. And that if you had to stoop to selling it you were demeaning the profession. This is shit advice from shit people.*
>
><cite>—Mike Monteiro</cite>

Monteiro makes a [good case](https://medium.com/mule-design/everyone-who-ever-told-you-good-work-sells-itself-was-a-lying-jerk-65acc1a72f74) for why it's a necessity for designers to develop ancillary presentation skills and learn how to speak about their work. But if it's true that really good work can't even sell itself, surely there must be a problem, no? **The implication here is that clients cannot readily understand the value of design without some kind of presentation.**

Why is the value of design so inapparent? I'd posit that it's because most designers don't explicitly understand how exactly design adds value to its substrates in accordance with their own values and thinking patterns. They may have an intuition for the fact that design has a net-positive effect when executed appropriately, but the fact that the cult of design so frequently values the wrong things (perceived aesthetic novelty and conceptual intellect) makes the value of design incredibly difficult for even designers to quantify.

**It would behoove many a designer to realize that value in the realm of commerce is a business concept and not a philosophical one.** Convincing other people of design's value is about quantifying what it can do for their businesses. Watch [this video](https://www.youtube.com/watch?v=RKXZ7t_RiOE) posted in a Designers Guild discussion this week where Chris Do gives a phenomenal master class in just some of the ways that designers can discuss value when doing business. (Note: it's very different from the ways in which most designers represent the value they can provide to businesses and that's why it's successful.)

{% include soft-break.html %}

The current difficulty with surmounting the design industry's impasse of misplaced philosophical values arises from the fact that most of 20th century design ran on **auteur theory** (the idea that a single creator is responsible for executing all aspects of a collaborative creative work). Auteur theory is what emphasizes stylistic originality and the intellect of the individual creator above all other important factors that bring a creative project to fruition.

Auteur theory is why we have design "legends" and "rockstars." It's why [Paul Rand](https://eyeondesign.aiga.org/the-11-types-of-trendy-graphic-design-paul-rand-hated/), [Massimo Vignelli](http://designobserver.com/article.php?id=15458), and many other a graphic design granddad have wielded cultural capital amassed over their entire careers to convincingly decry nearly everything that's succeeded them in the postmodern era. Although their criticisms are not entirely invalid, one might question the motives behind such vigorous disapproval of alternative approaches to craft.

How else could these legends of old defend their status as auteurs other than with vigorous criticism? They're supposed to be singular geniuses who are irreplaceable provisioners of value. In practice, that all too often translates to devaluing things that deviate from modernism (the one *successful* and *correct* way to add value—if clients don't believe that, modernists don't get paid; if the culture doesn't believe that, modernists don't get legacy clout). This is the fault of auteur theory at its peak, and its vestiges are largely to blame for the commonplace toxicity and non-collaborative values in design today.

<figure>
    <img alt="David Chathas collage" src="/assets/img/2017-11-22-david-chathas-collage.webp" />
    <figcaption>It's 2017, y'all still mad?! (Images courtesy of <a href="http://www.bestgraphicdesignerintheworld.com/">David Chathas</a></figcaption>
</figure>

Another problem with rewarding formal originality and perceived intellectual inventiveness over all else is that it makes it difficult to trace the genealogy of ideas, which tell us a lot about how to create value in the future. ["Steal like an artist,"](https://www.youtube.com/watch?v=oww7oB9rjgw) has quite a different ring to it than Newton's modest musings on the shoulders of giants. It's not too often that software strictly requires anyone to provide citations either, but because the field has developed a culture that does not penalize collective achievement and the re-synthesis of existing ideas, the majority of developers share their resources quite enthusiastically.

In contrast, the value system in the present design landscape ensures that in most cases, we still systematically fail to attribute value to team members whose work goes unrecognized. Additionally, appreciating the output of the designers whose work an outcome intellectually builds upon is optional at best… but things seem to be getting better.

{% include soft-break.html %}

### A Better Future for the Value of Design

One good thing about the intersections of design, technology, business, and analytics is that creatives are being held to a more universal and honest standard that is quantifiable from a business perspective. It's good to be original to the extent that one can, but what do novel outcomes beget in the real world; in other peoples' utilitarian value systems?

<blockquote class="bigquote">When we cease to reward design outcomes solely for perceived originality and individual intellect, and instead begin to hold them to standards defined by results, maybe the world will better understand the value of design.</blockquote>

*How suitable was this strategy for the target market? How did this campaign create growth?* **If design is a practice of aesthetic utility, designers should probably ask utilitarian questions and take utilitarian measurements.** The leaders who ushered in the precursors of modern design at the Bauhaus a century ago may have made strides into adopting a more scientific process for creating work… but as far as feedback for assessing work, we're mostly still thinking like artists.

Perhaps if designers start measuring their outcomes in addition to critiquing them, everyone's contributions to process can come forth and find value. **When people feel valued for their contributions, they contribute abundantly instead of viewing intellect as a scarce resource to sequester for their own gain.** When designers manage to value one another and incentivize valuable contribution on an industry-wide scale, the benefits of collaboration and fellowship will have become central community tenets.

{% include soft-break.html %}

What did you think of this post? {% include snippets/twitter-dm.html %} and let me know if you've got thoughts on any of these topics.