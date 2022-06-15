const Router = require('express')
const router = new Router
const basketDeviceController = require('../controllers/basketDeviceController')
const authMiddleware = require('../middleware/authMiddleware')



router.get('/', basketDeviceController.getAll)
router.post('/',basketDeviceController.create)
router.delete('/', basketDeviceController.delete)

module.exports = router