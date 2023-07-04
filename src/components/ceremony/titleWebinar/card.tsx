import { useState } from "react";
import Slider from "react-slick";
import "./style.css";

const TitleWebinarCard = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const NextArrow = () => {
    return (
      <>
        <div
          onClick={sliderRef?.slickNext}
          className="h-10 w-10 rounded-full hover:bg-slate-400 hover:bg-opacity-25 hidden lg:flex justify-center items-center self-center"
        >
          <img
            src="assets/carousel_arrow.svg"
            alt="prev"
            className="hidden lg:block"
          />
        </div>
      </>
    );
  };

  const PrevArrow = () => {
    return (
      <>
        <div
          onClick={sliderRef?.slickPrev}
          className="h-10 w-10 rounded-full hover:bg-slate-400 hover:bg-opacity-25 hidden lg:flex justify-center items-center self-center"
        >
          <img
            src="assets/carousel_arrow.svg"
            alt="prev"
            style={{ transform: "rotate(180deg)" }}
            className="hidden lg:block"
          />
        </div>
      </>
    );
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <PrevArrow />
      <div className="overflow-auto w-[90vw] h-[875px] lg:h-[650px] bg-slate-100 bg-opacity-30 rounded-xl mx-auto lg:mt-10 shadow-lg shadow-blue-300">
        <div className="w-full h-auto">
          <Slider className="rounded-xl" ref={setSliderRef} {...settings}>
            <div className="attribute">
              <div className="w-[300px] lg:w-[350px] h-[400px] lg:h-[450px] bg-gradient-to-l from-primaryBlue to-seccondaryBlue mx-auto lg:mr-0 lg:ml-[59px] mt-4 lg:my-[83px] shrink-0 rounded-xl shadow-md shadow-slate-700">
                <div className="inner-card h-[77.78%] rounded-xl shadow-md shadow-slate-600 relative">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <img
                    src="assets/RayyanDzakiy.png"
                    className="absolute h-full w-full"
                    alt=""
                  />
                  {/* <div className="badge-name w-[85.7%] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[77.71%] shadow-sm shadow-slate-700 body-text">
                            {name}
                            </div> */}
                </div>
                <h3 className="text-white header3-mobile lg:header3 h-[58px] w-[246px] mx-auto text-center mt-[35px]">
                  Royyan Dzakiy
                </h3>
              </div>
              <div className="lg:pt-[98px]">
                <h2 className="text-primaryText header1-mobile lg:header1 text-center lg:text-start px-12 lg:px-0 lg:pr-2 mb-6 lg:mb-[37px]">
                  ABOUT SPEAKER,
                </h2>
                <p className="text-primaryText pb-5 lg:mr-[97px] px-12 lg:px-0 small lg:body-text text-justify">
                  Royyan Dzakiy is a software engineer and an IoT developer. He
                  has 5+ years of experience of leading non-profit
                  organizations. His love for research has led him to start the
                  Research & Development team in eFishery, focusing on
                  developing Artificial Intelligence and Internet of Things
                  solutions to solve many problems in the Aquaculture space.{" "}
                  <br />
                  <br />
                  Highlight Achievements at eFishery: <br />
                  - Research & Development Manager <br />
                  - Internet of Things (IoT) Engineer <br />- Lead IoT
                  Researcher
                </p>
              </div>
            </div>
            <div className="attribute">
              <div className="w-[300px] lg:w-[350px] h-[400px] lg:h-[450px] bg-gradient-to-l from-primaryBlue to-seccondaryBlue mx-auto lg:mr-0 lg:ml-[59px] mt-4 lg:my-[83px] shrink-0 rounded-xl shadow-md shadow-slate-700">
                <div className="inner-card h-[77.78%] rounded-xl shadow-md shadow-slate-600 relative">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <img
                    src="assets/moderator.png"
                    className="absolute h-full w-full object-contain"
                    alt=""
                  />
                  {/* <div className="badge-name w-[85.7%] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[77.71%] shadow-sm shadow-slate-700 body-text">
                            {name}
                            </div> */}
                </div>
                <h3 className="text-white header3-mobile lg:header3 h-[58px] w-[246px] mx-auto text-center mt-[35px] lg:mt-[25px]">
                  Herve Pierre Sidarta
                </h3>
              </div>
              <div className="lg:pt-[98px] w-full clear-left lg:clear-none">
                <h2 className="text-primaryText header1-mobile lg:header1 text-center lg:text-start px-12 lg:px-0 lg:pr-2 mb-6 lg:mb-[37px]">
                  Moderator,
                </h2>
                <p className="text-primaryText pb-5 lg:mr-[97px] px-12 lg:px-0 small lg:body-text text-justify">
                  Since 2020, Pierre has been actively hosting various events,
                  including events by the Ministry of Environment and Forestry
                  of Indonesia, the Ministry of Energy and Mineral Resources of
                  Indonesia, Narasi.tv, and many more.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <NextArrow />
    </>
  );
};

export default TitleWebinarCard;
