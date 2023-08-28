'use strict';

var CreateHTML = require('es-abstract/2023/CreateHTML');

module.exports = function anchor(name) {
	return CreateHTML(this, 'a', 'name', name);
};
