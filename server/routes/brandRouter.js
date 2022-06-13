const Router = require('express')
const router = new Router
const brandController = require('../controllers/brandController')
const checkRoles = require('../middleware/checkRoleMiddleware')



router.post('/', checkRoles('ADMIN'),  brandController.create)
router.get('/', brandController.getAll)
router.delete('/',checkRoles('ADMIN'), brandController.delete)

module.exports = router