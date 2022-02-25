import React from "react";
import "./style.css";
import {useRef} from "react";

export default function App() {
  let img1 = "https://img.icons8.com/stickers/100/000000/arm-bracer.png";
  let img2 = "https://img.icons8.com/stickers/100/000000/socks.png";
  let img3 = "https://img.icons8.com/stickers/100/000000/purse-interior.png";
  let img4="https://img.icons8.com/small/100/000000/lederhosen.png";
  let nombres = ["Vaso","Calcetin","Bolsa"]
  const cambiaImagen=(e)=>{  
    if(e.target.src.includes(img4)){
      e.target.style.visibility = "hidden";
    }else{
      e.target.src = img4;
      e.target.parentNode.style.backgroundColor="white";
    }
  }
  const cambiaTexto=(e)=>{  
    if(e.target.innerHTML.includes("Vacio")){
      e.target.style.visibility = "hidden";
    }else{
      e.target.innerHTML = "Vacio";
      e.target.parentNode.style.backgroundColor="white";
    }
  }
  return (
    <div className="capaPrincipal"> 
      <div className="capaImagen">
      <img onClick={cambiaImagen} src={img1}/>
        <div onClick={cambiaTexto} className="formatoTexto">{nombres[0]}</div>
      </div>
      <div className="capaImagen">
      <img onClick={cambiaImagen} src={img2}/>
        <div onClick={cambiaTexto} className="formatoTexto">{nombres[1]}</div>
      </div> 
      <div className="capaImagen">
      <img onClick={cambiaImagen} src={img3}/>
        <div onClick={cambiaTexto} className="formatoTexto">{nombres[2]}</div>
      </div>      
    </div>
  );
}
