'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'imageData', {
      type: Sequelize.BLOB('long'),
      allowNull: true
    });
    await queryInterface.addColumn('Products', 'imageType', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'imageData');
    await queryInterface.removeColumn('Products', 'imageType');
  }
}; 