import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      label: "Can I use React on a project?",
      content: "You can use React on any project you wnat.",
    },
    {
      label: "Can I use Javascript on a project?",
      content: "You can use Javascript on any project.",
    },
    {
      label: "Can I use CSS on a project?",
      contect: "You can use CSS on any project.",
    },
  ];
  return (
    <>
      <Accordion  items={items}/>
    </>
  );
};

export default App;
