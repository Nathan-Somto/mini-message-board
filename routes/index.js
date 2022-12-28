
var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/message');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages :messages, title: 'Board', subHeading:'join the chat add a message' });
});
router.route('/new')
.get( function (req,res){
  res.render('new', {title: 'Add a Message', showModal:false});
})
.post(function(req,res){
 // if(req.body.name.length=== 0)  return res.status(404). res.render('new', {title: 'Add a Message', showModal:true});
  console.log(req.body.name);
  messages.unshift({user: req.body.name, text: req.body.text, added: new Date().toLocaleString('en-us')});
  console.log('added a user');
  res.redirect('/');
})

module.exports = router;
