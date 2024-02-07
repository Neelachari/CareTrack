const JWT = require('jsonwebtoken');
require('dotenv').config();

const auth = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).send({ error: 'Invalid Authorization header format' });
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const decode = JWT.verify(token, process.env.KEY);
    req.body._id = decode._id;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Invalid or expired token' });
  }
};

module.exports = { auth };
