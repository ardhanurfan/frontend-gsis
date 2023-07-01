import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { getWithAuth, postWithAuth } from "../../API/api";
import { useNavigate } from "react-router-dom";
import { useEventListener } from "usehooks-ts";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isOpenCompetition, setIsOpenCompetition] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [user, setUser] = useState<any>();
  const navigate = useNavigate();

  const toogleCompetition = () => {
    setIsOpenCompetition(!isOpenCompetition);
    if (isOpenAccount) {
      setIsOpenAccount(!isOpenAccount);
    }
  };

  const toogleAccount = () => {
    setIsOpenAccount(!isOpenAccount);
    if (isOpenCompetition) {
      setIsOpenCompetition(!isOpenCompetition);
    }
  };

  const token = localStorage.getItem("access_token");
  const getUser = async () => {
    if (token) {
      try {
        const response = await getWithAuth("user", token);
        const data = response.data?.data;
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const documentRef = useRef<Document>(document);
  const onClick = (event: Event) => {
    let cek = true;
    const doc = document.getElementsByClassName("hamburger");
    for (let index = 0; index < doc.length; index++) {
      cek = cek && event.target != doc[index];
    }
    if (cek) {
      setNavOpen(false);
    }
  };
  useEventListener("click", onClick, documentRef);

  const handleLogOut = async () => {
    try {
      if (token) {
        const res = await postWithAuth("logout", null, token);
        console.log(res);
        localStorage.removeItem("access_token");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative z-10 flex items-center flex-col">
        <div
          className={
            navOpen
              ? "hamboxOpen px-[8px] lg:px-[35px] rounded-t-3xl fixed flex justify-between items-center w-full max-w-[1300px] h-[60px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] border-2 border-white border-opacity-20 shadow-md"
              : "px-[8px] lg:px-[35px] rounded-full fixed flex justify-between items-center w-full max-w-[1300px] h-[60px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] border-2 border-white border-opacity-20 shadow-md"
          }
        >
          <img src="assets/logo_gsis.svg" alt="" />
          <div className="hidden lg:flex gap-[40px] xl:gap-[50px] button-text text-primaryBlue lg:items-center">
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
              href="/ceremony"
            >
              Ceremony
            </a>
            <div className="flex justify-center relative">
              <button
                className="flex cursor-pointer hover:text-seccondaryBlue"
                type="button"
                onClick={toogleCompetition}
              >
                Competition
                <span className="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                    fill="currentcolor"
                    className={
                      (isOpenCompetition ? "origin-center rotate-180" : "") +
                      " h-5 w-5"
                    }
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </span>
              </button>
              {isOpenCompetition && (
                <ul className="absolute z-[500] float-left top-10 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-xl shadow-primaryBlue">
                  <li>
                    <a
                      className="block w-[200px] h-auto bg-transparent px-4 py-2 text-sm text-primaryBlue hover:bg-primaryBlue hover:text-seccondaryBlue"
                      href="/gsic"
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
                </ul>
              )}
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
            <div className="relative bg-primaryBlue text-sm text-white w-[140px] h-[40px] rounded-xl px-2 flex justify-center items-center hover:bg-seccondaryBlue">
              {!token ? (
                <>
                  <a
                    className="cursor-pointer hover:text-primaryBlue"
                    href="/login"
                  >
                    Login
                  </a>
                  <span className="bg-white h-[2px] w-[15px] inline-block rounded-full rotate-90"></span>
                  <a
                    className="cursor-pointer hover:text-primaryBlue"
                    href="/sign-up"
                  >
                    Sign Up
                  </a>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={toogleAccount}
                    className="w-full flex justify-evenly items-center"
                  >
                    <img
                      src="assets/VectorAdminProfile.svg"
                      className="w-[23px] h-[26px] p-1"
                      alt=""
                    />
                    <p className="text-ellipsis body-text overflow-hidden cursor-pointer">
                      {user?.username}
                    </p>
                    <img
                      src="assets/dropdown.svg"
                      className={
                        (isOpenAccount ? "origin-center rotate-180" : "") +
                        " w-[23px] h-[26px] p-1"
                      }
                      alt=""
                    />
                  </button>
                  {isOpenAccount && (
                    <ul className="absolute z-[500] float-left top-12 w-full list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-xl shadow-primaryBlue">
                      <li>
                        <a
                          className="block w-[200px] h-auto bg-transparent px-4 py-2 text-sm text-primaryBlue hover:bg-primaryBlue hover:text-seccondaryBlue"
                          href={
                            user?.role == "USER"
                              ? "/dashboard"
                              : user?.role == "ADMIN"
                              ? "/dashboard-admin"
                              : "#"
                          }
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-[200px] bg-transparent px-4 py-2 text-sm text-primaryBlue hover:bg-primaryBlue hover:text-seccondaryBlue"
                          href="/profile"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLogOut()}
                          className="block text-left w-[200px] bg-transparent px-4 py-2 text-sm text-primaryBlue hover:bg-primaryBlue hover:text-seccondaryBlue"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
          <button
            type="button"
            className="hamburger cursor-pointer lg:hidden h-[40px] w-[40px] relative"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span
              className={
                navOpen
                  ? "hamburger line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-seccondaryBlue top-[1.3em] line1spin"
                  : "hamburger line absolute rounded-xl mx-auto w-[20px] h-[3px] left-0 right-0 bg-primaryBlue top-[0.8em]"
              }
            ></span>
            <span
              id="span2"
              className={
                navOpen
                  ? "hamburger line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-seccondaryBlue hidden"
                  : "hamburger line absolute rounded-xl mx-auto w-[20px] h-[3px] left-0 right-0 bg-primaryBlue top-[1.3em] block"
              }
            ></span>
            <span
              id="span3"
              className={
                navOpen
                  ? "hamburger line absolute rounded-xl mx-auto w-[20px] h-[2px] left-0 right-0 bg-seccondaryBlue top-[1.3em] line3spin"
                  : "hamburger line absolute rounded-xl mx-auto w-[20px] h-[3px] left-0 right-0 bg-primaryBlue top-[1.8em]"
              }
            ></span>
          </button>
          <div
            className={
              navOpen
                ? "hamburger overlay bg-slate-100 bg-opacity-90 border-2 border-white border-opacity-20 rounded-b-3xl backdrop-blur-sm absolute left-0 w-full top-[59px]"
                : "hamburger overlay bg-slate-100 bg-opacity-90 rounded-b-3xl backdrop-blur-sm absolute left-0 w-full top-[59px]"
            }
          >
            <div className="py-[20px] flex flex-col gap-[20px] items-center button-text text-primaryBlue">
              <a
                className="cursor-pointer hover:text-seccondaryBlue w-full text-center"
                href="/"
              >
                Home
              </a>
              <a
                className="cursor-pointer hover:text-seccondaryBlue w-full text-center"
                href="/about-us"
              >
                About Us
              </a>
              <a
                className="cursor-pointer hover:text-seccondaryBlue w-full text-center"
                href="/ceremony"
              >
                Ceremony
              </a>
              <button
                className="hamburger cursor-pointer hover:text-seccondaryBlue w-full text-center flex justify-center items-center"
                type="button"
                onClick={toogleCompetition}
              >
                Competition
                <span className="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                    fill="currentcolor"
                    className={
                      (isOpenCompetition ? "origin-center rotate-180" : "") +
                      " h-5 w-5"
                    }
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </span>
              </button>
              {isOpenCompetition && (
                <ul className="w-full list-none border-none text-center text-base">
                  <li className="mb-[20px]">
                    <a
                      className="block w-full bg-transparent text-sm text-primaryBlue hover:text-seccondaryBlue"
                      href="/gsic"
                    >
                      Ganesha Social Impact Challenge
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full bg-transparent text-sm text-primaryBlue hover:text-seccondaryBlue"
                      href="/bcc"
                    >
                      Bussiness Case Competition
                    </a>
                  </li>
                </ul>
              )}
              <a
                className="cursor-pointer hover:text-seccondaryBlue w-full text-center"
                href="/exhibition"
              >
                Exhibition
              </a>
              <a
                className="cursor-pointer hover:text-seccondaryBlue w-full text-center"
                href="/faq"
              >
                FAQ
              </a>
              {!token ? (
                <div className="text-[12px] bg-primaryBlue text-white rounded-lg w-[120px] h-[40px] flex justify-evenly items-center">
                  <a
                    className="cursor-pointer hover:text-primaryBlue"
                    href="/login"
                  >
                    Login
                  </a>
                  <span className="bg-white h-[2px] w-[15px] inline-block rounded-full rotate-90"></span>
                  <a
                    className="cursor-pointer hover:text-primaryBlue"
                    href="/sign-up"
                  >
                    Sign Up
                  </a>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={toogleAccount}
                    className="hamburger bg-primaryBlue text-white rounded-lg w-[120px] h-[40px] flex justify-around items-center"
                  >
                    <img
                      src="assets/VectorAdminProfile.svg"
                      className="hamburger w-[23px] h-[26px] p-1"
                      alt=""
                    />
                    <p className="hamburger text-ellipsis body-text overflow-hidden cursor-pointer">
                      {user?.username}
                    </p>
                    <img
                      src="assets/dropdown.svg"
                      className={
                        (isOpenAccount ? "origin-center rotate-180" : "") +
                        " hamburger w-[23px] h-[26px] p-1"
                      }
                      alt=""
                    />
                  </button>
                  {isOpenAccount && (
                    <ul className="w-full list-none border-none text-center text-base">
                      <li className="mb-[20px]">
                        <a
                          className="block w-full bg-transparent text-sm text-primaryBlue hover:text-seccondaryBlue"
                          href={
                            user?.role == "USER"
                              ? "/dashboard"
                              : user?.role == "ADMIN"
                              ? "/dashboard-admin"
                              : "#"
                          }
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className="mb-[20px]">
                        <a
                          className="block w-full bg-transparent text-sm text-primaryBlue hover:text-seccondaryBlue"
                          href="/profile"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLogOut()}
                          className="block w-full bg-transparent text-sm text-primaryBlue hover:text-seccondaryBlue"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
