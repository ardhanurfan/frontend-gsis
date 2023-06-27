import Footer from "../../../../components/footer";
import Navbar from "../../../../components/navbar/Navbar";

import UploadFile from "../../../../components/upload-file/upload-file";
import { Toast, Toaster, toast } from "react-hot-toast";
import { To } from "react-router-dom";
import PopUp from "../../../../components/dashboard_peserta/bcc/toast";
import { useState } from "react";
import SelectComponent from "../../../../components/dashboard_peserta/profile";


const CreateTeamBCC = () => {

    const notifyStatus = (t: Toast) => toast.custom(<PopUp t={t} status={true} text_success='Successfully submitted!' text_error="Submit error!"/> , {duration: 250});
    // const notifyFailed = () => toast.error("Failed to Submit");

    // const [popup, setPopUp] = useState(<div></div>);

    // const kotol = (memek: any)=>{
    //     setPopUp(<PopUp/>)
    // }
    return(
        <>
        <Navbar/>
        <div className="pt-[117px] lg:pt-[247px]">
            <h1 className="text-primaryBlue header1-mobile lg:header1 text-center ">
                Create Your Team
            </h1>
            <div className="mt-[25px] ">
                <p className="text-error small lg:body-text ml-[5.681%] mr-[5.681%] lg:mr-0 lg:ml-[125px]">
                    *The one who registered this competition will be automatically the team leader
                </p>
                <div className="mt-[25px] ml-[5.681%] mr-[5.681%] lg:mr-0 lg:ml-[125px]">
                    <form action="">
                        <label htmlFor="teamname" className="field-text text-primaryBlue block mb-[5px] after:content-['*'] after:text-error after:ml-0.5">Team Name</label>
                        <input type="text" id="teamname" placeholder="Enter name" className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2" />
                    </form>
                </div>
                <div className="mt-[40px] ml-[5.681%] mr-[5.681%] lg:mr-0 lg:ml-[125px]">
                    <form className="lg:w-1/2" action="">
                        <label htmlFor="invite" className="field-text text-primaryBlue block mb-[5px]">Invite Team Member</label>
                        <SelectComponent placeholder="Enter name"/>
                    </form>
                </div>
                <div className="mt-[40px]">
                    <h1 className="header3 text-primaryBlue ml-[5.681%] mr-[5.681%] lg:mr-0 lg:ml-[125px]">Payment Proof</h1>
                    <div className="mt-[38px] lg:mt-[58px] w-full">
                        <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col items-center justify-center">
                            <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
                            <UploadFile size=""/>
                        </div>
                    </div>
                    <div className="flex mt-[61px] mb-[30px] justify-center w-full">
                        <button
                            onClick={notifyStatus as any}
                            className="button-text mx-auto cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px]"
                        >
                            Register
                        </button>
                        <Toaster/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default CreateTeamBCC;