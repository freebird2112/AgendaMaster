const servicesData = require('../../data/servicios.json')

exports.getServices = (showPayment) =>{
    const bool = showPayment
    const company = []
    servicesData.services.forEach((element)=> {
        obj = {}
        obj.serviceName = element.serviceName
        obj.horario1 = element.horario1
        obj.horario2 = element.horario2
        company.push(obj)  
    })
    return company
}

exports.updateServices = (info, servicio) => {

    const new_data = info;

    info.forEach((element)=>{
        if(element.serviceName == servicio.tipo){

            console.log(element)
        }
    })

}

exports.searchByName = (nombre) => {
    const object = {
        Name : nombre.serviceName
    } 
    console.log(object.Name) 

    let response = []
    let company = this.getServices(false)

    company.forEach((element) => {
        if(element.serviceName == object.Name){ 
            response.push(element)
        }
    })
    return response
}
    
exports.deleteHorario = (hour, ctx) => {
    servicios.json.name.find({name:ctx},function(err, doc){
            const company = []
            servicesData.services.forEach((element)=> {
                obj1 = {}
                obj2 = {}
                obj1.horario1 = element.horario1
                obj2.horario2 = element.horario2
                if(!bool && obj.horario1 !== hour){
                    company.push(obj1)
                }
                if(!bool && obj.horario2 !== hour){
                    company.push(obj2)
                }
            })
            return company
        });

}

exports.addUsers = (userData) => {
    const user = {
        name: userData.name,
        email: userData.email,
        horario: userData.horario
    }
    users.push(user)
}
