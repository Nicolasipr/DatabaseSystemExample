const express = require('express');
const cors = require('cors');
const mysql = require('mysql');



// CONNECION A LA BASE DE DATOS
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeDbExample"
});

connection.connect( err => {
    if (err) {
        console.log("Error connecting to Db");
        return;
    }
    console.log("Connection established");

});


// console.log(connection);



// USO DE QUERYS 
const app = express();

// SAMPLE 
app.use(cors());

app.get('/', (req, res) => {
    res.send("SAMPLE PAGE QUERY")
});

// MUESTRA UN PRODUCTO

app.get('/producto', (req, res) => {
    const name = req.query;
    const SELECT_A_PRODUCT = `SELECT * FROM Articulo WHERE nombre_articulo = "${name}"`;

    connection.query(SELECT_A_PRODUCT, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});

// MUESTRA LOS PRODUCTOS
const SELECT_ALL_PRODUCTS = 'SELECT * FROM Articulo';

app.get('/products', (req, res) => {

    connection.query(SELECT_ALL_PRODUCTS, (err, results) =>{
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});


// MUESTRA LOS PRODUCTOS EN ORDEN PRECIO ASC o DESC

app.get('/products/sort', (req, res) => {
   const page = (req.query - 1) * 9;
   const SELECT_ALL_PRODUCTS_ASC = `SELECT * FROM Articulo ORDER BY precio ${orden} LIMIT 9 OFFSET ${page}`;

   connection.query(SELECT_ALL_PRODUCTS_ASC, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
        });


});


// BUSCA PRODUCTO

app.get('/products/find', (req, res) => {

    const findproduct = req.query;
    const FIND_PRODUCT_LIKE = `SELECT * FROM Articulo WHERE nombre_articulo LIKE "%${findproduct}%" `;

    connection.query(FIND_PRODUCT_LIKE, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });


});


// AGREGA PRODUCTOS

app.get('/products/add', (req, res) => {
     const {id_Product, id_Company, id_Category, name, price, stck } = req.query;
     const INSERT_PRODUCTS_QUERY = `INSERT INTO Articulo (id_articulo, id_compania, id_categoria, nombre_articulo, precio, stock) VALUES ('${id_Product}','${id_Category}', '${id_Company}', '${name}', ${price}, ${stck})`;
    
     connection.query(INSERT_PRODUCTS_QUERY, (err, results)=>{
         if(err) {
             return res.send(err)
         }
         else {
             return res.send('successfully added product')
         }
     });
});



const SELECT_ALL_USERS = 'SELECT * FROM Cliente';

app.get('/users', (req, res) => {

    connection.query(SELECT_ALL_USERS, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});

// REGISTRA USUARIO 

app.get('/users/add', (req, res) => {

    const {username, email, password } = req.query;
    const number = Math.floor(Math.random() * 1000) + 10;
    const ADD_USER = `INSERT INTO Cliente (id_cliente, username, email, contrasena) VALUES ('${number}','${username}','${email}','${password}')`;

    connection.query(ADD_USER, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send('successfully added user')
        }
    });

 
});

//  LOGIN USUARIO

app.get('/users/login', (req, res) => {

    const {username, password} = req.query; 
    const FIND_USER = `SELECT * FROM Cliente WHERE username = "${username}%" AND contrasena = "${password}"`;

     connection.query(FIND_USER, (err, results) => {
         if (err) {
             return res.send(err)
         } else {
             return res.send('successfully added product')
         }
     });
    


});

app.listen(4000, () => {
    console.log("Products server listening on port 4000")
});

