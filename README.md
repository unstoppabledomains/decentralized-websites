<p align="center">
  <a href="https://unstoppabledomains.com/?ref=website_builder&utm_source=github&utm_medium=readme&utm_campaign=decentralized_websites">
    <img src="unstoppable-logo.svg" width="500" />
  </a>
</p>
<h1 align="center">
Decentralized Websites
</h1>

This repository is for sharing information about building decentralized websites. It contains starter templates and resources for deploying websites to IPFS. The goal of this repository is to contribute examples for building all types of decentralized websites and to maintain an up-to-date list of resources for decentralized web development.

**[Join Our Developer Community on Discord](https://discord.gg/b6ZVxSZ9Hn)**

## Table of Contents

- [Contributing](#contributing)
- [Build A Site](#build-a-site)
  - [IPFS Community Templates](#ipfs-community-templates)
  - [Unstoppable Domains Templates](#unstoppable-domains-templates)
  - [JS Framework Examples](#js-framework-examples)
- [Deploy Your Site](#deploy-your-site)
  - [Set up automatic domain updates](#set-up-automatic-domain-updates)
- [Additional Tools & Resources](#additional-tools---resources)
  - [3rd Party Libraries](#3rd-party-libraries)
  - [Decentralized Databases](#decentralized-databases)
  - [IPFS Information](#ipfs-information)
  - [Pinning Services](#pinning-services)
  - [Blockchain Domains](#blockchain-domains)
  - [Web3 & Crypto UI Components](#web3---crypto-ui-components)

## Contributing

**[Bounty Announcment](https://medium.com/unstoppabledomains/unstoppable-website-templates-e5ed343a7c7a)**

**Add your template**  
We'd love to make your templates available on Unstoppable Domains' website builder.
To add a new template simply fork this repo, add your templates into [templates/community](templates/community), and submit a PR with your update.

- Add comments to whatever text, styles, or images that should be customized
- Make sure all relevant css & font files are included. Sites should be fully decentralized and not rely on any APIs for styles
- **Do not use any trademarked or copyrighted assets** without permission. If you want to use it, you have to ensure that you have the legal right to do so. If applicable add a footer with any necessary accreditation
- _We encourage you to add an author signature to the footer of your template_

* You can also follow this [tutorial video](https://www.youtube.com/watch?v=YtDcmPqW_DM&feature=youtu.be)

**Bug Report or Improvement:**  
To report a bug in a template or suggest an improvement to this repo simply go to issues and fill out the proper template.

## Build A Site

Checkout our **[Website Builder](https://unstoppabledomains.com/my-websites?ref=website_builder&utm_source=github&utm_medium=readme&utm_campaign=decentralized_websites)** tool to easily deploy a site to your blockchain domain

### IPFS Community Templates

| Author         | Template                                                        | Available In Builder (y/n) |
| -------------- | --------------------------------------------------------------- | -------------------------- |
| @aranhaagency  | [Stellar](templates/community/stellar)                          | n                          |
| @aranhaagency  | [Stellar Simple](templates/community/stellar-simple)            | n                          |
| @zzzaim        | [Personal Minimalist](templates/community/personal-minimalist)  | **y**                      |
| @caseykey      | [IPFS Music Player](templates/community/ipfs-music-player)      | n                          |
| @inspireme6    | [Simple Portfolio ](templates/community/simple-portfolio-theme) | **y**                      |
| @dsgriffin     | [4 Sale](templates/community/4sale)                             | **y**                      |
| @verymanley    | [Ambitious (opacity)](templates/community/ambitious-opacity)    | n (pending)                |
| @iguessitsokay | [Elipsis Portfolio](templates/community/elipsis)                | n (pending)                |

### Unstoppable Domains Templates

- [Ambitious](templates/unstoppable-domains/ambitious)
- [Coming Soon](templates/unstoppable-domains/coming-soon)
- [Gentle](templates/unstoppable-domains/gentle)
- [Outstanding](templates/unstoppable-domains/outstanding)
- [Basic Blog](https://github.com/unstoppabledomains/3box-blog-example)

In the (`templates/unstoppable-domains`)[templates/unstoppable-domains] directory you will find all of the templates available on the Unstoppable Domains website builder feature. In the `index.html` files for each template directory you will find comments pointing to the items we use for updating in the website builder.

- The inline CSS styles are the options available to update in the website builder
- SVG Icons are inlined so that colors can be updated

### JS Framework Examples

- [React](https://github.com/PinataCloud/React-IPFS-Example)
- [Angular](https://github.com/PinataCloud/Angular-IPFS-Example)
- [Vue](https://github.com/PinataCloud/Vue-IPFS-Example)

> Hosting a website on IPFS is slightly different than hosting it on a web server out in the cloud. Your website may require a little bit of tweaking in order to properly be served on the IPFS network.
>
> The important rules are:
>
> - All of the content for your website must be contained in one build folder, with an index.html file.
> - All links within your files should be relative links.

Check out [this article](https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01) by Matt Ober, CoFounder and CTO of Pinata

## Deploy Your Site

1. Checkout the [examples](examples/) to find and update a template that you like.
2. Once you've finished with your site, you can deploy to [pinata](https://pinata.cloud/) by using our deploy script or another IPFS tool like [ipfs-deploy](https://github.com/ipfs-shipyard/ipfs-deploy)
3. Once you've gotten your IPFS hash [attach it to your domain](https://youtu.be/I9vTeAtELOk?t=61)
4. Check out your site using our tools, [Chrome Extension](https://chrome.google.com/webstore/detail/unstoppable-extension/beelkklmblgdljamcmoffgfbdddfpnnl?hl=en-US&authuser=0)
   or [Decentralized Browser](https://unstoppabledomains.com/browser). You can also find your site on [ViewBlock](https://viewblock.io/).

### Set up automatic domain updates

- [DApps Delivery Guide](https://dapps-delivery-guide.readthedocs.io/)
  - [CNS - Github Pipeline](https://dapps-delivery-guide.readthedocs.io/en/latest/domain/cns.html#setup-pipeline-with-crypto-update)

## Additional Tools & Resources

### 3rd Party Libraries

- [3Box](https://3box.io/) - Decentralized user data storage system
- [DAOstack](https://github.com/daostack) - Solutions to enable the creation of Decentralized Autonomous Organizations
- [Unlock](https://github.com/unlock-protocol/unlock) - Membership protocol
- [Origin Protocol](https://github.com/OriginProtocol/origin) - Blockchain-powered commerce

### Decentralized Databases

- [Orbit DB](https://github.com/orbitdb) - Peer-to-Peer Databases for the Decentralized Web
- [Textile](https://github.com/textileio) - A set of open source tools that provide a decentralized database, IPFS-based storage, content hosting, and more
- [GUN](https://github.com/amark/gun) - A realtime, decentralized, offline-first, graph protocol to sync the web

<!-- TODO: ### Articles -->

### IPFS Information

- [IPFS Homepage](https://ipfs.io/)
  - [Github Repo](https://github.com/ipfs/ipfs)
- [IPFS Video Explaination](https://www.youtube.com/watch?v=5Uj6uR3fp-U)
- [Awesome IPFS](https://awesome.ipfs.io/)
  - [Github Repo](https://github.com/ipfs/awesome-ipfs#awesome-ipfs-)

### Pinning Services

- [Pinata](https://pinata.cloud/)
- [Temporal](https://temporal.cloud/)

### Blockchain Domains

- [What are Blockchain Domains?](https://community.unstoppabledomains.com/t/blockchain-domains-starter-guide-what-are-blockchain-domains/109)
- [Website Builder Guide](https://community.unstoppabledomains.com/t/website-builder-guide/446)

### Web3 & Crypto UI Components

- [Guarda Donate Button](./web3-ui-components/guarda-donate-button)
- [MetaMask Tip Button](https://github.com/MetaMask/TipButton)
- [FXEmpire News Feed](https://www.fxempire.com/widgets/newsfeed)
- [CryptoCompare Widgets](https://www.cryptocompare.com/dev/widget/wizard)
- [Cryptonator](https://www.cryptonator.com/widget)
