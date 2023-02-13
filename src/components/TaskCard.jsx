import "./task.css";

export function TaskCard({ ready }) {
  return
  <div className="card">
    <h1>Mi primera tarea</h1>
    <span className={ready ? "bg-green" : "bg-red"}>
      {ready ? "Tarea realizada" : "Tarea pendiente"}
    </span>
  </div>;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// export function TaskCard() {
//   const cardStyle = {
//     background: "#202020",
//     color: "#FFFFFF",
//     padding: "20px",
//   };

//   const titleStyle = { fontWeight: "400" };

//   return;
//   <div style={cardStyle}>
//     <h1 style={titleStyle}>Mi primera tarea</h1>
//     <p>Tarea realizada</p>
//   </div>;
// }