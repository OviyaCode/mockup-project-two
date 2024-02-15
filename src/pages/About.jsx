import React from "react";
import about from "./../assets/about.png";
import Divider from "../components/Divider";
const About = () => {
  const content = [
    {
      id: 1,
      head: "We Go Green !",
      desc: "where passion meets purpose in the pursuit of a cleaner and greener world. Our story began with a shared vision - a vision of a planet where nature thrives, ecosystems are in balance, and future generations inherit a healthier Earth",
    },
    {
      id: 2,
      head: "Our Mission",
      desc: "At Go Green, we are on a mission to inspire, educate, and empower individuals to adopt sustainable practices that contribute to the well-being of our planet. We believe that by fostering a sense of environmental stewardship, we can collectively create a positive impact on the world.",
    },
  ];
  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto my-auto md:flex flex-col gap-3"
      id="about"
    >
      <div className="container flex w-fullpy-4 justify-center items-center">
        <h2 className="text-4xl text-secondary-brand font-semibold ">
          Who we are ?
        </h2>
      </div>
      <div className="container md:flex md:flex-row gap-10 px-16 py-10">
        <div className="container py-4 mt-3 m-auto">
          <img
            src={about}
            alt="about_us"
            className="hover:cursor-pointer h-78"
          />
        </div>
        <div className="container py-4 mt-3 m-auto bg-neutral-one rounded">
          {content.map((item) => {
          return (
            <div
              key={item.id}
              className="container py-4 mt-3 m-auto bg-neutral-one rounded"
            >
              <p className="px-7 py-10 text-base md:text-start text-center text-neutral-grey">
                <span className="text-secondary-brand uppercase font-bold">
                  {item.head}
                </span>{" "}
                <br />
                {item.desc}
              </p>
            </div>
          );
        })}
        </div>

       
      </div>
      <Divider />
    </div>
  );
};

export default About;
