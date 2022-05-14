const response = require('koa/lib/response')
const serviceAction = require('../../actions/servicios/services')

exports.getAllServices = (ctx) => {
    ctx.body = serviceAction.getServices(false)
    return ctx
}
exports.updateDisponibilidad = (ctx) => {
    ctx.body = serviceAction.updateServices(ctx.request.body, ctx.request.params);
    //return ctx
}

exports.getServicio = (ctx) => {
    let request = ctx.request.body
    let response = serviceAction.searchByName(request)
    if(Object.keys(response).length === 0){
        ctx.body = {
            status : 404,
            message : 'No encontrado'
        }
    }
    else{
        ctx.body = {
            Servicio: response    
        }
    }
    return ctx
}

exports.deleteHorario = (ctx) => {
    let request = ctx.request.body
    let response = serviceAction.deleteHorario(request)
    ctx.body = { message: 'User was removed' }
    return ctx
}

/*exports.postService = (ctx) => {
    let request = ctx.request.body
    let response = serviceAction.searchByName(request)
    if(Object.keys(response).length === 0){
        ctx.body = {
            status : 404,
            message : 'No encontrado'
        }
    }
    else{
        ctx.body = {
            Servicio: response    
        }
    }
    return ctx
}*/