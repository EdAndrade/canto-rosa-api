const { 

    create,
    getCategories

 } = require('./categories.service')

const imageService  = require('../images/images.controller')

module.exports = {

    createCategory: async (req, res) => {

        var body = req.body

        await imageService.storeImage('categories', body.image).then( response => {

            if(!!response.error){

                return res.status(500).json({
                    success: false,
                    message: "Image handling error"
                })
            }
            body.imageId = response.imageId

        })

        create(body, (error, results) => {

            if(error){

                return res.status(500).json({
                    success: false,
                    message: "Database connection error"
                })
            }

            return res.status(200).json({
                success: true,
                data: results
            })
        })
    },

    getAllCategories: async (req, res) => {

        getCategories((error, results) => {

            if(error){

                return res.status(500).json({
                    success: false,
                    message: 'Database connection error'
                })
            }

            if(!results){

                return res.json(500).json({
                    success: false,
                    message: 'Internal records error'
                })
            }

            return res.status(200).json({
                success: true,
                data: results
            })
        })
    }
}