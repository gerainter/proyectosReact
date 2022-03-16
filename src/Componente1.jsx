import "./style.css";
import React,{useState} from "react";

 function Componente1({imagen,colorFondo,titulo,precio,setTotalPagar}) {
  const sumaTotalPagar=(elemento)=>{
    setTotalPagar((e)=> e + precio);
    elemento.target.parentNode.parentNode.style.display = 'none';
    
  }
  return (
    <>
      <div style={{backgroundColor: colorFondo}} className="capaImagen">
        <div className="capaTitulo">{titulo}</div>
        <div>
          <img src={imagen}/>
        </div>
         <div className="capaPrecio">
            <span>Precio:</span>
            <br></br>
            <span>{precio} $</span>
            <br></br>
            <button onClick={sumaTotalPagar}>Comprar</button>
         </div> 
      </div>
    </>
  );
}

export default Componente1;
