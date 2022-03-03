import React from "react";
import "./style.css";
import React from "react";
import Componente1 from "./Componente1"

export default function App() {
 
  return (
    <>
      <h1>Total a pagar:</h1>
      <div className="capaPrincipal">
        <Componente1></Componente1>
        <Componente1></Componente1>
      </div>
    </>
  );
}
