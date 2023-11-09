var express = require('express');
var router = express.Router();
var pool= require('../../config/mysql.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  let {kind,sort,classify,title,msg,pic,imgs,brand,shape,audience,taste,color}=req.body;
  // 从连接池中获取数据库的连接对象
  pool.getConnection(function(err, conn) {
  	if (err) {
  		console.log("数据库连接失败");
  	} else {
  		console.log("数据库连接成功");
  		//上传操作
  		conn.query("insert into shops value(null,?,?,?,?,?,?,?,?,?,?,?,?)",[kind,sort,classify,title,msg,pic,imgs,brand,shape,audience,taste,color], function(err, data) {
  			if (err) {
  				console.log("数据库上传失败");
				res.send({s:400});
  			} else {
  				console.log("数据库上传成功");
  				res.send({s:200});
  				conn.release();
  			}
  		})
  	}
  })
});

module.exports = router;