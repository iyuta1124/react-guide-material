import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      if (fruit.label === e.target.value) {
        fruit.checked = !fruit.checked;
      }
      return fruit;
    });
    setFruits(newFruits);

    const sum = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((cur, acc) => cur + acc.value, 0);
    setSum(sum);
  };

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
