const pool = require('../../config/database/database.connection')

module.exports = {

    create: (data, callback) => {

        pool.query(

            `INSERT INTO products(
                name,
                quantity,
                price,
                colorId,
                brandId,
                imageId,
                categoryId,
                sizeId
            ) VALUES(?,?,?,?,?,?,?,?)`,
            [
                data.name,
                data.quantity,
                data.price,
                data.colorId,
                data.brandId,
                data.imageId,
                data.categoryId,
                data.sizeId
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

    getProducts: (callback) => {

        pool.query(

            `SELECT 
                products.id,
                products.name,
                products.quantity,
                products.price,
                products.inPromo,
                products.inPromoPrice,
                images.name AS image,
                
                JSON_OBJECT(
                    'id', categories.id,
                    'name', categories.name
                ) AS category,
                JSON_OBJECT(
                    'id', brands.id,
                    'name', brands.name
                ) AS brand,
                JSON_OBJECT(
                    'id', colors.id,
                    'name', colors.name
                ) AS color,
                JSON_OBJECT(
                    'id', sizes.id,
                    'name', sizes.name
                ) AS size
                
                FROM products
                JOIN categories ON products.categoryId = categories.id
                JOIN brands ON products.brandId = brands.id
                JOIN colors ON products.colorId = colors.id
                JOIN sizes ON products.sizeId = sizes.id
                JOIN images ON products.imageId = images.id
                `,
                
                [],

                (error, results, fields) => {

                    if(!!error){
                        callback(error)
                    }

                    return callback(null, results)
                }
        )
    }
}