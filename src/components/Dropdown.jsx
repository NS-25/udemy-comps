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

  const handleOptionClick = (option) => {
    // console.log('I should close');
    // CLOSE DROPDOWN
    setIsOpen(!isOpen);
    // WHAT OPTION DID THE USER CLICK ON ???
    console.log(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
