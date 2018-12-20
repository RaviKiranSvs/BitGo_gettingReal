const meth = require('../methods.js');
const BitGo = require('bitgo');
var bitgo = new BitGo.BitGo({env: 'test', 
	accessToken: meth.accessToken });
const url = require('url');
const queryString = require('querystring');
const myDB = require('../myDB');
const myData = require('../myData');

exports.addressWalletUser = (req, resp, extra) => {
	if(extra === 'get')	{
		meth.p('you are at /user/wallet/address');
		var coin = queryString.parse(url.parse(req.url).query).coin;
		var Coin = bitgo.coin('t' + coin);

		myData.getCurrentUser().then(user_name => {
			myDB.getWalletID(user_name, coin).then(id => {
				Coin.wallets().get({id: id}).then((wallet) => {
					meth.p('Address: ' + 
						wallet._wallet.receiveAddress.address);
					resp.redirect('/user/wallet');
				});
			});
		});		
	}
}