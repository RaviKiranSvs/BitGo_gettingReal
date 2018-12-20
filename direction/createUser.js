const meth = require('../methods.js');
const path = require('path');
const myDB = require('../myDB.js');
const myBitGo = require('../myBitGo.js');

exports.createUser = (req, resp, extra) => {
	if(extra === 'get')	{
		meth.p('you are at /user/create');
		resp.sendFile('layout_createUser.html', 
			{root: path.join(__dirname, '../Views')});
	}else if(extra === 'post')	{
		if(req.body && req.body.user_name && req.body.user_key)	{
			myDB.createUser(req.body.user_name, req.body.user_key)
			.then(isCreated => {
				if(isCreated) {
					myBitGo.createBitGoUser(req.body.user_name);
					resp.redirect('/user/login');
				}
				else	resp.redirect('/user/create');
			});
		}else	resp.redirect('/user/create');
	}
}