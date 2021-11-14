const { 
    
    create,
    getBrands

} = require('./brands.service')

module.exports = {

    createBrand: async (req, res) => {

        const data = req.body

        create(data, (err, results) => {

            if(!!err){

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

    getAllBrands: async (req, res) => {

        getBrands( (error, results) => {

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