import AboutWebinarCard from "../../components/ceremony/aboutWebinar/card";
import TitleWebinarCard from "../../components/ceremony/titleWebinar/card";
import BenefitWebinarCard from "../../components/ceremony/benefitWebinar/card";
import "./style.css";
import ContactList from "../../components/contact_list";
// import { useState } from "react";
// import Slides from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import as from "../../assets/orang.svg";
import { useEffect, useState } from "react";
import UploadFile from "../../components/upload-file/upload-file";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer";
import { getWithAuth, postWithAuth } from "../../API/api";
import { NotifyStatus } from "../../components/toast_pop_up/toast";
import { Toaster } from "react-hot-toast";
import { FileWithPath } from "react-dropzone";

const Ceremony = () => {
  // const [sliderRef, setSliderRef] = useState(null)
  // const [slideRef, setSlideRef] = useState(null)

  // const NextArrow = () => {
  //     return (
  //         <img
  //             src="./src/assets/event_right.svg"
  //             alt="next"
  //             className='ml-[15px]'
  //             onClick={sliderRef?.slickNext}
  //         />
  //     )
  // };

  // const PrevArrow = () => {
  //     return (
  //         <img
  //             src="./src/assets/event_right.svg"
  //             alt="prev"
  //             style={{ transform: 'rotate(180deg)' }}
  //             className='mr-[30px]'
  //             onClick={sliderRef?.slickPrev}
  //         />
  //     );
  // };
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false
  // };
  const [popUp, setPopUp] = useState(false);
  const [ssPoster, setSSPoster] = useState<File | null>(null);
  const [isRegistered, setRegistered] = useState(false);

  const token = localStorage.getItem("access_token");

  const handleSubmit = async () => {
    try {
      console.log(ssPoster);
      await postWithAuth(
        "register-ceremony",
        {
          ss_poster_url: ssPoster,
        },
        token ?? ""
      );
      setRegistered(true);
      setPopUp(false);
      NotifyStatus("Registration Successfully!", true);
    } catch (error) {
      const mess = error as any;
      NotifyStatus(mess.response.data.data.error, false);
    }
  };

  const childToParent = (childdata: File) => {
    setSSPoster(childdata);
  };

  const cekUser = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const cekRegister = await getWithAuth("ceremony?user_id=" + id, token);
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
      {/* u have not logged in */}
      {!token ? (
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
                src={as}
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
      ) : (
        <div
          className={
            popUp === true
              ? " fixed z-[1055] w-full h-screen bg-primaryBlue bg-opacity-30 flex items-center justify-center"
              : "hidden fixed w-full h-screen bg-primaryBlue bg-opacity-30"
          }
        >
          <div className="absolute w-[90%] lg:w-[45%] h-auto rounded-xl bg-white flex flex-col py-4 px-1 lg:py-5 lg:px-2 gap-5">
            <div className="flex flex-col items-end pr-5">
              <button
                className="hover:bg-slate-200 rounded-full p-1"
                onClick={() => setPopUp(false)}
              >
                ✖
              </button>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-primaryBlue text-center header2-mobile lg:header2">
                Proof of Poster Upload <span className="text-red-500"> *</span>
              </h2>
              <h3 className="text-primaryBlue text-center header3-mobile lg:header3">
                UPLOAD FILES
              </h3>
              <div className="w-[70%] lg:w-[50%]">
                <UploadFile childToParent={childToParent} type={"image"} />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-primaryBlue rounded-lg px-5 py-1 text-white w-[auto] button-text-mobile lg:button-text"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-[auto] bg-[url(./src/assets/Background_Ceremony.svg)] bg-cover">
        <div className="pt-[150px] w-full mx-auto text-center">
          {/* Judul Webinar */}
          <h1 className="w-[70vw] header1-mobile lg:header1 mx-auto inline-block text-primaryBlue pb-5">
            Opening Ceremony
          </h1>
          <h2 className="w-[70vw] mx-auto inline-block header2-mobile lg:header2 text-primaryBlue pb-5">
            Unleashing the Potential of AI:{" "}
            <span className="text-primaryBlue">
              Empowering Youth for Positive Breakthroughs in Art, Tech, and
              Business
            </span>
          </h2>

          {/* <div className="flex items-center justify-between w-[62vw] lg:w-[77vw] h-[303px] mx-auto">
                    <PrevArrow/>
                    <div className="w-[62vw] h-[200px] rounded-xl shadow-md shadow-slate-500">
                        <Slides ref={setSliderRef} {...settings}>
                        </Slides>
                    </div>
                    <NextArrow/>
                </div> */}
          <div className="mt-20">
            <TitleWebinarCard
              title="ABOUT SPEAKER,"
              name="NAMA SPEAKER"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              foto="../src/assets/BillGates.svg"
            />
          </div>

          {/* About Webinar */}
          <div className="mt-28 px-10 lg:px-36">
            <h1 className="w-auto mx-auto inline-block header1-mobile lg:header1 text-primaryText py-5 mb-5">
              About Opening Ceremony
            </h1>
            <AboutWebinarCard
              description1="The event that marks the start of the Ganesha Student Innovation Summit (GSIS)! It is designed to set the tone for the event and create a sense of excitement and anticipation among the participants and attendees. Opening ceremonies will bring webinars, workshops, performances, and other forms of entertainment, and may involve the formal introduction of key participants or guests of honor."
              description2="Explore the transformative power of artificial intelligence (AI) in unlocking the potential of youth in the realms of art, technology, and business. Discover how AI-driven innovations are revolutionizing creative expression, entrepreneurial endeavors, and technological advancements. Empower the youth to maximize AI's potentials, generate positive breakthroughs, and shape a future where art, tech, and business collaborate effectively. Don't miss this opportunity to gain insights, a workshop about AI potentials, network with industry experts, and unleash the untapped potential of AI for youth empowerment!"
              date="8 July 2023, 13.00"
              place="Zoom Meeting (link TBA)"
            />
          </div>
          {/* Benefit */}
          <BenefitWebinarCard
            title="Benefit"
            b1="Expand knowledge and gain insights from the expert"
            b2="Hands-on workshop"
            b3="Networking and collaboration opportunity"
            b4="Various benefits from our sponsors"
            b5="Free webinar recording"
            b6="E-Certificates"
          />

          {/* Register Here */}
          <div className="mt-28 mx-10 md:mx-52">
            <div className="w-full h-auto py-12 bg-white rounded-xl shadow-xl shadow-blue-200 bg-opacity-50">
              <h2 className="header2-mobile lg:header2 text-primaryBlue px-10 xl:px-40 text-center pb-5">
                Are You Ready To Develop Your Knowledge?
              </h2>
              {isRegistered ? (
                <button
                  disabled
                  className="bg-seccondaryBlue w-auto p-5 py-2 button-text-mobile lg:button-text rounded-xl text-white"
                >
                  You Registered
                </button>
              ) : (
                <button
                  className="bg-primaryBlue w-auto p-5 py-2 button-text-mobile lg:button-text rounded-xl text-white"
                  onClick={() => setPopUp(true)}
                >
                  Register Here
                </button>
              )}
            </div>
          </div>

          {/* Contact List */}
          <div className="mt-28 pb-20 flex flex-col items-center">
            <h1 className="header1-mobile lg:header1 pb-10 text-primaryBlue">
              Contact Person
            </h1>
            <ContactList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ceremony;
