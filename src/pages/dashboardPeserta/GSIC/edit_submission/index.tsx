import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Footer from "../../../../components/footer";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import { getWithAuth, postWithAuth } from "../../../../API/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";

const EditSubmissionGSIC = () => {
  const [filePdf, setFilePdf] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [urlDoc, setUrlDoc] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const editData = async () => {
    setLoading(true);
    if (token) {
      try {
        if (urlDoc == "") {
          const response = await postWithAuth(
            "gsic-submission",
            {
              url: filePdf,
              round: 1,
            },
            token
          );
          console.log(response);
          navigate("/dashboard-gsic");
          NotifyStatus("Submit Submission Successfully!", true);
        } else {
          const response = await postWithAuth(
            "edit-gsic-submission",
            {
              url: filePdf,
              round: 1,
            },
            token
          );
          console.log(response);
          navigate("/dashboard-gsic");
          NotifyStatus("Edit Submission Successfully!", true);
        }
      } catch (error) {
        const mess = error as any;
        NotifyStatus(mess.response.data.data.error, false);
      } finally {
        setLoading(false);
      }
    }
  };

  const getData = async () => {
    if (token) {
      try {
        const response = await getWithAuth("gsic-myteam", token);
        console.log(response);
        setUrlDoc(response?.data?.data.submissions[0].url);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Toaster />
      <NavbarDashboard />
      <div className="w-full px-[5.3472%] lg:px-[70px] pt-[130px] pb-[100px]">
        <div className="w-[90%] max-w-[882px] mx-auto pt-[14px] flex flex-col justify-center">
          <h3 className="header1-mobile lg:header1 text-primaryText self-center mb-3">
            UPLOAD FILES
          </h3>
          <UploadFile
            childToParent={(e: File) => setFilePdf(e)}
            type={"file"}
            value={urlDoc}
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

export default EditSubmissionGSIC;
