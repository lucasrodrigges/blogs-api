const status = {
  'any.required': 400,
  'string.empty': 400,
  'string.email': 400,
  'string.min': 400,
  'array.min': 400,
  'number.base': 400,
  'array.base': 400,
  NOT_FOUND: 400,
  UNAUTHORIZED_USER: 401,
  POST_NOT_FOUND: 404,
  ALREADY_REGISTERED: 409,
  JsonWebTokenError: 401,
  TokenExpiredError: 401,
  USER_NOT_FOUND: 404,
};

module.exports = {
  status: (error) => status[error] || 400,
};