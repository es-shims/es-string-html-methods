'use strict';

var CreateHTML = require('es-abstract/2023/CreateHTML');

module.exports = function italics() {
	return CreateHTML(this, 'i', '', '');
};
