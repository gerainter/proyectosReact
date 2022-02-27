import React,{useState} from "react";
import "./style.css";

const App = () => {
  const[nombre,setNombre] = useState("Gerry");
  const cambiarNombre=()=>{
    setNombre("Hiren")
  }

  let[numero,setNumero] = useState(0);
  const incrementar=()=>{
    setNumero(numero++);
  }
  const decrementar=()=>{
    setNumero(numero--);
  }
  const resetear= () =>{
    setNumero(0);
  }

  const [numero1,setNumero1] = useState();
  const [numero2,setNumero2] = useState();
  const [resultado,setResultado] = useState();

  const suma=()=>{
    setResultado(Number(numero1)+Number(numero2));
  }

  const actualiza1=(e)=>{
    setNumero1(e.target.value);
  }

  const actualiza2=(e)=>{
    setNumero2(e.target.value);
  }

  return (
      <>
      <div>
          <h1>Hola me llamo {nombre}</h1>
          <button onClick={cambiarNombre}>Cambiar Nombre</button>
          <button onClick={()=>setNombre("Goku")}>Cambiar Nombre</button>
          <h1>Numero:{numero}</h1>
          <button onClick={()=>setNumero(numero++)}>Incrementar</button>
          <button onClick={decrementar}>Decrementar</button>
          <button onClick={resetear}>Resetear</button>
      </div>
      <p></p>
      <div className="caja">
        <input type="number" value={numero1} onChange={actualiza1}/>+
        <input type="number" value={numero2} onChange={actualiza2}/>=
        <input type="number" value={resultado} readOnly/>
        <button onClick={suma} className="btnSuma">Sumar</button>
      </div>
      </>
  );
}

export default App;
