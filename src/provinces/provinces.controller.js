const { 
    
    create,
    getProvinces

} = require('./provinces.service')

module.exports = {

    createProvince: async (req, res) => {

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

    getAllProvinces: async (req, res) => {

        getProvinces( (error, results ) => {

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