'use strict';

const connectDB = require('../connect-db');
const logger = require('../../lib/logger');

(async () => {
	const { Project, Site, Page } = await connectDB({ create: true });
	let project, site;

	try {
		project = await Project.create({
			alias: 'cookbook',
			title: 'Кулинарная книга'
		});
	} catch (err) {
		logger.error(err);
		process.exit(1);
	}
	logger.info('Проект добавлен');

	try {
		site = await Site.create({
			host: 'cookbook.efiand.ru',
			localhost: 'cookbook.localhost',
			title: 'Кулинарная книга',
			projectId: project.id
		});
	} catch (err) {
		logger.error(err);
		process.exit(1);
	}
	logger.info('Сайт добавлен');

	try {
		await Page.create({
			alias: '',
			title: 'Главная страница',
			metaTitle: 'Содержание',
			siteId: site.id
		});
	} catch (err) {
		logger.error(err);
		process.exit(1);
	}
	logger.info('Главная страница добавлена');

	process.exit(0);
})();
