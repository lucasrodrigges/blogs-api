/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('blog_posts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
     title: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     content: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     },
     published: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
     }, 
     updated: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
     },
     });
  },

  down: async (queryInterface) => {
   await queryInterface.dropTable('blog_posts');
  },
};
