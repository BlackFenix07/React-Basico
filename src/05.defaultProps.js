import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text = "Clic aquí" />
    <Button text = "Pagar" />
    <Button text = "Ir" />
  </>
);