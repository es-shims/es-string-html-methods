'use strict';

var test = require('tape');
var forEach = require('for-each');

var methods = require('../');

var runTests = require('./tests');

test('HTML String.prototype methods', function (t) {
	t.ok(Array.isArray(methods), 'main export is an array');

	t.test('methods', function (st) {
		forEach(methods, function (method) {
			var bound = require('../' + method); // eslint-disable-line global-require

			st.test('as a function', function (s2t) {
				s2t.test('bad string/this value', function (s3t) {
					/* eslint no-useless-call: 0 */
					s3t['throws'](function () { return bound(undefined); }, TypeError, 'undefined is not an object');
					s3t['throws'](function () { return bound(null); }, TypeError, 'null is not an object');
					s3t.end();
				});

				runTests(bound, method, s2t);

				s2t.end();
			});
		});

		st.end();
	});

	t.end();
});
