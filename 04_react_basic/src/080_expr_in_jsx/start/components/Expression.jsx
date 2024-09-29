import "./expression.css";

const Expression = () => {
  const title = "Expression";
  const array = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello Jsx</h3>;
  console.log(jsx);
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello("hello")}</h3>
      <h3>{jsx}</h3>
    </div>
  );
};

export default Expression;
