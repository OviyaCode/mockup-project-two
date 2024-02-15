import React from "react";
import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <div className="w-full">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Keep the Earth pristine, start by picking up the mess.",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Keep the oceans blue, refuse the plastic brew .",
          1000,
          "Keep the air pure, reduce emissions for sure.",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default Animation;
