/* jshint esversion:6 */

let fonts = require('google-fonts-complete');
let _ = require('underscore');
let Q = require('q');
let noop = (function() {});

function randomGoogleFont({
}, callback = noop) {
	
	let deferred = Q.defer();
		
	deferred.promise.nodeify(callback);
	
	let font = _(fonts[0]).sample();
		
	if (_.isEmpty(font)) {
		
		deferred.reject('Random font object not returned.');
		
	} else {
		
		deferred.resolve(font);
		
	}
	
	return deferred.promise;
	
}

module.exports = randomGoogleFont;
