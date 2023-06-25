import './style.css';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const benefits = [
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
];

const BenefitMobile = () => {
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
        <div className="flex flex-col items-center space-y-8 mt-[94px]">
            <h1 className="w-auto  header1-mobile text-primaryBlue">
                BENEFITS
            </h1>
            <div className='flex flex-row align-center'>
                <PrevArrow />
                <div className="w-[225px] h-[100px] benefit-card space-x-5">
                    <Slider ref={setSliderRef} {...settings}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-[33px] w-[225px] h-[100px]">
                                <p className="text-primaryBlue text-[8px] text-justify">{benefit.description}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
                <NextArrow/>
            </div>
        </div>
    )
}

const Benefit = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024); // Adjust the breakpoint as needed
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
        window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
        };
    }, []);
    // return (
    //     <div className="flex flex-col items-center space-y-16">
    //         <h1 className="w-auto mt-[250px] header1-mobile sm:header1 text-primaryBlue">
    //             Benefit
    //         </h1>
    //         <div className="grid grid-cols-2 gap-x-11 gap-y-14 w-[66%]] h-[450px] mx-auto ">
    //             {benefits.map((benefit, index) => (
    //                 <div key={index} className="benefit-card h-[200px] w-[130px] sm:w-[450px] mx-auto p-[15%]">
    //                     <p className="text-primaryBlue text-xs sm:text-base">{benefit.description}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )
    return isSmallScreen ? <BenefitMobile /> : (
        <div className="flex flex-col items-center space-y-16 mt-[177px]">
          <h1 className="w-auto  header1-mobile lg:header1 text-primaryBlue">
            Benefit
          </h1>
          <div className="grid grid-cols-2 gap-x-11 gap-y-14 w-[66%]] h-[450px] mx-auto ">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card h-[200px] w-[450px] mx-auto p-[15%]">
                <p className="text-primaryBlue text-justify">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Benefit