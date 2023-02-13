import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./components/Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  function add(x, y) {
    return x + y;
  }
  return <h1>{add(10, 30)}</h1>;
}

root.render(
  <>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);