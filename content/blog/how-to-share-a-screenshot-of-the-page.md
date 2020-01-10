---
title: Friendly custom previews for Netlify CMS
date: 2020-01-09T06:42:28.441Z
subtitle: >-
  This blog describes the process I followed for creating the custom preview for
  my Netlify CMS blog preview.
cover: /assets/luca-laurence-ZrqrP9Xs2vI-unsplash.jpg
tags: 'technology, javascript, netlify'
---
Last year I setup a [Preact](https://preactjs.com/) boilerplate blog for Netlify CMS. It gives you an option to scaffold/build/deploy a blog on Netlify within a few minutes.

You can start this by going to <https://www.netlifycms.org/docs/start-with-a-template/> page and clicking on the Preact CLI button.

It comes pre-setup with CSS modules/preact-router/markdown capabilities/ and seamless integration with Netlify CMS. I was extremely pleased with the results. The build/ delivery chain was extremely fast and sturdy thanks to @Netlify and my pages were really light weight thanks to Preact ❣️.

For demo purposes I added some dummy blogs in the scaffolding repository with `lipsum` text and cloned the same for my this website. 

The thing that annoyed me the most was my preview while writing a blog. TBH I am used to write on medium and of all things that site beautiful as anything while my writing experience looked like this

![ugly writing experience](/assets/Screen Shot 2020-01-09 at 5.12.36 PM.png "My writing experience without custom previews")
