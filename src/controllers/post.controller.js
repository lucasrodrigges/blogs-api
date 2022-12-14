const { postService } = require('../services');
const { status } = require('../utils/statusMap');

module.exports = {
  getPosts: async (_req, res) => {
    const { error, output } = await postService.getPosts();

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(200).json(output);
  },

  getPostById: async (req, res) => {
    const { id } = req.params;
    const { error, output } = await postService.getPostById(id);

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(200).json(output);
  },

  searchPosts: async (req, res) => {
    const { q } = req.query;
    const { error, output } = await postService.searchPosts(q);

    if (error) return res.status(status(error)).json(output && { message: output });

     return res.status(200).json(output);
  },

  createPost: async (req, res) => {
    const { id } = req.headers.user;
    const { title, content, categoryIds } = req.body;

    const { error, output } = await postService
      .createPost(id, { title, content, categoryIds });

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(201).json(output);
  },

  editPost: async (req, res) => {
    const { id } = req.params;
    const { id: userId } = req.headers.user;
    const { title, content } = req.body;

    const { error, output } = await postService.editPost(userId, id, { title, content });

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(200).json(output);
  },

  deletePost: async (req, res) => {
    const { id: userId } = req.headers.user;
    const { id } = req.params;

    const { error, output } = await postService.deletePost(userId, id);

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(204).end();
  },
};