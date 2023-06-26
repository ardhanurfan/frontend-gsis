import toast, { Toast, Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer";
import PopUp from "../../../../components/dashboard_peserta/bcc/toast";
import ContactList from "../../../../components/contact_list";

const EditSubmissionGSIC = () => {
    const notifyStatus = (t: Toast) => toast.custom(<PopUp t={t} status={true} text_success='Successfully submitted!' text_error="Submit error!"/> , {duration: 250});
    
    return(
        <>
        <Navbar/>
        <div className="w-full px-[5.3472%] lg:px-[70px] pt-[130px] lg:pt-[268px] pb-[100px]">
            <div className="w-[90%] max-w-[882px] mx-auto pt-[14px] flex flex-col justify-center">
                <h3 className="header1-mobile lg:header1 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                <UploadFile size="lg"/>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={notifyStatus as any}
                    className="button-text mx-auto cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] mt-10"
                >
                    Submit
                </button>
                <Toaster/>
            </div>
            <div className="flex flex-col items-center mt-14 mb-[30px]">
                <h2 className="header2-mobile lg:header2 text-primaryText text-center mb-9">
                    If you're having trouble, please contact
                </h2>
                <ContactList />
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default EditSubmissionGSIC;