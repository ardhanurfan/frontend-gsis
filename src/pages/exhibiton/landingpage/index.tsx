import "./style.css";
import Navbar from "../../../components/navbar/Navbar";
import ModalNotLogin from "../../../components/modalNotLogin/modalNotLogin";
import Footer from "../../../components/footer";
import ContactList from "../../../components/contact_list";

const Exhibition = () => {

  function goToRegistration(){
    window.open("/register-exhibition", "_blank");
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-cover bg-[url(./assets/Background_Exhibition.svg)]">
        <div className="pt-[200px] w-[1159px] mx-auto text-center">
          <h1 className="w-auto header1 text-primaryText">
              EXHIBITION
          </h1>
        </div>
        <div className="w-auto h-auto mx-auto pt-5">
          <div className="w-[1246px] h-[575px] lg:h-[615px] bg-slate-100 mt-[52px] mx-auto rounded-xl shadow-lg shadow-blue-800 bg-opacity-30 overflow-auto lg:overflow-visible">
            <div className="h-auto w-[38px] flex justify-between float-left m-[3%]">
              <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <div className="w-[1149px] h-auto flex">
              <div className="relative w-auto mx-10 flex justify-center items-center">
                <div className="">
                  <button
                    type="button"
                    className="bg-primaryBlue w-[24px] h-[24px] rounded-md flex justify-center items-center">
                    <img
                      className=""
                      src="../src/assets/left_white.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="flex items-center justify-center rounded-lg m-10">
                  <div className="object-cover w-[400px] h-[300px] rounded-lg">
                    <img
                      className="object-cover w-[400px] h-[300px] rounded-lg"
                      src="../src/assets/placeholder_picture.svg"
                      alt="Business"
                    />
                  </div>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="bg-primaryBlue w-[24px] h-[24px] rounded-md flex justify-center items-center">
                    <img
                      className=""
                      src="../src/assets/right_white.svg"
                      alt="Business"
                    />
                  </button>
                </div>
              </div>
              <div className="w-[578px] h-[415px] text-justify body-text text-primaryText">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1 text-primaryText">Timeline</h1>
            </div>
            <div className="w-[1246px] h-[575px] lg:h-[615px] bg-slate-100 mt-[52px] mx-auto rounded-xl shadow-lg shadow-blue-800 bg-opacity-30 overflow-auto lg:overflow-visible">
              <div className="h-auto w-[38px] flex justify-between float-left m-[3%]">
                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto mt-20">
            disini tempat naro business, text curator dll
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1 text-primaryText">Submit Here</h1>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button
                  type="button"
                  className="cursor-pointer button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
                  onClick={goToRegistration}
                >
                  Register Here
                </button>
              </div>
          </div>
          <div className="mt-28 pb-20">
            <h1 className="header1-mobile lg:header1 pb-10 text-primaryBlue text-center">Contact Person</h1>
            <ContactList/>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Exhibition; 
