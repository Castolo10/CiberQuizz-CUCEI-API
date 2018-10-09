const {Categories} = require('../models');

class categoriesCtrl {
  constructor({category,content}) {
        this.category = category;
        this.content = content;

        this.getAll = this.getAll.bind(this);
        this.getOne = this.get.bind(this);
  };
}

  static async getAll(req, res) {
    data = await Categories.getAll();
    const json = {
        response: 'ok',
        data: {
            category: 'placeholder name',
            content: 'description',
        },
    };

    if (data.length == 0) {
      res.status(204);
    }
    res.send(json);
  }

  static async get(req, res) {
   let data = await Categories.get(req.params.userId);

   // In case user was not found
   if (data.length === 0) {
     res.status(404);
   }

   res.send(data);
 }

module.exports = new categoriesCtrl();
