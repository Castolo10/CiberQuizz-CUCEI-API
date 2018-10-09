const db = require('../db');

exports.add = (content, opt1, opt2, solution, category, exist = true, status = false) => {
    const response = db.INSERT('question', 'content, opt_1, opt_2, solution, category, exist, status',
        `'${content}', '${opt1}', '${opt2}', '${solution}', '${category}', '${exist}', '${status}'`);
    return response;
};

exports.find = (idQuest) => {
    const response = db.SELECT('question', '*', `id_quest='${idQuest}'`);
    return response;
};

exports.list = () => {
    const response = db.SELECT('question');
    return response;
};

exports.edit = (idQuest, content, opt1, opt2, solution, category, status) => {
    const response = db.UPDATE('question',
        `content='${content}', opt_1='${opt1}', opt_2='${opt2}', solution='${solution}', category='${category}', status='${status}', `,
        `id_quest=${idQuest}`,
        '*');
    return response;
};

exports.delete = (idQuest) => {
    const response = db.UPDATE('question', 'exist=false', `id_quest=${idQuest}`);
    return response;
};
