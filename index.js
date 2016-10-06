/* jshint esversion:6 */

let json = require('google-fonts-complete');
let _ = require('underscore');
let Q = require('q');
let noop = (function() {});

function getFont(options) {
	
	let result = json;
	
	//console.log(options.variant);
	
	result = (options.category.length ? _(result).filter({
		category: options.category
	}) : result);
	
	result = (options.variant.length ? _(result).filter(function(value) {
		return value.variants[options.variant];
	}) : result);
	
	result = (options.weight.length ? _(result).filter(function(value) {
		console.log(value);
		return value[options.weight];
	}) : result);
	
	//result = _(result).sample(options.items);
	
	return result;
	
}

function randomGoogleFont({
		name = '',
		category = '',
		variant = '',
		weight = '',
		items = 1,
}, callback = noop) {
	
	let deferred = Q.defer();
		
	deferred.promise.nodeify(callback);
	
	let font = getFont(arguments[0]);
		
	if (_.isEmpty(font)) {
		
		deferred.reject('Random font object not returned.');
		
	} else {
		
		deferred.resolve(font);
		
	}
	
	return deferred.promise;
	
}

module.exports = randomGoogleFont;
