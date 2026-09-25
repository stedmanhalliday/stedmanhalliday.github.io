# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Hiring managers and recruiters for senior design and product leadership roles come first. They skim Experience and Featured Work, then decide whether to reach out. Founders, clients, peers, and blog readers come second. The personal writing and range must still read as one real person.

## Product Purpose
stedmanhalliday.com is Stedman Halliday's personal site: experience, selected work, a résumé, and a blog. Right now it supports a job search ("exploring what's next"). Success: a qualified reader trusts his seniority within 30 seconds and has a clear path to the work, the résumé, and contact.

## Positioning
*(Inferred from the About bio and project list; not yet confirmed.)* One person who covers design, code, brand, and growth strategy, across startups, agencies, and large tech. The proof spans scale (Amazon Alexa design lead), founding-team work (Kadenze), and an acquired venture (Eat Blueprint). A design-only or engineering-only portfolio cannot claim that range truthfully.

## Operating Context
*(Inferred from the repo; not yet confirmed.)*
- Readers arrive from outreach, LinkedIn, or a shared link. Most skim the homepage, then open About, Work, or a single project.
- The résumé PDF is downloaded from About and forwarded inside hiring loops.
- The blog is read post by post, often from a direct link.

## Capabilities and Constraints
- A static Jekyll site deployed on GitHub Pages from `docs/`. There is no backend.
- Swup page transitions, Pagefind search, and Google Analytics. JavaScript is progressive enhancement; every page must work without it.
- Content types: a homepage (timeline preview, featured work, recent posts), About with the full timeline and résumé, a Work index with category filters, project case studies, and a blog with tags.
- Featured work is set in `_data/works.yml`; the timeline lives in `_data/timeline.yml`.

## Brand Commitments
- The name "Stedman Halliday" and the monogram in the site header.
- Site prose is in Stedman's own voice. Drafts go through his voice guide, not generic copy.
- Current status line: "exploring what's next." (`current_status` in `_config.yml`).

## Evidence on Hand
- 14 project case studies in `_projects/`. Featured: Amazon Alexa, Eat Blueprint, Acura Vehicle Features.
- 25 blog posts in `_posts/`.
- A year-by-year timeline, 2010–2026, in `_data/timeline.yml`.
- A 2-page résumé PDF at `assets/stedman-halliday-resume.pdf`.
- No testimonials, client quotes, or press are on hand. Do not invent them, or outcome metrics a case study does not state.

## Brand Personality
Senior and trusted first, versatile and curious second, sharp and distinctive third. Calm confidence from someone who has shipped at scale across design, code, brand, and growth. Human, not a résumé in HTML.

## Anti-references
- AI-slop editorial: cream background, serif display, tracked uppercase eyebrows on every section.
- Dribbble showcase: shots without thinking, style over substance.
- Generic Framer / Read.cv template: big-name hero, bento grids, card walls.

## Design Principles
1. Seniority through restraint: fewer, stronger moves beat many decorations.
2. Proof over claims: outcomes, artifacts, and real work carry the story.
3. The site is the craft sample: every detail is evidence of taste.
4. Range without noise: design, code, music, and health live together under one clear hierarchy.
5. A person, not a template: voice and specifics over generic portfolio grammar.
6. Material surfaces on motion: the resting state is a plain dark background. Depth appears only while the reader scrolls, then decays back to flat. The glass tiles are a response to motion, not a layout. They must never read as a bento or card wall, even at rest.

## Accessibility & Inclusion
WCAG 2.2 AA: 4.5:1 text contrast, full keyboard access with visible focus, reduced-motion alternatives for all motion, semantic headings and landmarks.
