'use strict';

const connectDB = require('../connect-db');

(async () => {
	await connectDB({ create: true });
	process.exit(0);
})();
