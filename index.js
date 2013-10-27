/*

index.js - "control-rod": Control structure for connecting and disconnecting 
                          event emitters and event handlers

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/
"use strict";

/*
  * `emitter`: _EventEmitter_ An instance of an EventEmitter.
  * `event`: _String_ Name of an event.
  * `handler`: _Function_ An instance of an event handler function.
*/
var ControlRod = module.exports = function ControlRod (emitter, event, handler) {
    var self = this;

    self.connected = false;
    self.emitter = emitter;
    self.event = event;
    self.handler = handler;
};

ControlRod.prototype.connect = function connect () {
    var self = this;

    if (self.connected)
        return;

    self.emitter.on(self.event, self.handler);
    self.connected = true;
};

ControlRod.prototype.disconnect = function disconnect () {
    var self = this;

    if (!self.connected)
        return;

    self.emitter.removeListener(self.event, self.handler);
    self.connected = false;
};