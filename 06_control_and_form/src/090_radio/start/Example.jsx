import { useState } from "react";

const Example = () => {
  const collection = ["Apple", "Banana"];
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);
  return (
    <p style={{ textAlign: "center" }}>
      {collection.map((c) => {
        return (
          <>
            <label htmlfor={c}>{c}</label>
            <input
              type="radio"
              value={c}
              checked={fruit === c}
              onChange={onChange}
            />
          </>
        );
      })}
    </p>
  );
};

export default Example;
