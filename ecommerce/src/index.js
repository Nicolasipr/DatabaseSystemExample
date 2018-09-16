import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from 'react-router-dom';

const mysql = require("mysql");



// //  CONNECIÓN A LA BASE DE DATOS
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "nodeDbExample"
// });
// connection.connect();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);


registerServiceWorker();
