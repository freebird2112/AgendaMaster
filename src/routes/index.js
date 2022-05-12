const Router = require('koa-router')
const companies = require('./Services/services.route')

const router = new Router()

router.get('/service', companies.getAllServices)

//router.post('/companies', companies.searchByNameOrLocation)
//router.get('/companies/byptype/:paymentType/:order', companies.searchByPaymentType)

module.exports = router