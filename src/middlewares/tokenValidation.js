const { verifyToken } = require('../utils/jtwConfig');
const { status } = require('../utils/statusMap');

module.exports = {
  tokenValidation: (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
    const { error, output } = verifyToken(authorization);
  
    if (error) return res.status(status(error)).json(output);

    req.headers.user = output.data;
  
    next();
  },
};