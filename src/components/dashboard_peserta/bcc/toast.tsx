import toast, { Toast } from "react-hot-toast";
import Check from "../../../assets/checkmark.svg"
import Cross from "../../../assets/crossmark.svg"

interface ToastProps{
    t: Toast
    status: boolean
    text_success: string
    text_error: string
}

const PopUp = ({t, status, text_success, text_error}: ToastProps) =>
{
    return(
            <div className={`${
                !(t.visible) ? 'animate-enter' : 'animate-leave'
              } z-10 flex justify-center`}>
                <div className={`${status === true ? 'border-success' : 'border-error'} fixed bg-white top-[126px] w-[300px] sm:w-[580px] md:w-[708px] lg:w-[882px] h-[76px] border-2 rounded-lg flex items-center justify-between px-[22px] mx-auto`}>
                    <div className="flex gap-[20px] items-center">
                        <img src={status === true ? Check : Cross} alt="" />
                        <p className={`${status === true ? 'text-success' : 'text-error'} body-text`}>
                            {status === true ? text_success : text_error}
                        </p>
                    </div>
                    {/* <div
                    onClick={() => {
                        t.visible = true;
                        toast.dismiss(t.id);
                    }} 
                    className="h-[40px] w-[40px] relative cursor-pointer rounded-full hover:bg-slate-100">
                        <span className="absolute left-0 right-0 top-1/2 rotate-45 rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
                        <span className="absolute left-0 right-0 top-1/2 rotate-[135deg] rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
                    </div> */}
                </div>
            </div>
        )
            // <div className={`${
            //     t.visible ? 'animate-enter' : 'animate-leave'
            //   } z-10 flex justify-center`}>
            //     <div className="fixed bg-white top-[126px] w-[882px] h-[76px] border-2 border-success rounded-lg flex items-center justify-between px-[22px] mx-auto">
            //         <div className="flex gap-[20px] items-center">
            //             <img src={Check} alt="" />
            //             <p className="body-text text-success">
            //                 Successfully submitted!
            //             </p>
            //         </div>
            //         <div
            //         onClick={() => toast.dismiss(t.id)} 
            //         className="h-[40px] w-[40px] relative cursor-pointer rounded-full hover:bg-slate-100">
            //             <span className="absolute left-0 right-0 top-1/2 rotate-45 rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
            //             <span className="absolute left-0 right-0 top-1/2 rotate-[135deg] rounded-xl mx-auto w-[20px] h-[2px] bg-slate-500"></span>
            //         </div>
            //     </div>
            // </div>

    
}

export default PopUp;