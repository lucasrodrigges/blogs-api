const { loginService } = require('../services');
const { status } = require('../utils/statusMap');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const { error, output } = await loginService.login(email, password);

    if (error) {
      return res.status(status(error)).json(output && { message: output });
    }

    return res.status(200).json(output);
  },
};