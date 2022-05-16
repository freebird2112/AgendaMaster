const Router = require('koa-router')
const companies = require('./Services/services.route')

const router = new Router()

router.get('/service', companies.getAllServices)
router.put('/service/:tipo', companies.updateDisponibilidad)
router.post('/service', companies.postServicio)
router.delete('/service', companies.deleteHorario)

module.exports = router