interface AboutWebinarCardProps {
    description1: string;
    description2: string;
    date: string;
    place: string;
}

const AboutWebinarCard = ({description1, description2, date, place}:AboutWebinarCardProps) => {
    return (
        <>
        <div className="w-full h-auto bg-white rounded-xl shadow-xl shadow-blue-200 bg-opacity-50">
            <div className="flex flex-col py-20 px-40 gap-5">
                {/* description */}
                <div className="flex flex-row justify-between gap-10">
                    <img src="../src/assets/AboutWebinarDescription.svg" alt="" />
                        <div className="">
                            <div className="w-full h-auto bg-white shadow-lg  shadow-blue-300 rounded-lg bg-opacity-60 ">
                                <h3 className="header3 text-left p-5 text-primaryBlue">Opening Ceremony</h3>
                                <div className="text-justify px-5 pb-5 text-primaryBlue">
                                {description1}
                                </div>
                                <h3 className="header3 text-left p-5 text-primaryBlue">About Webinar</h3>
                                <div className="text-justify px-5 pb-5 text-primaryBlue">
                                {description2}
                                </div>
                            </div>
                        </div>
                </div>
                {/* date */}
                <div className="flex flex-row justify-between items-center gap-10">
                    <img src="../src/assets/AboutWebinarDate.svg" alt="" />
                        <div className="w-full pl-8">
                            <div className="w-full h-auto bg-white shadow-lg  shadow-blue-300 rounded-lg bg-opacity-60 ">
                                <h3 className="header3 text-left p-5 text-primaryBlue">{date}</h3>
                            </div>
                        </div>
                    </div>
                {/* place */}
                <div className="flex flex-row justify-between items-center gap-10">
                    <img src="../src/assets/AboutWebinarPlace.svg" alt="" />
                        <div className="w-full pl-8">
                            <div className="w-full h-auto bg-white shadow-lg  shadow-blue-300 rounded-lg bg-opacity-60 ">
                                <h3 className="header3 text-left p-5 text-primaryBlue">{place}</h3>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )

};

export default AboutWebinarCard;