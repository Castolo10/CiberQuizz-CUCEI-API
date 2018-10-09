const {Login} = require('../models');

class loginCtrl {
  constructor({username,password}) {
        this.username = username;
        this.password = password;

        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
  };
}

  static async getAll(req, res) {
    data = await Login.getAll();
    const json = {
        response: 'ok',
        data: {
            id: 1,
            username: req.body.username,
            password: req.body.password,
        },
    };
    if (data.length == 0) {
      res.status(204);
    }

    res.send(json);
    });



  static async get(req, res) {
   let data = await Login.get(req.params.username);

   if (data.length === 0) {
     res.status(404);
   }

   res.send(data);
 }

 static async create(req, res, next) {
     try {
       let data = await Login.create(req.body);
       res.status(201).send(data);
     } catch (e) {
       next(e);
     }
   }


}

module.exports = new loginCtrl();
