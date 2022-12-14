const { status } = require('../utils/statusMap');
const { postSchema, editPostSchemas } = require('./schemas/postSchemas');

module.exports = {
  postFieldsValidation: (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const { error } = postSchema.validate({ title, content, categoryIds });

    if (error) {
      return res.status(status(error.details[0].type))
        .json({ message: error.details[0].message });
    }

    next();
  },

  postFieldsEditValidation: (req, res, next) => {
    const { title, content } = req.body;

    const { error } = editPostSchemas.validate({ title, content });

    if (error) {
      return res.status(status(error.details[0].type))
        .json({ message: error.details[0].message });
    }

    next();
  },
};
