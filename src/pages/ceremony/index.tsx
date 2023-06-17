import AboutWebinarCard from "../../components/ceremony/aboutWebinar/card";
import TitleWebinarCard from "../../components/ceremony/titleWebinar/card";
import Benefit from "../../components/homepage/benefit";
import "./style.css";
import { useState } from "react";
import Slides from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Ceremony = () => {
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
    return(
        <>
        <div className="w-full h-[3852px] bg-[url(./src/assets/Background_Ceremony.svg)] bg-cover">
            <div className="pt-[150px] w-full mx-auto text-center">
                {/* Judul Webinar */}
                <h1 className="w-auto mx-auto inline-block header1 text-primaryText">[JUDUL WEBINAR]</h1>
                {/* <div className="flex items-center justify-between w-[62vw] lg:w-[77vw] h-[303px] mx-auto">
                    <PrevArrow/>
                    <div className="w-[62vw] h-[200px] rounded-xl shadow-md shadow-slate-500">
                        <Slides ref={setSliderRef} {...settings}>
                        </Slides>
                    </div>
                    <NextArrow/>
                </div> */}
                <TitleWebinarCard title="ABOUT SPEAKER," name="NAMA SPEAKER" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." foto="../src/assets/BillGates.svg"/>
                
                {/* About Webinar */}
                <div className="pt-28 px-40">
                    <h1 className="w-auto mx-auto inline-block header1 text-primaryText py-5 mb-5">About Webinar</h1>
                    <AboutWebinarCard description="Bisa berupa point-point  materi, latar belakang webinar, atau benefit, harapan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." date="27 Agustus 2100" place="Zoom TBA"/>
                </div>
                <Benefit/>
                ``
            </div>
        </div>
        </>
    )
}

export default Ceremony;