/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
     display_name: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     email: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     password: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     image: {
      type: Sequelize.STRING,
      defaultValue: null,
     },
     published: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
      allowNull: false,
     },
    });
  },

  down: async (queryInterface) => {
   await queryInterface.dropTable('users');
  },
};
