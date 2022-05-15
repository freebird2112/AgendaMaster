import Union from '../Components/Union'
import { useState, useEffect } from "react"
import axios from "axios"
/*import {combineReducers} from 'redux'
const ADD_USER = 'ADD_USER'
const DEL_HOUR = 'DEL_HOUR'*/


function Unity() {
    const [data, setData] = useState([])
    const cache = data
    useEffect(() => {
        const fetchData = async () => {
              const result = await axios.get('http://localhost:4000/service')
               if(result.data) {
                    setData(result.data)         
                }
        }
        fetchData()
    })

    return (
        <div className="App">
            <Union services={cache} />
        </div>
    )

}

/*function addUsuario(){
    return {
        type: ADD_USER,
        nombre,
        email,
        horario,
    }
}

function deletehora() {
    type: DEL_HOUR
}*/

export default Unity