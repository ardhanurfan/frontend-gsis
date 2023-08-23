import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Footer from "../../../../components/footer";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import { useEffect, useState } from "react";
import { getWithAuth, postWithAuth } from "../../../../API/api";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";

const EditSubmissionBCC = () => {
  const [filePdf, setFilePdf] = useState<File | null>(null);
  const [fileUrl, setfileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");
  const getData = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const response = await getWithAuth("bcc-user?user_id=" + id, token);
        var data = response.data.data;
        setfileUrl(data.papper_url);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const editData = async () => {
    setLoading(true);
    if (token) {
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
        <div className="w-[90%] max-w-[882px] mx-auto pt-[14px] flex flex-col justify-center">
          <h3 className="header1-mobile lg:header1 text-primaryText self-center mb-3">
            UPLOAD FILES
          </h3>
          <UploadFile
            childToParent={(e: File) => {
              setFilePdf(e);
            }}
            type={"file"}
            value={fileUrl}
          />
        </div>
        <div className="flex justify-center mt-10">
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

export default EditSubmissionBCC;
