'use strict';

var CreateHTML = require('es-abstract/2021/CreateHTML');

module.exports = function fontcolor(color) {
	return CreateHTML(this, 'font', 'color', color);
};
