import { useState } from "react";

const Example = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <div>現在のカウント数:{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          //   setCount(++count);
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(--count);
        }}
      >
        -
      </button>
    </>
  );
};

export default Example;
