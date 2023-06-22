import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";
import UploadFile from "../../../components/upload-file/upload-file";
import { useState } from "react";

const RegisterBCC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar />
      <div className="w-auto h-auto">
        <div className="w-[1300px] h-auto bg-slate-100 mt-[140px] mb-[50px] mx-auto rounded-xl shadow-lg shadow-blue-800 bg-opacity-30 overflow-auto lg:overflow-visible">
          <div className="h-auto w-[38px] flex justify-between float-left m-[3%]">
            <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
          </div>
          <div className="pt-[100px] w-[1159px] mx-auto text-center">
            <h1 className="w-auto header1 text-primaryText">
              Ganesha International Bussiness Case Competition (GIBCC)
              Registration
            </h1>
          </div>
          <div className="mx-20 mt-20 w-auto h-auto mb-10">
            <form className="">
              <div className="mb-2">
                <label className=" text-primaryBlue field-text">Streams</label>
              </div>
              <button
                onClick={toggleDropdown}
                className="cursor-pointer button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
                type="button"
              >
                Dropdown button{" "}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center space-x-36">
            <div className="w-[500px] h-[309px]">
              <div className="mb-2">
                <label className=" text-primaryBlue field-text">Student ID Card</label>
              </div>
              <UploadFile />
            </div>
            <div className="w-[500px] h-[309px]">
              <div className="mb-2">
                <label className=" text-primaryBlue field-text">Proof of Following GSIS Instagram</label>
              </div>
              <UploadFile />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-36">
            <div className="w-[500px] h-[309px]">
              <div className="mb-2">
                <label className=" text-primaryBlue field-text">Student ID Card</label>
              </div>
              <UploadFile />
            </div>
            <div className="w-[500px] h-[309px]">
              <div className="mb-2">
                <label className=" text-primaryBlue field-text">Proof of Following GSIS Instagram</label>
              </div>
              <UploadFile />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <button
              type="button"
              className="cursor-pointer mb-20 button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
            >
              Register Here
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterBCC;
