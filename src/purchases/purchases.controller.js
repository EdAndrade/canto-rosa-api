const {

    createPurchase

} = require('./purchases.service')

module.exports = {

    performPurchase: async (req, res) => {

        const body = req.body

        createPurchase(body, (error, results) => {

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