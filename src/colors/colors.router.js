const { 
    
    createColor,
    getAllColors

} = require('./colors.controller')

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require('express').Router()

router.post('/',    checkToken, createColor)
router.get('/',     checkToken, getAllColors)

module.exports = router