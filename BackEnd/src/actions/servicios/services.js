const servicesData = require('../../data/servicios.json')

exports.getServices = (showPayment) =>{
    const bool = showPayment
    const company = []
    servicesData.services.forEach((element)=> {
        obj = {}
        obj.serviceName = element.serviceName
        obj.horario1 = element.horario1
        obj.horario2 = element.horario2
        if(!bool){
            company.push(obj)
        }else{
            obj.paymentType = element.paymentType
            obj.createdAt = element.createdAt
            company.push(obj)
        }       
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
    console.log(object.Name) //esto nos tira false    

    let response = []
    let company = this.getServices(false)    //revisado 

    company.forEach((element) => {
        if(element.serviceName == object.Name){  //no entra,error aca
            response.push(element)
        }
        else {
            console.log("No entro cotito")
        }
    })
    return response
}



/*exports.getService = (ctx) =>{

    servicios.json.name.find({name:ctx}
        },function(err, doc) {
            const company = []
            servicesData.services.forEach((element)=> {
                obj = {}
                obj.horario1 = element.horario1
                obj.horario2 = element.horario2
                if(!bool){
                    company.push(obj)
                }else{
                    obj.paymentType = element.paymentType
                    obj.createdAt = element.createdAt
                    company.push(obj)
                }       
            })
            return company
        });
}*/
    


exports.addUsers = (userData) => {
    const user = {
        name: userData.name,
        email: userData.email,
        horario: userData.horario
    }
    users.push(user)
}



/*
exports.searchByNameOrLocation = (search) => {
    const object = {
        searchCompany : search.search
    }
    let response = []
    let company = this.getCompanies(false)

    company.forEach((element) => {
        if(element.companyName == object.searchCompany){
            response.push(element)
        }
    })
    return response
}

exports.searchByPayment = (payment, order) => {
    let response = []
    let company = this.getCompanies(true)

    company.forEach((element) => {
        if(element.paymentType == payment){
            response.push(element)
        }
    })

    if(order == "asc"){
        response.sort((a,b) =>{
            a = new Date(a.createdAt)
            b = new Date(b.createdAt)
            return a - b;
        })
    }else if(order == 'dsc'){
        response.sort((a,b) => {
            a = new Date(a.createdAt)
            b = new Date(b.createdAt)
            return b - a;
        })
    }

    return response
}
*/