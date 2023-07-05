const Supported = () => {
  return (
    <div className="flex flex-col items-center my-10 lg:my-40">
      <h1 className="flex header1-mobile lg:header1 justify-center pb-[25px] lg:pb-[50px] text-primaryBlue">
        Media Partner
      </h1>
      <div className="brand-container w-[86%] h-auto bg-slate-100 mx-auto rounded-xl flex justify-center p-10 bg-opacity-30">
        <img
          src="sponsor/studentcatalyst.png"
          alt=""
          className="lg:h-36 h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default Supported;
