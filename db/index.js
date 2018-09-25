const pgp = require("pg-promise");
class DB {
  constructor(){
    this.con = pgp("postgres://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST":"+process.env.PORT"/"+process.env.DB_NAME);
    this.con.connect();
  }
  //query() Aquí van los querys
}

module.exports = new DB();


/*var db //Código de ejemplo

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });*/

