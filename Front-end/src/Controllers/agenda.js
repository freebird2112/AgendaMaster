import axios from 'axios'



const handlerAgenda =  () =>{

     const  getAll = async () =>{

        const data = await axios.get("http://localhost:4000/service/")

        return data

    }

    const prueba = () =>{

        console.log("prueba en handler")
    }

    const updateService = async (data, tipo) =>{

        const data_update = await axios.put("http://localhost:4000/service/" +tipo , data)

        return data_update
    }

    return{
        prueba,
        getAll,
        updateService
    }
    
}


export {handlerAgenda};