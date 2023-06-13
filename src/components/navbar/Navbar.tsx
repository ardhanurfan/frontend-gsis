const Navbar = () => {
  return (
    <>
      <div className="relative z-10 flex justify-center">
        <div className="px-[35px] fixed flex justify-between items-center w-[1300px] h-[50px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] rounded-full border-2 border-white border-opacity-20 shadow-md">
          <img src="./src/assets/logo_gsis.svg" alt="" />
          <div className="flex gap-[50px] button-text text-primaryBlue">
            <a className="cursor-pointer hover:text-seccondaryBlue">Home</a>
            <a className="cursor-pointer hover:text-seccondaryBlue">About Us</a>
            <a className="cursor-pointer hover:text-seccondaryBlue">Ceremony</a>
            <a className="cursor-pointer hover:text-seccondaryBlue" href="">
              Competition
            </a>
            <a className="cursor-pointer hover:text-seccondaryBlue" href="">
              Exhibition
            </a>
            <a className="cursor-pointer hover:text-seccondaryBlue" href="">
              FAQ
            </a>
            <div className="bg-primaryBlue text-white w-auto rounded px-2 flex justify-around items-center">
              <a className="cursor-pointer hover:text-seccondaryBlue" href="">
                Login
              </a>
              <span className="bg-white h-[2px] w-[15px] inline-block rounded-full rotate-90"></span>
              <a className="cursor-pointer hover:text-seccondaryBlue" href="">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
