const { verify } = require("jsonwebtoken")

require("dotenv").config()

module.exports = {

    checkToken: (req, res, next) => {

        let token = req.get("authorization")

        if(!!token){

            token = token.slice(7)

            verify(token, process.env.TOKEN, (error, decoded) => {

                if(!!error){

                    res.status(401).json({
                        success: false,
                        message: "Invalid Token"
                    })

                }else{

                    next()
                }
            })
        }else{

            res.status(401).json({
                success: false,
                message: "Accesss denied! Unauthorized access"
            })
        }
    }
}