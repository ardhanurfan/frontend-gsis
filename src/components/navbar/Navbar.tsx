import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="relative z-10 flex items-center flex-col">
        <div
          className={
            navOpen
              ? "px-[8px] lg:px-[35px] rounded-t-3xl fixed flex justify-between items-center w-[90vw] max-w-[1300px] h-[50px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] border-2 border-white border-opacity-20 shadow-md"
              : "px-[8px] lg:px-[35px] rounded-full fixed flex justify-between items-center w-[90vw] max-w-[1300px] h-[50px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] border-2 border-white border-opacity-20 shadow-md"
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
            <a
              className="cursor-pointer hover:text-seccondaryBlue"
              href="/coming-soon"
            >
              Competition
            </a>
            <a
              className="cursor-pointer hover:text-seccondaryBlue"
              href="/coming-soon"
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
                  href="/coming-soon"
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
