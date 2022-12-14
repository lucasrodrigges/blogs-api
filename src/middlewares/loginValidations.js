const { loginSchema } = require('./schemas/loginSchemas');
const { status } = require('../utils/statusMap');

module.exports = {
  loginFieldsValidate: (req, res, next) => {
    const { email, password } = req.body;

    const { error } = loginSchema.validate({ email, password });

    if (error) {
      return res.status(status(error.details[0].type)).json({ message: error.details[0].message });
    }

    next();
  },
};