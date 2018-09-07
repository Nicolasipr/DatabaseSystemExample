const LocalStrategy = require('passport-local').Strategy
const Users = require('./db').Users
module.exports = function(passport)
{
    console.log("passport is working");
passport.serializeUser(function (users, done) {
    return done(null, users.id);
    console.log("Serialize");

})

passport.deserializeUser(function (id, done) {
    console.log("DeSerialize");
    Users.findById(id).then((users) => {
        console.log(users);
        return done(null, users);
    });
})

passport.use(new LocalStrategy(
    function (username, password, done) {
        Users.findOne({ where: { username: username } })
             .then(function (users) {
                 if (!users) {
                     return done(null, false, { message: 'Incorrect username.' });
                 }
                 if (!users.password === password) {
                     return done(null, false, { message: 'Incorrect password.' });
                 }
                 return done(null, users);
             })
             .catch(err => done(err));
    }
));

}