const Joi = require('joi');

module.exports = {
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).required().messages({
    'any.required': 'Invalid fields',
    'string.empty': 'Some required fields are missing',
    'string.email': 'Invalid fields',
  }),
};