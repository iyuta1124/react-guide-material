import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `${arg}`;
  const props = {
    num: 123,
    bool: true,
    obj: {
      name: "tom",
      age: 18,
    },
    fn: hello(""),
  };
  return (
    <>
      <Child {...props} />
      <Child color="red" />
    </>
  );
};

export default Example;
