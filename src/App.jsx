import React from "react";
import Button from "./Button";
import { GoBellFill } from "react-icons/go";

const App = () => {
  return (
    <>
      <div>
        {/* // what language should we use ? */}
        <Button secondary outline rounded>
          <GoBellFill />
          Click me!!
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger outline>
          Something!
        </Button>
      </div>
    </>
  );
};

export default App;
