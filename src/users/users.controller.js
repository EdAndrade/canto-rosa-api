const {

    create,
    getUsers,
    getUserByPhoneNumber

} = require('./users.service')

const {

    genSaltSync,
    hashSync,
    compareSync

}                   = require('bcrypt')
const imageService  = require('../images/images.controller')
const { sign }      = require('jsonwebtoken')


module.exports = {

    createUser: async (req, res) => {

        var body = req.body

        await imageService.storeImage('users', body.image).then( response => {

            if(!!response.error){

                return res.status(500).json({
                    success: false,
                    message: "Image handling error"
                })
            }
            body.imageId = response.imageId

        })

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

    geAllUsers: async (req, res) => {

        getUsers((error, results) => {

            if(!!error){

                return res.status(500).json({
                    success: false,
                    message: 'Database error'
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

        getUserByPhoneNumber( body.phoneNumber, (error, results) => {

            if(!!error){

                return res.status(500).json({
                    success: false,
                    message: 'Database connection error'
                })
            }

            if(!results){
                
                return res.status(404).json({
                    success: false,
                    message: "User not found"
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
                    message: "User not found"
                })  
            }
        })
    }
}