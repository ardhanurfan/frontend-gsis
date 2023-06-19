import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative z-10 flex items-center flex-col">
        <div
          className={
            navOpen
              ? "px-[8px] lg:px-[35px] rounded-t-3xl fixed flex justify-between items-center w-[98vw] max-w-[1300px] h-[50px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] border-2 border-white border-opacity-20 shadow-md"
              : "px-[8px] lg:px-[35px] rounded-full fixed flex justify-between items-center w-[98vw] max-w-[1300px] h-[50px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] border-2 border-white border-opacity-20 shadow-md"
          }
        >
          <img src="./src/assets/logo_gsis.svg" alt="" />
          <div className="hidden lg:flex gap-[40px] xl:gap-[50px] button-text text-primaryBlue">
            <a className="cursor-pointer hover:text-seccondaryBlue" href="/">
              Home
            </a>
            <a
              className="cursor-pointer hover:text-seccondaryBlue"
              href="/about-us"
            >
              About Us
            </a>
            <a
              className="cursor-pointer hover:text-seccondaryBlue"
              href="/coming-soon"
            >
              Ceremony
            </a>
            <div className="">
              <button
                className="flex cursor-pointer hover:text-seccondaryBlue"
                type="button"
                onClick={toggleDropdown}
              >
                Competition
                <span className="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {isOpen && <ul
                className="absolute z-[500] float-left mt-4 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-xl shadow-primaryBlue"
               
              >
                <li>
                  <a
                    className="block w-[200px] h-auto bg-transparent px-4 py-2 text-sm text-primaryBlue hover:bg-primaryBlue hover:text-seccondaryBlue"
                    href="/coming-soon"
          
                  >
                    Ganesha Social Impact Challenge 
                  </a>
                </li>
                <li>
                  <a
                    className="block w-[200px] bg-transparent px-4 py-2 text-sm text-primaryBlue hover:bg-primaryBlue hover:text-seccondaryBlue"
                    href="/bcc"
                    
                  >
                    Bussiness Case Competition
                  </a>
                </li>
                
              </ul>}
            </div>
            <a
              className="cursor-pointer hover:text-seccondaryBlue"
              href="/exhibition"
            >
              Exhibition
            </a>
            <a className="cursor-pointer hover:text-seccondaryBlue" href="/faq">
              FAQ
            </a>
            <div className="bg-primaryBlue text-white w-auto rounded px-2 flex justify-around items-center">
              <a
                className="cursor-pointer hover:text-seccondaryBlue"
                href="/login"
              >
                Login
              </a>
              <span className="bg-white h-[2px] w-[15px] inline-block rounded-full rotate-90"></span>
              <a
                className="cursor-pointer hover:text-seccondaryBlue"
                href="/sign-up"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div
            className={
              navOpen
                ? "hamboxOpen cursor-pointer lg:hidden h-[40px] w-[40px] relative"
                : "cursor-pointer lg:hidden h-[40px] w-[40px] relative"
            }
            onClick={() => setNavOpen(!navOpen)}
          >
            <span
              className={
                navOpen
                  ? "line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-seccondaryBlue top-[1.3em] line1spin"
                  : "line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-primaryBlue top-[0.8em]"
              }
            ></span>
            <span
              className={
                navOpen
                  ? "line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-seccondaryBlue hidden"
                  : "line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-primaryBlue top-[1.3em] block"
              }
            ></span>
            <span
              className={
                navOpen
                  ? "line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-seccondaryBlue top-[1.3em] line3spin"
                  : "line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-primaryBlue top-[1.8em]"
              }
            ></span>
            <div
              className={
                navOpen
                  ? "overlay bg-slate-100 bg-opacity-60 border-2 border-white border-opacity-20 rounded-b-3xl backdrop-blur-sm fixed left-0 w-full top-[50px]"
                  : "overlay bg-slate-100 bg-opacity-60 rounded-b-3xl backdrop-blur-sm fixed left-0 w-full top-[50px]"
              }
            >
              <div className="py-[20px] flex flex-col gap-[20px] items-center button-text text-primaryBlue">
                <a
                  className="cursor-pointer hover:text-seccondaryBlue"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="cursor-pointer hover:text-seccondaryBlue"
                  href="/about-us"
                >
                  About Us
                </a>
                <a
                  className="cursor-pointer hover:text-seccondaryBlue"
                  href="/coming-soon"
                >
                  Ceremony
                </a>
                <a
                  className="cursor-pointer hover:text-seccondaryBlue"
                  href="/coming-soon"
                >
                  Competition
                </a>
                <a
                  className="cursor-pointer hover:text-seccondaryBlue"
                  href="/exhibition"
                >
                  Exhibition
                </a>
                <a
                  className="cursor-pointer hover:text-seccondaryBlue"
                  href="/faq"
                >
                  FAQ
                </a>
                <div className="bg-primaryBlue text-white w-auto rounded px-2 flex justify-around items-center">
                  <a
                    className="cursor-pointer hover:text-seccondaryBlue"
                    href="/login"
                  >
                    Login
                  </a>
                  <span className="bg-white h-[2px] w-[15px] inline-block rounded-full rotate-90"></span>
                  <a
                    className="cursor-pointer hover:text-seccondaryBlue"
                    href="/sign-up"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
