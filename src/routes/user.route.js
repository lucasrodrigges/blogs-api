const route = require('express').Router();
const { userController } = require('../controllers');
const { tokenValidation } = require('../middlewares/tokenValidation');
const { userFieldsValidate } = require('../middlewares/userValidations');

route.get('/', tokenValidation, userController.getUsers);

route.get('/:id', tokenValidation, userController.getUserById);

route.post('/', userFieldsValidate, userController.createUser);

route.delete('/me', tokenValidation, userController.deleteUser);

module.exports = route;