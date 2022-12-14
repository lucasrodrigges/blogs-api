const route = require('express').Router();
const categoryController = require('../controllers/category.controller');
const { categoryFieldsValidation } = require('../middlewares/categoriesValidations');
const { tokenValidation } = require('../middlewares/tokenValidation');

route.get('/', tokenValidation, categoryController.getCategories);

route.post('/', tokenValidation, categoryFieldsValidation, categoryController.createCategory);

module.exports = route;