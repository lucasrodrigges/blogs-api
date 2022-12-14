const { userService } = require('../services');
const { status } = require('../utils/statusMap');

module.exports = {
  getUsers: async (req, res) => {
    const { error, output } = await userService.getUsers();

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(200).json(output);
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    const { error, output } = await userService.getUserById(id);

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(200).json(output);
  },

  createUser: async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const { error, output } = await userService.createUser({ displayName, email, password, image });

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(201).json(output);
  },

  deleteUser: async (req, res) => {
    const { id } = req.headers.user;

    const { error, output } = await userService.deleteUser(id);

    if (error) return res.status(status(error)).json(output && { message: output });

    return res.status(204).end();
  },
};