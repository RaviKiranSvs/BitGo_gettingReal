const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const meth = require('./methods.js');
const dir = require('./direction/direction.js')

app.listen(3000, () => {
	meth.p('listening to 3000...');
});

app.get('/user/create', (req, resp) => {
	dir.createUser(req, resp, 'get');
});

app.post('/user/create', (req, resp) =>	{
	dir.createUser(req, resp, 'post');
});

app.get('/user/login', (req, resp) => {
	dir.loginUser(req, resp, 'get');
});

app.post('/user/login', (req, resp) =>	{
	dir.loginUser(req, resp, 'post');
});

app.get('/user/wallet', (req, resp) => {
	dir.walletUser(req, resp, 'get');
});

app.get('/user/wallet/balance', (req, resp) => {
	dir.balanceWalletUser(req, resp, 'get');
});

app.get('/user/wallet/address', (req, resp) => {
	dir.addressWalletUser(req, resp, 'get');
});

app.get('/user/wallet/send', (req, resp) => {
	dir.sendWalletUser(req, resp, 'get');
});

app.post('/user/wallet/send', (req, resp) => {
	dir.sendWalletUser(req, resp, 'post');
});