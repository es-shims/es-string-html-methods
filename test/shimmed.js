'use strict';

require('../auto');

var test = require('tape');
var forEach = require('for-each');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var hasStrictMode = require('has-strict-mode')();

var methods = require('../');
var runTests = require('./tests');

forEach(methods, function (method) {
	test(method + ': shimmed', function (t) {
		t.match(String(String.prototype[method].length), /^0|1$/, 'String#' + method + ' has a length of 0 or 1');

		t.test('Function name', { skip: !functionsHaveNames }, function (st) {
			st.equal(String.prototype[method].name, method, 'String#' + method + ' has name "' + method + '"');
			st.end();
		});

		t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
			et.equal(false, isEnumerable.call(String.prototype, method), 'String#' + method + ' is not enumerable');
			et.end();
		});

		t.test('bad string/this value', { skip: !hasStrictMode }, function (st) {
			st['throws'](function () { return String.prototype[method].call(undefined, 'a'); }, TypeError, 'undefined is not an object');
			st['throws'](function () { return String.prototype[method].call(null, 'a'); }, TypeError, 'null is not an object');
			st.end();
		});

		runTests(callBind(String.prototype[method]), method, t);

		t.end();
	});
});
