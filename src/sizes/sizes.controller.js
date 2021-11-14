const { 

    create,
    getSizes

} = require('./sizes.service')

module.exports = {

    createSize: (req, res) => {

        const body = req.body

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

    getAllSizes: async (req, res) => {

        getSizes( (error, results ) => {

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