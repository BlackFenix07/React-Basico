import React from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./components/TaskCard";
import { Saludar } from "./components/Greeting";
import { Button } from "./components/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready = {true} />
    <Saludar />
    <Button text = "Saludar" />

   <form onSubmit={(e) => {
      e.preventDefault();
      alert("Enviado");
    }}>
      <h1>Registro de usuario</h1>
      <button>Enviar</button>
   </form>
  </>  
);