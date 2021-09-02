'use strict';

var define = require('define-properties');

module.exports = function shimHelper(property, getPolyfill) {
	return function shim() {
		var polyfill = getPolyfill();
		var o = {};
		o[property] = polyfill;
		var p = {};
		p[property] = function () {
			return String.prototype[property] !== polyfill;
		};
		define(String.prototype, o, p);
		return polyfill;
	};
};

