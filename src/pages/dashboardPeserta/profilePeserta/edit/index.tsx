//EDIT PROFILE
import SelectComponent from "../../../../components/SelectComponent";
import Footer from "../../../../components/footer";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";

const EditProfile = () => {
  return (
    <>
      <NavbarDashboard></NavbarDashboard>
      <div className="w-full h-auto overflow-hidden">
        <div className="pt-[195px] w-[85vw] mx-auto">
          <h1 className="header1 text-center lg:text-start text-primaryBlue">
            Profile
          </h1>
          <div className="hidden lg:flex justify-end mt-[27px] lg:mt-0">
            <button className="button-text normal-button text-white bg-primaryBlue">
              Save
            </button>
          </div>
          <div className="clear-both flex flex-col gap-[30px] items-center lg:items-start lg:flex-row justify-between mt-[27px] mb-[67px]">
            <div className="picture-container items-center flex flex-col gap-6">
              <div className="bg-[url(../../../src/assets/placeholder_picture.svg)] h-[250px] w-[250px] rounded-full shrink-0"></div>
              <a href="/change-password" className="text-error hover:underline">
                Change Password
              </a>
            </div>
            <div className="flex justify-end w-[80vw] lg:hidden mx-auto mt-[15px] lg:mt-0">
              <button className="button-text-mobile small-button text-white bg-primaryBlue hover:bg-seccondaryBlue">
                Save
              </button>
            </div>
            <div className="h-[561px] lg:w-[908px] w-[80vw] bg-slate-100 bg-opacity-30 shadow-sm rounded-lg border-primaryBlue border-2 shadow-slate-700 flex flex-col gap-3 pt-[19px] px-[1.32%]">
              <div>
                <form action="">
                  <label
                    htmlFor="name"
                    className="header3 text-primaryBlue block mb-[5px]"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2"
                  />
                </form>
              </div>
              <div className="flex flex-col gap-[5px]">
                <form action="">
                  <label
                    htmlFor="number"
                    className="header3 text-primaryBlue block mb-[5px]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    placeholder="Enter phone number"
                    className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2"
                  />
                </form>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">University</h3>
                <div className="relative h-auto w-[100%] lg:w-1/2 rounded-lg">
                  <SelectComponent
                    placeholder="Select your university"
                    type={"University"}
                    value={undefined}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="relative h-auto w-[100%] lg:w-1/2 rounded-lg">
                  <form action="">
                    <label
                      htmlFor="major"
                      className="header3 text-primaryBlue block mb-[5px]"
                    >
                      Major
                    </label>
                    <input
                      type="text"
                      id="major"
                      placeholder="Enter your major"
                      className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-full"
                    />
                  </form>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">Year</h3>
                <div className="relative h-auto w-[75%] lg:w-[37.5%] rounded-lg">
                  <SelectComponent
                    placeholder="Select year"
                    type={"Year"}
                    value={undefined}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default EditProfile;
