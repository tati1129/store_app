import  { useId, useState } from "react";

export default function SpaceMission() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("MArs");

  const nameId = useId();
  const planetId = useId();

  return (
    <div>
      <h2></h2>
      <label htmlFor={nameId}>Name</label>
      <input
        type="text"
        id={nameId}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        id={planetId}
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      >
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      <p>
        Astronaut {name} is heading to {planet}
      </p>
    </div>
  );
}
