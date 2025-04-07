import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "l1react",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.",
    },
    {
      id: "l2javascript",
      label: "Can I use Javascript on a project?",
      content: "You can use Javascript on any project.",
    },
    {
      id: "l3CSS",
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any project.",
    },
  ];
  const handleItems = (item) => {
    console.log(item);
  };

  return (
    <>
      <Accordion items={items} onChange={handleItems} />
    </>
  );
};

export default AccordionPage;
