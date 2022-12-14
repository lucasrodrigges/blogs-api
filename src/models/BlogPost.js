/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
const { QueryTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },
    }, { 
      timestamps: false,
      underscored: true,
   });

   blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
   };

   return blogPost;
};
