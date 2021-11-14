const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callback) => {

        pool.query(

            `INSERT INTO sizes(name) VALUES(?)`,
            [
                data.name
            ],

            (error, results, fields) => {

                if(!!error){
                    return callback(error)
                }

                return callback(null, {

                    id: results.insertId,
                    ...data
                })
            }
        )
    },

    getSizes: (callback) => {

        pool.query(

            `SELECT * FROM sizes`,

            [],

            (error, results, fields) => {

                if(!!error){
                    return callback(error)
                }

                return callback(null, results)
            }
        )
    }
}