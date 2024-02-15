import React from "react";
import cleaning from "./../assets/cleaning.jpg";
import cycling from "./../assets/cycling.jpg";
import planting from "./../assets/planting.jpg";
import welfare from "./../assets/welfare.jpg";
import drawing from "./../assets/drawing.jpg";
import camping from "./../assets/camping.jpg";
import { FaLeaf } from "react-icons/fa";

const Programs = () => {
  const activities = [
    { id: 1, img: cleaning, tagline: "Conducting clean-city program" },
    { id: 2, img: cycling, tagline: "Conducting awareness program" },
    { id: 3, img: planting, tagline: "Conducting clean-city planting program" },
    { id: 4, img: welfare, tagline: "Conducting kids wefalre activities" },
    {
      id: 5,
      img: drawing,
      tagline: "Conducting clean-city drawing competitions",
    },
    { id: 6, img: camping, tagline: "Conducting clean-city camping programs" },
  ];
  return (
    <div
      id="program"
      className="md:px-14  px-4 py-16 max-w-screen-2xl mx-6 my-auto md:mx-auto md:my-auto md:flex flex-col gap-3 bg-neutral-one"
    >
      <div className="container flex w-fullpy-4 justify-center items-center">
        <h2 className="text-4xl text-secondary-brand font-semibold ">
          Programs
        </h2>
      </div>
      <div className="container md:flex md:flex-row gap-10 md:px-16  md:py-10 items-center justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4 m-3 md:py-3 md:px-3">
          {activities.map((prog) => {
            return (
              <div
                className="w-96 h-auto py-3 px-3 cursor-pointer"
                key={prog.id}
              >
                <img src={prog.img} className="rounded-lg shadow-md" />
                <p className="text-center pt-2 text-neutral-two">
                  <span className="inline-block">
                    <FaLeaf color="#4CBB17" />{" "}
                  </span>{" "}
                  {prog.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programs;
