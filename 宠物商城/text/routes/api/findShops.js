var express = require('express');
var router = express.Router();
var pool = require('../../config/mysql.js')
/* GET home page. */
router.post('/', function(req, res, next) {
	// 从连接池中获取数据库的连接对象
	pool.getConnection(function(err, conn) {
		if (err) {
			console.log("数据库连接失败");
		} else {
			console.log("数据库连接成功");
			// 查询操作
			conn.query("select * from shops", function(err, data) {
				if (err) {
					console.log("数据库查询失败");
				} else {
					console.log("数据库查询成功");
					res.send(data);
					conn.release();
				}
			})
		}
	})

});

module.exports = router;