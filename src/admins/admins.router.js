const {

    createAdmin,
    getAllAdmins,
    login

} = require('./admins.controller')

const { checkToken }    = require('../../config/authentication/token_validation')
const router            = require('express').Router()

router.post('/', createAdmin)
router.get('/',  checkToken, getAllAdmins)
router.post('/login',   login)

module.exports = router