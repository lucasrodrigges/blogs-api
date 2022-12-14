const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const jtwConfig = { algorithm: 'HS256', expiresIn: '15min' };

const createToken = (value) => jwt.sign({ data: value }, secret, jtwConfig);
const getPayload = (token) => jwt.verify(token, secret);

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);

    return { error: null, output: payload };
  } catch ({ name }) {
    return { error: name, output: { message: 'Expired or invalid token' } };
  }
};

module.exports = { secret, createToken, verifyToken, getPayload };
