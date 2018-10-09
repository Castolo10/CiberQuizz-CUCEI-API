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

exports.delete = (id_game) => {
  var response = db.DELETE('game',
  `id_game=${id_game}`);
  return response;
};
