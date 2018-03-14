const {isAuth} = require('../services/auth')
const router = require('express').Router()
const {
  index,
  newOrder
} = require('../controllers/orderController')

router.use(isAuth)
router.get('/',index)
router.post('/',newOrder)

module.exports = router
