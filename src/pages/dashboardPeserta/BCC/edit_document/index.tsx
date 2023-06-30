import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Footer from "../../../../components/footer";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import { postWithAuth } from "../../../../API/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditDocumentBCC = () => {
  const[ktm,setKtm] = useState<File | null>(null);
  const[follow,setFollow] = useState<File | null>(null);
  const[poster,setPoster] = useState<File | null>(null);
  const[payment,setPayment] = useState<File | null>(null);
  const[loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const editData = async () => {
    setLoading(true);
    if(token){
      try {
        const response = await postWithAuth(
          "edit-bcc-user",
          {
            ktm_url: ktm,
            ss_follow_url:follow,
            ss_poster_url:poster,
            payment_url:payment,
          },
          token
          );
          console.log(response);
          navigate("/dashboard-bcc");
          NotifyStatus("Edit Successfully!", true);
        } catch (error) {
          const mess = error as any;
          NotifyStatus(mess.response.data.data.error, false);
        }finally{
          setLoading(false);
        }
      }
    };
  return (
    <>
      <Toaster/>
      <NavbarDashboard />
      <div className="w-full px-[5.3472%] lg:px-[130px] pt-[130px] pb-[100px]">
        <h1 className="header1-mobile lg:header1 text-primaryText mb-7">
          Edit Document
        </h1>
        <div className="grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-x-[169px]">
          <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
            <label
              className="header3-mobile self-start lg:header3 mb-[21px] text-primaryBlue"
              htmlFor=""
            >
              Student ID Card
            </label>
            <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
            <UploadFile childToParent={(e:File) => {setKtm(e)}} type={""}  />
          </div>
          <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
            <label
              className="header3-mobile self-start lg:header3 mb-[21px] lg:mb-[6px] text-primaryBlue"
              htmlFor=""
            >
              Proof of Following GSIS Instagram
            </label>
            <h3 className="header3 text-primaryText mb-3 lg:mb-[5px]">
              UPLOAD FILES
            </h3>
            <UploadFile childToParent={(e:File) => {setFollow(e)}} type={""} />
          </div>
          <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
            <label
              className="header3-mobile self-start lg:header3 mb-[21px] text-primaryBlue"
              htmlFor=""
            >
              Proof of Poster Upload
            </label>
            <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
            <UploadFile childToParent={(e:File) => {setPoster(e)}} type={""} />
          </div>
          <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
            <label
              className="header3-mobile self-start lg:header3 mb-[21px] text-primaryBlue"
              htmlFor=""
            >
              Proof of Payment
            </label>
            <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
            <UploadFile childToParent={(e:File) => {setPayment(e)}} type={""} />
          </div>
        </div>
        <div className="flex justify-center">
          <button
              disabled={loading}
              onClick={editData}
              className="mt-5 mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue shadow-lg shadow-primaryBlue"
            >
              {loading && (
                <div className="flex justify-center items-center">
                  <img
                    className="mr-2"
                    src="../src/assets/Loading.svg"
                    alt="spinner"
                  />
                  Loading
                </div>
              )}
              {!loading && "Submit"}
            </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditDocumentBCC;
