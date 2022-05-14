const Router = require('koa-router')
const companies = require('./Services/services.route')

const router = new Router()

router.get('/service', companies.getAllServices)

router.get('/service/:service', companies.getServicio)

router.put('/service/:tipo', companies.updateDisponibilidad)

router.delete('/service', companies.deleteHorario)
//router.post('/service', companies.postService)

module.exports = router