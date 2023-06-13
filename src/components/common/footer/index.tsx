const Footer = () => {
    return (
      <div className="flex w-full justify-between h-[50px] box-shadow-blue">
        <div className="relative">
          <img
            src="./src/assets/logo_gsis.svg"
            alt=""
            className="pl-1 self-center h-[50px] w-[89px] object-cover object-center"
            style={{ clipPath: 'inset(10% 0% 10% 0%)' }}
          />
        </div>
        <div className="flex self-center text-primaryBlue">
          Ganesha Student Innovation Summit
        </div>
        <div className="flex self-center pr-3 space-x-1">
          <img src="./src/assets/linkedin.svg" alt="" className="pl-1 h-[25px] w-[25px]" />
          <img src="./src/assets/instagram.svg" alt="" className="pl-1 h-[25px] w-[25px]" />
        </div>
      </div>
    );
  };

export default Footer