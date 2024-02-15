import React from "react";
import map from "./../assets/world.svg";
import { LuSendHorizonal } from "react-icons/lu";
const Contact = () => {
  return (
    <div id="contact" className="mx-auto max-w-screen-2xl bg-neutral-one h-auto my-6 py-9">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-4xl text-secondary-brand font-semibold">
          Get In Touch
        </h3>
        <p className="text-neutral-grey pt-2">feel free to contact us</p>
      </div>
      <div className=" w-full flex  flex-col md:flex-row gap-5 px-5">
        <div className="md:w-2/4 py-7">
          <img
            src={map}
            className="bg-cover bg-center cursor-pointer md:flex hidden"
          />
          <div className="md:flex flex-col text-neutral-one hidden rounded-sm z-10 relative left-24 -top-64 bg-[rgba(0,0,0,0.6)] w-96 p-4">
            <h5 className="py-1 text-secondary-brand">Contact Us</h5>
            <p className="py-1 px-4 text-sm">No:53, Peradeniya Street, Kandy</p>
            <p className="py-1 px-4 text-sm">(+94) 76 345 4518</p>
            <p className="py-1 px-4 text-sm">infogoGreen@gmail.com</p>
          </div>
        </div>
        <div className=" md:w-2/4 py-7 px-3">
          <form className="flex flex-col gap-2 md:mt-3 -mt-20 text-neutral-grey">
            <div className="flex">
              <label className=" w-24">Name:</label>
              <input
                type="text"
                className="p-2 mx-2 rounded bg-neutral-200 w-full"
              />
            </div>
            <div className="flex">
              <label className=" w-24">Email:</label>
              <input
                type="text"
                className="p-2 mx-2 rounded bg-neutral-200 w-full"
              />
            </div>
            <div className="flex">
              <label className=" w-24">Message:</label>
              <textarea
                rows={5}
                className="p-2 mx-2 rounded bg-neutral-200 w-full"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-primary-brand rounded-md hover:bg-ternary-brand transition-all text-neutral-one p-3 px-4 w-auto"
              >
                Send <LuSendHorizonal className="inline-block" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
