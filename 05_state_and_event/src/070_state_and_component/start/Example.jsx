import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        きりかえ
      </button>
      {toggle ? <Count key={1} title="A" /> : <Count key={1} title="B" />}
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
