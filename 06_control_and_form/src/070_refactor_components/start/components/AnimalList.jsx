import AnimalItem from "./AnimalItem.jsx";

const AnimalList = ({ animals }) => {
  if (!animals.length) {
    return <div>"アニマルが存在しません"</div>;
  }
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem key={animal} animal={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
