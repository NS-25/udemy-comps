import React from "react";
import Link from "./components/Link";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <>
      <div>
        <Link to="/accordion">Go to accordion</Link>
        <Link to="/dropdown">Go to dropdown</Link>
      </div>
      <div>
        <ModalPage />
      </div>
    </>
  );
};

export default App;
