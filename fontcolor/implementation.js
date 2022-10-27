'use strict';

var CreateHTML = require('es-abstract/2022/CreateHTML');

module.exports = function fontcolor(color) {
	return CreateHTML(this, 'font', 'color', color);
};
