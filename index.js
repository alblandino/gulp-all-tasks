"use strict";

// require core modules
var path = require("path");

// require extern modules
var mathc = require("multimatch");

// convert too array
var convertArray = function(arr){
	return Array.isArray(arr) ? arr : [arr];
};

// Replace all - in plugin name
var replaceLine = function(search, replace, text){
	var regex = new RegExp(search, "g");
	return text.replace(regex, replace);
};

// Principal definition
var gulpAllTasks = function(options){
	options = {};
	// Default options
	var defaultOptions = {
		package: options.package || "package.json",
		// Prefixes
		prefixes: convertArray(options.prefix || ["gulp-*", "@*/gulp-*"]),
		// dependencies scope
		dependencies: options.dependencies || ["dependencies", "devDependencies"]
	};

	// Load package.json from project
	var file = require(path.resolve(defaultOptions.package));

	// Doc for Array.prototype.reduce
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	var pluginName = defaultOptions.dependencies.reduce(function(r, p) {
		var t = file[p];
		if(typeof t == "object"){
			return Object.keys(t);
		}
	}, []);

	// // Load tasks and assign variables
	mathc(pluginName,defaultOptions.prefixes).forEach(function(i,v){
		var currentName = replaceLine("-","_",i);
		// convert to function
		global[currentName] = require(i);
	});
};

// export module
module.exports.gulp_all_tasks = gulpAllTasks;
