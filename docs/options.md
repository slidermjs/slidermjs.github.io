---
layout: page
title: Options - Sliderm
id: docs-options
permalink: /docs/options
---

# Options

Sliderm provides a variety of features and they all can be controlled through configuration options, the default values of these options are defined in [./src/core/config.js](https://github.com/terrylinooo/sliderm.js/blob/master/src/core/config.js).

## Primary options

| field | type | default | options | description |
| --- | --- | --- | --- | --- |
| arrow | `Boolean` | `true` | ✔️ | The arrow button besides the slider. |
| pagination | `Boolean` | `true` |  | The pagination on the bottom of the slider. |
| spinner | `Boolean` | `true` | ✔️ | The loading effect of initializing Sliderm. |
| grouping | `Boolean` | `false` |  | Move a group of slide items or just one. |
| loop | `Boolean` | `true` |  | Let the slider become a carousel. |
| preview | `Boolean` | `false` | ✔️ | Preview the edge of the previous and next slide item in the visible area. |
| breakpoint | `Boolean` | `true` | ✔️ | Adjust the column count automatically depends on the width of window. |
| touch | `Boolean` | `true` | ✔️ | Support to swipe the slide items on mobile devices . |
| autoplay | `Boolean` | `false` | ✔️ | Play the slider automatically. |
| columns | `Number` | `4` |  | The amount of slide items displayed in the visible area. |
| duration | `Number` | `1000` |  | The speed of the slider. (milliseconds) |
| spacing | `Number` | `10` |  | The spacing between slide items. |
| align | `String` | `top` |  | Align the slider vertically. |
| extenstions | `Array` | `[]` |  | The injection point of the functions to extend Sliderm.

## Child options

The child options has a prefix string `_` to mapping the its parent option.

| field | type | default | description |
| --- | --- | --- | --- |
| _arrow.color | `String` | `#ffffff` | The color of the arrows. |
| _arrow.bgColor | `String` | `#000000` | The background color of the arrow's container. |
| _arrow.opacity | `Number` | `0.5` | The opacity of the arrow's container. |
| _arrow.size | `Number` | `16` | The size of the arrow icons.<br />Expected value: 13-28 |
| _arrow.shape | `String` | `circle` | The size of the arrow icons.<br />Expected value: circle, square, none |
| _arrow.bold | `Number` | `2` | The bold of the arrow icon.<br />Expected value: 1, 2, 3 |
| _preview.edge | `Number` | `40` | The width of the edge of the previous and next items. |
| _spinner.color | `String` | `#1cbbb4` | The color of the spinner. |
| _breakpoint.columns | `Object` | <span class="code">{<br />&nbsp;&nbsp;4: false,<br />&nbsp;&nbsp;3: 960,<br />&nbsp;&nbsp;2: 768,<br />&nbsp;&nbsp;1: 420<br />}</span> | The breakpoints used to change the columns in visible area of the slider. |
| _touch.threshold | `Number` | `10` | The minimum distance traveled to be considered a swipe. |
| _touch.duration | `Number` | `300` | The maximum time spent to be considered a swipe. |
| _autoplay.direction | `String` | `left` | The direction that slider items will move on. |
| _autoplay.duration | `Number` | `5000` | The time to stay and then play the next. |

## Example

The following example contains all the default options.

```javascript
const sliderm = new Sliderm('#exampe-slider', {
  arrow: true,
  pagination: true,
  spinner: true,
  grouping: false,
  loop: true,
  preview: false,
  breakpoint: true,
  touch: true,
  autoplay: false,
  columns: 4,
  duration: 1000,
  spacing: 10,
  align: 'center',
  extensions: [],
  _arrow: {
    color: '#ffffff',
    bgColor: '#000000',
    opacity: 0.5,
    size: 16,
    shape: 'circle',
    bold: 2,
  },
  _preview: {
    edge: 40,
  },
  _spinner: {
    color: '#1cbbb4',
  },
  _breakpoint: {
    columns: {
      4: false,
      3: 960,
      2: 768,
      1: 420,
    },
  },
  _touch: {
    threshold: 10,
    duration: 300,
  },
  _autoplay: {
    direction: 'left',
    duration: 5000,
  },
});
```

If you are interested in customizing your own extensions, the `getOption` method is useful to fetch the settings.

- Fetch the primary option.

```javascript
const isTouch = sliderm.getOption('touch');
```

- Fetch the child options of the option touch.

```javascript
const duration = sliderm.getOption('touch.duration');
```

For more details about customizing the extensions, read `Extensions` page.
