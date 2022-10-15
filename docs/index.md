---
layout: page
title: Sliderm Docs
id: docs
permalink: /docs/
---

Thanks for being interested in using Sliderm. If you are looking for a simple slider library, you got a right place. Its packed size is less than 16 KB, extremely lightweight and flexible, easy to extend it for your needs.

## Getting started

### Install

```
npm install sliderm
```

Once you have installed Slidem via NPM, you can import the JavaScript and CSS code.

```javascript
import Sliderm from 'sliderm';
import css from 'sliderm/src/assets/scss/index.scss';
```

Or, just put the JavaScript and CSS into your HTML.

```html
<link rel="stylesheet" href="node_modules/sliderm/dist/css/sliderm.css">
<script src="node_modules/sliderm/dist/js/sliderm.js"></script>
```

### CDN

```html
<link rel="stylesheet" href="https://sliderm.com/dist/1.0.4/sliderm.css">
<script src="https://sliderm.com/dist/1.0.4/sliderm.js"></script>
```

This documentation webiste is hosted on GitHub Page, the library is available to use directly as well.

### HTML markup

The HTML makup is required for intializing Sliderm.

```html
<div id="exampe-slider" class="sliderm">
    <div class="sliderm__slider">
        <div class="sliderm__slides">
            <div class="sliderm__slide"><img src="./demo/1.jpg" /></div>
            <div class="sliderm__slide"><img src="./demo/2.jpg" /></div>
            <div class="sliderm__slide"><img src="./demo/3.jpg" /></div>
            <div class="sliderm__slide"><img src="./demo/4.jpg" /></div>
            <div class="sliderm__slide"><img src="./demo/5.jpg" /></div>
        </div>
    </div>
</div>
```

### How to use

Initializing the Sliderm is quite simple, the first parameter is the CSS selctor of the slider you want to activate, the second parameter is the configuration options.

```javascript
 const sliderm = new Sliderm('#exampe-slider', {
    arrow: true,
    pagination: true,
    grouping: false,
    loop: true,
    preview: false,
    columns: 4,
    duration: 1000,
    spacing: 10,
    align: 'center',
});
```

There are two events for now.

```javascript
sliderm.on('slide.start', () => {
  console.log('Just starting to slide!');
});

sliderm.on('slide.end', () => {
  console.log('The slider is stopped.');
});
```

That's it.
