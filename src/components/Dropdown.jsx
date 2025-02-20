import { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // technically correct way
  // const handleClick = () => {
  //   setIsOpen((currentIsOpen) => !currentIsOpen);
  // };

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
