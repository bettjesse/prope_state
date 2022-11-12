import React from "react";

const LightSwitch = ({ position, callback, switchOn }) => {
  return (
    <div
      className={`${
        position === "left" ? "left-[20px]" : "left-[350px]"
      } absolute bottom-[20px]  rounded-[10px] py-4 px-6 bg-amber-200 cursor-pointer` }
      onClick={callback}
    >
      {switchOn ? "on" : "off"}
    </div>
  );
};

export default LightSwitch;
