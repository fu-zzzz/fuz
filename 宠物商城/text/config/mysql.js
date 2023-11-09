let mysql =require('mysql');

const pool = mysql.createPool({
    host: "8.219.89.236",
    port: 3306, // MySQL数据库端口号
    database: "h5",
    user: "root",
    password: "123456",
    connectionLimit: 999999,
    multipleStatements: true
})
module.exports = pool;