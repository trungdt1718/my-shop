const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sizes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: ['S', 'M', 'L', 'XL']
  },
  colors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: ['#000', '#fff', '#2f5acf', '#6e7174']
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Product; 