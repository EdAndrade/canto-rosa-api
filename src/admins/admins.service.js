const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callback) => {

        pool.query(

            `INSERT INTO admins(name, phoneNumber, password, level)
            VALUES(?,?,?,?)`,
            [
                data.name,
                data.phoneNumber,
                data.password,
                data.level
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

    getAdmins: (callback) => {

        pool.query(
            
            `SELECT * FROM admins`,
            [],

            (error, results, fields) => {

                if(!!error){
                    return callback(error)
                }

                return callback(null, results)
            }
        )
    },

    getAdminByPhoneNumber: (phoneNumber, callback) => {

        pool.query(
            `SELECT * FROM admins WHERE phoneNumber = ?`,
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