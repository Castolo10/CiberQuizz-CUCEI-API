const { Client } = require('pg-promise');

const URL = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`;
const client = new Client(URL);

client.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Database Started');
    }
});

exports.INSERT = (tableName, columns, values, contition = null, returning = null) => {
    let sql = '';
    sql += `INSERT INTO ${tableName} (${columns})`;
    sql += ` VALUES (${values})`;
    if (contition !== null) {
        sql += ` WHERE ${contition}`;
    }
    if (returning !== null) {
        sql += ` RETURNING ${returning}`;
    }

    const resp = client.query(sql);
    return resp;
};

exports.SELECT = (tableName, columns = '*', condition = null) => {
    let sql = '';
    sql += `SELECT ${columns}`;
    sql += ` FROM ${tableName}`;
    if (condition !== null) {
        sql += ` WHERE ${condition}`;
    }
    console.log(sql);
    const resp = client.query(sql);
    return resp;
};

exports.UPDATE = async (tableName, setters, condition, returning = null) => {
    let sql = '';
    sql += `UPDATE ${tableName}`;
    sql += ` SET ${setters}`;
    sql += ` WHERE ${condition}`;
    if (returning !== null) {
        sql += ` RETURNING ${returning}`;
    }
    const { rows } = await client.query(sql);
    return rows;
};

exports.DELETE = async (tableName, condition) => {
    let sql = '';
    sql += `DELETE FROM ${tableName}`;
    sql += ` WHERE ${condition}`;
    const { rows } = await client.query(sql);
    return rows;
};

exports.NOW = async () => {
    const sql = 'SELECT NOW()';
    const { rows } = await client.query(sql);
    return rows;
};
