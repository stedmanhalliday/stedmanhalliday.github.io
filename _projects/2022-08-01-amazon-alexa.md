---
layout: project
title: Amazon Alexa
date: 2022-08-01
description: Alexa Voice Services design lead for multimodal interfaces, third-party platforms, and design systems
categories: [ux, front-end development, design systems]
image: /assets/img/2022-08-01-xApp-dash-VUI.webp
hero: projects/amazon-alexa-hero
---

At Amazon, I led UX design for emerging multimodal voice technologies within the Alexa Voice Services organization with a focus on TV and ambient device experiences. I co-owned the xApp design system, unifying third-party deployments across vendors like Samsung and LG, and contributed component and feature design as well as production code in React and TypeScript. My work included prototyping interactive voice experiences in Figma, developing multi-agent attention systems for shared devices, and advancing Alexa's ambient computing vision. I also represented the design org in OEM negotiations, led cross-functional design thinking workshops, and helped shape the future of third-party Alexa through systems strategy and feature development.

{% include soft-break.html %}

## Feature designs

### Multi-agent attention systems

Designing for multi-agent attention systems meant tackling one of the more novel challenges in the ambient computing space: enabling multiple assistive agents like Alexa and OEM-branded voice assistants to coexist gracefully within the same interface. I explored concepts for television experiences with vendors such as Vizio, Samsung, and LG, focusing on how to preserve brand identity while ensuring clarity, usability, and a cohesive shared context. This work required defining new affordances and visual patterns for agent interaction, navigating the tradeoffs of attentional real estate, and imagining how cooperative agents might fluidly share tasks or hand off control. The project surfaced early principles for designing pluralistic, multi-agent ecosystems and pushed us to think more deeply about what collaboration means when machines share a screen.

Strategically, these efforts solidified our organization's advancement of agent interoperability in contrast to competitors' preferences for zero-sum design strategies. In hindsight, it's exciting to see multi-agent interfaces gaining traction as a natural evolution in AI UX. I'm proud to have explored this terrain before it was a mainstream focus and it energizes me to see the field moving in a direction that validates that early thinking.

<figure>
    {% youtube "https://youtu.be/3tQIxIHznFY" %}
    <figcaption>Multi-agent selection (Vizio and Alexa)</figcaption>
</figure>
<figure>
    {% youtube "https://youtu.be/4mSkHFoTcOs" %}
    <figcaption>Multi-agent: adapted Alexa</figcaption>
</figure>

### Multimodal multitasking

Multimodal multitasking asked a foundational question: how can users access the full breadth of Alexa's capabilities (voice, GUI, smart home, content, and more) without interrupting what they're already doing? I worked on multiple dashboard and control surface concepts which evolved into a persistent quick-access panel for TV surfaces. The design needed to balance utility with subtlety, surfacing the most relevant actions without overwhelming users or obscuring content. With the help of extensive testing, this work helped define interaction patterns for layered contexts, letting users issue voice commands, glance at timers, or adjust lights while watching video. It expanded our thinking around what ambient assistance can look like when it doesn't dominate the screen.

<figure>
    {% youtube "https://youtu.be/lRQFjbhfavM" %}
    <figcaption>Quick-access dashboard concept</figcaption>
</figure>

<figure>
    <img src="/assets/img/2022-08-01-alexa-qap.webp" alt="xApp dashboard">
    <figcaption>Quick-access panel concept</figcaption>
</figure>

<figure>
    <img src="/assets/img/2022-08-01-alexa-compact-qap.webp" alt="xApp dashboard">
    <figcaption>Compact quick-access panel concept</figcaption>
</figure>

<figure>
    {% youtube "https://youtu.be/JXyYihYVzMI" %}
    <figcaption>Alexa for TV quick-access panel</figcaption>
</figure>

### Ambient Alexa

Alexa's ambient experience concepts were driven by a core question: how can we make better use of screen real estate without being distracting or intrusive in moments when users aren't actively engaged? I contributed prototypes and design explorations to solve the "black rectangle" problem posed by the television's place in modern living spaces, crafting passive-yet-engaging visual modes for large displays. These included cinemagraph-style native advertising for Prime Video content (like *The Lord of the Rings: The Rings of Power*), sports dashboards with live scores, tickers, and game updates, visualizations for relaxation and meditation, evolving screensaver displays (e.g. Conway's game of life), and customizable widgets for calendars, deliveries, and smart home states. I wrote React and TypeScript prototypes to demonstrate how these experiences could feel subtly dynamic or informative and context-aware, alternately offering glanceable value and reinforcing Alexa's ambient computing vision. I also worked with Amazon's Fire TV teams to extend a more consistent vision across first and third-party surfaces.

