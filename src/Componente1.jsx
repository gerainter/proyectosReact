import "./style.css";
import React,{useState} from "react";

 function Componente1(prop) {
  return (
    <>
      <div style={{backgroundColor: prop.colorFondo}} className="capaImagen">
        <div className="capaTitulo">{prop.titulo}</div>
        <div>
          <img src={prop.imagen}/>
        </div>
         <div className="capaPrecio">
            <span>Precio:</span>
            <br></br>
            <span>{prop.precio} $</span>
            <br></br>
            <button>Comprar</button>
         </div> 
      </div>
    </>
  );
}

export default Componente1;
