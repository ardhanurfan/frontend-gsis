import "./style.css";
import { Carousel } from "flowbite-react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";

const BCC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-cover bg-[url(./assets/Background_BCC.svg)]">
        <div className="pt-[200px] w-[1159px] mx-auto text-center">
          <h1 className="w-auto header1 text-primaryText">
            Ganesha International Bussiness Case Competition (GIBCC)
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
              <div className="w-[497px] mx-10">
                <p>Foto</p>
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
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1 text-primaryText">Streams</h1>
            </div>
            <div className="w-auto h-auto flex justify-center mt-20">
              <div className="mt-10 flex items-center justify-center space-x-20">
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      className=""
                      src="../src/assets/bcc_stream_technology.svg"
                      alt="Technology"
                    />
                  </div>
                  <div>
                    <h3 className="text-center text-primaryBlue header3">
                      Technology
                    </h3>
                  </div>
                </div>
                <div className="w-[158px] h-[180px]">
                  <div className="flex items-center h-[150px] justify-center">
                    <img
                      className=""
                      src="../src/assets/bcc_stream_business.svg"
                      alt="Business"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-center text-primaryBlue header3">
                      Business
                    </h3>
                  </div>
                </div>
                <div className="w-[158px] h-[180px]">
                  <div className="flex items-center justify-center h-[130px]">
                    <img
                      className=""
                      src="../src/assets/bcc_stream_art.svg"
                      alt="Art"
                    />
                  </div>
                  <div className="mt-7">
                    <h3 className="text-center text-primaryBlue header3">
                      Art
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1 text-primaryText">Stages</h1>
            </div>
            <div className="w-auto h-auto flex space-x-10 justify-center mt-20">
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className=""
                    src="../src/assets/bcc_stages_blue.svg"
                    alt="Business Stream"
                  />
                </div>
                <div>
                  <h3 className="text-center text-primaryBlue header3">
                    Phase 1
                  </h3>
                </div>
              </div>
              <div className="flex w-[100px] h-[120px] items-center justify-center">
                <img
                  className=""
                  src="../src/assets/bcc_stages_separator.svg"
                  alt="Business Stream"
                />
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className=""
                    src="../src/assets/bcc_stages_yellow.svg"
                    alt="Business Stream"
                  />
                </div>
                <div>
                  <h3 className="text-center text-primaryBlue header3">
                    Phase 1
                  </h3>
                </div>
              </div>
              <div className="flex w-[100px] h-[120px] items-center justify-center">
                <img
                  className=""
                  src="../src/assets/bcc_stages_separator.svg"
                  alt="Business Stream"
                />
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className=""
                    src="../src/assets/bcc_stages_orange.svg"
                    alt="Business Stream"
                  />
                </div>
                <div>
                  <h3 className="text-center text-primaryBlue header3">
                    Phase 1
                  </h3>
                </div>
              </div>
              <div className="flex w-[100px] h-[120px] items-center justify-center">
                <img
                  className=""
                  src="../src/assets/bcc_stages_separator.svg"
                  alt="Business Stream"
                />
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className=""
                    src="../src/assets/bcc_stages_green.svg"
                    alt="Business Stream"
                  />
                </div>
                <div>
                  <h3 className="text-center text-primaryBlue header3">
                    Phase 1
                  </h3>
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
          <div className="w-auto h-auto mt-20 items-center justify-center flex">
            <div>
              <img
                className=""
                src="../src/assets/bcc_arrow_left.svg"
                alt="Arrow"
              />
            </div>
            <div>
              <div className="text-center w-[714px]">
                <h1 className="w-auto header1 text-primaryText">
                  Are You Ready To Be The Next Winner?
                </h1>
                <p className="body-text text-error">
                  *To particiapte in any event, first you must create an account
                </p>
              </div>
              <div className="flex justify-center items-center mt-10">
                <button
                  type="button"
                  className="cursor-pointer button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
                >
                  Register Here
                </button>
              </div>
            </div>
            <img
              className=""
              src="../src/assets/bcc_arrow_right.svg"
              alt="Arrow"
            />
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1 text-primaryText">
                Contact Person
              </h1>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <div>
                <div className="flex items-center justify-center">
                  <img className="" src="../src/assets/line.svg" alt="Line" />
                </div>
                <div>
                  <p className="text-center text-primaryBlue body-text">
                    idline
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className=""
                    src="../src/assets/whatsapp.svg"
                    alt="Line"
                  />
                </div>
                <div>
                  <p className="text-center text-primaryBlue body-text">
                    idline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BCC;
