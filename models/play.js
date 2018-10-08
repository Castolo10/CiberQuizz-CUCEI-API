const db = require('../db');

exports.addGame = function(date, player1, player2) {
  var response = db.INSERT('game',
  'date, player1, player2',
  `\'${date}\',\'${player1}\',\'${player2}\'`,
  null,
  '*');
  return response;
};

exports.findGame = (id_game) => {
  var response = db.SELECT('game',
  '*',
  `id_game=\'${id_game}\'`);
  return response;
};

exports.listOfGames = () => {
  var response = db.SELECT('game');
  return response;
};

exports.matchHistory = (username) => {
  var response = db.SELECT('game',
  '*',
  `player1=\'${username}\' OR player2=\'${username}\'`);
  return response;
}

<<<<<<< HEAD
exports.deleteGame = (id_game) => {
=======
exports.delete = (id_game) => {
>>>>>>> 902501aedad5ee693e8a42d22275e9e3de0445ce
  var response = db.DELETE('game',
  `id_game=${id_game}`);
  return response;
};
<<<<<<< HEAD

exports.addToDetails = (id_game, id_ques, res_p1 = '', res_p2 ='') => {
  var response = db.INSERT('questionlist',
  'id_game, id_ques, res_p1, res_p2',
  `\'${id_game}\', \'${id_ques}\', \'${res_p1}\', \'${res_p2}\'`,
  null,
  '*');
  return response;
}

exports.findDetails = (id_game) => {
  var response = db.SELECT('questionlist',
  '*',
  `id_game=\'${id_game}\'`);
}

exports.listOfDetalis = () => {
var response = db.SELECT('questionlist');
  return response;
}

exports.editDetails = (id_game, id_ques, res_p1, res_p2) => {
  var response = db.UPDATE('questionlist',
  `res_p1=\'${res_p1}\', res_p2=\'${res_p2}\'`,
  `id_game=\'${id_game}\' AND id_ques\'${id_ques}\'`);
  return response;
}

exports.deleteDetails = (id_game, id_ques) => {
  var response = db.DELETE('questionlist',
  `id_game=\'${id_game}\' AND id_ques\'${id_ques}\'`);
  return response;
}
=======
>>>>>>> 902501aedad5ee693e8a42d22275e9e3de0445ce
