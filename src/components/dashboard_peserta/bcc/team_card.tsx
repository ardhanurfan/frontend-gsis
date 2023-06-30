import { useEffect, useState } from "react";
import ParticipantCard from "./participant_card"
import Status from "./status";

interface TeamCardProps {
    status: boolean
    hidden: boolean
    state: boolean
    link: string | undefined
    row:any
}

const TeamCard = ({status, hidden, state, link,row}: TeamCardProps) => {
    const[idx1,setIdx1] = useState(0);
    const[idx2,setIdx2] = useState(0);
    const[idxLeader,setIdxLeader] = useState(0);
    const loopIdx = () => {
        let temp = 1;
        for(let i = 0;i<3;i++){
            if(row.users[i].user_id != row.leader_id && temp == 1){
                setIdx1(i);
                temp++;
            }else if(row.users[i].user_id != row.leader_id && temp == 2){
                setIdx2(i);
            }else{
                setIdxLeader(i);
            }
        }
    }
    useEffect (() => {
        loopIdx();
      },[]);
    return(
        <div className={status ? "mt-[20px] mx-auto w-[89.744%] max-w-[1204px] border-2 border-primaryBlue rounded-lg p-5 flex flex-col gap-[20px]" : "hidden"}>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[5px]">
                    <h3 className="header3 text-primaryBlue">
                        Team Name
                    </h3>
                    <p className="body-text text-primaryBlue">
                        {row.team_name}
                    </p>
                </div>
                <a href = "/document-gsic" className={hidden ? "hidden" : "bg-primaryBlue hover:bg-seccondaryBlue flex justify-center items-center w-[20%] max-w-[134px] h-[30px] lg:h-[40px] lg:button-text button-text-mobile text-white rounded-lg"}>
                    Edit
                </a>
            </div>
            <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-[45px] rounded-b-xl">
                <ParticipantCard
                    leader={true}
                    statusktm={row.users[idxLeader].approve_ktm}
                    statusposter={row.users[idxLeader].approve_poster}
                    statusfollow={row.users[idxLeader].approve_follow}
                    name={row.users[idxLeader].user.name}
                    email={row.users[idxLeader].user.email}
                    phone={row.users[idxLeader].user.phone}
                    university={row.users[idxLeader].user.university}
                    major={row.users[idxLeader].user.major}
                    year={row.users[idxLeader].user.year}
                    hidden={state}
                />
                <ParticipantCard
                    leader={false}
                    statusktm={row.users[idx1].approve_ktm}
                    statusposter={row.users[idx1].approve_poster}
                    statusfollow={row.users[idx1].approve_follow}
                    name={row.users[idx1].user.name}
                    email={row.users[idx1].user.email}
                    phone={row.users[idx1].user.phone}
                    university={row.users[idx1].user.university}
                    major={row.users[idx1].user.major}
                    year={row.users[idx1].user.year}
                    hidden={state}
                />
                <ParticipantCard
                    leader={false}
                    statusktm={row.users[idx2].approve_ktm}
                    statusposter={row.users[idx2].approve_poster}
                    statusfollow={row.users[idx2].approve_follow}
                    name={row.users[idx2].user.name}
                    email={row.users[idx2].user.email}
                    phone={row.users[idx2].user.phone}
                    university={row.users[idx2].user.university}
                    major={row.users[idx2].user.major}
                    year={row.users[idx2].user.year}
                    hidden={state}
                />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[10px]">
                <div className="flex items-center gap-[20px]">
                    <h3 className="header3-mobile lg:header3 text-primaryBlue">Payment Proof</h3>
                    <Status status={row.approve_payment}/>
                </div>
                <a href={link} className="bg-primaryBlue hover:bg-seccondaryBlue flex justify-center items-center w-auto px-10 h-[25px] lg:h-[40px] button-text-mobile lg:button-text text-white rounded-lg">
                   {row.submissions.length == 0? "Submit Proposal" : "Edit Proposal"}
                </a>
            </div>
        </div>
    )
}

export default TeamCard;