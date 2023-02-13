import { VscCheck } from "react-icons/vsc";

export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error)); // A esta sección se le conoce como Promesas en JavaScript.
      }}>
      <VscCheck />
      Traer datos
    </button>
  );
};