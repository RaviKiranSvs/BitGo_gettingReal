const meth = require('../methods.js');
const path = require('path');
const myDB = require('../myDB.js');
const myData = require('../myData.js');

exports.loginUser = (req, resp, extra) => {
	if(extra === 'get')	{
		meth.p('you are at /user/login');
		resp.sendFile('layout_loginUser.html', 
			{root: path.join(__dirname, '../Views')});
	}else if(extra === 'post')	{
		if(req.body && req.body.user_name && req.body.user_key)	{
			myDB.doesExist(req.body.user_name, 'users')
			.then(doesExist =>	{
				if(!doesExist)	resp.redirect('/user/login');
				else	{
					myData.setCurrentUser(req.body.user_name);
					resp.redirect('/user/wallet');
				}
			});
		}else	resp.redirect('/user/login');
	}
}