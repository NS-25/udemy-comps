import React from "react";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <>
      <Dropdown options={options} value={selection} OnChange={handleSelect} />
    </>
  );
};

export default App;
