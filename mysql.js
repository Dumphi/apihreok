const mysql = require('mysql')

var pool = mysql.createPool({
    "user": "apihreoku",
    "password": "0c9fc5d8",
    "database": "heroku_2d0b2d5ae5ba468",
    "host": "us-cdbr-east-06.cleardb.net",
    "port": 3306
})

exports.pool = pool