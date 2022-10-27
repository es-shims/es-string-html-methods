'use strict';

var CreateHTML = require('es-abstract/2022/CreateHTML');

module.exports = function italics() {
	return CreateHTML(this, 'i', '', '');
};
