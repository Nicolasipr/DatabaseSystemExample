# e-commerce example

The following code uses:

*React
*Express
*XAMPP
*MySql
*HTML
*CSS

## Table of Contents

- [Getting Started](#Getting-started)
    - [Prerequisites](#Prerequisites)
- [Installing](#installing)

- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Getting Started

This project was created with its sole purpose of studying Javascript, React, Express and mostly SQL queries for a  college project at Metropolitan University of Technology.

### Prerequisites

This app works with [node](http://nodejs.org) and [npm](https://npmjs.com). So make sure to have installed [npm](https://npmjs.com) and [yarn](https://yarnpkg.com/en/).


### Installing

Make sure to connect properly your database with its current data:

```
const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "your_database"
});
```


In order to run the code, you have to run simultaneously its React frontend and Express backend. React app will fetch data from Express app and it will display its content in the UX platform.

For React app run the following code in the terminal from root folder:

```
cd ecommerce
yarn start
```

For Express app run the following code in the terminal from root folder:

```
cd express-backend
nodemon index.js
```

React app will be listening in the port 3000 and Express will be listening at port 4000.



## Maintainers

[@Nicolasipr](https://github.com/Nicolasipr).

