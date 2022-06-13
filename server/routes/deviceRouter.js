const Router = require('express')
const router = new Router
const deviceController = require('../controllers/deviceController')
const checkRoles=require('../middleware/checkRoleMiddleware')

router.post('/',checkRoles('ADMIN'),  deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.delete('/',checkRoles('ADMIN'), deviceController.delete)

module.exports = router