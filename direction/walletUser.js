const meth = require('../methods.js');
const path = require('path');

exports.walletUser = (req, resp, extra) => {
	if(extra === 'get')	{
		meth.p('you are at /user/wallet');
		resp.sendFile('layout_walletUser.html', 
			{root: path.join(__dirname, '../Views')});
	}
}