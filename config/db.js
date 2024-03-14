let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fwquiz2'
});
connection.connect(function(error) {
    if (error) {
        console.log('Error connecting to database:', error);
    } else {
        console.log('Database connection successful!');
    }
});

module.exports = connection;