// import { useState } from "react";
// import Status from "../../dashboard_peserta/bcc/status";

// interface AcceptDeclineProps{
//     approve:string;
// }

// const AccepDecline = ({approve}:AcceptDeclineProps) => {
//     const[visible,setVisible] =useState(approve);
//     return(
//         <>
//         <div className="flex flex-col sm:flex-row gap-1">
//             {visible == "WAITING" ? 
//             <>
//             <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("REJECTED"); setVisible("REJECTED")}}>Decline</button> 
//             <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("ACCEPTED"); setVisible("ACCEPTED")}}>Accept</button>
//             </> 
//             : <Status status={visible}/> }
//         </div>
//         </>
//     )
// }

// export default AccepDecline;