<figure>
    <img src="/assets/img/2022-08-01-ambient-alexa-widgets.webp" alt="Ambient Alexa: at-a-glance widgets">
    <figcaption>Ambient Alexa: at-a-glance widgets</figcaption>
</figure>

<figure>
    {% youtube "https://youtu.be/crxhzQn8CWA" %}
    <figcaption>Ambient Alexa: sports mode</figcaption>
</figure>

<figure>
    {% youtube "https://youtu.be/kCyp8FGTgiY" %}
    <figcaption>Ambient Alexa: Prime TV promo</figcaption>
</figure>

{% include soft-break.html %}

## Design systems

My most substantial contribution at Alexa was leading the creation of a new design system as part of the xApp initiative: an Alexa Voice Services effort to unify third-party deployments of Alexa into a single, scalable codebase. I began by compiling a comprehensive report on best practices in design systems and accessibility from sources like [*Design Better*](https://designbetterpodcast.com/) and my extensive notes on design systems from attending [Clarity Conference](https://www.clarityconf.com/) which secured cross-org buy-in for the adoption of a unified design system as part of the xApp overhaul.

I subsequently co-owned the new xApp design system with an engineering partner and shifted to operating as an embedded design technologist. I audited and adapted legacy UI, designed new components, and implemented them directly in React and TypeScript. I also prototyped in a live staging environment to test theming, device previews, and responsive behavior, validating design intent against the realities of multiple platforms. Beyond foundational work, I used the design system to ship actual features to production, including the relaunch of the Alexa Home and Settings experiences on TV.

<figure>
    {% youtube "https://youtu.be/i9W7jnS35mo" %}
    <figcaption>Alexa for TV xApp redesign walkthrough</figcaption>
</figure>

To drive adoption of the xApp design system, I hosted office hours, led working sessions with engineers, and contributed to evolving the spec for scalable innovations (e.g. variable font support and shared source strategies across other Amazon orgs). This work left me proud of my ability to deploy a wide variety of skills in my toolbox, blending design craft, systems thinking, technical implementation, and organizational influence to scale great UX across a wide and varied ecosystem.

{% include soft-break.html %}

## Internal tools

Shortly after onboarding, I volunteered to join an internal prototyping working group focused on exploring how Amazon's designers might adopt new tools for creating voice-centric multimodal experiences. It started as an experiment and became a fun and exciting challenge: injecting JavaScript into Figma to drive prototype interactions, view transitions, and audio feedback with real voice recognition. My efforts yielded a process for high-fidelity browser recreations of the Alexa experience on devices like Echo Show with voice and GUI feature parity, sketching the foundation for an internal tool that the working group could formalize for broader use.

<figure>
    <img src="/assets/img/2022-08-01-prototype-config.webp" alt="Prototype configuration">
    <figcaption>Alexa browser prototype configuration</figcaption>
</figure>

<figure>
    {% youtube "https://youtu.be/qGgQ5FoUL7w" %}
    <figcaption>Alexa reminders browser prototype demo</figcaption>
</figure>

The initiative was playful, technical, and fast-moving. It let me flex outside my role early on, collaborate across disciplines, and contribute to a culture where experimentation and curiosity were core to the process. While less formal, the effort had real impact in demonstrating the org's commitment to validating early concepts more effectively, regularly revisiting and evaluating design processes, and encouraging more nimble and inventive approaches to design. It accelerated cross-organization adoption of Figma and solidified commitments to other tools for voice-first prototyping. For me, this early effort reinforced the idea that novel tools and a willingness to try unusual things often spark the most meaningful innovations.

{% include soft-break.html %}

## Design leadership

My time at Amazon marked a turning point in the evolution of my design leadership capabilities. While co-owning the xApp design system alongside engineering, I wasn't just focused on execution. I was increasingly relied on to align cross-functional teams, influence systems strategy, and advocate for scalable, user-centered solutions across the Alexa Voice Services organization. I began translating fragmented design initiatives into a clear and forward-looking vision for third-party Alexa experiences, which I then presented to external partners like Samsung and LG during multi-day workshops. These sessions sharpened my ability to navigate negotiation, drive alignment across organizational boundaries, and represent the voice of design at a strategic level.

Internally, I took initiative to build connective tissue across teams. I led design thinking workshops with AVS management to improve cross-org collaboration, and routinely presented roadmaps and new features to senior design leadership to secure buy-in and resources. These efforts helped surface and prioritize opportunities where design could operate at greater leverage to shape not just what we built, our reasoning and processes, with output extending beyond AVS to other Amazon orgs. The experience gave me a proving ground for stepping into a broader leadership role and left me confident in my ability to grow into design management with both strategic fluency and a bias for action.