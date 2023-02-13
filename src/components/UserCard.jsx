export function UserCard({ name, amount, player, address, greet }) {
  console.log(name, amount, player, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>💶{amount}</p>
      <p>{player ? "Player" : "Not a player"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
      </ul>
    </div>
  );
}