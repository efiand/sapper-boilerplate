'use strict';

const {DataTypes, Model} = require('sequelize');
const setVarchar = DataTypes.STRING;

class Site extends Model {}

module.exports = (sequelize) => Site.init({
  id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
		comment: 'Идентификатор сайта'
  },
  host: {
    type: setVarchar(256),
    allowNull: false,
		comment: 'Удаленный адрес сайта'
  },
  localhost: {
    type: setVarchar(256),
    allowNull: false,
		comment: 'Локальный адрес сайта'
  },
  title: {
    type: setVarchar(256),
    allowNull: false,
		comment: 'Название сайта'
  }
}, {
	sequelize,
	comment: 'Настройки сайтов'
});
