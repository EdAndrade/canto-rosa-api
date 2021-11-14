const pool = require('../../config/database/database.connection')

module.exports = {

    storeImage: (imagePath) => {

        return new Promise( resolve => {

            pool.query(

                `SELECT * FROM images WHERE name=?`,
                [
                    imagePath
                ],
    
                (error, results, fields) => {
                    
                    if(!!error){
                        resolve({error})
                    }
    
                    if(results.length >= 1){

                        resolve({
                            status: 0,
                            imageId: results[0].id
                        })

                    }else{
    
                        pool.query(
    
                            `INSERT INTO images(name) VALUES(?)`,
                            [
                                imagePath
                            ],
    
                            (error, results, fields) => {

                                resolve({
                                    status: 1,
                                    imageId: results.insertId
                                })
                            }
                        )
                    }
                }
            )
        })
    }
}