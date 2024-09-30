import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };
  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  };
  const reset = () => {
    setPerson({ ame: "", age: "" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <button onClick={reset}>リセット</button>
    </>
  );
};

export default Example;
