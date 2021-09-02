'use strict';

var callBind = require('call-bind');
var test = require('tape');
var forEach = require('for-each');
var hasStrictMode = require('has-strict-mode')();

var methods = require('../');
var runTests = require('./tests');

forEach(methods, function (method) {
	test(method + ': as a function', function (t) {
		var implementation = require('../' + method + '/implementation'); // eslint-disable-line global-require

		t.test('bad first arg/receiver', { skip: !hasStrictMode }, function (st) {
			/* eslint no-useless-call: 0 */
			st['throws'](function () { implementation.call(undefined); }, TypeError, 'undefined is not an object');
			st['throws'](function () { implementation.call(null); }, TypeError, 'null is not an object');
			st.end();
		});

		runTests(callBind(implementation), method, t);
		t.end();
	});
});

