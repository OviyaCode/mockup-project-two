import React, { useEffect, useState } from "react";
import logo from "../assets/gogreen.jpg";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaX } from "react-icons/fa6";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Programs", path: "program" },
    { link: "Blog", path: "blog" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent z-50 fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isFixed
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="brand"
              className="w-24 h-auto inline-block items-center rounded-full"
            />
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-grey-900 hover:text-primary-brand first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-primary-brand text-neutral-one py-2 px-4 transition-all duration-300 hover:bg-neutral-grey rounded-lg">
              Donate
            </button>
          </div>
          <div className="md:hidden">
            <button
              className="text-neutral-grey focus:outline-none focus:text-gray-500"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <FaX className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className={` md:hidden space-y-4 px-4 mt-28 bg-primary-brand py-7 ${isNavOpen ? "block left-0 top-0 fixed right-0" :"hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white hover:text-neutral-two first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
