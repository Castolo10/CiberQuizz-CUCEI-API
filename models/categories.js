const db = require('../db');

exports.add = (category, content) => {
    const response = db.INSERT('category',
        'category, content',
        `'${category}','${content}'`,
        null,
        '*');
    return response;
};

exports.find = (category) => {
    const response = db.SELECT('category',
        '*',
        `category='${category}'`);
    return response;
};

exports.list = () => {
    const response = db.SELECT('category');
    return response;
};

exports.edit = (category, content) => {
    const response = db.UPDATE('category',
        `content='${content}'`,
        `category='${category}'`,
        '*');
    return response;
};
