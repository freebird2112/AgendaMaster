const Router = require('koa-router')
const companies = require('./Services/services.route')

const router = new Router()

router.get('/service', companies.getAllServices)

router.put('/service/:tipo', companies.updateDisponibilidad)

router.post('/service', companies.postService)

//router.post('/companies', companies.searchByNameOrLocation)

//router.get('/companies/byptype/:paymentType/:order', companies.searchByPaymentType)

module.exports = router