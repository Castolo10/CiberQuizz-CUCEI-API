const db = require('../db');

exports.add = function(username, name, mail, password, roles = false, exist = false) {
  var response = db.INSERT('user',
  'username, name, mail, password, roles, exist',
  `\'${username}\',\'${name}\',\'${mail}\',\'${password}\',\'${roles}\',\'${exist}\'`,
  null,
  '*');
  return response;
};

exports.find = (username) => {
  var response = db.SELECT('user',
  '*',
  `username=\'${username}\'`);
  return response;
};

exports.list = () => {
  var response = db.SELECT('user');
  return response;
};

exports.edit = (username, name, mail, password, roles) => {
  var response = db.UPDATE('user',
  `name=\'${name}\', mail=\'${email}\', password=\'${password}\',
  roles=\'${roles}\'`,
  `username=${username}`,
  `*`);
  return response;
};

exports.delete = (username) => {
  var response = db.UPDATE('user', 'exist=false',
  `username=${username}`);
  return response;
};

exports.addFriend = (username, friend) => {
  var response = db.INSERT('friendlist',
  'username, friend_username, status_req',
  `username=\'${username}\','friend_username=\'${friend}\', false`);
}

exports.findFriend = (username) => {
  var response = db.SELECT('friendlist',
  'friend_username',
  `friend_username=\'${username}\' AND status_req=true`);
  return response;
};

exports.friendList = (username) => {
  var response = db.SELECT('friendlist',
  'friend_username',
  `username=\'${username}\'`);
  return response;
}

exports.editStatusFriend = (username, friend_username) => {
  var response = db.UPDATE('friendlist',
  'status_req=false',
  `username=\'${username}\'AND friend_username=\'${friend}\'`);
  return response;
}

exports.deleteFriend = (username, friend_username) => {
  var response = db.DELETE('friendlist',
  `username=\'${username}\'AND friend_username=\'${friend}\'`);
  return response;
}
