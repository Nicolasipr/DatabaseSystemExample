

      const mysql = require("mysql");

    

      //  CONNECIÓN A LA BASE DE DATOS

      const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodeDbExample"
      });

      connection.connect(function (err) {
        if (err) {
          console.log("Error connecting to Db");
          return;
        }
        console.log("Connection established");
      });

   

      connection.end();
 