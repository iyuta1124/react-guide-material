import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button onClick={clickHandler}>ボタン</button>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
