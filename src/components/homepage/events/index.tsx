import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EventCard from "./card";



const Event = () => {
    const [sliderRef, setSliderRef] = useState(null)
    
    const NextArrow = () => {
        return (
            <img
                src="./src/assets/event_right.svg"
                alt="next"
                className='ml-[15px] cursor-pointer'
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
                className='mr-[30px] cursor-pointer'
                onClick={sliderRef?.slickPrev}
            />
        );
    };
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

    return (
        <div className="flex flex-col items-center space-y-16">
            <h1 className="w-auto mt-[177px]  font-bold text-6xl text-primaryBlue">
                OUR EVENTS
            </h1>
            <div className='flex flex-row items-center'>
                <PrevArrow />
                <div className="w-[375px] md:w-[1111px] h-[450px] mx-auto ">
                    <Slider ref={setSliderRef} {...settings}>
                        <EventCard image="image url" label="EXHIBITION"/>
                        <EventCard image="image url" label="COLOUR RUN"/>
                        <EventCard image="image url" label="BUSSINESS CASE COMPETITION"/>
                        <EventCard image="image url" label="SOCIAL IMPACT CHALLENGE"/>   
                        <EventCard image="image url" label="GRAND SUMMIT"/>   
                    </Slider>
                </div>
                <NextArrow/>
            </div>
        </div>
    )
}

export default Event