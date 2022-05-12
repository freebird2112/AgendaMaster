const response = require('koa/lib/response')
const serviceAction = require('../../actions/servicios/services')

exports.getAllServices = (ctx) => {
    ctx.body = serviceAction.getServices(false)
    return ctx
}


exports.searchByNameOrLocation = (ctx) => {
    let search = ctx.request.body
    let response = companyAction.searchByNameOrLocation(search)
    if(Object.keys(response).length === 0){
        ctx.body =  {
            status: 200, 
            message : 'No se encontró la compañía buscada'}

    }else{
        ctx.body = {status: 200,
                    Companies: response}
    }
    return ctx
}

exports.searchByPaymentType = (ctx) => {
    let paymentType = ctx.params.paymentType
    let order = ctx.params.order

    let response = companyAction.searchByPayment(paymentType, order)

    if(order == "asc" || order == "dsc"){
        ctx.response.status = 200
        if(Object.keys(response).length === 0){
            ctx.body =  {
                status: ctx.response.status, 
                message : 'No se encontró la compañía buscada'}
    
        }else{
            ctx.body = {status: ctx.response.status,
                        Companies: response}
        }
    }else{
        ctx.response.status = 500
        ctx.body = {
            status: ctx.response.status,
            message: 'Hubo un error al procesar los datos, intente nuevamente'
        }
    }
    return ctx
}
