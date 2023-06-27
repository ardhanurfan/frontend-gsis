import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";

const EditTeamGSIC = () => {
    return (
        <>
        <Navbar/>
        <div className="w-full px-[70px] pt-[200px] pb-[100px]">
            <h1 className="header1 text-primaryText mb-7">
                Registration Document
            </h1>
            <div className="flex flex-col gap-[106px]">
                <div className="flex flex-col">
                    <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                        <h3 className="header3 text-primaryBlue">Team Leader</h3>
                        <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Student ID Card</label>
                        <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                        <UploadFile size=""/>
                    </div>
                    <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                        <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Poster Upload</label>
                        <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                        <UploadFile size=""/>
                    </div>
                    <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                        <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Followinng Instagram</label>
                        <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                        <UploadFile size=""/>
                    </div>
                </div>
                <div className="flex gap-12 ">
                    <div className="flex flex-col mx-auto">
                        <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                            <h3 className="header3 text-primaryBlue">First Member</h3>
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Student ID Card</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Poster Upload</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Followinng Instagram</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                            <h3 className="header3 text-primaryBlue">Second Member</h3>
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Student ID Card</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Poster Upload</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                        <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
                            <label className="button-text mb-[21px] text-primaryBlue after:content-['*'] after:text-error after:ml-0.5" htmlFor="">Proof of Followinng Instagram</label>
                            <h3 className="header3 text-primaryText self-center mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                    </div>
                </div>
                <div className="w-96 mx-auto pt-[14px] flex flex-col justify-center">
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
        </div>
        <Footer/>
        </>
    )
}

export default EditTeamGSIC;