'use strict';

var CreateHTML = require('es-abstract/2023/CreateHTML');

module.exports = function fontsize(size) {
	return CreateHTML(this, 'font', 'size', size);
};
