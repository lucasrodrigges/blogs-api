/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, { 
      timestamps: false,
      underscored: true,
   });

   user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreignKey: 'user_id',
      // as: 'user',
    });
   };

   return user;
};
