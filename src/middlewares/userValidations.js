const { status } = require('../utils/statusMap');
const { userSchema } = require('./schemas/userSchemas');

module.exports = {
  userFieldsValidate: (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    const { error } = userSchema.validate({ displayName, email, password, image });
    
    if (error) {
      return res.status(status(error.details[0].type)).json({ message: error.details[0].message });
    }

    next();
  },
};