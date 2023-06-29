import TeamLeaderCard from "./teamLeaderCard"
import TeamParticipantCard from "./teamParticipantCard"

interface GSICParticipantCardProps{
    row:any;
}
const GSICParticipantCard = ({row}:GSICParticipantCardProps ) => {
    return(
        <details className="px-5 xl:px-44 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-5 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-row items-center justify-center gap-0 md:gap-3">
                    <div className="w-auto h-auto flex flex-col">
                        <h2 className="header2-mobile md:header2">{row.team_name}</h2>
                        <p className="small ml-2">{row.id}</p>
                    </div>
                    <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                        <p className="small text-[#FCFCFC]">{row.status}</p>
                    </div>
                </div>
            </summary>
            <div className="flex flex-col p-2 bg-white shadow-2xl rounded-b-xl">
                <div className="flex flex-col lg:grid lg:grid-cols-3 p-2 gap-3 ">
                    <TeamLeaderCard name={row.id} email={row.id} phone={row.id} university={row.id} major={row.id} year={row.id} url = {row.users[0].ktm_url}/>
                    <TeamParticipantCard name={row.id} email={row.id} phone={row.id} university={row.id} major={row.id} year={row.id} url = {row.users[1].ktm_url}/>
                    <TeamParticipantCard name={row.id} email={row.id} phone={row.id} university={row.id} major={row.id} year={row.id} url = {row.users[2].ktm_url}/>  
                </div>
                <div className="flex flex-row items-center gap-1 justify-between px-1">
                    <div className="flex flex-row items-center gap-1">
                        <a href={row.payment_url} className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue">Payment Proof</a>
                        <div className="flex flex-col sm:flex-row gap-1">
                            <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2">Decline</button>
                            <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2">Accept</button>
                        </div>
                    </div>
                    <a href={row.payment_url} className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue">Proposal Submission</a>
                </div>
            </div>
        </details>
    )
}

export default GSICParticipantCard;