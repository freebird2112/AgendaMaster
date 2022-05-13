import axios from 'axios'



const handlerAgenda =  ( ) =>{

     const  getAll = async () =>{

        const data = await axios.get("http://localhost:4000/service/")

        return data

    }

    const prueba = () =>{

        console.log("prueba en handler")
    }

    return{
        prueba,
        getAll
    }
    
}


export {handlerAgenda};