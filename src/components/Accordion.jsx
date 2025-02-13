import React, { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderItems}</div>;
}

export default Accordion;
