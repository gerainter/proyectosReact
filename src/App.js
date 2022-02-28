import React,{useState} from "react";
import "./style.css";

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  const [euro,setEuro] = useState();
  const [argentina,setArgentina] = useState();
  const [colombia,setColombia] = useState();
  const [mexico,setMexico] = useState();
  const [dolar,setDolar] = useState();

  const calculaTC=(e)=>{
    setArgentina(Number(e.target.value)*Number(cambios[1].cambio));
    setColombia(Number(e.target.value)*Number(cambios[2].cambio));
    setMexico(Number(e.target.value)*Number(cambios[3].cambio));
    setDolar(Number(e.target.value)*Number(cambios[4].cambio));
  }

  return (
    <>
    <div>
        <label htmlFor="Euro">Euro</label>
        <input value={euro} onChange={calculaTC} id="Euro" type="number"/> 
        <label htmlFor="Peso argentino">Peso Argentino</label>
        <input value={argentina} id="Peso argentino" type="number" readOnly/>
        <label htmlFor="Peso colombiano">Peso Colombiano</label>
        <input value={colombia} id="Peso colombiano" type="number" readOnly/>
        <label htmlFor="Peso mexicano">Peso Mexicano</label>
        <input value={mexico} id="Peso mexicano" type="number" readOnly/> 
        <label htmlFor="Dólar">Dollar</label>
        <input value={dolar} id="Dólar" type="number" readOnly/> 
    </div>    
    </>
  )
}
export default App;