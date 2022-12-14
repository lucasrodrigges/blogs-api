/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    post_id: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
  }, { 
      tableName: 'posts_categories',
      timestamps: false,
      // underscored: true,
   });

   postCategory.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      through: postCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'blogs',
    });

    BlogPost.belongsToMany(Category, {
      through: postCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'categories',
    });
   };

   return postCategory;
};
