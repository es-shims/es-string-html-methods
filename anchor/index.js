'use strict';

var callBind = require('call-bind');

var polyfill = require('./polyfill')();

module.exports = callBind(polyfill);
