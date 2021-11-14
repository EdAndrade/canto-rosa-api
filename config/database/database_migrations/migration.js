const pool      = require("../database.connection")
const migration = require("mysql-migrations")

migration.init(pool, `${__dirname}/migrations`, () => {
    console.log("Migrations process done!")
})