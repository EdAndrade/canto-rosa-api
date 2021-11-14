const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callBack) => {

        pool.query(

            `INSERT INTO brands(name) VALUES(?)`,
            [
                data.name
            ],

            (error, results, fields) => {

                if(error){
                    return callBack(error)
                }
                
                return callBack(null, {
                    id: results.insertId,
                    ...data,
                })
            }
        )
    },

    getBrands: (callback) => {

        pool.query(

            `SELECT * FROM brands`,

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