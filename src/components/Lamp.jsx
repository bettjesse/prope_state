import React from "react";

const Lamp = ({ lampOn }) => {
  return (
    <div
      lampOn={lampOn}
      className={` my-10 ${
        lampOn ? "bg-blue-500" : "bg-black "
      }  w-[100px] h-[100px] rounded-[50px] top-[20px]`}
    ></div>
  );
};

export default Lamp;
