const meth = require('../methods.js');
const myDB = require('../myDB.js');

var user_name = 'RaviKiran';
var user_wallets = {
	btc: 'BTCmax',
	bch: 'BCHmax',
	ltc: 'LTCmax',
	xrp: 'XRPmax'
}

myDB.registerWallets(user_name, user_wallets);