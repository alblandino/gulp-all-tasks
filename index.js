"use strict"

// require core modules
var path = require('path');

// require extern modules
var find  = require('findup-sync'),
	mathc = require('multimatch');

// convert too array
var convert_array = function(arr){
	return Array.isArray(arr) ? arr : [arr];
}

// Replace all - in plugin name
var replace_line = function(search, replace, text){
	var regex = new RegExp(search, 'g');
	return text.replace(regex, replace);;
}

// Principal definition
var gulp_all_tasks = function(options){
	options = {};
	// Default options
	var default_options = {
		package: options.package || 'package.json',
		// Prefixes
		prefixes: convert_array(options.prefix || ['gulp-*', '@*/gulp-*']),
		// dependencies scope
		dependencies: options.dependencies || ['dependencies', 'devDependencies']
	};

	// Load package.json from project
	var file = require(path.resolve(default_options.package));

	// Doc for Array.prototype.reduce
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	var plugin_name = default_options.dependencies.reduce(function(r, p) {
		var t = file[p];
		if(typeof t == 'object'){
			return Object.keys(t);
		}
	}, []);

	// // Load tasks and assign variables
	mathc(plugin_name,default_options.prefixes).forEach(function(i,v){
		var current_name = replace_line('-','_',i);
		// convert to function
		global[current_name] = require(i);
	});
}

// export module
module.exports = gulp_all_tasks;
