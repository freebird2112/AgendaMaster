
import { useState, useEffect } from 'react';
import {handlerAgenda} from './Controllers/agenda';
import './App.css';
import { Button, Title } from './Components/Styledcomponents'
import image from "./images/img.png";

function App() {
  const handler = handlerAgenda();
  const [data, setData] = useState({});
  
  useEffect ( ()=>{
    handler.getAll().then(
      (res)=>{
        console.log(res.data)
        setData(res.data)
      }
    )
  }, [])

  /*function muestra: crear logica que devuelva los horarios cosa de click boton = horarios del servicio X
  data [1]
  data [2]*/


  return (
    <div style={{ backgroundImage:`url(${image})` }}>
    <Title> {'Agenda Master - TEL 335'}</Title> 
     <Button onClick={()=> console.log("prueba") /*function: aca poner la funcion creada que nos devuelva los datos requeridos*/}>Peluquería</Button>              

     <Button onClick={()=> console.log("prueba")}>Veterinario</Button>
     <Button onClick={()=> console.log("prueba")}>Manicure</Button>
    </div>
  );
}


export default App;
