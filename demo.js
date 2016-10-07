/* jshint esversion:6 */

let font = require('./');
let options = {
	//name: 'Roboto',
	//category: 'monospace', // If name is specified, this option is ignored.
	variant: 'italic',
	weight: '100',
	items: 2,
};

// http://mono.software/2014/07/07/Creating-NodeJS-modules-with-both-promise-and-callback-API-support-using-Q/
font.get(options)
	.then(function(result) {
		console.log(result);
		console.log('--------------------------------------------------');
	})
	.fail(function (error) {
		console.log(error);
	});

font.get(options, function(error, result) {
	if ( ! error) {
		console.log(result);
		console.log('--------------------------------------------------');
	} else {
		console.error(error);
	}
});

// Just proving that it’s sync:
console.log('before');
countdown();
console.log(font.getSync(options));
countdown();
console.log('after');
console.log('--------------------------------------------------');

function countdown() {
	for (let i = 20; i > 0; i--) {
		console.log(i);
	}
}
