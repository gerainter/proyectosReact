import React from "react";
import "./style.css";

export default function App() {
  let img1 = "https://img.icons8.com/stickers/100/000000/arm-bracer.png";
  let img2 = "https://img.icons8.com/stickers/100/000000/socks.png";
  let img3 = "https://img.icons8.com/stickers/100/000000/purse-interior.png";
  let nombres = ["Vaso","Calcetin","Bolsa"]
  return (
    <div className="capaPrincipal"> 
      <div className="capaImagen">
      <img src={img1}/>
        <div className="formatoTexto">{nombres[0]}</div>
      </div>
      <div className="capaImagen">
      <img src={img2}/>
        <div className="formatoTexto">{nombres[1]}</div>
      </div> 
      <div className="capaImagen">
      <img src={img3}/>
        <div className="formatoTexto">{nombres[2]}</div>
      </div>      
    </div>
  );
}
