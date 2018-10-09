const db = require('../db');

exports.auth = (username, password) => {
    const response = db.SELECT('user',
        '*',
        `username='${username}' AND password='${password}'`);
    return response;
};
