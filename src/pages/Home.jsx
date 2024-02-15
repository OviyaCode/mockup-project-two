import React from "react";
import hero from "../assets/heroP.png";
import Animation from "../components/Animation";
const Home = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto my-auto bg-neutral-one md:flex gap-4 mt-28" id="home">
      <div className="container h-80 flex justify-center pt-3">
        <div className="text-center my-8">
          <h2 className="text-4xl font-semibold mb-2 text-primary-brand uppercase">
            Welcome to Go Green
          </h2>
          <div className="md:w-96 w-auto">
            <p className="text-center md:text-start text-lg text-secondary-brand font-semibold">
              Make the world better to live ...
            </p>
            <p className="text-center md:text-start  text-base text-primary-text ">
              Welcome to a community committed to making a positive impact on
              the world. At Go Green, we believe in the power of collective
              action to create lasting change.
            </p>
            <p className="text-center md:text-start text-ternary-brand text-1xl font-semibold my-4 ">
              <Animation/>
            </p>
          </div>
        </div>
      </div>
      <div className="container flex pt-3 py-4 md:h-96 max-h-78 md:mt-0 mt-auto justify-start items-center">
        <img src={hero} className="w-auto h-full" />
      </div>
    </div>
  );
};

export default Home;
