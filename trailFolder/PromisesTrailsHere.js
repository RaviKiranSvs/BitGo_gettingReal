const meth = require('./methods.js');

hey = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		meth.p('returning true...');
		return resolve(true);
	}, 2000);
});

hey().then(hey => {
	if(hey)	meth.p('true');
	else meth.p('false');
})