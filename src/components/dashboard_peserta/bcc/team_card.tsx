import ParticipantCard from "./participant_card"
import Status from "./status";

interface TeamCardProps {
    status: boolean
    hidden: boolean
    state: boolean
    leader: boolean
    link: string | undefined
}

const TeamCard = ({status, hidden, state, leader, link}: TeamCardProps) => {
    return(
        <div className={status ? "mt-[20px] mx-auto w-[89.744%] max-w-[1204px] border-2 border-primaryBlue rounded-lg p-5 flex flex-col gap-[20px]" : "hidden"}>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[5px]">
                    <h3 className="header3 text-primaryBlue">
                        Team Name
                    </h3>
                    <p className="body-text text-primaryBlue">
                        Nama Team
                    </p>
                </div>
                <button className={hidden ? "hidden" : "bg-primaryBlue hover:bg-seccondaryBlue w-[20%] max-w-[134px] h-[30px] lg:h-[40px] lg:button-text button-text-mobile text-white rounded-lg"}>
                    Edit
                </button>
            </div>
            <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-[45px] rounded-b-xl">
                <ParticipantCard
                    status={leader}
                    name="Dhanika Novlisariyanti"
                    email="13521132@std.stei.itb.ac.id"
                    phone="+628XXXXXXXX"
                    university="Bandung Institute of Technology"
                    major="Informatics Engineering"
                    year="2021/2022"
                    hidden={state}
                />
                <ParticipantCard
                    status={false}
                    name="Dhanika Novlisariyanti"
                    email="13521132@std.stei.itb.ac.id"
                    phone="+628XXXXXXXX"
                    university="Bandung Institute of Technology"
                    major="Informatics Engineering"
                    year="2021/2022"
                    hidden={state}
                />
                <ParticipantCard
                    status={false}
                    name="Dhanika Novlisariyanti"
                    email="13521132@std.stei.itb.ac.id"
                    phone="+628XXXXXXXX"
                    university="Bandung Institute of Technology"
                    major="Informatics Engineering"
                    year="2021/2022"
                    hidden={state}
                />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[10px]">
                <div className="flex items-center gap-[20px]">
                    <h3 className="header3-mobile lg:header3 text-primaryBlue">Payment Proof</h3>
                    <Status status="rejected"/>
                </div>
                <a href={link} className="bg-primaryBlue hover:bg-seccondaryBlue flex justify-center items-center w-auto px-10 h-[25px] lg:h-[40px] button-text-mobile lg:button-text text-white rounded-lg">
                    Submit Proposal
                </a>
            </div>
        </div>
    )
}

export default TeamCard;