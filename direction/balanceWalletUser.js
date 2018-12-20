const meth = require('../methods.js');
const BitGo = require('bitgo');
var bitgo = new BitGo.BitGo({env: 'test', 
	accessToken: meth.accessToken });
const url = require('url');
const queryString = require('querystring');
const myDB = require('../myDB');
const myData = require('../myData');

exports.balanceWalletUser = (req, resp, extra) => {
	if(extra === 'get')	{
		meth.p('you are at /user/wallet/balance');
		var coin = queryString.parse(url.parse(req.url).query).coin;
		var Coin = bitgo.coin('t' + coin);

		myData.getCurrentUser().then(user_name => {
			myDB.getWalletID(user_name, coin).then(id => {
				Coin.wallets().get({id: id}).then((wallet) => {
					if(coin === 'xrp')
						meth.p('Balance: ' + 
							wallet._wallet.balanceString);
					else
						meth.p('Balance: ' + 
							wallet._wallet.balance);
					resp.redirect('/user/wallet');
				});
			});
		});		
	}
}