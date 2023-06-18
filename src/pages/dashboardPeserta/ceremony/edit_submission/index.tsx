import toast, { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer";

const EditSubmissionCer = () => {
    const notifySuccess = () => toast.success("Succesfully submitted");
    const notifyFailed = () => toast.error("Failed to Submit");

    return(
        <>
        <Navbar/>
        <div className="w-full px-[70px] pt-[200px] pb-[100px]">
            <h1 className="header1 text-primaryText mb-7">
                Edit Document
            </h1>
            <div className="w-96 mx-auto pt-[14px] flex flex-col items-center justify-center">
              <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
              <UploadFile/>
              <button
                    onClick={notifySuccess}
                    className="button-text cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center mt-10"
              >
                Submit
              </button>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default EditSubmissionCer;