'use strict';

var Call = require('es-abstract/2022/Call');

var callBound = require('call-bind/callBound');

var $concat = callBound('Array.prototype.concat');
var $match = callBound('String.prototype.match');
var $toLowerCase = callBound('String.prototype.toLowerCase');

module.exports = function polyfillHelper(property, implementation) {
	return function polyfill() {
		var method = String.prototype[property];
		if (typeof method !== 'function') {
			return implementation;
		}
		var output = Call(method, '', [' " ']);
		var quotesCount = $concat([], $match(output, /"/g)).length;
		if (output !== $toLowerCase(output) || quotesCount > 2) {
			return implementation;
		}
		try {
			// node <= 0.10 does not throw on a nullish receiver
			Call(method, null);
			Call(method, undefined);
			return implementation;
		} catch (e) { /**/ }

		return method;
	};
};
