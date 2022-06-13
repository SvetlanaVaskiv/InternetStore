const Router = require('express')
const router = new Router
const basketDeviceController = require('../controllers/basketDeviceController')
const authMiddleware = require('../middleware/authMiddleware')



router.get('/',authMiddleware, basketDeviceController.getAll)
router.post('/',authMiddleware, basketDeviceController.create)
router.delete('/',authMiddleware, basketDeviceController.delete)

module.exports = router