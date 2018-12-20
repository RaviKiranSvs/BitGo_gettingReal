const meth = require('./methods.js');
const fs = require('fs');

exports.getCurrentUser = () => 
new Promise((resolve, reject) => {
	fs.readFile('./data/currentUser', (err, data) => {
		return resolve(data.toString());
	});
});

exports.setCurrentUser = (user_name) =>	{
	fs.writeFile('./data/currentUser', user_name, () => {
		meth.p('logged in as ' + user_name);
	});
}