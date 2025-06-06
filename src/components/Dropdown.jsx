import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  // section:218 Reminder of clean up...
  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      } 
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    setIsOpen(false);
    // WHAT OPTION DID THE USER CLICK ON ???
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divElement} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>

      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
