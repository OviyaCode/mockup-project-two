import React from "react";
import banner from "../assets/blog.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Divider from "./Divider";

const Footer = () => {
  return (
    <>
      <Divider />
      <div className=" text-sm max-w-screen-2xl mt-6 flex md:flex-row flex-col bg-neutral-800 text-white py-3 px-3 h-full md:h-auto">
        <div className="flex mt-3 cursor-pointer">
          <img src={banner} className="w-64 h-fit " />
          <ul className="mt-3 px-2 text-neutral-two">
            <li className="text-ternary-brand cursor-pointer">Go Green</li>
            <li className="text-neutral-two">
              Copyrights &copy; &nbsp;
              {new Date().getFullYear()}, All rights reserved
            </li>
            <li>No:53, Peradeniya Street, Kandy</li>
            <li>(+94) 76 345 4518</li>
            <li>infogoGreen@gmail.com</li>
            <li>
              <ul className="flex flex-row text-secondary-brand mt-3">
                <li className="px-3">
                  <FaFacebook fontSize={20} />
                </li>
                <li className="px-3">
                  <FaInstagramSquare fontSize={20} />
                </li>
                <li className="px-3">
                  <FaTwitter fontSize={20} />
                </li>
                <li className="px-3">
                  <FaYoutube fontSize={20} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ml-9 w-96 mt-4 flex flex-col">
          <p className="text-ternary-brand">Recent Links</p>
          <ul className="mt-3 px-2 text-neutral-two flex md:flex-col gap-4">
            <li className="">Blog</li>
            <li className="">Programs</li>
            <li className="">About us</li>
            <li className="">
              Green Initiative <sup>&reg;</sup>
            </li>
          </ul>
        </div>
        <div className="mt-4 w-fit text-neutral-two text-center md:text-start">
          <p>
            Go Green is a nonprofit company, tax-exempt 501 (c) (3) charitable
            organization
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
