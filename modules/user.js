const db = require('../db');

class User {
    constructor({ id, name, email }) {
        this.id = id;
        this.name = name;
        this.email = email;
        // todos los atributos son: username, name, mail, password, permisos
        // agregarlos con su respectivo this
    }

    static async getAll() {
        const data = await db.queryGetAllUsers();
        const response = [];
        data.forEach((row) => {
            response.push(new User(row));
        });
        return response;
    }

    static async get(id) {
        const data = await db.queryGetUser(id);
        return data.length !== 0 ? new User(data[0]) : data;
    }

    static async create(username, name, mail, password, permisos) {
        let response;
        try {
            response = await db.queryNewUser(username, name, mail, password, permisos);
        } catch (e) {
            throw e;
        }

        const id = response.insertId;
        if (id > 0) {
            return new User(username, name, mail, password, permisos);
        }
        return [];
    }
}

module.exports = User;
