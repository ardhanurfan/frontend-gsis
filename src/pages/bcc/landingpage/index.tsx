import "./style.css";
import Slides from "react-slick";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import ContactList from "../../../components/contact_list";
import { getWithAuth } from "../../../API/api";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BCC = () => {
  const [visible, setVisible] = useState(0);

  const [sliderRef, setSliderRef] = useState<any>(null);

  const NextArrow = () => {
    return (
      <>
        <div className="h-10 w-10 rounded-full hover:bg-slate-400 hover:bg-opacity-25 hidden lg:flex justify-center items-center">
          <img
            src="assets/event_right.svg"
            alt="prev"
            className="hidden lg:block"
            onClick={sliderRef?.slickNext}
          />
        </div>
      </>
    );
  };

  const PrevArrow = () => {
    return (
      <>
        <div className="h-10 w-10 rounded-full hover:bg-slate-400 hover:bg-opacity-25 hidden lg:flex justify-center items-center">
          <img
            src="assets/event_right.svg"
            alt="prev"
            style={{ transform: "rotate(180deg)" }}
            className="hidden lg:block"
            onClick={sliderRef?.slickPrev}
          />
        </div>
      </>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [isRegistered, setRegistered] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const token = localStorage.getItem("access_token");
  const navigator = useNavigate();

  function goToRegistration() {
    if (token) {
      navigator("/register-bcc");
    } else {
      setPopUp(true);
    }
  }

  const cekUser = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const cekRegister = await getWithAuth("bcc-user?user_id=" + id, token);
        setRegistered(cekRegister.data.data != null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    cekUser();
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <div
        className={
          popUp
            ? " fixed z-20  w-full h-screen bg-primaryBlue bg-opacity-30 flex items-center justify-center"
            : "hidden fixed z-20  w-full h-screen bg-primaryBlue bg-opacity-30"
        }
      >
        <div className="z-60 w-[90%] lg:w-[45%] h-auto rounded-xl bg-white flex flex-col py-4 px-1 lg:py-5 lg:px-2 gap-5">
          <div className="flex flex-col items-end pr-5 ">
            <button
              className="hover:bg-slate-200 rounded-full p-1"
              onClick={() => setPopUp(false)}
            >
              ✖
            </button>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              src="assets/orang.svg"
              className="h-[30%] w-[30%] md:h-[20%] md:w-[20%]"
              alt=""
            />
            <h2 className="text-primaryBlue text-center header2-mobile lg:header2">
              You have not log in
            </h2>
            <a
              href="/login"
              className="bg-primaryBlue rounded-lg px-5 py-1 text-white w-[auto] button-text-mobile lg:button-text hover:bg-seccondaryBlue"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-cover bg-[url(./assets/Background_BCC.svg)]">
        <div className="w-[90%] max-w-[1159px] pt-[150px] lg:pt-[200px] mx-auto text-center">
          <h1 className="header1-mobile lg:header1 text-primaryText">
            Ganesha International Bussiness Case Competition (GIBCC)
          </h1>
        </div>
        <div className="w-auto h-auto mx-auto pt-5">
          <div className="relative w-[90vw] max-w-[1246px] h-auto lg:h-[500px] bg-slate-100 mt-[52px] mx-auto rounded-xl shadow-lg shadow-blue-800 bg-opacity-30 flex items-center overflow-auto lg:overflow-visible">
            <div className="h-auto w-[38px] flex justify-between absolute self-start m-[4%] lg:m-[2%]">
              <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <div className="w-full h-auto flex flex-col lg:flex-row">
              <div className="relative w-auto mt-16 mx-8 lg:mt-0 lg:ml-8 lg:mr-0 flex justify-center items-center gap-4">
                <PrevArrow />
                <div className="w-full max-w-[400px] h-auto rounded-lg">
                  <Slides
                    className="rounded-lg"
                    ref={setSliderRef}
                    {...settings}
                  >
                    <div className="object-cover w-full max-w-[400px] h-auto rounded-lg">
                      <img
                        className="object-cover w-full max-w-[400px] h-auto rounded-lg"
                        src="assets/bcc_web_icon_lines.png"
                        alt="Business"
                      />
                    </div>
                    <div className="object-cover w-full max-w-[400px] h-auto rounded-lg">
                      <img
                        className="object-cover w-full max-w-[400px] h-auto rounded-lg"
                        src="assets/bcc_web_icon_flat.png"
                        alt="Business"
                      />
                    </div>
                  </Slides>
                </div>
                <NextArrow />
              </div>
              <div className="flex items-center m-[33px] lg:mr-[48px] text-justify body-text text-primaryText">
                <p>
                  The International Business case competition is an event where
                  international participants compete to come up with the best
                  solutions to real-life business problems within the scope of
                  art, business, and technology.
                </p>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1-mobile lg:header1 text-primaryText">
                Streams
              </h1>
            </div>
            <div className="w-auto h-auto flex justify-center mt-10 lg:mt-20">
              <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-[200px]">
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      className=""
                      src="assets/bcc_stream_technology.svg"
                      alt="Technology"
                    />
                  </div>
                  <div>
                    <h3 className="text-center text-primaryBlue header3-mobile lg:header3">
                      Technology
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center">
                    <img
                      className=""
                      src="assets/bcc_stream_business.svg"
                      alt="Business"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-center text-primaryBlue header3-mobile lg:header3">
                      Business
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center">
                    <img
                      className=""
                      src="assets/bcc_stream_art.svg"
                      alt="Art"
                    />
                  </div>
                  <div className="mt-7">
                    <h3 className="text-center text-primaryBlue header3-mobile lg:header3">
                      Art
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1-mobile lg:header1 text-primaryText">
                Stages
              </h1>
            </div>
            <div className="w-auto h-auto flex justify-center align-center mt-20">
              <div
                onMouseEnter={() => setVisible(1)}
                onMouseLeave={() => setVisible(0)}
                className="relative group"
              >
                {visible == 1 && (
                  <div className="absolute z-10 left-0 lg:-translate-x-[225px] translate-x-0 mt-48 lg:w-[600px] h-auto flex justify-center items-center flex-col gap-5 rounded-xl border-primaryOrange border-2 bg-white bg-opacity-50 backdrop-blur-lg p-5">
                    <div className="text-primaryOrange">
                      <p className="header3-mobile mb-1 text-center">
                        Description
                      </p>
                      <p className="small text-center lg:text-justify">
                        Participants will get 1 mystery case that is related to
                        the Art, Business, and Technology streams. Registered
                        participants must complete the case study.
                      </p>
                    </div>
                    <div className="text-primaryOrange">
                      <p className="header3-mobile mb-1 text-center">Output</p>
                      <p className="small text-center">
                        - Proposal <br />- Pitch Deck
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex justify-center group-hover:scale-125 transition-transform">
                  <img
                    src="assets/bcc_stages_orange.svg"
                    alt="Business Stream"
                  />
                </div>
                <div>
                  <h3 className="text-center text-primaryOrange header3-mobile lg:header3 mt-2">
                    Phase 1
                  </h3>
                </div>
              </div>
              <div className="flex w-[100px] h-[120px] items-center justify-center">
                <img
                  className=""
                  src="assets/bcc_stages_separator.svg"
                  alt="Business Stream"
                />
              </div>

              <div
                onMouseEnter={() => setVisible(2)}
                onMouseLeave={() => setVisible(0)}
                className="relative group"
              >
                {visible == 2 && (
                  <div className="absolute z-10 left-0 lg:-translate-x-[225px] translate-x-0 mt-48 lg:w-[600px] h-auto flex justify-center items-center flex-col gap-5 rounded-xl border-primaryBlue border-2 bg-white bg-opacity-50 backdrop-blur-lg p-5">
                    <div className="text-primaryText">
                      <p className="header3-mobile mb-1 text-center">
                        Description
                      </p>
                      <p className="small text-center lg:text-justify">
                        Participants will complete a new business case.
                      </p>
                    </div>
                    <div className="text-primaryText">
                      <p className="header3-mobile mb-1 text-center">Output</p>
                      <p className="small text-center">
                        - Handwritten Pitch Deck
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center group-hover:scale-125 transition-transform">
                  <img
                    className=""
                    src="assets/bcc_stages_blue.svg"
                    alt="Business Stream"
                  />
                </div>
                <div>
                  <h3 className="text-center text-primaryBlue header3-mobile lg:header3">
                    Phase 2
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto overflow-auto">
            <div className="mt-[150px] lg:mt-[290px] mb-[125px]">
              <h1 className="mx-auto text-center header1-mobile lg:header1 text-primaryText">
                Timeline
              </h1>
              <div className="overflow-auto w-full mx-auto pb-[22px]">
                <div className="relative w-[355px] md:w-[760px] lg:w-[975px] 2xl:w-[1300px] h-[1605px] 2xl:h-[2140px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between absolute m-[4%] lg:m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <div className="relative">
                    <div className="pt-[25%] md:pt-[15.25%] lg:pt-[10.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center ml-[11.25%] md:ml-[32%] lg:ml-[36%] 2xl:ml-[36%] mt-[9%] md:mt-[4.5%] lg:mt-[3.5%] 2xl:mt-[3.5%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">
                          14-20
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">
                          August, 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] float-left"
                        src="assets/Timeline1.svg"
                        alt="p"
                      />
                      <h3 className="pt-[19.5%] md:pt-[9%] lg:pt-[7%] 2xl:pt-[7%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryBlue">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryBlue ">
                        EARLY <br className="md:hidden" /> BIRD <br />{" "}
                        REGISTRATION
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center right-0 mr-[11.5%] md:mr-[32%] lg:mr-[36%] 2xl:mr-[36%] mt-[14%] md:mt-[8%] lg:mt-[6%] 2xl:mt-[7%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">
                          21-27
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryGreen text-center">
                          August, 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="assets/Timeline2.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.75%] md:pt-[12.75%] lg:pt-[9.75%] 2xl:pt-[10.75%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen  text-right">
                        NORMAL <br className="md:hidden" /> REGISTRATION
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[36%] mt-[18.5%] md:mt-[11%] lg:mt-[8%] 2xl:mt-[9%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">
                          28-03
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">
                          Ags-Sept 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                        src="assets/Timeline3.svg"
                        alt="p"
                      />
                      <h3 className="pt-[28%] md:pt-[15%] lg:pt-[11.5%] 2xl:pt-[13%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange ">
                        LATE <br className="md:hidden" /> REGISTRATION
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center right-0 mr-[10.25%] md:mr-[31.5%] lg:mr-[35.6%] 2xl:mr-[35.5%] mt-[18.5%] md:mt-[10%] lg:mt-[7.5%] 2xl:mt-[8.75%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">
                          21-04
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryYellow text-center">
                          Ags-Sept, 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="assets/Timeline4.svg"
                        alt="p"
                      />
                      <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[11.5%] 2xl:pt-[12.5%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow  text-right">
                        PRELIMINARY <br className="md:hidden" /> CASE <br />{" "}
                        DISTRIBUTION
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center ml-[8.75%] md:ml-[30.75%] lg:ml-[35%] 2xl:ml-[35%] mt-[13%] md:mt-[8.5%] lg:mt-[5.56%] 2xl:mt-[7%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">
                          14
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">
                          September, 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                        src="assets/Timeline1.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.85%] md:pt-[12.75%] lg:pt-[9.85%] 2xl:pt-[11%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryBlue">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryBlue ">
                        PROPOSAL & <br className="md:hidden" /> DECK <br />{" "}
                        DISTRIBUTION
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center right-0 mr-[8.25%] md:mr-[30.5%] lg:mr-[35%] mt-[14%] md:mt-[8%] lg:mt-[6%] 2xl:mt-[7%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">
                          23
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryGreen text-center">
                          September, 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="assets/Timeline2.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.85%] md:pt-[12.85%] lg:pt-[11.55%] 2xl:pt-[11%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen  text-right">
                        FINALIST <br className="md:hidden" /> ANNOUNCEMENT
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center ml-[8.25%] md:ml-[30.5%] lg:ml-[35%] mt-[18%] lg:mt-[6%] 2xl:mt-[8.3%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">
                          25
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">
                          September, 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                        src="assets/Timeline3.svg"
                        alt="p"
                      />
                      <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[9.85%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange ">
                        TECHNICAL <br className="md:hidden" /> MEETING <br />{" "}
                        FINALIST
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center justify-center right-0 mr-[8.25%] md:mr-[30.5%] lg:mr-[35%] mt-[14%] md:mt-[9%] lg:mt-[6%] 2xl:mt-[6.8%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">
                          30
                        </span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryYellow text-center">
                          September, 2023
                        </span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="assets/Timeline4.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.25%] md:pt-[12.75%] lg:pt-[9.25%] 2xl:pt-[10.75%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                        EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow  text-right">
                        SHARING SESSION, <br /> FINAL PITCHING, <br /> AWARDING
                        DAY
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto mt-20 items-center justify-center flex">
            <div className="hidden lg:block">
              <img className="" src="assets/bcc_arrow_left.svg" alt="Arrow" />
            </div>
            <div>
              <div className="mx-auto text-center w-[80%] max-w-[714px]">
                <h1 className="w-auto header1-mobile lg:header1 text-primaryText">
                  Are You Ready To Be The Next Winner?
                </h1>
                <p className="body-text-mobile lg:body-text text-error">
                  *To particiapte in any event, first you must create an account
                </p>
              </div>
              <div className="flex justify-center items-center mt-10">
                {isRegistered ? (
                  <button
                    disabled
                    className="button-text-mobile lg:button-text bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center"
                  >
                    Registered
                  </button>
                ) : (
                  <button
                    onClick={goToRegistration}
                    disabled
                    type="button"
                    className="cursor-pointer button-text-mobile lg:button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
            <div className="hidden lg:block">
              <img className="" src="assets/bcc_arrow_right.svg" alt="Arrow" />
            </div>
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="flex flex-col items-center mt-14 pb-14">
              <h1 className="header1-mobile lg:header1 text-primaryText text-center mb-9">
                Contact Person
              </h1>
              <ContactList line={""} wa={""} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BCC;
