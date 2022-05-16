import Union from '../Components/Union'
import { useState, useEffect } from "react"
import axios from "axios"


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

export default Unity