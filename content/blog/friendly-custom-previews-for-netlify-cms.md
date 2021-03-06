---
title: Friendly custom previews for Netlify CMS
date: 2020-01-14T19:12:35.564Z
subtitle: This blog describes the process I followed for creating the custom
  preview for my Netlify CMS blog preview.
cover: /assets/luca-laurence-ZrqrP9Xs2vI-unsplash.jpg
tags: technology, javascript, netlify
---
Last year I setup a [Preact](https://preactjs.com/) boilerplate blog for Netlify CMS. It gives you an option to scaffold/build/deploy a blog on Netlify within a few minutes.

You can start this by going to <https://www.netlifycms.org/docs/start-with-a-template/> page and clicking on the Preact CLI button.

It comes pre-setup with CSS modules/preact-router/markdown capabilities/ and seamless integration with Netlify CMS. I was quite pleased with the results. The build/ delivery chain was extremely fast and sturdy thanks to @Netlify and my pages were really light weight thanks to Preact ❣️.

The thing however that annoyed me the most was my preview while writing a blog. TBH I am used to write on medium and of all things that site beautiful as anything while my writing experience looked like this

![My unstyled blog preview](/assets/screen-shot-2020-08-26-at-11.38.13-pm.png "My unstyled blog preview")

I started looking up and quickly found that Netlify CMS has a way to customize the preview pane. It involved

* Writing a custom CSS for the page
* Writing a custom React component

- - -

I started with custom CSS and realized that was actually all what I wanted. Just some font/colors and size correction but it became evident pretty quickly that targeting the class names/tag names in the generated preview was not possible because nothing had specific classnames/ ids to target.

So, the next step was to built the custom preview and add those target and CSS myself. However the documentation to do the same required me to write the transpiled `JSX` code by hand.

e.g.

```js
render: function() {
  var entry = this.props.entry;
  return h(
    'div',
    {},
    h('h1', {}, entry.getIn(['data', 'title'])),
    h('img', { src: entry.getIn(['data', 'cover']) }),
    h('div', { className: 'text' }, this.props.widgetFor('body')),
  );
},
```

The above code might not look super tough to read but if you need any more complex component composition this might get tough to author.

## HTM to rescue.

I ditched the manually writing `JSX` in favor of [htm](https://www.npmjs.com/package/htm).
HTM allows you to write `JSX` with the help of tagged templates. Thus above code simply becomes

```js
render: function () {
  return(`
    <div>
      <h1 className='title'>${entry.getIn(['data', 'title'])}</h1>
      <img className='cover' src='${${entry.getIn(['data', 'cover'])}}' />
      <div className='text'>${this.props.widgetFor('body')}</div>
    </div>
  `);
}
```

Now it became much easier to write these templates and we could just add write a simple CSS and register it to be used.

## Workflow

So the following steps are all thats needed to build a custom preview for yourself.

### Write a Custom preview using htm.

I did the custom preview cod in my `admin.html` inside a simple `script type=module` tag.

e.g.

```html
  <script type="module">
  import htm from 'https://unpkg.com/htm?module'
  const html = htm.bind(h);
  const PostPreview = createClass({
    render: function() {
      return (
        html`
          <div>
            <h1 className='blogTitle'>${entry.getIn(['data', 'title'])}</h1>
            <caption className='blogSubTitle'>${entry.getIn(['data', 'subtitle'])}</caption>
            <div className='text'>${widgetFor('body')}</div>
          </div>
        `
      );
    }
  });
  </script>
```

**Note**: The code has to be inside `type=module` script tag as it uses native `import` method.

More info on the API here: <https://www.netlifycms.org/docs/customization/>

### Register the custom preview to be used

The above code successfully creates a custom preview but we also have to register it for a specific blog section.

```js
CMS.registerPreviewTemplate("pages", PostPreview);
```

In the above code `"pages"` represent the collection name for which this preview will be displayed. This collection name can be found inside `config.yml` for Netlify CMS.

And thats all!
Now once you commit the above steps to your `admin.html`. Your custom preview panes will load automatically when you try writing in the Netlify CMS panel.