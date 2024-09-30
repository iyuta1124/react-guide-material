import { useState } from "react";
const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountResult title="カウント" count={count} />
      <CountUpdate count={count} setCount={setCount} />
    </>
  );
};
const CountResult = ({ title, count }) => <h3>{`${title}:${count}`}</h3>;

const CountUpdate = ({ count, setCount }) => {
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
