const Joi = require('joi');

module.exports = {
  nameSchema: Joi.string().required().messages({
    'any.required': '"name" is required',
  }),
};