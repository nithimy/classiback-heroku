var config = {
    development: {
        //url to be used in link generation
        url: 'https://classibackend-heroku.herokuapp.com/',
        //mongodb connection settings
        database: {
            host:   'us-cdbr-east-03.cleardb.com',
            port:   '3306',
            db:     'heroku_68878ccdd651069',
            user: 'b57d3e74fb8377',
            password: '7fad4843'

        },
        //server details
        server: {
            host: 'us-cdbr-east-03.cleardb.com',
            port: process.env.PORT || 5000,
        }
    },
    production: {
        //url to be used in link generation
        url: 'https://classibackend-heroku.herokuapp.com/',
        //mongodb connection settings
        database: {
            host: 'us-cdbr-east-03.cleardb.com',
            port: '3306',
            db:     'heroku_68878ccdd651069'
            user: 'b57d3e74fb8377',
            password: '7fad4843'
        },
        //server details
        server: {
            host:   'us-cdbr-east-03.cleardb.com',
            port:   process.env.PORT || 5000,
        }
    }
    };
    module.exports = config;




// require('dotenv').config();
// import mysql from "mysql2";

// let connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Database connected!");
// });

// module.exports = connection;