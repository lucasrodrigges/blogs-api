const { User } = require('../models');
const { createToken } = require('../utils/jtwConfig');

module.exports = {
  getUsers: async () => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] },
      });

      return { error: null, output: users };
    } catch (error) {
      return { error };
    }
  },

  getUserById: async (id) => {
    try {
      const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

      if (!user) return { error: 'USER_NOT_FOUND', output: 'User does not exist' };

      return { error: null, output: user };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },

  createUser: async (user) => {
   try {
    const userExists = await User.findOne({ where: { email: user.email } });

    if (userExists) return { error: 'ALREADY_REGISTERED', output: 'User already registered' };

    const { dataValues } = await User.create(user);
    const { password: _, ...userWithoutPass } = dataValues; 
    const token = createToken(userWithoutPass);

    return { error: null, output: { token } };
   } catch (error) {
    console.error(error);
    return { error };
   }
  },

  deleteUser: async (id) => {
    try {
      await User.destroy({ where: { id } });

      return { error: null };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },
};