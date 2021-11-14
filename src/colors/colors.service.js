const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callback) => {

        pool.query(

            `INSERT INTO colors(name) VALUES(?)`,
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

    getColors: (callback) => {

        pool.query(

            `SELECT * FROM colors`,

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