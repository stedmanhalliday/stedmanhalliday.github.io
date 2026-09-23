---
layout: page
title: About Stedman Halliday
permalink: /about/
---
<style type="text/css">
    .about-bio summary { list-style: none; cursor: pointer; color: #61B3AF; margin-bottom: 1rem; }
    .about-bio summary::-webkit-details-marker { display: none; }
    .about-bio summary:focus-visible { outline: 2px solid #61B3AF; outline-offset: 2px; }
    .about-bio .about-bio-less, .about-bio[open] .about-bio-more { display: none; }
    .about-bio[open] .about-bio-less { display: inline; }
    .about-bio.has-toggle summary { display: none; }
    .about-bio-actions { display: flex; gap: 1.5rem; }
    .about-bio-toggle { padding: 0; border: 0; background: none; font: inherit; color: #61B3AF; cursor: pointer; }
    .about-bio-toggle:focus-visible { outline: 2px solid #61B3AF; outline-offset: 2px; }
</style>

Stedman Halliday is a cross-functional product and design leader based in San Francisco. With over 15 years of experience across startups, creative agencies, and large tech orgs, he brings a versatile skill set that spans design, software development, and strategy to shaping products, brands, and teams.

<details class="about-bio" id="about-bio" markdown="1">
<summary><span class="about-bio-more">Read full bio</span><span class="about-bio-less">Show less</span></summary>

In 2025, Stedman tackled AI-focused contract projects building expertise at the intersection of design and intelligent systems: B2B sales agents, consumer AI companions, and multi-agent coordination environments. He also consulted for Eat Blueprint, a longevity-focused fresh meal service acquired by Blueprint Bryan Johnson. His work there encompassed product development, customer success, community engagement, and marketing, achieving a $1M ARR run rate and hosting over 1,000 attendees at local events during Q1 2024. Previously, Stedman led the design of emerging voice and multimodal technologies at Amazon Alexa, where he shaped customer experiences and streamlined third-party integrations with innovative design systems. At Wunderman Thompson, Stedman spearheaded redesigns for key Microsoft platforms during the COVID-19 pandemic, including a transformative update to Microsoft Education that resulted in a 127% increase in traffic during a time of sweeping change across the education category.

Stedman also has a rich background in educational technology and academia. As part of the founding team at Kadenze, he launched an edtech platform that supports arts and creative technology education in partnership with dozens of leading arts institutions and organizations. He later contributed to Thailand's first computer programming course for blind adults, a government-funded initiative at Mahidol University, where he authored curricula and designed custom learning tools. He subsequently taught Media & Web Development at California Institute of the Arts, where he previously earned a BFA in Graphic Design with a minor in Digital Arts and twice consecutively received the AIGA-Tomoko Miho Award.

With a versatile skill set spanning multimedia design, software development, and integrated brand, product, and growth strategy, Stedman is passionate about building solutions that unite technology, creativity, and purpose. He is also an accomplished community builder, having grown Designers Guild into a global network supporting over 20,000 creatives across 100 countries. Today, Stedman focuses on launching and scaling ventures that foster wellness and connection, aligning his expertise with his vision for a healthier world.

</details>

<p class="about-bio-actions">
    <button class="about-bio-toggle" type="button" aria-controls="about-bio" aria-expanded="false" hidden>See more</button>
    <a href="{{ '/assets/stedman-halliday-resume.pdf' | relative_url }}" target="_blank">Résumé</a>
</p>

<script>
    (function () {
        // With JS, one See more / See less button sits under the bio, next to the résumé link.
        var bio = document.querySelector(".about-bio");
        var toggle = document.querySelector(".about-bio-toggle");
        if (!bio || !toggle) return;
        bio.classList.add("has-toggle");
        toggle.hidden = false;
        toggle.addEventListener("click", function () {
            bio.open = !bio.open;
            toggle.setAttribute("aria-expanded", String(bio.open));
            toggle.textContent = bio.open ? "See less" : "See more";
            if (!bio.open) toggle.scrollIntoView({ block: "nearest" });
        });
    })();
</script>

## Experience

{% include sections/timeline.html %}