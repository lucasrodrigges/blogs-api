const route = require('express').Router();

const { loginController } = require('../controllers');
const { loginFieldsValidate } = require('../middlewares/loginValidations');

route.post('/', loginFieldsValidate, loginController.login);

module.exports = route;