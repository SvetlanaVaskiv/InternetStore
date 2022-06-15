const Router = require('express')
const router = new Router
const ratingController = require('../controllers/ratingController')

router.post('/addrating', ratingController.create)
router.delete('/dltrating', ratingController.delete)

module.exports = router