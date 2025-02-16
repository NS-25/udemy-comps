import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  // create state here!
  const [expandedIndex, setExpandedIndex] = useState(-1);
  // create event handler !
  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };
  // above the modified for small error
  //   if (expandedIndex === nextIndex) {
  //     setExpandedIndex(-1);
  //   } else {
  //     setExpandedIndex(nextIndex);
  //   }
  // };

  // mapping funtion section...
  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // declare an icon here!
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  ////////

  return <div className="border-x border-t rounded">{renderItems}</div>;
}

export default Accordion;
