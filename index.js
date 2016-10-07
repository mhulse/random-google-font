/* jshint esversion:6 */

let json = require('google-fonts-complete');
let _ = require('underscore');
let Q = require('q');
let noop = (function() {});

function getFont(options) {
	
	let result = json;
	
	if (options.name) {
		
		result = _(result).pick(options.name);
		
	} else {
		
		if (options.category) {
			
			// Filter objects down to desired category:
			result = _(result).filter({
				category: options.category
			});
			
		} else {
			
			// All categories:
			result = _(result).filter('category');
			
		}
		
	}
	
	if (options.variant) {
		
		// Filter objects down to desired variant:
		result = _(result).filter(function(value) {
			
			return !!value.variants[options.variant];
			
		});
		
		// Remove everything but desired variant:
		result = _(result).map(function(value) {
			
			return _(value.variants).pick(options.variant);
			
		});
		
	} else {
		
		// All variants:
		result = _(result).pluck('variants');
		
	}
	
	// Remove parent keys:
	result = _.flatten(_.map(result, _.values));
	
	if (options.weight) {
		
		// Filter objects down to desired weight:
		result = _(result).filter(function(value) {
			
			return !!value[options.weight];
			
		});
		
		// Remove everything but desired variant:
		result = _(result).map(function(value) {
			
			return _(value).pick(options.weight);
			
		});
		
	}
	
	// Remove parent keys:
	result = _.flatten(_.map(result, _.values));
	
	// Choose random with optional number of random items:
	result = _(result).sample(options.items);
	
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

function randomGoogleFontSync() {
	return getFont(arguments);
}

if (typeof module !== 'undefined') {
	
	module.exports = {
		get: randomGoogleFont,
		getSync: randomGoogleFontSync,
	};
	
}
