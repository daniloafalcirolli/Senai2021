const mysql = require('mysql');
const info = require('./db.json');

const connection = ()=>{
    var con = mysql.createConnection(info);
    return con;
}

module.exports = {
    connection
};