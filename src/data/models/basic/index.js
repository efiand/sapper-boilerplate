'use strict';

const defineProject = require('./project');
const defineSite = require('./site');
const definePage = require('./page');

module.exports = (db) => {
	const Project = defineProject(db);
	const Site = defineSite(db);
	const Page = definePage(db);

  Project.hasMany(Site, {
		foreignKey: {
			name: 'projectId',
			allowNull: false,
			comment: 'Идентификатор проекта, к которому относится сайт'
		}
	});

  Site.hasMany(Page, {
		foreignKey: {
			name: 'siteId',
			allowNull: false,
			comment: 'Идентификатор сайта, к которому относится страница'
		}
	});

  Page.hasMany(Page, {
		foreignKey: {
			name: 'parentId',
			comment: 'Идентификатор родительской страницы'
		}
	});

	return { Project, Site, Page };
};
