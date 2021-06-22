'use strict';

const defineBasic = require('./basic');

module.exports = (sequelize) => {
	const Basic = defineBasic(sequelize);

	return Basic;
};
