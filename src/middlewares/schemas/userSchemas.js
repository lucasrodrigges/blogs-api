const Joi = require('joi');

module.exports = {
  userSchema: Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  }).required().messages({}),
};