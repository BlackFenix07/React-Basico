import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./components/UserCard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name = "Andrés"
      amount = {7000}
      player = {true}
      points = {[100, 75, 50, 25]}
      address = {{ city: "Tokio", street: "123 Main Street" }}
      greet = {function() {
        alert("Hello");
      }}/>

    <UserCard
      name = "Santiago"
      amount = {10000}
      player = {false}
      points = {[400, 300, 200, 100]}
      address = {{ city: "New York", street: "Av some 123" }}/>
  </>
);