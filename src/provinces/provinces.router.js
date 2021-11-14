const { 
    
    createProvince,
    getAllProvinces
    
} = require("./provinces.controller")

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require("express").Router()

router.post('/',    checkToken ,createProvince)
router.get('/',     checkToken,getAllProvinces)

module.exports = router