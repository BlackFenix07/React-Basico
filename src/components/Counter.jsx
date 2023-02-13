export function Counter() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}>
      </button>
    </div>
  );
}

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}>
//         Sumar
//       </button>
//       <button
//         onClick={() => {
//           setCounter(counter - 1);
//         }}>
//         Restar
//       </button>
//       <button
//         onClick={() => {
//           setCounter(0);
//         }}>
//         Reiniciar
//       </button>
//     </div>
//   );
// }