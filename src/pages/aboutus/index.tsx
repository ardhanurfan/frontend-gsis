import "./style.css";

("use client");

import Slides from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from "flowbite-react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer";
import { useState } from "react";
import BigCard from "../../components/about_us/big_card";

const AboutUs = () => {
  const [sliderRef, setSliderRef] = useState(null)
  const [slideRef, setSlideRef] = useState(null)
    
  const NextArrow = () => {
        return (
            <img
                src="./src/assets/event_right.svg"
                alt="next"
                className='ml-[15px]'
                onClick={sliderRef?.slickNext}
            />
        )
  };
    
  const PrevArrow = () => {
        return (
            <img
                src="./src/assets/event_right.svg"
                alt="prev"
                style={{ transform: 'rotate(180deg)' }}
                className='mr-[30px]'
                onClick={sliderRef?.slickPrev}
            />
        );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <>
    <Navbar/>
    <div className="w-full h-auto bg-cover bg-[url(./assets/Background_AboutUs.svg)]">
      <div className="pt-[150px] lg:pt-[285px] w-[64.5vw] mx-auto text-center">
        <h1 className="w-auto mx-auto inline-block header1 text-primaryText">
          About Us
        </h1>
        <p className="mt-[75px] text-justify text-primaryText body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      {/* <div className="w-[90.3vw] h-[auto] lg:h-[615px] bg-slate-100 mt-[120px] lg:mt-[250px] mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30 overflow-auto lg:overflow-visible">
        <div className="w-[300px] lg:w-[350px] h-[400px] lg:h-[450px] my-[30px] lg:my-[83px] lg:ml-[59px] lg:mr-[74px] mx-auto rounded-xl lg:float-left shadow-md shadow-slate-700 bg-gradient-to-l from-primaryBlue to-seccondaryBlue">
          <div className="inner-card h-[77.78%] rounded-xl shadow-md shadow-slate-600 relative">
            <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
              <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <img src="../src/assets/Timeline1.svg" className="absolute h-full w-full bottom-[22%]" alt="" />
            <div className="badge-name w-[85.7%] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[77.71%] shadow-sm shadow-slate-700 body-text">
              Nama Anggota
            </div>
          </div>
          <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
            [JABATAN JABATAN]
          </h3>
        </div>
        <div className="lg:pt-[98px] clear-left lg:clear-none">
          <h1 className="text-primaryText header1  text-center lg:text-start px-12 lg:px-0 lg:pr-2 mb-[37px]">
            Warm Regards
          </h1>
          <p className="mt-[75px] text-justify text-primaryText body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div> */}
      <BigCard name="Nama Staff" title="Warm Regards," paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." jabatan="[JABATAN JABATAN]" foto="../src/assets/BillGates.svg"/>
      <div className="w-auto h-auto">
        <div className="mt-[296px]">
          <h1 className="text-center header1 text-primaryText">Goals</h1>
          <h2 className="text-center header3 mt-[45px] text-primaryText">
            Our Vision
          </h2>
          <div className="relative mt-[31px] w-[85vw] lg:w-[62vw] h-[200px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
            <div className="h-auto w-[38px] flex justify-between float-left m-[4%] lg:m-[2%]">
              <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <p className="absolute text-primaryText body-text w-[52.5%] text-center lg:text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
              Fastering an environtment when student can spark innovation to
              solve the problem around them
            </p>
          </div>
          <h2 className="text-center header3 mt-[109px] text-primaryText">
            Our Mission
          </h2>
          <div className="flex items-center justify-between w-[62vw] lg:w-[77vw] h-[303px] mx-auto">
            <PrevArrow/>
            <div className="w-[62vw] h-[200px] rounded-xl shadow-md shadow-slate-500">
              <Slides ref={setSliderRef} {...settings}>
                <div className="h-[200px] max-w-[62vw] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <h3 className="absolute text-primaryText body-text w-[496px] text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat doloremque, blanditiis, exercitationem ab quasi
                    voluptatibus eius incidunt optio accusamus laboriosam sint.
                    Delectus, ratione dolores? In, hic! Sint beatae repudiandae
                    odio?
                  </h3>
                </div>
                <div className="h-[200px] max-w-[62vw] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <h3 className="absolute text-primaryText body-text w-[496px] text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat doloremque, blanditiis, exercitationem ab quasi
                    voluptatibus eius incidunt optio accusamus laboriosam sint.
                    Delectus, ratione dolores? In, hic! Sint beatae repudiandae
                    odio?
                  </h3>
                </div>
                <div className="h-[200px] max-w-[62vw] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <h3 className="absolute text-primaryText body-text w-[496px] text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat doloremque, blanditiis, exercitationem ab quasi
                    voluptatibus eius incidunt optio accusamus laboriosam sint.
                    Delectus, ratione dolores? In, hic! Sint beatae repudiandae
                    odio?
                  </h3>
                </div>
              </Slides>
            </div>
            <NextArrow/>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto overflow-auto">
        <div className="mt-[290px] mb-[125px]">
          <h1 className="mx-auto text-center header1 text-primaryText">
            Timeline
          </h1>
          <div className="overflow-auto w-[95vw] mx-auto pb-[22px]">
            <div className="relative w-[90vw] min-w-[975px] max-w-[1300px] h-[1605px] lg:h-[2140px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30">
              <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div>
                  <span></span>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] pt-[10.25%] float-left"
                    src="../src/assets/Timeline1.svg"
                    alt="p"
                  />
                  <h3 className="pt-[18%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue mr-[7.923%]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                    src="../src/assets/Timeline2.svg"
                    alt="p"
                  />
                  <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen ml-[7.923%] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] -mt-[3.12%] float-left"
                    src="../src/assets/Timeline3.svg"
                    alt="p"
                  />
                  <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange mr-[7.923%]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                    src="../src/assets/Timeline4.svg"
                    alt="p"
                  />
                  <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow ml-[7.923%] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] -mt-[3.12%] float-left"
                    src="../src/assets/Timeline1.svg"
                    alt="p"
                  />
                  <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue mr-[7.923%]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                    src="../src/assets/Timeline2.svg"
                    alt="p"
                  />
                  <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen ml-[7.923%] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] -mt-[3.12%] float-left"
                    src="../src/assets/Timeline3.svg"
                    alt="p"
                  />
                  <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange mr-[7.923%]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                    src="../src/assets/Timeline4.svg"
                    alt="p"
                  />
                  <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow ml-[7.923%] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
