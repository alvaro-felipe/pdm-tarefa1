'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTAGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      user_id:{
        type: Sequelize.INTAGER,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },

      zipcode: {

        type: Sequelize.STRING,
        allowNull: false,
      },

      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      number:{
        type: Sequelize.INTAGER,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');

  }
};
