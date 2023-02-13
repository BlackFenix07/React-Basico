import React from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./components/TaskCard";
import { Saludar } from "./components/Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready = {true} />
    <Saludar />
  </>
);