import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Andrés",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Santiago",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>;
          <img src={"user.image"} />
        </div>
      );
    })}
  </>
);

// const names = ["Eda", "Serkan", "Sirius"];
// console.log(names);

// names.map(function (name) {
//   return "Hola " + name;
// });

// // const holaNames = names.map(function (name) {
// //   return "Hola " + name;
// // }); // Esta función se puede abreviar de la siguiente manera:

// const holaNames = names.map((name) => "Hola " + name);