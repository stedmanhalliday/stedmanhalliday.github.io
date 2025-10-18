---
layout: project
title: TensorFlow Resources
date: 2017-02-17
description: Resource directory for Google's TensorFlow machine learning library
categories: [ux, web dev, ai]
image: "/assets/img/2017-02-17-tensor-flow-0.webp"
hero: "/projects/tensorflow-resources-hero"
---

There are several great curated lists of resources on Github for learning about different technologies and stacks, but they're all just links in readme files. I encountered one such curated list called [Awesome TensorFlow](https://github.com/jtoy/awesome-tensorflow) and thought it would be a nice project to create a frontend for browsing all of the links. I collaborated with Adrián Rodriguez who wrote some Python code to pull and parse posts from the list and house them in a universal source of truth.

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-0.webp" alt="TensorFlow Resources">
</figure>

<figure>
    <video class="lazy" autoplay playsinline loop muted data-src="/assets/video/2017-02-17-tensorflow-resources_01.mp4"></video>
</figure>

## Process

After we had all of the resources organized in our repo, it was time to select a way to display them in a way that was helpful to users. I decided to use [Jekyll](https://jekyllrb.com/) to corral all of our resources and represent them within a nice interface published as a static blog website. After knowing we'd have a blog format, I went into Sketch to prototype a responsive site. I decided that each resource should be represented by a simple card with a summary and other metadata to give the user info at a glance.

<figure>
    <img src="/assets/img/2017-02-17-tensorflow-1.webp" alt="TensorFlow Resources Sketch prototype">
    <figcaption>Sketch prototype</figcaption>
</figure>

The design of the individual cards was kept tight and concise to display many resources on a single page. The cards feature a title, a summary excerpt, an external link in the dog-eared corner, the source URL down below, and conditional badges to indicate whether the card belongs in the Getting Started (green) or Official Resources (yellow) category. These features balance information density with browsing efficiency. Resource cards link to summary pages that present metadata and content from the resource (often sourced directly from more Github readme text).

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-2.webp" alt="TensorFlow Resources card design">
    <figcaption>Card design</figcaption>
</figure>

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-3.webp" alt="TensorFlow Resources summary page">
    <figcaption>Summary page</figcaption>
</figure>

After landing on a design for the individual cards and summary pages, I began determining which pages would house them. The homepage features an explanatory banner up top with a call to action to encourage submissions of new resources. Submissions are the most important way that users interact with the site besides browsing. The banner also offers an entry point to visit Getting Started resources for users new to TensorFlow. A link to the Getting Started taxonomy is reproduced in the top navigation for elevation in the overall design's hierarchy.

Before sorting the resources into categories that would appear on the homepage and in the navigation, I figured it would be helpful to include a paginated archive of all the resources sorted by recency. The Archive link also appears in the top navigation.

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-4.webp" alt="TensorFlow Resources homepage">
    <figcaption>Homepage</figcaption>
</figure>

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-5.webp" alt="TensorFlow Resources archive page">
    <figcaption>Archive page</figcaption>
</figure>

Taxonomizing the resources in a usable manner was an important part of creating an interface that adds value to the original curated list. Nine categories of resources (besides Getting Started and Official Resources) are available from the dropdown in the top navigation, each linking to a paginated archive from its respective category. The categories are also featured as headers on the homepage, offering an overview of recently added resources and a link to the full category archive.

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-6.webp" alt="TensorFlow Resources categories menu">
    <figcaption>Categories menu</figcaption>
</figure>

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-7.webp" alt="TensorFlow Resources resources by category">
    <figcaption>Resources by category</figcaption>
</figure>

The last part of the project was deciding on a flow for submitting resources to the directory. A navigation link and call to action encourage users to submit new resources via Typeform. Form responses have all the necessary data to be hooked directly into new entries in the source of truth, later transformed into Markdown read by Jekyll. This makes adding new entries to the site both easy for developers and friendly for users.

<figure>
    <img src="/assets/img/2017-02-17-tensor-flow-8.webp" alt="TensorFlow Resources submission success">
    <figcaption>Submission success</figcaption>
</figure>

## Outcome

TensorFlow Resources ultimately didn't receive an official launch but ended up being a strong project for learning new skills. Adrián learned how to write a web crawler in Python and I sharpened my UI design skills by working on a site with a lot of information. I wasn't new to Jekyll, but this project presented significant challenges, such as creating several paginated archives. Overall, the project remains a complete portfolio piece that showcases my cross-functional skill set in design and code.