import React,{useState} from "react";
import "./style.css";
import React from "react";
import Componente1 from "./Componente1"

export default function App() {
  let imagen1= "https://html6.es/img/rey_atanagildo.png";
  let imagen2= "https://html6.es/img/rey_ervigio.png";
  let imagen3= "https://html6.es/img/rey_ataulfo.png";
  let imagen4= "https://html6.es/img/rey_leogivildo.png";
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]
  const [totalPagar,setTotalPagar] = useState(0);
  
  return (
    <>
      <div>
        <span className="formatoTexto">Total a pagar: </span>
        <span className="formatoTexto">{totalPagar} $</span>
      </div>
      <div className="capaPrincipal">
        <Componente1 imagen={imagen1} colorFondo={reyes[0].color} titulo={reyes[0].nombre} precio={reyes[0].precio}
        ></Componente1>
        <Componente1 imagen={imagen2} colorFondo={reyes[1].color} titulo={reyes[1].nombre} precio={reyes[1].precio}></Componente1>
        <Componente1 imagen={imagen3} colorFondo={reyes[2].color} titulo={reyes[2].nombre} precio={reyes[2].precio}></Componente1>
        <Componente1 imagen={imagen4} colorFondo={reyes[3].color} titulo={reyes[3].nombre} precio={reyes[3].precio}></Componente1>
        
      </div>
    </>
  );
}
