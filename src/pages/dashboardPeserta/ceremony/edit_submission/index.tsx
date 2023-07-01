import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Footer from "../../../../components/footer";
import ContactList from "../../../../components/contact_list";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import { useState } from "react";
import { postWithAuth } from "../../../../API/api";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";

const EditSubmissionCer = () => {
  const [ssPoster, setSSPoster] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const editData = async () => {
    setLoading(true);
    if (token) {
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
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Toaster />
      <NavbarDashboard />
      <div className="w-full px-[5.3472%] lg:px-[70px] pt-[130px] pb-[100px]">
        <h1 className="header1-mobile lg:header1 text-center text-primaryText mb-7">
          Edit Poster
        </h1>
        <div className="w-[90%] max-w-[882px] mx-auto pt-[14px] flex flex-col justify-center">
          <h3 className="header2-mobile lg:header2 text-primaryText self-center mb-3">
            UPLOAD FILES
          </h3>
          <UploadFile
            childToParent={(e: File) => {
              setSSPoster(e);
            }}
            type={"image"}
          />
        </div>
        <div className="flex justify-center">
          <button
            disabled={loading}
            onClick={editData}
            className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue shadow-lg shadow-primaryBlue"
          >
            {loading && (
              <div className="flex justify-center items-center">
                <img className="mr-2" src="assets/Loading.svg" alt="spinner" />
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

export default EditSubmissionCer;
