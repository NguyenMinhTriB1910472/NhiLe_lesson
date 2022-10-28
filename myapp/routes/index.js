import { SOME_OBJECT } from '.';
var express = require('express');
var router = express.Router();
var port =3000

var mysql = require('mysql');
var db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'admin',
    database:'gtbt',
    debug: false
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/testconnect',function(req,res,next){
  if(db!=null){
      res.send("connect successful");
  } else{
      res.send('connect fail');
  }
});
router.get('/form',function(req,res,next){
  res.send('form');
});
router.post('/insert', function(req, res, next) {
  var name = req.body.name;
  var content = req.body.content;
  var sdt = req.body.sdt;
  var sql = `INSERT INTO user (id, insert, sdt, content) VALUES ("${name}", "${sdt}", "${content}", NOW())`;
  db.query(sql,function(){
    res.redirect('/');
  });
});
module.exports = router;
