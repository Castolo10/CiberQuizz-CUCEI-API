const db = require('../db');

exports.auth = (username,password) => {
  var response = db.SELECT('user',
  '*',
  `username=\'${username}\' AND password=\'${password}\'`);
  return response;
};
