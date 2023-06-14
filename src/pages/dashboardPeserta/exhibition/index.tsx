const DashboardExhibition = () => {
  return (
    <>
      <div className="w-full px-[70px] pt-[200px] pb-[100px]">
        <h1 className="header1 text-primaryText mb-7">
          Participant Exhibition Information
        </h1>
        <div className="w-full rounded-[10px] px-9 pt-[30px] pb-[72px] border border-primaryBlue">
          <div className="w-full flex justify-between mb-[26px]">
            <h2 className="header3 text-primaryText">Work</h2>
            <a
              className="cursor-pointer bg-success hover:bg-primaryGreen text-white w-auto rounded px-[21px] py-[6px] flex justify-around items-center"
              href=""
            >
              Edit
            </a>
          </div>
          <div className="w-full flex justify-between mb-3">
            <div className="flex gap-[100px]">
              <div>
                <h3 className="body-text text-primaryText">Category</h3>
                <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                  Masterpiece
                </p>
              </div>
              <div>
                <h3 className="body-text text-primaryText">Year Created</h3>
                <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                  2023
                </p>
              </div>
              <div>
                <h3 className="body-text text-primaryText">Size</h3>
                <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                  1028x1960
                </p>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <a
                className="cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded px-[21px] py-[6px] flex justify-around items-center"
                href=""
              >
                Photo
              </a>
              <a
                className="cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded px-[21px] py-[6px] flex justify-around items-center"
                href=""
              >
                Video
              </a>
            </div>
          </div>
          <div>
            <h3 className="body-text text-primaryText">Description</h3>
            <p className=" text-seccondaryBlue font-monserrat text-[12px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="header2 text-primaryText mb-[34px]">
          If you’re having trouble, please contact
        </h2>
        <div className="header2 mb-[100px]">LIST CONTACT</div>
      </div>
    </>
  );
};

export default DashboardExhibition;
