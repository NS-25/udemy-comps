import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <>
      <div>
        {/* // what language should we use ? */}
        <Button primary>Click me!!</Button>
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
        <Button secondary rounded>
          Something!
        </Button>
      </div>
    </>
  );
};

export default App;
