'use strict';

var CreateHTML = require('es-abstract/2023/CreateHTML');

module.exports = function fontcolor(color) {
	return CreateHTML(this, 'font', 'color', color);
};
