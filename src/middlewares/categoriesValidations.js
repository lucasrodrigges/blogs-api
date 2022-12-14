const { status } = require('../utils/statusMap');
const { nameSchema } = require('./schemas/categorySchemas');

module.exports = {
  categoryFieldsValidation: (req, res, next) => {
    const { name } = req.body;
    const { error } = nameSchema.validate(name);

    if (error) {
      return res.status(status(error.details[0].type)).json({ message: error.details[0].message });
    }

    next();
  },
};
