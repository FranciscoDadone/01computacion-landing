const md5 = require('md5');
var credentials = require('../../keys/adminKeys');

module.exports = (req, res, next) => {
  if(req.body.token == md5(credentials.username + credentials.password)) next();
  else res.sendStatus(401);
};