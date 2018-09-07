const express = require('express')
const app = express();
const route = express.Router()
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport-local');
const Users = require('./db').Users;
module.exports = function(app,passport)
{

app.use((bodyParser.urlencoded({ extended: false })))
app.use(bodyParser.json());
 app.get('/signup', function(req,res) {
     res.render('../intro/index');
 }) 
 app.get('/login',function(req,res){
     res.send({
         username: req.body.username
     })
 }) 

app.post('/signup', function(req,res){
    var a = [req.body.email,req.body.username,req.body.password];
    Users.findOne({
       where: { email: a[0],
        username: a[1],
        password: a[2],
       }

    }).then(users => {
        if (users) {
        res.send({
            url:'/'
        })
        }
        else{
            Users.create({
                email: a[0],
                username: a[1],
                password: a[2],

          }).then(users => {
                res.send({
                    url:'/profile',
                    username: a[1]
                })
          })    
        }
    })


})
app.post('/login', passport.authenticate('local'),
function(req, res) {
    res.send({
        url:'/profile',
        username:req.body.username
    });
  });

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
}