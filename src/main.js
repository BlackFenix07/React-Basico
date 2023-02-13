import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    console.log("render");
  }, [counter]);
  
  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => {
        alert("El mensaje es: " + mensaje);
      }}>
        Guardar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);