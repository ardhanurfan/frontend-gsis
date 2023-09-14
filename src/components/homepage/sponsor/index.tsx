const Sponsored = () => {
  return (
    <div className="flex flex-col items-center mt-40">
      <h1 className="flex header1-mobile lg:header1 justify-center pb-[25px] lg:pb-[50px] text-primaryBlue">
        Sponsored By
      </h1>
      <div className="brand-container w-[86%] h-auto bg-slate-100 mx-auto rounded-xl flex flex-wrap flex-col lg:flex-row justify-center items-center p-10 bg-opacity-30 gap-8">
        <img
          src="sponsor/cakap.png"
          alt=""
          className="lg:w-[450px] w-80 object-contain"
        />
        <img
          src="sponsor/ef.png"
          alt=""
          className="lg:w-[450px] w-80 object-contain"
        />
        <img
          src="sponsor/smartfren.png"
          alt=""
          className="lg:w-[450px] w-80 object-contain"
        />
        <img
          src="sponsor/sampoerna.png"
          alt=""
          className="lg:w-[450px] w-80 object-contain"
        />
        <img
          src="sponsor/pertamina.png"
          alt=""
          className="lg:w-[600px] w-80 object-contain"
        />
      </div>
    </div>
  );
};

export default Sponsored;
