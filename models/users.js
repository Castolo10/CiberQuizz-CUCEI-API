const db = require('../db');

exports.add = (username, name, mail, password, roles = false, exist = false) => {
    const response = db.INSERT('user',
        'username, name, mail, password, roles, exist',
        `'${username}','${name}','${mail}','${password}','${roles}','${exist}'`,
        null,
        '*');
    return response;
};

exports.find = (username) => {
    const response = db.SELECT('user',
        '*',
        `username='${username}'`);
    return response;
};

exports.list = () => {
    const response = db.SELECT('user');
    return response;
};

exports.edit = (username, name, mail, password, roles) => {
    const response = db.UPDATE('user',
        `name='${name}', mail='${mail}', password='${password}', roles='${roles}'`,
        `username=${username}`,
        '*');
    return response;
};

exports.delete = (username) => {
    const response = db.UPDATE('user', 'exist=false',
        `username=${username}`);
    return response;
};

exports.addFriend = (username, friend) => {
    const response = db.INSERT('friendlist',
        'username, friend_username, status_req',
        `username='${username}','friend_username='${friend}', false`);
    return response;
};

exports.findFriend = (username) => {
    const response = db.SELECT('friendlist',
        'friend_username',
        `friend_username='${username}' AND status_req=true`);
    return response;
};

exports.friendList = (username) => {
    const response = db.SELECT('friendlist',
        'friend_username',
        `username='${username}'`);
    return response;
};

exports.editStatusFriend = (username, friendUsername) => {
    const response = db.UPDATE('friendlist',
        'status_req=false',
        `username='${username}'AND friend_username='${friendUsername}'`);
    return response;
};

exports.deleteFriend = (username, friendUsername) => {
    const response = db.DELETE('friendlist',
        `username='${username}'AND friend_username='${friendUsername}'`);
    return response;
};
