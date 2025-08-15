// utils/auth.js
const jwt = require('jsonwebtoken');
const { User } = require("../models/user.js");

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

const authMiddleware = (req, res, next) => {

    let token = req.body.token || req.query.token || req.headers.authorization;
    console.log('token: ' + token);

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        res.status(400).json({ message: 'Bearer Token not supplied or invalid' });
        return;
    }

    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
        next();
    } catch (err) {
        console.log('Invalid token');
        res.status(400).json({ message: 'Invalid token: ' + err.message });
    }
};

const signToken = (user) => {

    const payload = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
    };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findByPk(decoded.id, {
        attributes: ["id", "username", "email", "channel_name"]
      });

      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { authMiddleware, signToken, protect };
