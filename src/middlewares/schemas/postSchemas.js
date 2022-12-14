const Joi = require('joi');

const errorMsg = 'Some required fields are missing';

module.exports = {
  idSchema: Joi.number().integer().required().messages({
    'any.required': errorMsg,
  }),

  postSchema: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().min(1).items(Joi.number().integer()).required(),
  }).required().messages({
    'any.any': errorMsg,
    'array.base': errorMsg,
    'array.min': errorMsg,
    'number.base': errorMsg,
    'string.empty': errorMsg,
  }),

  editPostSchemas: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).required().messages({
    'any.any': errorMsg,
    'array.base': errorMsg,
    'array.min': errorMsg,
    'number.base': errorMsg,
    'string.empty': errorMsg,
  }),

};
