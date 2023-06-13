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
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
                <div className="w-[1111px] h-[450px] mx-auto ">
                    <Slider ref={setSliderRef} {...settings}>
                        <EventCard image="image url" label="[EVENT]"/>
                        <EventCard image="image url" label="[EVENT]"/>
                        <EventCard image="image url" label="[EVENT]"/>
                        <EventCard image="image url" label="[EVENT]"/>   
                    </Slider>
                </div>
                <NextArrow/>
            </div>
        </div>
    )
}

export default Event