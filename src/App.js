import React,{useState} from "react";
import "./style.css";

const App = () => {
  const[nombre,setNombre] = useState("Gerry");
  const cambiarNombre=()=>{
    setNombre("Hiren")
  }

  const[numero,setNumero] = useState(0);

  const incrementar=()=>{
    setNumero(numero+1);
  }

  const decrementar=()=>{
    setNumero(numero-1);
  }

  return (
      <div>
          <h1>Hola me llamo {nombre}</h1>
          <button onClick={cambiarNombre}>Cambiar Nombre</button>
          <button onClick={()=>setNombre("Goku")}>Cambiar Nombre</button>
          <h1>Numero:{numero}</h1>
          <button onClick={incrementar}>Incrementar</button>
          <button onClick={decrementar}>Decrementar</button>
          <button>Resetear</button>
      </div>
  );
}

export default App;
