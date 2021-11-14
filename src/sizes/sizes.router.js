const { 

    createSize,
    getAllSizes 

} = require("./sizes.controller")

const { checkToken }    = require('../../config/authentication/token_validation')
const router = require('express').Router()

router.post('/',    checkToken,createSize)
router.get('/',     checkToken,getAllSizes)

module.exports = router