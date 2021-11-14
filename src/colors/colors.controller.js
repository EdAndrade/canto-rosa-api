const { 
    
    create,
    getColors

} = require('./colors.service')

module.exports = {

    createColor: async (req, res) => {

        create(req.body, (error, results) => {

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

    getAllColors: async (req, res) => {

        getColors( (error, results ) => {

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