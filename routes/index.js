var express = require('express');

app.use(express.static(path.join(__dirname, "public/images")));

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'e-commerce' });
});

module.exports = router;
