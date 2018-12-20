const meth = require('../methods.js');
const path = require('path');
const myBitGo = require('../myBitGo.js');

exports.sendWalletUser = (req, resp, extra) => {
	if(extra === 'get')	{
		meth.p('you are at /user/wallet/send');
		resp.sendFile('layout_sendWalletUser.html', 
			{root: path.join(__dirname, '../Views')})
	}else if(extra === 'post')	{
		if(req.body && req.body.address && req.body.amount)	{
			myBitGo.moveFunds(req.body.address, req.body.amount);
		}else	resp.redirect('/user/wallet/send');
	}
}