require('dotenv').config();
import mysql from "mysql2";

// let connection = mysql.createConnection({
//     host: 'app-709a4f14-3b21-4aee-889c-a3984e00b711-do-user-9291773-0.b.db.ondigitalocean.com',
//     user: 'classi',
//     password: 'pocvb9zaolz42knu',
//     database: 'classi',
//     port: 25060,
//     ssl: true,
// });

var connection = mysql.createConnection({
    host: "app-709a4f14-3b21-4aee-889c-a3984e00b711-do-user-9291773-0.b.db.ondigitalocean.com",
    user: "classi",
    password: "pocvb9zaolz42knu",
    database: "classi",
    multipleStatements:true,
    port: 25060,
    queryTimeout: 6000,
    connectTimeout: 60000,
    ssl: true,
    });
    
    con.connect(function (err){
    if(err) throw err;
    });

module.exports = connection;

