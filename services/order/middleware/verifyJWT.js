const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req, res, next) => {
  const authenticationHeader =
    req.headers.authorization || req.headers.Authorization

  if (!authenticationHeader?.startsWith('Bearer ')) return res.sendStatus(401)
  const token = authenticationHeader.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403) //invalid token
    req.user = decoded.UserInfo.username
    req.role = decoded.UserInfo.role
    // req.roles = decoded.UserInfo.roles;
    next()
  })
}

module.exports = verifyJWT
