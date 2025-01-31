import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <>
      <div>
        {/* // what language should we use ? */}
        <Button success primary>
          Click me!!
        </Button>
      </div>
      <div>
        <Button>Buy Now!</Button>
      </div>
      <div>
        <Button>See Deal!</Button>
      </div>
      <div>
        <Button>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>Something!</Button>
      </div>
    </>
  );
};

export default App;
