/* jshint esversion:6 */

let rgf = require('./');
let options = {
	//name: 'Roboto',
	category: 'handwriting',
	variant: 'italic',
	weight: '500',
	items: 3,
};

// http://mono.software/2014/07/07/Creating-NodeJS-modules-with-both-promise-and-callback-API-support-using-Q/
let font = rgf(options)
	.then(function(result) {
		console.log(result);
	})
	.fail(function (error) {
		console.log(error);
	});

rgf(options, function(error, result) {
	if ( ! error) {
		console.log(result);
	} else {
		console.error(error);
	}
});
