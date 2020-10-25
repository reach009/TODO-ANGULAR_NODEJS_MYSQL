'use strict';

const mysql = require('mysql');

// local mysql db connection

const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'deloitte',
    password : 'deloitte@awesome',
    database : 'todo-database'
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;