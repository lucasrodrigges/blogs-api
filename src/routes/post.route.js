const route = require('express').Router();
const { postController } = require('../controllers');
const {
  postFieldsValidation,
  postFieldsEditValidation,
} = require('../middlewares/postValidations');
const { tokenValidation } = require('../middlewares/tokenValidation');

route.get('/', tokenValidation, postController.getPosts);

route.get('/search', tokenValidation, postController.searchPosts);

route.get('/:id', tokenValidation, postController.getPostById);

route.post('/', tokenValidation, postFieldsValidation, postController.createPost);

route.put('/:id', tokenValidation, postFieldsEditValidation, postController.editPost);

route.delete('/:id', tokenValidation, postController.deletePost);

module.exports = route;