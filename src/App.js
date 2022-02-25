import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="capaPrincipal"> 
      <div className="capaImagen">
      <img src="https://img.icons8.com/stickers/100/000000/arm-bracer.png"/>
        <div className="formatoTexto">Titulo 1</div>
      </div>
      <div className="capaImagen">
      <img src="https://img.icons8.com/stickers/100/000000/socks.png"/>
        <div className="formatoTexto">Titulo 2</div>
      </div> 
      <div className="capaImagen">
      <img src="https://img.icons8.com/stickers/100/000000/purse-interior.png"/>
        <div className="formatoTexto">Titulo 3</div>
      </div>      
    </div>
  );
}
