import { useState } from "react";

const Example = () => {
  const [displayVal, setDisplayVal] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setDisplayVal(e.target.value);
        }}
      />
      = {displayVal}
    </>
  );
};

export default Example;
