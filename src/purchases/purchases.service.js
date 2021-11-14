const pool = require('../../config/database/database.connection')

module.exports = {

    createPurchase: (data, callback) => {

        pool.query(

            `INSERT INTO orders(userId, date, hour, total) VALUES(?,?,?,?)`,
            [
                data.userId,
                data.date,
                data.hour,
                data.total
            ],

            (error, results, fields) => {

                if(!!error){
                    return callback(error)
                }

                data.orders_items.forEach( item => {

                    pool.query(
                        
                        `INSERT INTO order_item(orderId, productId, price, quantity, total) VALUES(?,?,?,?,?)`,
                        [
                            results.insertId,
                            item.productId,
                            item.price,
                            item.quantity,
                            item.total
                        ],

                        (error, results, fields) => {

                            if(!!error){
                                return callback(error)
                            }
                        }
                    )
                })

                return callback(null, data)
            }
        )
    }
}