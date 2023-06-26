import Check from "../../assets/checkmark.svg"

const SubmitSuccess = () => {
    return(
        <div className="z-10 flex justify-center">
            <div className="fixed bg-white top-[126px] w-[882px] h-[76px] border-2 border-success rounded-lg flex items-center gap-[20px] px-[22px] mx-auto">
                <img src={Check} alt="" />
                <p className="body-text text-success">
                    Successfully submitted!
                </p>
                <div className="h-[40px] w-[40px] relative ml:auto">
                    <span className="absolute left-0 right-0 top-1/2 rotate-45 rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
                    <span className="absolute left-0 right-0 top-1/2 rotate-[135deg] rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
                </div>
            </div>
        </div>
    )
}

export default SubmitSuccess;