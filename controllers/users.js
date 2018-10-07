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
    }

    async get(req, res) {
      let data = await User.get(req.params.id);

      // si el usuario no se encuentra

      if(data.length === 0){
        res.status(204);
      }

      res.send(data);
    }

    async create(req, res, next) {
      try {
        let data = await User.create(req.body);
        res.status(201).send(data);
      } catch(e) {
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
