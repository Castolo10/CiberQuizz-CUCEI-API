const db = require('../db');

exports.add = (content, opt_1, opt_2, solution, category, exist = true, status = false) => {
  var response = db.INSERT('question', 'content, opt_1, opt_2, solution, category, exist, status', null, '*');
  return response;
}

exports.find = (id_quest) => {
  var response = db.SELECT('question', '*', `id_quest=\'${id_quest}\'`);
  return response;
};

exports.list = () => {
  var response = db.SELECT('question');
  return response;
};

exports.edit = (content, opt_1, opt_2, solution, category, status) => {
  var response = db.UPDATE('question',
  `name=\'${name}\', mail=\'${email}\', password=\'${password}\', status=\'${status}\'`,
  `username=${username}`,
  `*`);
  return response;
};

exports.delete = (id_quest) => {
  var response = db.UPDATE('question', 'exist=false',`id_quest=${id_quest}`);
  return response;
};
