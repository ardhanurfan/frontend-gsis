import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";

const EditDocumentBCC = () => {
    return (
        <>
        <Navbar/>
        <div className="w-full px-[5.3472%] lg:px-[130px] pt-[130px] lg:pt-[200px] pb-[100px]">
            <h1 className="header1-mobile lg:header1 text-primaryText mb-7">
                Edit Document
            </h1>
            <div className="grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-x-[169px]">
                <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
                    <label className="header3-mobile self-start lg:header3 mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Student ID Card</label>        
                    <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
                    <UploadFile size=""/>
                </div>
                <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
                    <label className="header3-mobile self-start lg:header3 mb-[21px] lg:mb-[6px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Following GSIS Instagram</label>
                    <h3 className="header3 text-primaryText mb-3 lg:mb-[5px]">UPLOAD FILES</h3>
                    <UploadFile size=""/>
                </div>
                <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
                    <label className="header3-mobile self-start lg:header3 mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Poster Upload</label>
                    <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
                    <UploadFile size=""/>
                </div>
                <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
                    <label className="header3-mobile self-start lg:header3 mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Payment</label>
                    <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
                    <UploadFile size=""/>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => NotifyStatus("Succesfully Submitted", "Submit error", false)}
                    className="button-text mx-auto cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] mt-10"
                >
                    Submit
                </button>
                <Toaster/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default EditDocumentBCC;