import "./style.css";
import React from "react";

 function Componente1() {
 let imagen1= "https://html6.es/img/rey_atanagildo.png";
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
      <div className="capaImagen">
        <div className="capaTitulo">Titulo Imagen</div>
        <div>
          <img src={imagen1}/>
         </div>
         <div className="capaPrecio">
            <span>Precio:</span>
            <br></br>
            <span>1223</span>
            <br></br>
            <button>Comprar</button>
         </div> 
      </div>
    </>
  );
}

export default Componente1;
