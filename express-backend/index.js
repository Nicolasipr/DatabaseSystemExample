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


app.use(cors());

app.get('/', (req, res) => {
    res.send('Go to /Products')

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

app.listen(4000, () => {
    console.log("Products server listening on port 4000")
});

