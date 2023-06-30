import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer";
import ContactList from "../../../../components/contact_list";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import { useState } from "react";
import { postWithAuth } from "../../../../API/api";
import { useNavigate } from "react-router-dom";

const EditSubmissionCer = () => {
  const [ssPoster,setSSPoster] = useState<File | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const editData = async () => {
    if(token){
      try {
        console.log(ssPoster);
        const response = await postWithAuth(
          "edit-ceremony-user",
          {
            ss_poster_url: ssPoster,
          },
          token
        );
        console.log(response);
        navigate("/dashboard-ceremony");
        NotifyStatus("Edit Successfully!", true);
      } catch (error) {
        const mess = error as any;
        NotifyStatus(mess.response.data.data.error, false);
      }
    }
  };

  return (
    <>
      <Toaster/>
      <Navbar />
      <div className="w-full px-[5.3472%] lg:px-[70px] pt-[130px] pb-[100px]">
        <h1 className="header1-mobile lg:header1 text-center text-primaryText mb-7">
          Edit Poster
        </h1>
        <div className="w-[90%] max-w-[882px] mx-auto pt-[14px] flex flex-col justify-center">
          <h3 className="header2-mobile lg:header2 text-primaryText self-center mb-3">
            UPLOAD FILES
          </h3>
          <UploadFile childToParent={undefined} type={""} />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {editData();NotifyStatus("Succesfully Submitted", true)}}
            className="button-text mx-auto cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] mt-10"
          >
            Submit
          </button>
          <Toaster />
        </div>
        <div className="flex flex-col items-center mt-14 mb-[30px]">
          <h2 className="header2-mobile lg:header2 text-primaryText text-center mb-9">
            If you're having trouble, please contact
          </h2>
          <ContactList line={""} wa={""} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditSubmissionCer;
