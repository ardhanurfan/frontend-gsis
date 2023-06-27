import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import ContactList from "../../../../components/contact_list";


const EditSubmissionBCC = () => {
    
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
                    onClick={()=> NotifyStatus("Succesfully Submitted", "Submit error", false)}
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

export default EditSubmissionBCC;