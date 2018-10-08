const db = require('../db');

exports.create = function(username, name, mail, password, roles = false, exist = false) {
  var response = db.INSERT('user',
  'username, name, mail, password, roles, exist',
  `\'${username}\',\'${name}\',\'${mail}\',\'${password}\',\'${roles}\',\'${exist}\'`,
  null,
  '*');
  return response;
};

exports.find = (username) => {
  var response = db.SELECT('user', '*', `username=\'${username}\'`);
  return response;
};

exports.list = () => {
  var response = db.SELECT('user');
  return response;
};

exports.auth = (username,password) => {
  var response = db.SELECT('user', '*', `username=\'${username}\' AND password=\'${password}\'`);
  return response;
};

exports.edit = (username, name, mail, password, roles) => {
  var response = db.UPDATE('user',
  `name=\'${name}\', mail=\'${email}\', password=\'${password}\', roles=\'${roles}\'`,
  `username=${username}`,
  `*`);
  return response;
};

exports.delete = (username) => {
  var response = db.UPDATE(user, 'exist=false',`username=${username}`);
  return response;
};
