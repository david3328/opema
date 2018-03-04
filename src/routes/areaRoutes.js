const {isAuth} = require('../services/auth')
const router = require('express').Router()
const {
  index,
  newArea,
  updateArea,
  deleteArea
}  = require('../controllers/areaController')

router.use(isAuth)
router.get('/',index)
router.post('/',newArea)
router.put('/:id',updateArea)
router.delete('/:id',deleteArea)



module.exports = router