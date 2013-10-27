/*

connect.js - controlRod.connect() test

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

var ControlRod = require('../index.js'),
    events = require('events');

var test = module.exports = {};

test['connect() registers handler with the emitter for the specified event and sets connected to true'] = function (test) {
    test.expect(3);
    var emitter = new events.EventEmitter();
    var handler = function () {};
    var rod = new ControlRod(emitter, 'foo', handler);
    rod.connect();
    test.equal(emitter.listeners('foo').length, 1);
    test.strictEqual(emitter.listeners('foo')[0], handler);
    test.strictEqual(rod.connected, true);
    test.done();
};

test['connect() does not connect handler if already connected'] = function (test) {
    test.expect(4);
    var emitter = new events.EventEmitter();
    var handler = function () {};
    var rod = new ControlRod(emitter, 'foo', handler);
    rod.connect();
    test.equal(emitter.listeners('foo').length, 1);
    test.strictEqual(emitter.listeners('foo')[0], handler);
    test.strictEqual(rod.connected, true);
    rod.connect();
    test.equal(emitter.listeners('foo').length, 1);
    test.done();
};