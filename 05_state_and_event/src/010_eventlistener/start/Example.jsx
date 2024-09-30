const Example = () => {
  const clickHandler = () => {
    alert("click");
  };
  const clickHandler2 = () => {
    alert("click");
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
