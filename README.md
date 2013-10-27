# control-rod

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

[![NPM version](https://badge.fury.io/js/control-rod.png)](http://npmjs.org/package/control-rod)

Control structure for connecting and disconnecting event emitters and event handlers.

## Usage

```javascript
var ControlRod = require('control-rod'),
    events = require('events');

var someEventEmitter = new events.EventEmitter();

var rod = new ControlRod(someEventEmitter, 'happening', function (param) {
    console.log('happening happened with param ' + param); 
});

rod.connect(); // adds the event handler as the handler for 'happening' event

someEventEmitter.emit('happening', 'myParam');
// console: happening happeend with param myParam

rod.disconnect(); // removes the event handler

someEventEmitter.emit('happening', 'myParam');
// nothing happens
```

## Test

    npm test

## Overview

ControlRod is an abstraction that provides a simple wrapper around an event emitter, an event name, and an event handler that enables. Multiple ControlRods can be combined into a [ControlRodAssembly](https://github.com/tristanls/rod-assembly) wich provides a coarse grain control over attaching and detaching numerous event handlers.

## Documentation

### ControlRod

**Public API**

  * [new ControlRod(emitter, event, handler)](#new-controlrodemitter-event-handler)
  * [controlRod.connect()](#controlrodconnect)
  * [controlRod.disconnect()](#controlroddisconnect)

### new ControlRod(emitter, event, handler)

  * `emitter`: _EventEmitter_ An instance of an EventEmitter.
  * `event`: _String_ Name of an event.
  * `handler`: _Function_ An instance of an event handler function.

Creates a new instance of a ControlRod.

### controlRod.connect()

Adds the `handler` as a listener for the `event` with the `emitter`. If `controlRod` is already connected, the `handler` is **not** added.

### controlRod.disconnect()

Removes the `handler` from listeners for the `event` from the `emitter`. If `controlRod` is already disconnected, the `handler` is **not** removed.