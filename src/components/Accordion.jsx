import React, { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderItems = items.map((item, index) => {
    // create state here!
    const isExpanded = index === expandedIndex;
    // create event handler !
    const handleClick = () => {
      setExpandedIndex(index);
    };
    return (
      <div key={item.id}>
        <div onClick={handleClick}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderItems}</div>;
}

export default Accordion;
