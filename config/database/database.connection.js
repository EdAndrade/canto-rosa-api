const { createPool } = require("mysql")
require("dotenv").config()

const pool = createPool({

    port            : '3306',
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'canto_rosa',
    connectionLimit : 10
})

module.exports = pool