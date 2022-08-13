const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'peanutbutter',
  database: 'business'
});

module.exports = db;