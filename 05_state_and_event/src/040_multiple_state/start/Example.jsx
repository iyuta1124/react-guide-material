import { useState } from "react";
const Example = () => {
  const [val, setVal] = useState(0);
  return (
    <>
      <button
        onClick={(e) => {
          const newVal = val + 1;
          setVal(newVal);
        }}
      >
        A
      </button>
      {val}
      <button>B</button>
      <button>C</button>
    </>
  );
};

export default Example;
