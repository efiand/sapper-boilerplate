'use strict';

const Sequelize = require('sequelize');
const defineModels = require('./models');
const logger = require('../lib/logger');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const somethingIsNotDefined = [DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT].some((it) => it === undefined);

if (somethingIsNotDefined) {
	throw new Error('One or more environmental variables are not defined');
}

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	port: DB_PORT,
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 10000,
		idle: 10000
	}
});

module.exports = async ({ create = false, update = false } = {}) => {
	const models = defineModels(db);

	try {
		logger.info('Trying to connect to database...');
		await db.authenticate();
	} catch (err) {
		logger.error(err);
		process.exit(1);
	}
	logger.info('Connection to database established');

	if (create) {
		try {
			logger.info('Trying to create schema...');
			await db.sync({ force: true });
		} catch (err) {
			logger.error(err);
			process.exit(1);
		}
		logger.info('Schema created');
	} else if (update) {
		try {
			logger.info('Trying to update schema...');
			await db.sync({ alter: true });
		} catch (err) {
			logger.error(err);
			process.exit(1);
		}
		logger.info('Schema updated');
	}

	return { db, ...models };
};
