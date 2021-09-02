'use strict';

var anchor = require('./anchor/shim');
var big = require('./big/shim');
var blink = require('./blink/shim');
var bold = require('./bold/shim');
var fixed = require('./fixed/shim');
var fontcolor = require('./fontcolor/shim');
var fontsize = require('./fontsize/shim');
var italics = require('./italics/shim');
var link = require('./link/shim');
var small = require('./small/shim');
var strike = require('./strike/shim');
var sub = require('./sub/shim');
var sup = require('./sup/shim');

module.exports = function shim() {
	anchor();
	big();
	blink();
	bold();
	fixed();
	fontcolor();
	fontsize();
	italics();
	link();
	small();
	strike();
	sub();
	sup();
};
