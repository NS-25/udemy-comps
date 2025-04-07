import React from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <>
      <div>
        <Link to="/accordion">Go to accordion</Link>
        <Link to="/dropdown">Go to dropdown</Link>
      </div>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
      <div>
        <ModalPage />
      </div>
    </>
  );
};

export default App;
