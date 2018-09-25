const pgp = require("pg-promise");
class DB {
  constructor(){
    this.con = pgp("postgres://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST":"+process.env.PORT"/"+process.env.DB_NAME);
    this.con.connect();
  }
  //query() Aquí van los querys
  queryGetallusers() {
   return this.con.query(`SELECT * FROM user`, (err, rows) => {
     if (err) throw err;
     return this.processResults(rows);
   });
 }

   querynuevouser(username,name,mail,password,permisos) {
     return this.con.query(`INSERT INTO user (username,name,mail,password,permisos) VALUES (${username},${name},${mail},${password},${permisos})`,(err,rows)
     => {
       if (err) throw err;
       return this.processResults(rows);
     });
  }

  querydeleteuser(username) {
    return this.con.query(`DELETE * FROM user WHERE username= ${username}`, (err,rows)  => {
       if (err) throw err;
       return this.processResults(rows);
    });
  }

}

module.exports = new DB();

