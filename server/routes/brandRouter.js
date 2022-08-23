const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddlewere')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getALL)



module.exports = router