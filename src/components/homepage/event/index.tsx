import { Carousel } from "flowbite-react";
import './style.css';

const Event = () => {
    return (
        <div className="flex flex-col items-center space-y-16">
            <h1 className="w-auto mt-[250px]  font-bold text-6xl text-primaryBlue">
                OUR EVENTS
            </h1>
            <div className="w-[1114px] h-[450px] mx-auto relative -top-[10px]">
                <Carousel slideInterval={4000}>
                    <div className="flex space-x-16">
                        <div className="event-card w-[350px] h-[450px] overflow-hidden mb-[50px]">
                            <div className=" h-[350px] rounded-xl shadow-md shadow-slate-600">
                            </div>  
                            <h2 className="font-montserrat text-white text-4xl font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                                [EVENT]
                            </h2>
                        </div>
                        <div className="event-card w-[350px] h-[450px] overflow-hidden mb-[50px]">
                            <div className=" h-[350px] rounded-xl shadow-md shadow-slate-600">
                            </div>
                            <h2 className="font-montserrat text-white text-4xl font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                                [EVENT]
                            </h2>
                        </div>
                        <div className="event-card w-[350px] h-[450px] overflow-hidden mb-[50px]">
                            <div className=" h-[350px] rounded-xl shadow-md shadow-slate-600">
                            </div>
                            <h2 className="font-montserrat text-white text-4xl font-bold mx-auto text-center mt-[20px]">
                                [EVENT]
                            </h2>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Event