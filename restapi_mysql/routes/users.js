var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* GET users info. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var db = req.db;

  console.log('retrieving id:'+id);
  var query = db.query('select * from users where userid='+mysql.escape(id),function(err,rows){
    if(err){
      console.log(err);
    }else{
      console.log(rows[0]);
      res.json(rows);
    }
  }); //q query

});

module.exports = router;
