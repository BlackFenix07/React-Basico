import React from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./components/TaskCard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready={true} />
  </>
);