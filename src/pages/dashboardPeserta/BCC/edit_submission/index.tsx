import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Footer from "../../../../components/footer";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import ContactList from "../../../../components/contact_list";
import { useState } from "react";
import { postWithAuth } from "../../../../API/api";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";

const EditSubmissionBCC = () => {
  const[filePdf,setFilePdf] = useState<File | null>(null);
  const[loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const editData = async () => {
    setLoading(true);
    if(token){
      try {
        const response = await postWithAuth(
          "bcc-user-submission",
          {
            papper_url: filePdf,
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
      <div className="w-full px-[5.3472%] lg:px-[70px] pt-[130px] pb-[100px]">
        <div className="w-[90%] max-w-[882px] mx-auto pt-[14px] flex flex-col justify-center">
          <h3 className="header1-mobile lg:header1 text-primaryText self-center mb-3">
            UPLOAD FILES
          </h3>
          <UploadFile childToParent={(e:File) => {setFilePdf(e)}} type={"file"} />
        </div>
        <div className="flex justify-center mt-10">
          <button
              disabled={loading}
              onClick={editData}
              className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue shadow-lg shadow-primaryBlue"
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
        <div className="flex flex-col items-center mt-14 mb-[30px]">
          <h2 className="header2-mobile lg:header2 text-primaryText text-center mb-9">
            If you're having trouble, please contact
          </h2>
          <ContactList line="" wa=""/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditSubmissionBCC;
