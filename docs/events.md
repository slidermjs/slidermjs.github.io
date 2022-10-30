---
layout: page
title: Events - Sliderm
id: docs-events
permalink: /docs/events
---

# Events

- [initialize](#initialize)
- [initialized](#initialized)
- [breakpoint.changed](#breakpointchanged)
- [slide.start](#slidestart)
- [slide.end](#slideend)
- [destory](#destory)

## Built-in events


- param *Object* `s` The Slidem instance itself.
- param *...any* `args` The arguments.

### initialize

The `initalize` event will be triggered when intializing the Sliderm instance.

Example:
```javascript
const sliderm = new Sliderm('.your-dom-class');

sliderm.on('initialize', (s) => {
  console.log('Hello, world.');
});
```

### initialized

The `initalized` event will be triggered after the Sliderm instance has been initialized.

Example:
```javascript
const sliderm = new Sliderm('.your-dom-class');

sliderm.on('initialized', (s) => {
  console.log('Hello, world.');
});
```

### breakpoint.changed

If the user is using mobile device to visit your webpage, the `breakpoint.changed` event will be triggered at least one time, after the breakpoint is changed, 

Example:
```javascript
const sliderm = new Sliderm('.your-dom-class');

sliderm.on('breakpoint.changed', (s) => {
  console.log('Hello, world.');
});
```

### slide.start

The `slide.start` event will be triggered when the slides are starting to move on.

Example:
```javascript
const sliderm = new Sliderm('.your-dom-class');

sliderm.on('slide.start', (s) => {
  console.log('Hello, world.');
});
```

### slide.end

The `slide.end` event will be triggered when the movement of slides are stopped.

Example:
```javascript
const sliderm = new Sliderm('.your-dom-class');

sliderm.on('slide.end', (s) => {
  console.log('Hello, world.');
});
```

### destory

The `destory` event will be triggered when `sliderm.destory()` is called.

Example:
```javascript
const sliderm = new Sliderm('.your-dom-class');

sliderm.on('destory', (s) => {
  console.log('Hello, world.');
});
```

## Customization

You can customize your own module and place a custom event in your code by using `emit` API, for example:

```javascript
sliderm.emit('custom-event', 'hello', 'world');
```

There will be a event hook called `custom-event`, excuting callback functions registered to this event.

### Register an event

```javascript
const sliderm = new Sliderm('.your-dom-class');

sliderm.on('custom-event', (sliderm, arg1, arg2) => {
  const currentPosition = sliderm.getPosition();
  console.log(`Current position number is ${currentPosition}`);
  console.log(arg1);
  console.log(arg2);
});
```

Expected output:
```
1
hello
world
```

That's it.