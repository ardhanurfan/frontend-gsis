const Navbar = () => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="px-[35px] fixed flex justify-between items-center w-[1300px] h-[50px] bg-slate-100 bg-opacity-20 backdrop-blur-lg mx-auto top-[61px] rounded-full border-2 border-white border-opacity-20 shadow-md">
          <img src="./src/assets/logo_gsis.svg" alt="" />
          <div className="flex gap-[50px] button-text text-primaryBlue">
            <a>Home</a>
            <a>About Us</a>
            <a>Ceremnony</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
