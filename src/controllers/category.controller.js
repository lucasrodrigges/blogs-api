const { categoryService } = require('../services');
const { status } = require('../utils/statusMap');

module.exports = {
  getCategories: async (_req, res) => {
    const { error, output } = await categoryService.getCategories();

    if (error) {
      return res.status(status(error)).json(output && { message: output });
    }

    return res.status(200).json(output);
  },

  createCategory: async (req, res) => {
    const { name } = req.body;

    const { error, output } = await categoryService.createCategory(name);

    if (error) {
      return res.status(status(error)).json(output && { message: output });
    }

    return res.status(201).json(output);
  },
};