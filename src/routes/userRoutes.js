const router = require('express').Router()
const {index,newUser} = require('../controllers/userController')
const {signIn,isAuth} = require('../services/auth')



router.get('/',isAuth,index)
router.post('/',isAuth,newUser)
router.post('/auth',signIn)

module.exports = router