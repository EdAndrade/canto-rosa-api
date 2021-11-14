const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callBack) => {

        pool.query(

            `INSERT INTO provinces(name) VALUES(?)`,
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

    getProvinces: (callback) => {

        pool.query(

            `SELECT * FROM provinces`,

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