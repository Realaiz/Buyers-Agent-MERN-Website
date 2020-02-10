const jwt = require('jsonwebtoken')
const keys = require("./keys")

module.exports = function (req, res, next) {
  let token
  if (req.get('Authorization')) {
    token = req.get('Authorization').split(" ")[1]
  }
  try {
    const decoded = jwt.verify(token, keys.secretOrKey)
    req.body.user = decoded
  }
  catch (ex) {
    res.user = undefined
  }
  next()
}