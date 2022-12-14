const { Category, BlogPost, User, Sequelize } = require('../models');

module.exports = {
  getPosts: async () => {
    try {
      const posts = await BlogPost.findAll({
        include: [{
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password'],
          },
        }, {
          model: Category,
          as: 'categories',
        }],
      });

      return { error: null, output: posts };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },

  getPostById: async (id) => {
    try {
      const post = await BlogPost.findOne({
        where: { id },
        include: [{
          model: User,
          as: 'user',
            attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories' },
      ] });

      if (!post) return { error: 'POST_NOT_FOUND', output: 'Post does not exist' };

      return { error: null, output: post };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },

  createPost: async (userId, { title, content, categoryIds }) => {
    try {
      const { in: opIn } = Sequelize.Op;
      const checkCategoryIds = await Category.findAll({
        where: { id: { [opIn]: categoryIds } },
      });
  
      if (checkCategoryIds.length !== categoryIds.length) {
        return { error: 'NOT_FOUND', output: 'one or more "categoryIds" not found' };
      }

      const newPost = await BlogPost.create({ title, content, userId });

      await newPost.addCategory(categoryIds);

      return { error: null, output: newPost };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },

  editPost: async (userId, id, post) => {
   try {
    const currPost = await BlogPost.findByPk(id);

    if (!currPost) return { error: 'POST_NOT_FOUND', output: 'Post does not exist' };

    if (userId !== currPost.dataValues.user_id) {
      return { error: 'UNAUTHORIZED_USER', output: 'Unauthorized user' };
    }

    await BlogPost.update(post, { where: { id } });
    const updatedPost = await BlogPost.findOne({ where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories' },
    ] });

    return { error: null, output: updatedPost };
   } catch (error) {
    console.error(error);
    return { error };
   }
  },

  searchPosts: async (query) => {
    try {
      const posts = await BlogPost.findAll({
        include: [{
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        }, { model: Category, as: 'categories' },
      ],
      });

      const filteredPosts = posts.reduce((acc, el) => (
        (el.title.includes(query) || el.content.includes(query)) ? [...acc, el] : [...acc]), []);

      return { error: null, output: filteredPosts };
    } catch (error) {
      console.error(error);
      return { error };
    }
  },

  deletePost: async (userId, id) => {
    try {
      const post = await BlogPost.findByPk(id);

      // console.log('POOOOOOOOST', post);
      if (!post) {
        return { error: 'POST_NOT_FOUND', output: 'Post does not exist' };
      }
      
      if (post.dataValues.user_id !== userId) {
        return { error: 'UNAUTHORIZED_USER', output: 'Unauthorized user' };
      }

      await BlogPost.destroy({ where: { id } });

      return { error: null };
    } catch (error) {
      console.error(error);
    return { error };
    }
  },
};