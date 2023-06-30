import "./style.css";
import bg from "../../assets/Background_AboutUS.svg"


import Slides from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer";
import { useState } from "react";
import BigCard from "../../components/about_us/big_card";
import CarouselCard from "../../components/about_us/carousel_card";
// import SlickGoTo from "./carousel";

const AboutUs = () => {
  const [sliderRef, setSliderRef] = useState(null)
    
  const NextArrow = () => {
        return (
          <>
          <div className="h-10 w-10 rounded-full hover:bg-slate-400 hover:bg-opacity-25 hidden lg:flex justify-center items-center">
            <img
                src="./src/assets/carousel_arrow.svg"
                alt="prev"
                className='hidden lg:block'
                onClick={sliderRef?.slickNext}
            />
          </div>
          </>
        )
  };
    
  const PrevArrow = () => {
        return (
          <>
          <div className="h-10 w-10 rounded-full hover:bg-slate-400 hover:bg-opacity-25 hidden lg:flex justify-center items-center">
            <img
                src="./src/assets/carousel_arrow.svg"
                alt="prev"
                style={{ transform: 'rotate(180deg)' }}
                className='hidden lg:block'
                onClick={sliderRef?.slickPrev}
            />
          </div>
          </>
        )
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
    <div className="w-full h-auto bg-cover bg-[url(../src/assets/Background_AboutUS.svg)]">
      <div className="pt-[150px] lg:pt-[285px] w-[90vw] max-w-[928px] mx-auto text-center">
        <h1 className="w-auto mx-auto inline-block header1-mobile lg:header1 text-primaryText">
          About Us
        </h1>
        <p className="mt-[75px] rounded-xl p-6 bg-slate-100 shadow-md backdrop-blur-sm shadow-slate-500 bg-opacity-30 lg:bg-transparent lg:shadow-none text-justify text-primaryText small lg:body-text">
          GSIS sendiri terinspirasi oleh HPAIR (Harvard Project for Asian and
          International Relation) yang diselenggarakan oleh Harvard University untuk
          mengatasi permasalahan di Asia dengan mendatangkan pembicara dari
          berbagai bidang. GSIS menjadi acara pertama dan terbesar di Indonesia yang
          mengusung tema kolaborasi antara bidang teknologi, seni, dan bisnis. Pada
          tahun ini untuk ketiga kalinya GSIS akan diselenggarakan, dan untuk pertama
          kalinya GSIS akan diselenggarakan secara luar jaringan (offline) di Kota
          Bandung. <br />
          <br />
          GSIS 2023 akan membawa tema "Futurizing Sustainability: Collaborative
          Revolution". Acara ini bertujuan untuk menguatkan peserta dalam melahirkan
          inovasi yang berkelanjutan dan berorientasi pada kesejahteraan masyarakat
          secara makro. Berfokus pada revolusi kolaborasi multidisiplin antara teknologi,
          bisnis, dan seni sebagai upaya optimalisasi inovasi strategis dan berkelanjutan
          melalui proses inovasi yang inklusif, iteratif, kreatif, dan advokatif. Acara ini juga
          diharapkan dapat memberikan kontribusi nyata bagi masyarakat dalam
          mencapai tujuan pembangunan berkelanjutan. <br />
          <br />
          Rangkaian acara yang dilaksanakan diharapkan dapat menjadi pemantik
          bagi siswa dan mahasiswa di Indonesia untuk terus berkolaborasi dan berinovasi
          untuk menciptakan dampak yang baik bagi Indonesia, bahkan dunia.
          Pelaksanaan Ganesha Student Innovation Summit terdiri dari Innovation
          Competition, Business Case Competition, Exhibition, dan Grand Summit sebagai
          puncak acaranya. Pada GSIS 2023, kami berharap manfaat yang diberikan tidak
          hanya dirasakan oleh para peserta saja, tetapi juga dirasakan oleh masyarakat
          luas.
        </p>
      </div>
      <div className="w-auto h-auto">
        <div className="mt-[156px] lg:mt-[250px]">
          <h1 className="text-center header1-mobile lg:header1 text-primaryText">Goals</h1>
          <h2 className="text-center header3-mobile lg:header3 mt-[45px] text-primaryText">
            Our Vision
          </h2>
          <div className="relative mt-[31px] w-[85vw] max-w-[945px] h-[150px] lg:h-[200px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
            <div className="h-auto w-[38px] flex justify-between absolute m-[4%] lg:m-[2%]">
              <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <p className="absolute text-primaryText small lg:body-text w-[52.5%] text-center lg:text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
              Fastering an environtment when student can spark innovation to
              solve the problem around them
            </p>
          </div>
          <h2 className="text-center header3-mobile lg:header3 mt-[109px] text-primaryText">
            Our Mission
          </h2>
          <div className="relative flex items-center justify-between w-[85vw] max-w-[1100px] h-[200px] lg:h-[250px] mt-[31px] mb-[20px] mx-auto">
            <PrevArrow/>
            <div className="w-full max-w-[945px] h-auto rounded-xl shadow-md shadow-slate-500">
              <Slides className="rounded-xl" ref={setSliderRef} {...settings}>
                <CarouselCard content="Provide informative sessions that allow students to learn and identify real problems around them"/>
                <CarouselCard content="Providing competitions that allow students to apply their learning material to produce an output"/>
                <CarouselCard content="Diversify areas of expertise to strengthen collaboration"/>
              </Slides>
            </div>
            <NextArrow/>
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
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[35%] mt-[9%] md:mt-[5%] lg:mt-[3.5%] 2xl:mt-[3.5%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">W1/W4</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">Jul/Sep, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] float-left"
                    src="../src/assets/Timeline1.svg"
                    alt="p"
                  />
                  <h3 className="pt-[19.5%] md:pt-[9%] lg:pt-[7%] 2xl:pt-[7%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue 2xl:mr-[9.923%]">
                    OPENING/ <br className="md:hidden"/> CLOSING <br /> CEREMONY
                  </h3>
                </div>
                <div className="pt-[1.25%] relative">
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[10.25%] md:mr-[31.5%] lg:mr-[35.6%] 2xl:mr-[35%] mt-[14%] md:mt-[9%] lg:mt-[6.5%] 2xl:mt-[7.5%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">W2-W2</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryGreen text-center">Jul-Ags, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                    src="../src/assets/Timeline2.svg"
                    alt="p"
                  />
                  <h3 className="pt-[23.75%] md:pt-[12.75%] lg:pt-[9.75%] 2xl:pt-[10.75%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen 2xl:ml-[9.923%] text-right">
                    SOCIAL <br className="md:hidden"/> IMPACT <br /> CHALLENGE
                  </h3>
                </div>
                <div className="pt-[1.25%] relative">
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[35%] mt-[13%] md:mt-[9%] lg:mt-[6.56%] 2xl:mt-[7%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">W2-W4</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">July, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                    src="../src/assets/Timeline3.svg"
                    alt="p"
                  />
                  <h3 className="pt-[23.85%] md:pt-[12.5%] lg:pt-[9.85%] 2xl:pt-[11.25%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange 2xl:mr-[9.923%]">
                    INDIVIDUAL <br className="md:hidden"/> CASE <br /> CHALLENGE
                  </h3>
                </div>
                <div className="pt-[1.25%] relative">
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[10.25%] md:mr-[31.5%] lg:mr-[35.6%] 2xl:mr-[35%] mt-[13%] md:mt-[9%] lg:mt-[6%] 2xl:mt-[6.75%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">W1-W4</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryYellow text-center">August, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                    src="../src/assets/Timeline4.svg"
                    alt="p"
                  />
                  <h3 className="pt-[23.85%] md:pt-[13%] lg:pt-[9.5%] 2xl:pt-[10.5%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow 2xl:ml-[9.923%] text-right">
                    TEAM <br className="md:hidden"/> CASE <br /> CHALLENGE
                  </h3>
                </div>
                <div className="pt-[1.25%] relative">
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[11.25%] md:ml-[32.5%] lg:ml-[36%] mt-[13%] md:mt-[9%] lg:mt-[6.56%] 2xl:mt-[7%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">W2</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">August, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                    src="../src/assets/Timeline1.svg"
                    alt="p"
                  />
                  <h3 className="pt-[23.85%] md:pt-[12.75%] lg:pt-[9.85%] 2xl:pt-[11%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue 2xl:mr-[9.923%]">
                    COLOUR <br className="md:hidden"/> RUN
                  </h3>
                </div>
                <div className="pt-[1.25%] relative">
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[8.25%] md:mr-[30.5%] lg:mr-[35%] mt-[19%] md:mt-[11%] lg:mt-[8%] 2xl:mt-[8.8%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">W1</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryGreen text-center">September, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                    src="../src/assets/Timeline2.svg"
                    alt="p"
                  />
                  <h3 className="pt-[28.55%] md:pt-[15.25%] lg:pt-[11.55%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen 2xl:ml-[9.923%] text-right">
                  YOUTH <br className="md:hidden"/> CONFERENCE <br /> (HMJ, UKM, <br className="md:hidden"/>ComPart)
                  </h3>
                </div>
                <div className="pt-[1.25%] relative">
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[8.25%] md:ml-[30.5%] lg:ml-[35%] mt-[8%] lg:mt-[6%] 2xl:mt-[7.3%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">W4</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">September, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                    src="../src/assets/Timeline3.svg"
                    alt="p"
                  />
                  <h3 className="pt-[18.85%] md:pt-[12.85%] lg:pt-[9.85%] 2xl:pt-[11%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange 2xl:mr-[9.923%]">
                    EXHIBITION 
                  </h3>
                </div>
                <div className="pt-[1.25%] relative">
                  <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[8.25%] md:mr-[30.5%] lg:mr-[35%] mt-[24%] md:mt-[11%] lg:mt-[8%] 2xl:mt-[8.8%]">
                    <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">W4</span>
                    <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryYellow text-center">September, 2023</span>
                  </div>
                  <img
                    className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                    src="../src/assets/Timeline4.svg"
                    alt="p"
                  />
                  <h3 className="pt-[33.25%] md:pt-[15.25%] lg:pt-[11.25%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow 2xl:ml-[9.923%] text-right">
                    GRAND <br className="md:hidden"/> SUMMIT
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
