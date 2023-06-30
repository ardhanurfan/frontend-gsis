import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";
import UploadFile from "../../../components/upload-file/upload-file";
import { useState } from "react";

const RegisterBCC = () => {
  const [type, setType] = useState("")
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar />
      <div className="w-full h-auto">
        <div className="relative w-[90%] max-w-[1300px] h-auto bg-slate-100 mt-[130px] mb-[50px] mx-auto rounded-xl shadow-lg shadow-blue-800 bg-opacity-30 overflow-auto lg:overflow-visible">
          <div className="h-auto w-[38px] flex justify-between absolute m-[4%] lg:m-[2%]">
            <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
          </div>
          <div className="pt-[50px] lg:pt-[100px] max-w-[1159px] mx-auto text-center">
            <h1 className="w-auto header1-mobile lg:header1 text-primaryText">
              Ganesha International Bussiness Case Competition (GIBCC) Registration
            </h1>
          </div>
          <div className="mx-10 lg:mx-20 mt-9 lg:mt-20 w-auto h-auto mb-10">
            <label htmlFor="stream" className=" text-primaryBlue field-text">Streams</label>
            <form className="mt-2" id="stream">
              <div className="select relative cursor-pointer button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto max-w-[214px] rounded-lg flex justify-around items-center shadow-lg shadow-blue-500">
                <select
                  className="small w-full bg-primaryBlue button-text text-white cursor-pointer outline-none shadow-none border-0 rounded-lg flex items-center justify-between"
                  name="select"
                  id="format"
                  defaultValue={""}
                  // onChange={(val) => setType("stream")}
                  // value={""}
                >
                  <option
                    className="text-seccondaryBlue"
                    value={""}
                    selected
                    disabled
                  >
                    Choose Streams
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Art">Art</option>
                  <option value="Business">Business</option>
                </select>
              </div>
            </form>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px] mx-3">
            <div className="w-[90%] max-w-[500px] mx-auto pt-[14px] flex flex-col items-center justify-center">
              <label
                className="header3-mobile self-start lg:header3 mb-[21px] lg:mb-[6px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                htmlFor=""
              >
                Student ID Card
              </label>
              <h3 className="header3 text-primaryText mb-3 lg:mb-[5px]">
                UPLOAD FILES
              </h3>
              <UploadFile childToParent={undefined} type={""} />
            </div>
            <div className="w-[90%] max-w-[500px] mx-auto pt-[14px] flex flex-col items-center justify-center">
              <label
                className="header3-mobile self-start lg:header3 mb-[21px] lg:mb-[6px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                htmlFor=""
              >
                Proof of Following GSIS Instagram
              </label>
              <h3 className="header3 text-primaryText mb-3 lg:mb-[5px]">
                UPLOAD FILES
              </h3>
              <UploadFile childToParent={undefined} type={""} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px] mt-[50px] mx-3">
            <div className="w-[90%] max-w-[500px] mx-auto pt-[14px] flex flex-col items-center justify-center">
              <label
                className="header3-mobile self-start lg:header3 mb-[21px] lg:mb-[6px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                htmlFor=""
              >
                Proof of Poster Upload
              </label>
              <h3 className="header3 text-primaryText mb-3 lg:mb-[5px]">
                UPLOAD FILES
              </h3>
              <UploadFile childToParent={undefined} type={""} />
            </div>
            <div className="w-[90%] max-w-[500px] mx-auto pt-[14px] flex flex-col items-center justify-center">
              <label
                className="header3-mobile self-start lg:header3 mb-[21px] lg:mb-[6px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                htmlFor=""
              >
                Proof of Payment
              </label>
              <h3 className="header3 text-primaryText mb-3 lg:mb-[5px]">
                UPLOAD FILES
              </h3>
              <UploadFile childToParent={undefined} type={""} />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              type="button"
              className="cursor-pointer mb-12 button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
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
