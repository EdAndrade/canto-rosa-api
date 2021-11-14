const { 

    createProduct,
    getAllProducts

} = require("./products.controller")

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require('express').Router()

router.post('/', checkToken, createProduct)
router.get('/',     getAllProducts)

module.exports = router