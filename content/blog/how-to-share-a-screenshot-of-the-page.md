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

It comes pre-setup with CSS modules/preact-router/markdown capabilities/ and seamless integration with Netlify CMS. I was quite pleased with the results. The build/ delivery chain was extremely fast and sturdy thanks to @Netlify and my pages were really light weight thanks to Preact ❣️.

The thing however that annoyed me the most was my preview while writing a blog. TBH I am used to write on medium and of all things that site beautiful as anything while my writing experience looked like this

//(Todo): Insert image comparison here

I started looking up and quickly found that Netlify CMS has a way to customize the preview pane. It involved

- Writing a custom CSS for the page
- Writing a custom React component

---

I started with custom CSS. That was actually all what I wanted. Just some font/colors and size correction but it became evident pretty quickly that targeting the class names/tag names in the generated preview was not possible because nothing had particular class names in itself.
