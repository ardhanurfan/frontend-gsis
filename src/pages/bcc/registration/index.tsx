import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";
import UploadFile from "../../../components/upload-file/upload-file";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWithAuth } from "../../../API/api";
import { NotifyStatus } from "../../../components/toast_pop_up/toast";
import { Toaster } from "react-hot-toast";

const RegisterBCC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [ktm, setKtm] = useState<File | null>(null);
  const [follow, setFollow] = useState<File | null>(null);
  const [poster, setPoster] = useState<File | null>(null);
  const [payment, setPayment] = useState<File | null>(null);
  const [stream, setStream] = useState("");

  const token = localStorage.getItem("access_token");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await postWithAuth(
        "register-bcc-user",
        {
          stream: stream,
          ktm_url: ktm,
          ss_follow_url: follow,
          ss_poster_url: poster,
          payment_url: payment,
        },
        token ?? ""
      );
      navigate("/bcc");
      NotifyStatus("Registration Successfully!", true);
    } catch (error) {
      const mess = error as any;
      NotifyStatus(mess.response.data.data.error, false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
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
              Ganesha International Collaborative Case Competition Registration
            </h1>
          </div>
          <div className="mx-10 lg:mx-20 mt-9 lg:mt-20 w-auto h-auto mb-10">
            <label htmlFor="stream" className=" text-primaryBlue field-text">
              Streams
            </label>
            <form className="mt-2" id="stream">
              <div className="select relative cursor-pointer button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto max-w-[214px] rounded-lg flex justify-around items-center shadow-lg shadow-blue-500">
                <select
                  className="small w-full bg-primaryBlue button-text text-white cursor-pointer outline-none shadow-none border-0 rounded-lg flex items-center justify-between"
                  name="select"
                  id="format"
                  defaultValue={""}
                  onChange={(val) => setStream(val.target.value)}
                >
                  <option
                    className="text-seccondaryBlue"
                    value={""}
                    selected
                    disabled
                  >
                    Choose Streams
                  </option>
                  <option value="TECHNOLOGY">Technology</option>
                  <option value="ART">Art</option>
                  <option value="BUSINESS">Business</option>
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
              <UploadFile
                childToParent={(e: File) => setKtm(e)}
                type={"image"}
              />
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
              <UploadFile
                childToParent={(e: File) => setFollow(e)}
                type={"image"}
              />
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
              <UploadFile
                childToParent={(e: File) => setPoster(e)}
                type={"image"}
              />
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
              <UploadFile
                childToParent={(e: File) => setPayment(e)}
                type={"image"}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue shadow-lg shadow-primaryBlue"
            >
              {loading && (
                <div className="flex justify-center items-center">
                  <img
                    className="mr-2"
                    src="assets/Loading.svg"
                    alt="spinner"
                  />
                  Loading
                </div>
              )}
              {!loading && "Submit"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterBCC;
