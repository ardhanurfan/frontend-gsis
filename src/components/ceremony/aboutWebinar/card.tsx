interface AboutWebinarCardProps {
  description1: string;
  description2: string;
  date: string;
  place: string;
}

const AboutWebinarCard = ({
  description1,
  description2,
  date,
  place,
}: AboutWebinarCardProps) => {
  return (
    <>
      <div className="w-full h-auto bg-white rounded-xl shadow-xl shadow-blue-200 bg-opacity-50">
        <div className="flex flex-col py-5 md:py-10 xl:py-20 px-5 md:px-10 xl:px-40 gap-5">
          {/* description */}
          <div className="flex flex-row items-center justify-between gap-10">
            <img
              src="AboutWebinarDescription.svg"
              className="w-10 lg:w-20 h-10 lg:h-20 xl:h-40 xl:w-40"
              alt=""
            />
            <div className="">
              <div className="w-full h-auto bg-white shadow-lg  shadow-blue-300 rounded-lg bg-opacity-60 ">
                <h3 className="header3-mobile lg:header3 text-left p-5 text-primaryBlue">
                  Opening Ceremony
                </h3>
                <div className="text-left md:text-justify px-5 pb-5 body-text-mobile lg:body-text text-primaryBlue">
                  {description1}
                </div>
                <h3 className="header3-mobile lg:header3 text-left p-5 text-primaryBlue">
                  About Webinar
                </h3>
                <div className="text-left md:text-justify px-5 pb-5 body-text-mobile lg:body-text text-primaryBlue">
                  {description2}
                </div>
              </div>
            </div>
          </div>
          {/* date */}
          <div className="flex flex-row justify-between items-center gap-10">
            <img
              src="../src/assets/AboutWebinarDate.svg"
              className="w-10 lg:w-20 h-10 lg:h-20 xl:h-40 xl:w-40"
              alt=""
            />
            <div className="w-full pl-1 lg:pl-0 ">
              <div className="w-full h-auto bg-white shadow-lg  shadow-blue-300 rounded-lg bg-opacity-60 ">
                <h3 className="header3-mobile lg:header3 text-left p-5 text-primaryBlue">
                  {date}
                </h3>
              </div>
            </div>
          </div>
          {/* place */}
          <div className="flex flex-row justify-between items-center gap-10">
            <img
              src="../src/assets/AboutWebinarPlace.svg"
              className="w-10 lg:w-20 h-10 lg:h-20 xl:h-40 xl:w-40"
              alt=""
            />
            <div className="w-full pl-1 lg:pl-">
              <div className="w-full h-auto bg-white shadow-lg  shadow-blue-300 rounded-lg bg-opacity-60 ">
                <h3 className="header3-mobile lg:header3 text-left p-5 text-primaryBlue">
                  {place}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWebinarCard;
