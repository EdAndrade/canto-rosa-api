const { 
    
    createUser,
    geAllUsers,
    login

} = require('./users.controller')

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require('express').Router()

router.post('/',createUser)
router.get('/',checkToken,geAllUsers)
router.post('/login',   login)

module.exports = router

//update from another computer, just to test