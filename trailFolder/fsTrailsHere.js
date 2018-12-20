const meth = require('../methods.js');

const fs = require('fs');

var user_name = 'Batman';

fs.writeFile('../data/currentUser', user_name, () => {
	meth.p('success!')
});

fs.readFile('../data/currentUser', (err, data) => {
	meth.p(data.toString() === 'Batman');
});