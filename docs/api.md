---
layout: page
title: API - Sliderm
id: docs-api
permalink: /docs/api
---

# API

The public methods of Sliderm are used by internal components, although they can be called after initializing, you probably won't need them, but they are still useful if you want to write a component to extend the functionality of Sliderm for your needs.

- [adaptEvent](#adaptevent)
- [getRoot](#getroot)
- [getItemCount](#getitemcount)
- [getGroupCount](#getgroupcount)
- [getItems](#getitems)
- [getPosition](#getposition)
- [getOption](#getoption)
- [updatePosition](#updateoption)
- [updateCurrentItems](#updatecurrentitems)
- [updateOption](#updateoption)
- [slideTo](#slideto)
- [go](#go)
- [on](#on)
- [off](#off)
- [emit](#emit)
- [destory](#destory)

---

### adaptEvent

- param *Element* `node` DOM element
- return *EventAdapter*

Create an Event Adapter on a given DOM element. This method not only collects the references for destorying them after method `destory()` is called, but also help to simulate the behavior of events for testing.

Example:
```javascript
const button = document.createElement('div');
const event = sliderm.adaptEvent(button);
eventt.on('click', () => {
  sliderm.slideTo('>');
});
```

### getRoot

- return *Element*

Get the reference of the DOM element where the Sliderm initialized by.

Example:
```javascript
const root = sliderm.getRoot();
```

### getItemCount

- return *Number*

Get the total amount of the slide items.

Example:
```javascript
const count = sliderm.getItemCount();
```

### getGroupCount

- return *Number*

Get the total amount of the grouping slide items.

Example:
```javascript
const count = sliderm.getGroupCount();
```

### getItems

- return *Array*

Get the collection of the DOM element for slide items.

Example:
```javascript
const items = sliderm.getItems();
```

### getPosition

- return *Number*

Get the current position in the visible area of slider.

Example:
```javascript
const position = sliderm.getPosition();
```

### getOption

- param *String* `field` The name of a field in options.
- param *Mixed* `defailts` The default value as the field doesn't exists.
- return *Mixed*

Get the option value from a configuration option.

Example:
```javascript
// Get the primary option.
const isPreview = sliderm.getOption('preview');
// Get the child option.
const edge = sliderm.getOption('preview.edge');
```

### updatePosition

- param *Number* `position` The position number
- return *Void*

Update the current position number.

Example:
```javascript
sliderm.updatePosition(2);
```

### updateCurrentItems

- return *Boolean*

Update current items.  This method can not be called after initializing.

### updateOption

- param *String* `field` The name of a field in options.
- param *Mixed* `value` The value to update the field.
- return *Void*

Example:
```javascript
sliderm.updateOption('preview', true);
sliderm.updateOption('preview.edge', 30);
```

### slideTo

- param *Number,String* `pagination` The pagination number or an arrow symbol.
- return *Void*

Slide to specific pagination.
Number for the pagination number. Expected value: `[0-9]+`
String for the direction. Expected value: `>`、`<`

Example:
```javascript
sliderm.slideTo(2);
sliderm.slideTo('>');
```

### go

- param *String* `module` The module name.
- param *...any* `args` The arguments.
- return *Void*

Call the module.

Example:
```javascript
sliderm.go('slide', 2);
sliderm.go('slide', '>');
```

### on

- param *String* `name` The event name.
- param *Function* `handler` The callback function.
- return *Void*

Register an event listener.

Example:
```javascript
const namedFunction = () => {
  console.log('hello);
};
sliderm.on('your_custom_event', namedFunction);
```

### off

- param *String* `name` The event name.
- param *Function* `handler` The callback function.
- return *Void*

Remove an event listener.

Example:
```javascript
const namedFunction = () => {
  console.log('hello);
};
sliderm.on('your_custom_event', namedFunction);
// Only named function can be removed.
sliderm.off('your_custom_event', namedFunction);
```

## emit

- param *String* `name` The event name.
- param *...any* `args` The arguments.
- return *Void*

Execute the registered function.

Example:
```javascript
sliderm.emit('your_custom_event');
sliderm.emit('your_custom_event', 'arg1', 'arg2');
```


## destory

- return *Void*

Destory appended DOM and attched events.

Example:
```javascript
sliderm.destory();
```

That's it.