import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <>
      <div>
        {/* // what language should we use ? */}
        <Button primary rounded>
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>See Deal!</Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger rounded outline>
          Something!
        </Button>
      </div>
    </>
  );
};

export default App;
