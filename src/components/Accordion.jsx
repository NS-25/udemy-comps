import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  // create state here!
  const [expandedIndex, setExpandedIndex] = useState(0);
  // create event handler !
  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // declare an icon here!
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div
          onClick={() => {
            handleClick(index);
          }}
        >
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderItems}</div>;
}

export default Accordion;
