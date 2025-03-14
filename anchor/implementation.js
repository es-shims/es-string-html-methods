'use strict';

var CreateHTML = require('es-abstract/2024/CreateHTML');

module.exports = function anchor(name) {
	return CreateHTML(this, 'a', 'name', name);
};
