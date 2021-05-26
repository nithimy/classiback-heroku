require('dotenv').config();
import mysql from "mysql2";

let connection = mysql.createConnection({
    host: 'app-709a4f14-3b21-4aee-889c-a3984e00b711-do-user-9291773-0.b.db.ondigitalocean.com',
    user: 'classi',
    password: 'pocvb9zaolz42knu',
    database: 'classi',
    port: 25060,
    ssl: true,
});

connection.connect(function(err) {
    console.log(err);
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;

