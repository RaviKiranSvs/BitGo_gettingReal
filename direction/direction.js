const createUser = require('./createUser.js');
const loginUser = require('./loginUser.js');
const walletUser = require('./walletUser.js');
const balanceWalletUser = require('./balanceWalletUser.js');
const addressWalletUser = require('./addressWalletUser.js');
const sendWalletUser = require('./sendWalletUser.js');

exports.createUser = (req, resp, extra) => {
	createUser.createUser(req, resp, extra);
}
exports.loginUser = (req, resp, extra) => {
	loginUser.loginUser(req, resp, extra);
}
exports.walletUser = (req, resp, extra) => {
	walletUser.walletUser(req, resp, extra);
}
exports.balanceWalletUser = (req, resp, extra) => {
	balanceWalletUser.balanceWalletUser(req, resp, extra);
}
exports.addressWalletUser = (req, resp, extra) => {
	addressWalletUser.addressWalletUser(req, resp, extra);
}
exports.sendWalletUser = (req, resp, extra) => {
	sendWalletUser.sendWalletUser(req, resp, extra);
}