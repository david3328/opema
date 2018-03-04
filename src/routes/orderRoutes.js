const {isAuth} = require('../services/auth')
const router = require('express').Router()
const {
  index,
  updateOrder
} = require('../controllers/orderController')

router.use(isAuth)
router.get('/',index)
router.put('/:id',updateOrder)

module.exports = router
