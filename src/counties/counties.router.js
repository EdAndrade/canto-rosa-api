const { 
    
    createCounty,
    getAllCounties

} = require("./counties.controller")

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require("express").Router()

router.post('/',    checkToken, createCounty)
router.get('/',     checkToken, getAllCounties)

module.exports = router