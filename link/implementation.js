'use strict';

var CreateHTML = require('es-abstract/2021/CreateHTML');

module.exports = function link(url) {
	return CreateHTML(this, 'a', 'href', url);
};
