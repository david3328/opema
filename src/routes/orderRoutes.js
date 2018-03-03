const router = require('express').Router()
const {
  index,
  updateOrder
} = require('../controllers/orderController')


router.get('/',index)
router.put('/:id',updateOrder)

module.exports = router
