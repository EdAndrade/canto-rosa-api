const { 
    
    create,
    getProducts

 }                  = require('./products.service')
const imageService  = require('../images/images.controller')

module.exports = {

    createProduct: async (req, res) => {

        const body = req.body

        await imageService.storeImage('products', body.image).then( response => {

            if(!!response.error){

                return res.status(500).json({
                    success: false,
                    message: "Image handling error"
                })
            }
            body.imageId = response.imageId

        })

        create(body, (error, results) => {

            if(!!error){

                return res.status(500).json({
                    success: false,
                    message: 'Database connection error'
                })
            }

            return res.status(200).json({
                success: true,
                data: results
            })
        })
    },

    getAllProducts: async (req, res) => {

        getProducts((error, results) => {

            if(!!error){

                return res.status(500).json({
                    success: false,
                    message: 'Database connection error'
                })
            }

            return res.status(200).json({
                success: true,
                data: results
            })
        })
    }
}