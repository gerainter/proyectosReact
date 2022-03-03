import React from "react";
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
  return (
    <>
      <h1>Total a pagar:</h1>
      <div className="capaPrincipal">
        <Componente1 imagen={imagen1} titulo="Titulo imagen 1" precio={123}></Componente1>
        <Componente1 imagen={imagen2} titulo="Titulo imagen 2" precio={567}></Componente1>
        <Componente1 imagen={imagen3} titulo="Titulo imagen 3" precio={123}></Componente1>
        <Componente1 imagen={imagen4} titulo="Titulo imagen 4" precio={567}></Componente1>
      </div>
    </>
  );
}
