'use strict';

const {DataTypes, Model} = require('sequelize');
const setVarchar = DataTypes.STRING;

class Page extends Model {}

module.exports = (sequelize) => Page.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
		comment: 'Идентификатор страницы'
  },
  alias: {
    type: setVarchar(256),
    allowNull: false,
		comment: 'Имя страницы в URL'
  },
  title: {
    type: setVarchar(512),
    allowNull: false,
		comment: 'Название страницы'
  },
  metaTitle: {
    type: setVarchar(512),
		comment: 'Название страницы во вкладке браузера и соцсетях'
  }
}, {
	sequelize,
	paranoid: true,
	comment: 'Настройки страниц'
});
