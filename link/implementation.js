'use strict';

var CreateHTML = require('es-abstract/2020/CreateHTML');

module.exports = function link(url) {
	return CreateHTML(this, 'a', 'href', url);
};
