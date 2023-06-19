import "./style.css";
import Navbar from "../../components/navbar/Navbar";
import ModalNotLogin from "../../components/modalNotLogin/modalNotLogin";
import Footer from "../../components/footer";

const Exhibition = () => {
  return (
    <>
      <Navbar />
      <ModalNotLogin />
      <div className="w-full h-auto bg-cover bg-[url(./assets/Background_Exhibition.svg)]">
        <div className="pt-[221px] w-[1159px] mx-auto text-center">
          <h1 className="w-auto header1 text-primaryText">
            EXHIBITION
          </h1>
        </div>
        <div className="w-auto h-auto mx-auto pt-5">
          <div className="w-[1246px] h-[575px] lg:h-[615px] bg-slate-100 mt-[52px] mx-auto rounded-xl shadow-blue-800 bg-opacity-30 overflow-auto lg:overflow-visible">
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
                      alt="Creation"
                    />
                  </button>
                </div>
                <div className="flex items-center justify-center rounded-lg m-10">
                  <div className="object-cover w-[400px] h-[300px] rounded-lg">
                    <img
                      className="object-cover w-[400px] h-[300px] rounded-lg"
                      src="../src/assets/placeholder_picture.svg"
                      alt="Creation"
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
                      alt="Creation"
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

        <div className="absolute top-0 bottom-0 left-0 right-0">
          <div>
            <span></span>
              <img
                className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] pt-[10.25%] float-left"
                src="../src/assets/Timeline1.svg"
                alt="p"
              />
              <h3 className="pt-[18%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue">
                PRE-EVENT
              </h3>
              <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue mr-[7.923%]">
                NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                EVENT
              </h3>
          </div>
          <div>
            <img
              className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
              src="../src/assets/Timeline2.svg"
              alt="p"
            />
            <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen text-right">
              PRE-EVENT
            </h3>
            <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen ml-[7.923%] text-right">
              NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
              EVENT
            </h3>
          </div>
          <div>
            <img
              className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] -mt-[3.12%] float-left"
              src="../src/assets/Timeline3.svg"
              alt="p"
            />
            <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange">
              PRE-EVENT
            </h3>
            <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange mr-[7.923%]">
              NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
              EVENT
            </h3>
          </div>
          <div>
            <img
              className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
              src="../src/assets/Timeline4.svg"
              alt="p"
            />
            <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow text-right">
              PRE-EVENT
            </h3>
            <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow ml-[7.923%] text-right">
              NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
              EVENT
            </h3>
          </div>
        </div>

        <div className="w-auto h-auto mt-25 sm: justify-evenly sm:flex-wrap">
            <div className="w-auto h-auto flex justify-center mt-25">
              <div className="mt-10 flex items-center justify-center space-x-25">
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      className=""
                      src="../src/assets/exhibition_technology.svg"
                      alt="Technology"
                    />
                  </div>
                <div className="flex items-center w-[357.19px] h-[357.19px] justify-center">
                  <div className="flex items-center h-[357.19px] justify-center">
                    <img
                      className=""
                      src="../src/assets/bcc_stream_currator.svg"
                      alt="textCurrator"
                    />
                  </div>
                </div>
                <div className="w-[382px] h-[382px]">
                  <div className="flex items-center justify-center h-[382px]">
                    <img
                      className=""
                      src="../src/assets/exhibition_business.svg"
                      alt="Business"
                    />
                  </div>
                </div>
              </div>
        </div>
        
        <div className="w-auto h-auto mt-25">
          <div className="text-center">
              <h1 className="w-auto header1 text-primaryText">Submit Here</h1>
          </div>
          <div className="flex justify-center items-center mt-10">
                <button
                  type="button"
                  className="cursor-pointer button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500">
                  Submit
                </button>
          </div>
        </div>

        <div className="w-auto h-auto mt-25">
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
                  whatsapp
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

export default Exhibition; 
