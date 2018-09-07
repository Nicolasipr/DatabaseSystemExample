const express = require('express')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const http = require('http')

const app = express()
const server = http.createServer(app)
const cookieparser = require('cookie-parser')
const bodyParser   = require('body-parser');
app.set('views',path.join(__dirname , 'chat'));

app.set('view engine','html');
var port = process.env.PORT || 5898;
app.use('/', express.static(path.join(__dirname, 'intro')));
app.use('/profile', express.static(path.join(__dirname, 'chat')));
require('./passport')(passport);
require('./routes')(app, passport);
app.use(express.json());
app.use(session({
    secret: 'project-session',
    resave: true,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

server.listen(port, () => console.log("Server running on http://localhost:8889"))