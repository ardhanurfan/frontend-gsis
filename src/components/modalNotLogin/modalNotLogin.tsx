const ModalNotLogin = () => {
  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-primaryBlue z-10 top-0 opacity-40"></div>
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 w-[1200px] h-[600px] bg-white rounded-lg justify-center items-center shadow-xl shadow-blue-500">
          <div className="flex justify-end">
            <button className="px-2 m-4">
              <img className="" src="assets/x_solid.svg" alt="" />
            </button>
          </div>
          <div className="">
            <div className="flex justify-center mt-20">
              <img className="" src="assets/profile.svg" alt="" />
            </div>
            <div className="flex items-center justify-center">
              <h2 className="header2 text-primaryBlue">
                You have not login yet
              </h2>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button
                type="button"
                className="cursor-pointer button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-[150px] rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNotLogin;
