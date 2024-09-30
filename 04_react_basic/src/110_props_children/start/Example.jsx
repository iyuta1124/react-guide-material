import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => {
  return (
    <div>
      <Container
        title="Childrenとは？"
        children={[
          <Profile {...profile[0]} key={1} />,
          <Profile {...profile[1]} key={2} />,
        ]}
      />
    </div>
  );
};

export default Example;
