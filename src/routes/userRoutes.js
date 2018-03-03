const router = require('express').Router()
const {index,newUser} = require('../controllers/userController')

router.get('/',index)
router.post('/',newUser)

module.exports = router