import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer";
import ContactList from "../../../../components/contact_list";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";

const EditDocumentGSIC = () => {
    return (
        <>
        <Navbar/>
        <div className="w-full px-[5.3472%] lg:px-[130px] pt-[130px] lg:pt-[200px] pb-[100px]">
            <h1 className="header1-mobile lg:header1 text-primaryText mb-7">
                Registration Document
            </h1>
            <div className="flex flex-col gap-[106px]">
                <div className="flex flex-col">
                    <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                        <h3 className="header3 text-primaryBlue">Team Leader</h3>
                        <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Student ID Card</label>
                        <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                        <UploadFile size=""/>
                    </div>
                    <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                        <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Poster Upload</label>
                        <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                        <UploadFile size=""/>
                    </div>
                    <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                        <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Following Instagram</label>
                        <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                        <UploadFile size=""/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[106px] lg:gap-12 ">
                    <div className="flex flex-col w-full mx-auto">
                        <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                            <h3 className="header3 text-primaryBlue">First Member</h3>
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Student ID Card</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Poster Upload</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Following Instagram</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mx-auto">
                        <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                            <h3 className="header3 text-primaryBlue">Second Member</h3>
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Student ID Card</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Poster Upload</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Following Instagram</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                    </div>
                </div>
                <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                    <h3 className="header3 mb-[21px] text-primaryBlue">Payment Proof</h3>
                    <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
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

export default EditDocumentGSIC;