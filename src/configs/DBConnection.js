require('dotenv').config();
import mysql from "mysql2";

const fs = require('fs')
const path = require('path')
// let connection = mysql.createConnection({
//     host: 'app-709a4f14-3b21-4aee-889c-a3984e00b711-do-user-9291773-0.b.db.ondigitalocean.com',
//     user: 'classi',
//     password: 'pocvb9zaolz42knu',
//     database: 'classi',
//     port: 25060,
//     ssl: true,
// });
const MYSQL_CONF = {
    username: 'b09204a1f66b9f',
    password: '06e3b8b',
    database: 'class',
    host: 'dus-cdbr-east-03.cleardb.com',
    port: 25060,
    dialect: 'mysql',
    connectTimeout: 60000,
    dialectOptions: {
        ssl: {
            ssl: true,
            cert: fs.readFileSync(path.resolve(__dirname, 'ca-certificate.crt')).toString()
        }
    }
}

// var connection = mysql.createConnection({
//     host: "app-709a4f14-3b21-4aee-889c-a3984e00b711-do-user-9291773-0.b.db.ondigitalocean.com",
//     username: "classi",
//     password: "pocvb9zaolz42knu",
//     database: "class",
//     multipleStatements:true,
//     port: 25060,
//     connectTimeout: 60000,
//     });
    
//     connection.connect(function (err){
//     if(err) throw err;
//     });

// module.exports = connection;
const con = mysql.createConnection(MYSQL_CONF)
con.connect((err, result) => {
    if (err) {
        throw new Error(err)
        return
    } else {
        console.log('Successfully connecting with the database')
    }
});