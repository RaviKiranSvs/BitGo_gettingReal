const meth = require('./methods.js');
const myDB = require('./myDB.js');
const myData = require('./myData.js');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const BitGo = require('bitgo');
var bitgo = new BitGo.BitGo({env: 'test', 
	accessToken: meth.accessToken });

exports.createBitGoUser = (user_name) => {
	const coin_btc = bitgo.coin('tbtc');
	const coin_bch = bitgo.coin('tbch');
	const coin_ltc = bitgo.coin('tltc');
	const coin_xrp = bitgo.coin('txrp');

	var btc_label = user_name + '_test_btc';
	var bch_label = user_name + '_test_bch';
	var ltc_label = user_name + '_test_ltc';
	var xrp_label = user_name + '_test_xrp';

	var user_wallets = {
		btc: '',
		bch: '',
		ltc: '',
		xrp: ''
	}

	coin_btc.wallets().generateWallet({
		label: btc_label,
		passphrase: 'JaiBalayya123'
	}).then((wallet) => {
		user_wallets.btc = wallet.wallet._wallet.id;
		meth.p(btc_label + ' created.');
		myEmitter.emit('generateBCH');
	});

	myEmitter.on('generateBCH', () => {
		coin_bch.wallets().generateWallet({
			label: bch_label,
			passphrase: 'JaiBalayya123'
		}).then((wallet) => {
			user_wallets.bch = wallet.wallet._wallet.id;
			meth.p(bch_label + ' created.');
			myEmitter.emit('generateLTC');
		});
	});

	myEmitter.on('generateLTC', () => {
		coin_ltc.wallets().generateWallet({
			label: ltc_label,
			passphrase: 'JaiBalayya123'
		}).then((wallet) => {
			user_wallets.ltc = wallet.wallet._wallet.id;
			meth.p(ltc_label + ' created.');
			myEmitter.emit('generateXRP');
		});
	});

	myEmitter.on('generateXRP', () => {
		coin_xrp.wallets().generateWallet({
			label: xrp_label,
			passphrase: 'JaiBalayya123'
		}).then((wallet) => {
			user_wallets.xrp = wallet.wallet._wallet.id;
			meth.p(xrp_label + ' created.');
			myDB.registerWallets(user_name, user_wallets);
		});
	});
}
/*
exports.moveFunds = (address, amount) => 
new Promise((resolve, reject) => {
	//ocde goes here
});

var params = {
  address: 'QZ1exwX3WV6ExBj2ZwaREq4KaSfudbWwei',
  amount: 5000000,
  walletPassphrase: 'JaiBalayyaAlways'
};
//rnnZ88JgxrxataJTvttM7ghLi65UtAkJkU?dt=0 - Batman

var coin = 'ltc';
var Coin = bitgo.coin('t' + coin);

var w_address;
var wallet_00;

myData.getCurrentUser().then(user_name => {
	meth.p(user_name);//done
	myDB.getWalletID(user_name, coin).then(id => {
		meth.p(id);//done
		Coin.wallets().get({id: id}).then((wallet) => {
			wallet_00 = wallet;
			w_address = wallet._wallet.receiveAddress.address;
			myEmitter.emit('transact');
		});
	});
});

myEmitter.on('transact', () => {
	meth.p(w_address);//done
	wallet_00.send(params).then(function(transaction) {
	  meth.p(transaction); // error line...
	});
});*/