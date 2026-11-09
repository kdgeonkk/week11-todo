const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "localhost",
    user: "cafeuser",
    password: "cafepw",
    database: "cafe"
});

module.exports = db;
