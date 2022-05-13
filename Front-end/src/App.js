import Header from './headers';
import { useState, useEffect } from 'react';
import {handlerAgenda} from './Controllers/agenda';
import './App.css';
import { Button } from './Components/Styledcomponents'


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


  return (
    <div>
    <Header course = {'AgendaMaster'}/>
     <Button onClick={()=> console.log('nacho pete ')}>Peluquería</Button>
     <Button onClick={()=> console.log("prueba")}>Veterinario</Button>
     <Button onClick={()=> console.log("prueba")}>Manicure</Button>
    </div>
  );
}


export default App;
