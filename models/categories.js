const db = require('../db');

exports.add = function(category, content) {
  var response = db.INSERT('category',
  'category, content',
  `\'${category}\',\'${content}\'`,
  null,
  '*');
  return response;
};

exports.find = (category) => {
  var response = db.SELECT('category',
  '*',
  `category=\'${category}\'`);
  return response;
};

exports.list = () => {
  var response = db.SELECT('category');
  return response;
};

exports.edit = (category, content) => {
  var response = db.UPDATE('category',
  `content=\'${content}\'`,
  `username=${username}`,
  `*`);
  return response;
};
