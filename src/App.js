import React,{useState} from "react";
import "./style.css";
export default function App() {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]
  const resultados = cambios.filter(e=>e.cambio>100).map((e) =>
    <div key={e.moneda}> la moneda  {e.moneda}  vale: {e.cambio}   dolares</div>
     );

     const resultados1 = cambios.find(e=>e.cambio>100);
       
  
  return (
    <>
        <div className="caja">{resultados}</div> 
        <p></p>
        <div className="caja">{resultados1.moneda}</div>  
    </>
  );
}
