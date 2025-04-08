import React from "react";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
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
