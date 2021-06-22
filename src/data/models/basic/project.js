'use strict';

const {DataTypes, Model} = require('sequelize');
const setVarchar = DataTypes.STRING;

class Project extends Model {}

module.exports = (sequelize) => Project.init({
  id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
		comment: 'Идентификатор проекта'
  },
  alias: {
    type: setVarchar(256),
    allowNull: false,
		comment: 'Кодовое имя проекта'
  },
  title: {
    type: setVarchar(256),
    allowNull: false,
		comment: 'Название проекта'
  }
}, {
	sequelize,
	comment: 'Проекты (группы сайтов)'
});
