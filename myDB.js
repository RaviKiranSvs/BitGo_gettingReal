const meth = require('./methods.js');
const MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb://localhost:27017/mydb";

exports.createUser = (user_name, user_key) => 
new Promise((resolve, reject) => {
	doesExist(user_name, 'users').then(doesExist => {
		if(!doesExist)	{
			MongoClient.connect(mongoURL, {
				useNewUrlParser: true
			}, (err,db) => {
				var dbo = db.db('mydb');
				dbo.collection('users').insertOne({
					user_name: user_name,
					user_key: user_key
				}, (err, resp) => {
					if(err)	throw err;
					meth.p(user_name + ' created.');
					return resolve(true);
				});
				db.close();
			});
		}else	return resolve(false);
	});
});

doesExist = (user_name, table) => new Promise((resolve, reject) => {
	MongoClient.connect(mongoURL, {
		useNewUrlParser: true
	}, (err, db) => {
		var dbo = db.db('mydb');
		dbo.collection(table).find({user_name: user_name})
		.toArray((err, res) => {
			if(res.length === 0)	return resolve(false);
			else if(res.length === 1)	return resolve(true);
		});
		db.close();
	});
});
exports.doesExist = doesExist;

exports.registerWallets = (user_name, user_wallets) => {
	MongoClient.connect(mongoURL, {
		useNewUrlParser: true
	}, (err, db) =>	{
		var dbo = db.db('mydb');
		dbo.collection('wallets').insertOne({
			user_name: user_name,
			btc_id: user_wallets.btc,
			bch_id: user_wallets.bch,
			ltc_id: user_wallets.ltc,
			xrp_id: user_wallets.xrp
		}, (err, resp) => {
			if(err)	throw err;
			meth.p(user_name + ' inserted.');
		});
		db.close();
	});
}

exports.getWalletID = (user_name, coin) => 
new Promise((resolve, reject) => {
	MongoClient.connect(mongoURL, {
		useNewUrlParser: true
	}, (err, db) => {
		var dbo = db.db('mydb');
		dbo.collection('wallets').find({user_name: user_name})
		.toArray((err, res) => {
			if(coin === 'btc')	return resolve(res[0].btc_id);
			else if(coin === 'bch')	return resolve(res[0].bch_id);
			else if(coin === 'ltc')	return resolve(res[0].ltc_id);
			else if(coin === 'xrp')	return resolve(res[0].xrp_id);
		});
	});
});