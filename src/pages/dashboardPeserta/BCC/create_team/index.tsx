import Footer from "../../../../components/footer";
import Navbar from "../../../../components/navbar/Navbar";
import SubmitSuccess from "../../../../components/participant_bcc";
import Check from "../../../../assets/checkmark.svg"
import UploadFile from "../../../../components/upload-file/upload-file";
import { Toaster, toast } from "react-hot-toast";

const CreateTeamBCC = () => {
    const notifySuccess = () => toast.custom((t) => (
        <div className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } z-10 flex justify-center`}>
            <div className="fixed bg-white top-[126px] w-[882px] h-[76px] border-2 border-success rounded-lg flex items-center justify-between px-[22px] mx-auto">
                <div className="flex gap-[20px] items-center">
                    <img src={Check} alt="" />
                    <p className="body-text text-success">
                        Successfully submitted!
                    </p>
                </div>
                <div
                onClick={() => toast.dismiss(t.id)} 
                className="h-[40px] w-[40px] relative cursor-pointer rounded-full hover:bg-slate-100">
                    <span className="absolute left-0 right-0 top-1/2 rotate-45 rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
                    <span className="absolute left-0 right-0 top-1/2 rotate-[135deg] rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
                </div>
            </div>
        </div>
    ));
    const notifyFailed = () => toast.error("Failed to Submit");

    return(
        <>
        <Navbar/>
        {/* <SubmitSuccess/> */}
        <div className="pt-[247px]">
            <h1 className="text-primaryBlue header1 text-center ">
                Create Your Team
            </h1>
            <div className="mt-[25px]">
                <p className="text-error body-text ml-[125px]">
                    *The one who registered this competition will be automatically the team leader
                </p>
                <div className="mt-[25px] ml-[125px]">
                    <form action="">
                        <label htmlFor="teamname" className="field-text text-primaryBlue block mb-[5px] after:content-['*'] after:text-error after:ml-0.5">Team Name</label>
                        <input type="text" id="teamname" placeholder="Enter name" className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2" />
                    </form>
                </div>
                <div className="mt-[40px] ml-[125px]">
                    <form action="">
                        <label htmlFor="invite" className="field-text text-primaryBlue block mb-[5px]">Invite Team Member</label>
                        <input type="text" list="data" id="invite" placeholder="Enter name" className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2" />
                        <datalist className="body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg" id="data">
                            <option className="text-seccondaryBlue" value="Dhanika Novyalisa">Dhanika Novyalisa</option>
                            <option className="text-seccondaryBlue" value="Akmal Natha Abhirama">Akmal Natha Abhirama</option>
                            <option className="text-seccondaryBlue" value="Sultan Alta Alvaro">Sultan Alta Alvaro</option>
                        </datalist>
                    </form>
                </div>
                <div className="mt-[40px]">
                    <h1 className="header3 text-primaryBlue ml-[125px]">Payment Proof</h1>
                    <div className="mt-[58px] w-full">
                        <div className="w-96 mx-auto pt-[14px] flex flex-col items-center justify-center">
                            <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
                            <UploadFile/>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <button
                            onClick={notifySuccess}
                            className="button-text mx-auto cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] mt-[182px]"
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