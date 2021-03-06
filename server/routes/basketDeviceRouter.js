const Router = require('express')
const router = new Router
const basketDeviceController = require('../controllers/basketDeviceController')
const authMiddlware = require('../middleware/authMiddleware')



router.get('/', basketDeviceController.getAll)
router.post('/', authMiddlware, basketDeviceController.create)
router.delete('/', basketDeviceController.delete)
router.put('/', basketDeviceController.updateCount)

module.exports = router