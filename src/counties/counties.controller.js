const { 
    
    create,
    getCounties

} = require('./counties.service')

module.exports = {

    createCounty: async (req, res) => {

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

    getAllCounties: async (req, res) => {

        getCounties( (error, results) => {

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