const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callback) => {

        pool.query(

            `INSERT INTO users(name, email, phoneNumber, password, birthDate, imageId, countyId) VALUES(?,?,?,?,?,?,?)`,

            [
                data.name,
                data.email,
                data.phoneNumber,
                data.password,
                data.birthDate,
                data.imageId,
                data.countyId,
            ],

            (error, results, fields) => {

                if(!!error){
                    callback(error)
                }

                return callback(null,{
                    id: results.insertId,
                    ...data
                })
            }
        )
    },

    getUsers: (callback) => {

        pool.query(

            `SELECT users.id, users.name, users.email, users.phoneNumber,
            JSON_OBJECT('id', counties.id, 'name', counties.name, 'provinceId', counties.provinceId) AS county,
            images.name AS image FROM users
            INNER JOIN images ON users.imageId=images.id
            INNER JOIN counties ON users.countyId=counties.id`,

            [],

            (error, results, fields) => {
                
                if(!!error){
                    callback(error)
                }

                return callback(null, results)
            }
        )
    },

    getUserByPhoneNumber: (phoneNumber, callback) => {

        pool.query(
            `SELECT * FROM users WHERE phoneNumber = ?`,
            [
                phoneNumber
            ],

            (error, results, fields) => {

                if(!!error){
                    return callback(error)
                }

                return callback(null, results[0])
            }
        )
    }
}