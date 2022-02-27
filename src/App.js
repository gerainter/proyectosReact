import React,{useState} from "react";
import "./style.css";

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]
  const [contador,setContador] = useState(0);
  const [nombreRey,setNombreRey] = useState(reyesGodos[0].nombre);
  const [aficion,setAficion] = useState(reyesGodos[0].aficion);
 
  const siguiente=(e)=>{ 
    setContador(contador+1);
    console.log("Click:"+contador);
    setNombreRey(reyesGodos[contador].nombre);
    setAficion(reyesGodos[contador].aficion); 
    if(contador+1>=reyesGodos.length){
      setContador(0);
      console.log("Click c:"+contador);
    }    
  }
  console.log("Inicio:"+contador);
  return (
    <>
    {/* Esto es un comentario dentro del return*/}
    {/* Crear un <div> y un <button> */}   
    <button onClick={siguiente}>Ver Siguiente</button>
    <div>La afición principal de <span className="nombreRey">{nombreRey}</span> es  <span className="aficionRey">{aficion}</span>
     </div>
    
    </>
  )
}
export default App;