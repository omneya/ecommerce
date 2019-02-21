const mysql      = require('mysql');
const databaseCredentials = require('../../config/mysql');

const connection = mysql.createConnection(databaseCredentials);

module.exports = connection;
