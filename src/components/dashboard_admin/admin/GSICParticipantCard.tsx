import TeamLeaderCard from "./teamLeaderCard"
import TeamParticipantCard from "./teamParticipantCard"

interface GSICParticipantCardProps{
    teamname:string;
    status:string;
    teamid:number;
    name1:string;
    email1:string;
    phone1:string;
    uni1:string;
    major1:string;
    year1:string;
    name2:string;
    email2:string;
    phone2:string;
    uni2:string;
    major2:string;
    year2:string;
    name3:string;
    email3:string;
    phone3:string;
    uni3:string;
    major3:string;
    year3:string;
}
const GSICParticipantCard = ({teamname,status,teamid,name1,email1,phone1,uni1,major1,year1,name2,email2,phone2,uni2,major2,year2,name3,email3,phone3,uni3,major3,year3}:GSICParticipantCardProps ) => {
    return(
        <details className="px-5 xl:px-44 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-5 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-row items-center justify-center gap-0 md:gap-3">
                    <div className="w-auto h-auto flex flex-col">
                        <h2 className="header2-mobile md:header2">{teamname}e</h2>
                        <p className="small ml-2">{teamid}</p>
                    </div>
                    <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                        <p className="small text-[#FCFCFC]">{status}</p>
                    </div>
                </div>
            </summary>
            <div className="flex flex-col p-2 bg-white shadow-2xl rounded-b-xl">
                <div className="flex flex-col lg:grid lg:grid-cols-3 p-2 gap-3 ">
                    <TeamLeaderCard name={name1} email={email1} phone={phone1} university={uni1} major={major1} year={year1}/>
                    <TeamParticipantCard name={name2} email={email2} phone={phone2} university={uni2} major={major2} year={year2}/>
                    <TeamParticipantCard name={name3} email={email3} phone={phone3} university={uni3} major={major3} year={year3}/>  
                </div>
                <div className="flex flex-row items-center gap-1 justify-between px-1">
                    <div className="flex flex-row items-center gap-1">
                        <button className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue">Payment Proof</button>
                        <div className="flex flex-col sm:flex-row gap-1">
                            <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2">Decline</button>
                            <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2">Accept</button>
                        </div>
                    </div>
                    <button className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue">Proposal Submission</button>
                </div>
            </div>
        </details>
    )
}

export default GSICParticipantCard;