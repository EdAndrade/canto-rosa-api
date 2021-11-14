const {

    performPurchase

} = require('./purchases.controller')

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require('express').Router()

router.post('/', checkToken, performPurchase)

module.exports = router