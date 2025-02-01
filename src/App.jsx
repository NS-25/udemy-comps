import React from "react";
import Button from "./Button";
import { GoBellFill, GoCloud, GoDatabase } from "react-icons/go";

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
        <Button warning>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloud />
          Something!
        </Button>
      </div>
    </>
  );
};

export default App;
