import React, { useState } from "react";
import Lamp from "./components/Lamp";
import LightSwitch from "./components/LightSwitch";

const App = () => {
  //lamp one
  const [islampOneOn, setIsLampOneOn] = useState(false);
  //lamp two
  const [islampTwoOn, setIsLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => {
    setIsLampOneOn((prev) => !prev);
  };

  const handleLightSwitchTwo = () => {
    setIsLampTwoOn((prev) => !prev);
  };
  // const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  // const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  
  return (
    <div className="relative w-[500px] h-[500px] border-[10px] border-black my-0 mx-auto">
      <div className=" flex justify-between">
      <Lamp lampOn={islampOneOn}  />
      <Lamp lampOn={islampTwoOn} />
      </div>
<div className=" bottom-[20px] flex flex-1 justify-between">
      <LightSwitch
      callback= {handleLightSwitchOne}
      switchOn= {islampOneOn}
      position= "left"
      
      />
      <LightSwitch
      callback= {handleLightSwitchTwo}
      switchOn= {islampTwoOn}
      position= "right"
      
      />
      </div>
    </div>
  );
};

export default App;
