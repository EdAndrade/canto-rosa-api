const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callBack) => {

        pool.query(

            `INSERT INTO counties(name, provinceId) VALUES(?,?)`,
            [
                data.name,
                data.provinceId
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

    getCounties: (callback) => {

        pool.query(

            `SELECT counties.id, counties.name, provinces.name AS province FROM counties 
            INNER JOIN provinces ON counties.provinceId = provinces.id`,

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