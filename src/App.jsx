import React from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

const App = () => {
  const handleClick = () => {
    console.log("Click!!");
  };
  return (
    <>
      <div>
        {/* // what language should we use ? */}
        <Button secondary outline rounded onClick={handleClick}>
          <GoBell className="mr-1" />
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
          <GoCloudDownload />
          Something!
        </Button>
      </div>
    </>
  );
};

export default App;
