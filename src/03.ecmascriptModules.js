import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./components/Greeting";
import { UserCard } from "./components/UserCard";
import Product from "./components/Product"; // En este caso, Product se importa sin las llaves ya que dicho componente está siendo exportado como export default.
import { Navbar } from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <UserCard />
    <Product />
    <Navbar />
  </>
);