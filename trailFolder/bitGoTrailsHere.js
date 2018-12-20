const meth = require('../methods.js');

const BitGo = require('bitgo');
var bitgo = new BitGo.BitGo({env: 'test', 
	accessToken: meth.accessToken });

var user_name = 'ravikiran_superman';
var wallet = 'txrp';
/*
var coin = bitgo.coin(wallet);
coin.wallets().list({}).then((wallets) => {
	wallets.wallets.forEach((wallet) => {
		meth.p(wallet._wallet.id);
	});
});*/

//four coins - BTC, BCH, LTC, XRP

var Uname = 'ravikiran_hunterman_peoplehunter';

const coin_btc = bitgo.coin('tbtc');
//const coin_bch = bitgo.coin('tbch');
//const coin_ltc = bitgo.coin('tltc');
//const coin_xrp = bitgo.coin('txrp');

var btc_label = Uname + '_test_btc_label';
var bch_label = Uname + '_test_bch_label';
var ltc_label = Uname + '_test_ltc_label';
var xrp_label = Uname + '_test_xrp_label';

coin_btc.wallets().generateWallet({
	label: btc_label,
	passphrase: 'JaiBalayya123'
}).then((wallet) => {
	meth.p(wallet.wallet._wallet.id);
});
/*
coin_bch.wallets().generateWallet({
	label: bch_label,
	passphrase: 'JaiBalayya123'
}).then((wallet) => {
	meth.p(wallet);
});

coin_ltc.wallets().generateWallet({
	label: ltc_label,
	passphrase: 'JaiBalayya123'
}).then((wallet) => {
	meth.p(wallet);
});

coin_xrp.wallets().generateWallet({
	label: xrp_label,
	passphrase: 'JaiBalayya123'
}).then((wallet) => {
	meth.p(wallet);
});*/