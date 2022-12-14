const { User } = require('../models');
const { createToken } = require('../utils/jtwConfig');

module.exports = {
  login: async (email, _password) => {
   try {
    const user = await User.findOne({
      where: { email },
    });

    if (!user) return { error: 'NOT_FOUND', output: 'Invalid fields' };

    const { password: _, ...userWithouPass } = user.dataValues;
    const token = createToken(userWithouPass);
    
    return { error: null, output: { token } };
   } catch (error) {
    console.error(error);
    return { error };
   }
  },
};