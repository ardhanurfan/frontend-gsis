import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./card";
import ex from "../../../../src/assets/exhibition_web_icon_3d.png";
import bc from "../../../../src/assets/bcc_web_icon_3d.png";
import si from "../../../../src/assets/gsic_web_icon_3d.png";
import gs from "../../../../src/assets/bintang.png";
const Event = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const NextArrow = () => {
    return (
      <img
        src="assets/event_right.svg"
        alt="next"
        className="ml-[15px] cursor-pointer"
        onClick={sliderRef?.slickNext}
      />
    );
  };

  const PrevArrow = () => {
    return (
      <img
        src="assets/event_right.svg"
        alt="prev"
        style={{ transform: "rotate(180deg)" }}
        className="mr-[30px] cursor-pointer"
        onClick={sliderRef?.slickPrev}
      />
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8 lg:space-y-16 mt-[66px] lg:mt-[177px]">
      <h1 className="w-auto header1-mobile xl:header1 text-primaryBlue">
        OUR EVENTS
      </h1>
      <div className="flex items-center">
        <PrevArrow />
        <div className="w-[171px] h-[220px] xl:w-[1111px] xl:h-[450px] mx-auto ">
          <Slider ref={setSliderRef} {...settings}>
            <EventCard image={ex} label="EXHIBITION" />
            <EventCard image={bc} label="BUSINESS CASE" />
            <EventCard image={si} label="SOCIAL IMPACT" />
            <EventCard image={gs} label="GRAND SUMMIT" />
          </Slider>
        </div>
        <NextArrow />
      </div>
    </div>
  );
};

export default Event;
