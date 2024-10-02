import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  const filteredAnimals = animals;

  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => {
          setFilterVal(e.target.value);
        }}
      />
      <ul>
        {filteredAnimals
          .filter((animal) => animal.includes(filterVal))
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
