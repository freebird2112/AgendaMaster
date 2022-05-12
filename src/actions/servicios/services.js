const servicesData = require('../../data/servicios.json')

exports.getServices = (showPayment) =>{
    const bool = showPayment
    const company = []
    servicesData.services.forEach((element)=> {
        obj = {}
        obj.serviceName = element.company.serviceName
        obj.horario1 = element.company.horario1
        obj.horario2 = element.company.horario2
        if(!bool){
            company.push(obj)
        }else{
            obj.paymentType = element.company.paymentType
            obj.createdAt = element.company.createdAt
            company.push(obj)
        }       
    })
    return company
}

/*
exports.searchByNameOrLocation = (search) => {
    const object = {
        searchCompany : search.search
    }
    let response = []
    let company = this.getCompanies(false)

    company.forEach((element) => {
        if(element.companyName == object.searchCompany || element.companyLocation == object.searchCompany){
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