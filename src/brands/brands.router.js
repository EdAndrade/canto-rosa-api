const { 
    
    createBrand,
    getAllBrands

}                       = require("./brands.controller")
const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require("express").Router()

router.post('/',    checkToken, createBrand)
router.get('/',     checkToken, getAllBrands)

module.exports = router