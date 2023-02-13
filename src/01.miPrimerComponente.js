import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./components/Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <div>
      <h1>Saludo</h1>
      <p>Lorem 123</p>
    </div>
  );
}

root.render(
  <>
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);