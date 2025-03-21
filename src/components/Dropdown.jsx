import { useState } from "react";

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // technically correct way
  // const handleClick = () => {
  //   setIsOpen((currentIsOpen) => !currentIsOpen);
  // };

  const handleOptionClick = (option) => {
    // console.log('I should close');
    // CLOSE DROPDOWN
    setIsOpen(!isOpen);
    // WHAT OPTION DID THE USER CLICK ON ???
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{selection?.label || "Select..." }</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
