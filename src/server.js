import compression from 'compression';
import fastify from 'fastify';
import * as path from 'path';
import * as sapper from '@sapper/server';

const app = fastify({
	logger: true
});

(async () => {
	await app.register(require('middie'));

	app.use(compression({ threshold: 0 }));

	app.register(require('fastify-static'), {
		root: path.join(__dirname, '../..', 'static')
	});

	app.use(sapper.middleware());

	app.listen(process.env.PORT, (err, address) => {
		if (err) {
			throw err;
		}
		app.log.info(`Server listening on ${address}`);
	});
})();
