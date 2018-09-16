var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeDbExample"
});

con.connect(function(err) {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

//  CON ESTO CREAS LA BASE DE DATOS, TIENES QUE ABRIR LA RUTA localhost:3000/hola PARA EJECUTAR 
