const NavbarDA = () => {
  return (
    <>
      <div className="relative z-10 flex justify-center">
        <div className="px-[35px] fixed flex justify-between items-center w-[1300px] h-[50px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto top-[40px] rounded-full border-2 border-white border-opacity-20 shadow-md">
          <img src="./src/assets/logo_gsis.svg" alt="" />
          <div className="flex gap-[50px] button-text text-primaryBlue">
            <a className="cursor-pointer hover:text-seccondaryBlue">Dashboard</a>
            <a className="cursor-pointer hover:text-seccondaryBlue">BCC</a>
            <a className="cursor-pointer hover:text-seccondaryBlue">Ceremony</a>
            <a className="cursor-pointer hover:text-seccondaryBlue" href="">
              Exhibition
            </a>
            <a className="cursor-pointer hover:text-seccondaryBlue" href="">
              GSIC
            </a>
            <a className="cursor-pointer hover:text-seccondaryBlue" href="">
              FAQ
            </a>
            <div className="bg-primaryBlue text-white w-[100px] rounded-xl px-2 py-1 flex justify-between items-center">
              <img src="../src/assets/VectorAdminProfile.svg" className="w-[23px] h-[26px] p-1" alt="" />
              <a className="cursor-pointer hover:text-seccondaryBlue" href="">
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDA;
