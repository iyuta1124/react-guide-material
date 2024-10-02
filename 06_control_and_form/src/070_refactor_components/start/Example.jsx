import { useState } from "react";
import AnimalList from "./components/AnimalList.jsx";
import AnimalFilter from "./components/AnimalFIlter.jsx";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filteredAnimals = animals.filter((animal) => {
    return animal.indexOf(filterVal) !== -1;
  });
  return (
    <>
      <AnimalFilter filterVal={filterVal} setFilterVal={setFilterVal} />
      <AnimalList animals={filteredAnimals} />
    </>
  );
};

export default Example;
