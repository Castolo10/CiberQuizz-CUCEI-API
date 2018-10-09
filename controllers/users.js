//const { User } = require('../models');

class UserCtrl {
    // placeholder para contructor
    constructor() {
        this.data = [
            {
                id: 1,
                name: 'Juan',
                email: 'correo@correo.com',
            },
        ];
    }

<<<<<<< HEAD

    async getAll(req, res) {
      let data = await User.getAll();

      const json = {
        data: data,
        total_count: data.length,
        per_page: data.length,
        page: 0,
      };

      // si el usuario no se encuentra
      if(data.length === 0) {
        res.status(204);
      }

      res.send(json);
=======
    static async getAll(req, res) {
        const datar = await User.getAll();

        const json = {
            data: datar,
            total_count: datar.length,
            per_page: datar.length,
            page: 0,
        };

        // si el usuario no se encuentra
        if (datar.length === 0) {
            res.status(204);
        }

        res.send(json);
>>>>>>> d4615c80996817dbe3e8f74269501995fb1aec04
    }

    static async get(req, res) {
        const data = await User.get(req.params.id);

        // si el usuario no se encuentra

        if (data.length === 0) {
            res.status(204);
        }

        res.send(data);
    }

    static async create(req, res, next) {
        try {
            const data = await User.create(req.body);
            res.status(201).send(data);
        } catch (e) {
            next(e);
        }
    }

    delete(req, res) {
        const index = this.data.findIndex(el => el.id === Number(req.params.id));
        this.data.splice(index, 1);
        res.send();
    }
}

module.exports = new UserCtrl();
