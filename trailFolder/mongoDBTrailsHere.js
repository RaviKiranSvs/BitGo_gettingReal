const meth = require('../methods.js');
const MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb://localhost:27017/mydb";

MongoClient.connect(mongoURL, {useNewUrlParser: true}, (err, db) => {
  //meth.p(db);
  var dbo = db.db("mydb");
  dbo.collection('users').find({}).toArray((err, res) => {
  	meth.p(res);
  });
  dbo.collection('wallets').find({}).toArray((err, res) => {
  	meth.p(res);
  });
  //dbo.collection('users').removeOne({user_name: 'Batman'});
/*
  dbo.collection('wallets').update({user_name: 'Superman'}, {
  	btc_id: 'nuvvu ra ra! nuvvu ra...'
  });*/
  //dbo.collection('users').drop();
  //dbo.collection('wallets').drop();

  db.close();
});