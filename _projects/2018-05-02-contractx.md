---
layout: project
title: ContracTx
date: 2018-05-02
description: Web app for visually exploring Ethereum smart contracts <br> View source on [GitHub](https://github.com/stedmanhalliday/dappTx)
categories: [ux, dev, web3]
image: /assets/img/2018-05-02-contracTx-mockup.webp
hero: /projects/contractx-hero
---

Ethereum smart contract explorers (e.g. [Etherscan](https://etherscan.io/)) do not offer elegant data visualizations for smart contracts with a wide variety of functions. ContracTx seeks to solve this by presenting user-friendly charts for any smart contract. [Max Wolff](https://twitter.com/maxcwolff) developed a backend and API to pull data from Etherscan's transaction logs and approached me to design and develop an interface.

<figure>
    <img src="/assets/img/2018-05-02-contracTx-mockup.webp" alt="ContracTx interface">
</figure>

<figure>
    <video class="lazy" poster="/assets/video/2018-05-02-contracTx_01-poster.webp" autoplay playsinline loop muted data-src="/assets/video/2018-05-02-contracTx_01.mp4"></video>
</figure>

## Process

I began by creating a Figma prototype with empty states for the charts. The idea for a dark analytics interface was inspired by the [Bootstrap Dashboard](https://themes.getbootstrap.com/preview/?theme_id=1468) theme's fluid layout. The higher contrast and light shadows also bring the charts forward since they are the primary focal point of the interface. It was important to include an example as a call to action within the empty charts. The example case serves as a primary entry point to interaction since many users are new to this tool and blockchain in general and may not have an Ethereum address to explore on hand. I chose the popular [CryptoKitties](https://www.cryptokitties.co/) game as the example since it provides a lot of volume and many functions to explore.

<figure>
    <img src="/assets/img/2018-05-02-contracTx_01.webp" alt="ContracTx Figma prototype">
    <figcaption>Figma prototype</figcaption>
</figure>

<figure>
    <img src="/assets/img/2018-05-02-contracTx_02.webp" alt="ContracTx empty state">
    <figcaption>Empty state with CryptoKitties example</figcaption>
</figure>

After mocking up a two-chart layout in Figma, I took the project to code to create a React app on top of the API. We decided to use [Highstock](https://www.highcharts.com/blog/products/stock/) from Highcharts inside each chart component to graph data sampled from Etherscan transactions. The top chart graphs the last month of functions called for the contract. The bottom chart graphs the usage of the contract as a percentage of total Ethereum traffic. The order of the charts was switched after determining that users were more interested in exploring contract functions. The charts were styled using Highcharts JavaScript options and colors for the multiple series in the top chart were sourced from [Flat UI Colors.](https://flatuicolors.com/)

<figure>
    <img src="/assets/img/2018-05-02-contracTx_03.webp" alt="Contract function calls">
    <figcaption>Contract function calls</figcaption>
</figure>

<figure>
    <img src="/assets/img/2018-05-02-contracTx_04.webp" alt="Contract volume">
    <figcaption>Contract volume</figcaption>
</figure>

The last step was to include some instructions on how to use the app. A sidebar menu provides a basic overview for the utility and provides the same CryptoKitties example case as another entry point for chart exploration interactions. The sidebar also offers a guide for more advanced usage so that users can explore other contracts of their choice. The menu exposes the endpoint for API requests so that developers can gather data for their own use. Lastly, a colophon summarizes some of the project details.

<figure>
    <img src="/assets/img/2018-05-02-contracTx_05.webp" alt="Sidebar menu">
    <figcaption>Sidebar menu</figcaption>
</figure>

## Outcome

The app never received an official launch, but was deployed to Heroku and shared amongst a small group of developers for light usage. This ultimately turned out to be a learning project where I improved my skills with React, learned how to create a frontend that interacts with an API for a useful outcome, and worked on my JavaScript skills to implement Highcharts. The project also acted as a launchpad for Max to enter the ETHDenver hackathon and start a blockchain company called [Marble.](https://medium.com/marbleorg/introducing-marble-a-smart-contract-bank-c9c438a12890) We subsequently worked together on [branding and launch](/work/marble-protocol) for the company.