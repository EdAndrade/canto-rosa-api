const { 
    createCategory,
    getAllCategories
 } = require('./categories.controller')

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require('express').Router()

router.post('/',    checkToken, createCategory)
router.get('/', getAllCategories)


module.exports = router