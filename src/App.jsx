import React from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
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
      <Dropdown options={options} />
    </>
  );
};

export default App;
