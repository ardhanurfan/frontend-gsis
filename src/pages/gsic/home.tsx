import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer";
import Slider from "react-slick";
import "./style.css";
import ContactList from "../../components/contact_list";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getWithAuth } from "../../API/api";

function HomePageGSIC() {
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
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [isRegistered, setRegistered] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const token = localStorage.getItem("access_token");
  const navigator = useNavigate();

  function goToRegistration() {
    if (token) {
      navigator("/gsic-register");
    } else {
      setPopUp(true);
    }
  }

  const cekUser = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const cekRegister = await getWithAuth("gsic?user_id=" + id, token);
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
      <div className="bg-[url(./assets/Background_GSIC.svg)] bg-cover overflow-auto">
        <h1 className="mt-[150px] lg:mt-[200px] max-w-[1160px] mx-auto text-center header1-mobile lg:header1 text-primaryBlue">
          Ganesha Social Impact Challenge (GSIC)
        </h1>
        <div className="mt-12 h-auto lg:h-[500px] w-[90vw] max-w-[1246px] mx-auto bg-slate-100 bg-opacity-30 rounded-xl shadow-lg shadow-slate-500 flex overflow-auto">
          <div className="h-auto w-[38px] flex justify-between absolute self-start m-[4%] lg:m-[2%]">
            <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
          </div>
          <div className="w-full h-auto flex flex-col lg:flex-row">
            <div className="relative w-auto mt-16 mx-8 lg:mt-0 lg:ml-8 lg:mr-0 flex justify-center items-center gap-4">
              <PrevArrow />
              <div className="w-full max-w-[400px] h-auto rounded-lg">
                <Slider className="rounded-lg" ref={setSliderRef} {...settings}>
                  <div className="object-cover w-full max-w-[400px] h-auto rounded-lg">
                    <img
                      className="object-cover w-full max-w-[400px] h-auto rounded-lg"
                      src="assets/gsic_web_icon_lines.png"
                      alt="Business"
                    />
                  </div>
                  <div className="object-cover w-full max-w-[400px] h-auto rounded-lg">
                    <img
                      className="object-cover w-full max-w-[400px] h-auto rounded-lg"
                      src="assets/gsic_web_icon_flat.png"
                      alt="Business"
                    />
                  </div>
                </Slider>
              </div>
              <NextArrow />
            </div>
            <div className="flex items-center m-[33px] lg:mr-[48px] text-justify body-text text-primaryText">
              <p>
                Ganesha Social Impact Challenge is a platform for various teams
                to showcase their creative ideas or solutions to a specific
                problem or challenge. The main objective of the innovation
                competition is to encourage individuals or teams to think
                creatively and come up with innovative solutions to complex
                problems.
              </p>
            </div>
          </div>
        </div>
        <h1 className="mx-auto mt-24 text-center header1 text-primaryText">
          Timeline
        </h1>
        <div className="overflow-auto w-full mx-auto pb-[22px]">
          <div className="relative w-[355px] md:w-[760px] lg:w-[975px] 2xl:w-[1300px] h-[2100px] 2xl:h-[2900px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30 pb-36">
            <div className="h-auto w-[38px] flex justify-between absolute m-[4%] lg:m-[2%]">
              <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <div className="relative">
              <div className="pt-[25%] md:pt-[15.25%] lg:pt-[10.25%] relative">
                <div className="absolute flex flex-col items-center justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[35.6%] mt-[9%] md:mt-[4.5%] lg:mt-[3.5%] 2xl:mt-[3.5%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">
                    29-06
                  </span>
                  <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">
                    Ags-Sept, 2023
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
                  NORMAL <br className="md:hidden" /> REGISTRATION
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center right-0 mr-[8.5%] md:mr-[30.7%] lg:mr-[35%] 2xl:mr-[35%] mt-[18.5%] md:mt-[10.5%] lg:mt-[8%] 2xl:mt-[9%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">
                    07-23
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
                <h3 className="pt-[28.5%] md:pt-[15%] lg:pt-[11.5%] 2xl:pt-[13%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                  EVENT
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen  text-right">
                  EXTENDED <br className="md:hidden" /> REGISTRATION
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center ml-[8.5%] md:ml-[30.7%] lg:ml-[35%] 2xl:ml-[35%] mt-[18.5%] md:mt-[11%] lg:mt-[8%] 2xl:mt-[8.5%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">
                    07-23
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
                <h3 className="pt-[28.5%] md:pt-[15%] lg:pt-[11.5%] 2xl:pt-[12.5%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange">
                  EVENT
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange ">
                  PROPOSAL <br className="md:hidden" /> SUBMISSION
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center right-0 mr-[8.5%] md:mr-[30.7%] lg:mr-[35%] 2xl:mr-[35%] mt-[18.5%] md:mt-[10%] lg:mt-[7.5%] 2xl:mt-[8.5%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">
                    25
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
                <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[11.5%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                  EVENT
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow  text-right">
                  FINALIST <br className="md:hidden" /> ANNOUNCEMENT
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center ml-[8.5%] md:ml-[30.7%] lg:ml-[35%] 2xl:ml-[35%] mt-[18.5%] md:mt-[10%] lg:mt-[7.5%] 2xl:mt-[8.75%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">
                    25
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
                <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[11.5%] 2xl:pt-[12.5%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryBlue">
                  EVENT
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryBlue ">
                  TECHNICAL <br className="md:hidden" /> MEETING
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center ml-[8.5%] md:ml-[30.7%] lg:ml-[35%] mt-[18.5%] md:mt-[10%] lg:mt-[7.5%] 2xl:mt-[8.75%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">
                    26-29
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
                <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[11.5%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange">
                  EVENT
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange ">
                  MENTORING <br className="md:hidden" /> 
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center right-0 mr-[8.25%] md:mr-[30.5%] lg:mr-[35%] mt-[18.5%] md:mt-[10%] lg:mt-[7.5%] 2xl:mt-[8.75%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">
                    26-29
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
                <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[11.5%] 2xl:pt-[13%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                  EVENT
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryYellow  text-right">
                  TRIAL <br className="md:hidden" /> IMPLEMENTATION
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center right-0 mr-[8.5%] md:mr-[30.7%] lg:mr-[35%] 2xl:mr-[35%] mt-[18.5%] md:mt-[10%] lg:mt-[8%] 2xl:mt-[8.75%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">
                    30
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
                <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[11.5%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                  23:59
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                  PPT FINAL <br className="md:hidden"/> SUBMISSION
                </h3>
              </div>
              <div className="pt-[1.25%] relative">
                <div className="absolute flex flex-col items-center justify-center ml-[11.5%] md:ml-[32%] lg:ml-[36%] mt-[18.5%] md:mt-[10%] lg:mt-[7.5%] 2xl:mt-[8.75%]">
                  <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">
                    01
                  </span>
                  <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">
                    October, 2023
                  </span>
                </div>
                <img
                  className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                  src="assets/Timeline3.svg"
                  alt="p"
                />
                <h3 className="pt-[29%] md:pt-[15.25%] lg:pt-[11.5%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange">
                  EVENT
                </h3>
                <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.02em] leading-none 2xl:text-[24px] text-primaryOrange ">
                  FINAL <br className="md:hidden" /> PRESENTATION
                </h3>
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
            <div className="flex justify-center items-center mt-5 lg:mt-10 flex-col gap-10">
              <a
                href="https://docs.google.com/document/d/1ivKkNr0nGGYaqcM_-doxDIS1xUCWF0F8ss44_LpW1vU"
                className="cursor-pointer button-text-mobile lg:button-text bg-primaryOrange hover:bg-seccondaryOrange text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-orange-500"
              >
                Guidebook
              </a>
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
                  type="button"
                  className="cursor-pointer button-text-mobile lg:button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
                >
                  Register Here
                </button>
              )}
            </div>
          </div>
          <div className="hidden lg:block">
            <img className="" src="assets/bcc_arrow_right.svg" alt="Arrow" />
          </div>
        </div>
        <div className="w-auto h-auto mt-20">
          <div className="flex flex-col items-center mt-14 pb-14 gap-9">
            <h1 className="header1-mobile lg:header1 text-primaryText text-center">
              Contact Person
            </h1>
            <ContactList
              line={"Davina: rdavinasyarlaa"}
              wa={"Davina: 085767651073"}
            />
            <ContactList line={"Lia: cifoliaz"} wa={"Lia: 087757851939"} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePageGSIC;
