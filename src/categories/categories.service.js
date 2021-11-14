const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callBack) => {

        pool.query(

            `INSERT INTO categories(name, imageId) VALUES(?,?)`,
            [
                data.name,
                data.imageId
            ],

            (error, results, fields) => {
                
                if(!!error){
                    return callBack(error)
                }
                
                return callBack(null, {
                    id  : results.insertId,
                    name: data.name
                })
            }
        )
    },

    getCategories: callback => {

        pool.query(

            `SELECT categories.id, categories.name, images.name AS image
            FROM categories INNER JOIN images ON categories.imageId=images.id`,
            [],

            (error, results, fields) => {

                if(error){
                    return callback(error)
                }

                return callback(null, results)
            }
        )
    }
}