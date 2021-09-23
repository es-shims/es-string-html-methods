# es-string-html-methods <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES-spec-compliant shim/polyfill/replacement for the Annex B String.prototype HTML methods that works as far down as ES3

This package implements the [es-shim API](https://github.com/es-shims/api) “multi” interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-additional-properties-of-the-string.prototype-object).

Because the `String.prototype` HTML methods depend on a receiver (the `this` value), the main export in each subdirectory takes the string to operate on as the first argument.

The main export of the package itself is simply an array of the available directory names. It’s sole intended use is for build tooling and testing.

## Supported methods

 - [`String.prototype.anchor`](https://tc39.es/ecma262/#sec-string.prototype.anchor)
 - [`String.prototype.big`](https://tc39.es/ecma262/#sec-string.prototype.big)
 - [`String.prototype.blink`](https://tc39.es/ecma262/#sec-string.prototype.blink)
 - [`String.prototype.bold`](https://tc39.es/ecma262/#sec-string.prototype.bold)
 - [`String.prototype.fixed`](https://tc39.es/ecma262/#sec-string.prototype.fixed)
 - [`String.prototype.fontcolor`](https://tc39.es/ecma262/#sec-string.prototype.fontcolor)
 - [`String.prototype.fontsize`](https://tc39.es/ecma262/#sec-string.prototype.fontsize)
 - [`String.prototype.italics`](https://tc39.es/ecma262/#sec-string.prototype.italics)
 - [`String.prototype.link`](https://tc39.es/ecma262/#sec-string.prototype.link)
 - [`String.prototype.small`](https://tc39.es/ecma262/#sec-string.prototype.small)
 - [`String.prototype.strike`](https://tc39.es/ecma262/#sec-string.prototype.strike)
 - [`String.prototype.sub`](https://tc39.es/ecma262/#sec-string.prototype.sub)
 - [`String.prototype.sup`](https://tc39.es/ecma262/#sec-string.prototype.sup)

## Getting started

```sh
npm install --save es-string-html-methods
```

## Usage/Examples

```js
var blink = require('es-string-html-methods/blink');
var link = require('es-string-html-methods/link');
var assert = require('assert');

assert.equal(
	blink('a'),
	'<blink>a</blink>'
);
assert.equal(
	link('a', 'b'),
	'<a href="b">a</a>'
);
```

```js
require('./auto'); // shim all of the methods

require('./anchor/auto'); // shim the “anchor” method
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-string-html-methods
[npm-version-svg]: https://versionbadg.es/es-shims/es-string-html-methods.svg
[deps-svg]: https://david-dm.org/es-shims/es-string-html-methods.svg
[deps-url]: https://david-dm.org/es-shims/es-string-html-methods
[dev-deps-svg]: https://david-dm.org/es-shims/es-string-html-methods/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/es-string-html-methods#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-string-html-methods.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-string-html-methods.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-string-html-methods.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-string-html-methods
[codecov-image]: https://codecov.io/gh/es-shims/es-string-html-methods/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/es-string-html-methods/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/es-string-html-methods
[actions-url]: https://github.com/es-shims/es-string-html-methods/actions
