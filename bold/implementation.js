'use strict';

var CreateHTML = require('es-abstract/2020/CreateHTML');

module.exports = function bold() {
	return CreateHTML(this, 'b', '', '');
};
