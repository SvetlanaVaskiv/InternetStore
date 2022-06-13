const Router = require('express')
const router = new Router
const typeController = require('../controllers/typeController')
const checkRoles = require('../middleware/checkRoleMiddleware')


router.post('/',checkRoles('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.delete('/',checkRoles('ADMIN'), typeController.delete)
module.exports = router