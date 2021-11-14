const { 
    
    create,
    getAdmins,
    getAdminByPhoneNumber

} = require('./admins.service')

const {

    genSaltSync,
    hashSync,
    compareSync

}                   = require('bcrypt')
const { sign }      = require('jsonwebtoken')

module.exports = {

    createAdmin: (req, res) => {

        const body = req.body

        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)

        create(body, ( error, results ) => {

            if(!!error){
                
                return res.status(500).json({
                    success: false,
                    message: 'Database connection error'
                })
            }

            results.password = undefined

            return res.status(200).json({
                success: true,
                data: results
            })
        })
    },

    getAllAdmins: (req, res) => {

        getAdmins( (error, results ) => {

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

    login: async (req, res) => {

        const body = req.body

        getAdminByPhoneNumber( body.phoneNumber, (error, results) => {

            if(!!error){

                return res.status(500).json({
                    success: false,
                    message: 'Database connection error'
                })
            }

            if(!results){
                
                return res.status(404).json({
                    success: false,
                    message: "Admin not found"
                })
            }

            const passwordIsCorrect = compareSync(body.password, results.password)

            if(passwordIsCorrect){

                results.password = undefined

                const token = sign({ result: results }, process.env.TOKEN, {
                    expiresIn: "1h"
                })

                return res.status(200).json({
                    success: true,
                    data: results,
                    token
                })

            }else{

                return res.status(404).json({
                    success: false,
                    message: "Admin not found"
                })  
            }
        })
    }
}