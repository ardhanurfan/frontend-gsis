import { useEffect, useState } from "react";
import { post } from "../../../API/api";
import TeamLeaderCard from "./teamLeaderCard";
import TeamParticipantCard from "./teamParticipantCard";
import Status from "../../dashboard_peserta/bcc/status";

interface GSICParticipantCardProps {
  row: any;
}
const GSICParticipantCard = ({ row }: GSICParticipantCardProps) => {
  const [visible, setVisible] = useState(row.approve_payment);
  const [row1, setRow1] = useState<any | null>(null);
  const [row2, setRow2] = useState<any | null>(null);
  const [row3, setRow3] = useState<any | null>(null);
  const [idx1, setIdx1] = useState(-1);
  const [idx2, setIdx2] = useState(-1);
  const [idxLeader, setIdxLeader] = useState(-1);
  const loopIdx = () => {
    let temp = 1;
    for (let i = 0; i < 3; i++) {
      if (row.users[i].user_id != row.leader_id && temp == 1) {
        setIdx1(i);
        temp++;
      } else if (row.users[i].user_id != row.leader_id && temp == 2) {
        setIdx2(i);
      } else {
        setIdxLeader(i);
      }
    }
  };
  const postData = async (approve: string) => {
    try {
      const response = await post("edit-gsic-admin", {
        leader_id: row.leader_id,
        user_id_1: row.users[idx1].user_id,
        user_id_2: row.users[idx2].user_id,
        approve_payment: approve,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loopIdx();
    setRow1(row.users[idxLeader]);
    setRow2(row.users[idx1]);
    setRow3(row.users[idx2]);
  }, [idxLeader, idx1, idx2]);
  return (
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
          {idxLeader != -1 && row1 != null && (
            <TeamLeaderCard
              leader_id={row.users[idxLeader].user_id}
              user_id_1={row.users[idx1].user_id}
              user_id_2={row.users[idx2].user_id}
              name={row.users[idxLeader].user.name}
              email={row.users[idxLeader].user.email}
              phone={row.users[idxLeader].user.phone}
              university={row.users[idxLeader].user.university}
              major={row.users[idxLeader].user.major}
              year={row.users[idxLeader].user.year}
              approve={row1}
            />
          )}
          {idx1 != -1 && row2 != null && (
            <TeamParticipantCard
              id="1"
              leader_id={row.users[idxLeader].user_id}
              user_id_1={row.users[idx1].user_id}
              user_id_2={row.users[idx2].user_id}
              name={row.users[idx1].user.name}
              email={row.users[idx1].user.email}
              phone={row.users[idx1].user.phone}
              university={row.users[idx1].user.university}
              major={row.users[idx1].user.major}
              year={row.users[idx1].user.year}
              approve={row2}
            />
          )}
          {idx2 != -1 && row3 != null && (
            <TeamParticipantCard
              id="2"
              leader_id={row.users[idxLeader].user_id}
              user_id_1={row.users[idx1].user_id}
              user_id_2={row.users[idx2].user_id}
              name={row.users[idx2].user.name}
              email={row.users[idx2].user.email}
              phone={row.users[idx2].user.phone}
              university={row.users[idx2].user.university}
              major={row.users[idx2].user.major}
              year={row.users[idx2].user.year}
              approve={row3}
            />
          )}
        </div>
        <div className="flex px-1 py-4 items-center">
          <p className="text-[#015CBA] font-bold mr-4 text-xl">Referral Code</p>
          <p className="text-[#4F9BFD] text-xl">
            {row.referral ?? "Not have referral code"}
          </p>
        </div>
        <div className="flex md:flex-row items-center gap-1 justify-between px-1 flex-col">
          <div className="flex flex-row items-center gap-1">
            <a
              href={row.payment_url}
              className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue hover:scale-105"
            >
              Payment Proof
            </a>
            <div className="flex flex-col sm:flex-row gap-1">
              {visible == "WAITING" ? (
                <>
                  <button
                    className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105"
                    onClick={() => {
                      postData("REJECTED");
                      setVisible("REJECTED");
                    }}
                  >
                    Decline
                  </button>
                  <button
                    className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105"
                    onClick={() => {
                      postData("ACCEPTED");
                      setVisible("ACCEPTED");
                    }}
                  >
                    Accept
                  </button>
                </>
              ) : (
                <Status status={visible} />
              )}
              {/* <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => postData("REJECTED")}>Decline</button>
                            <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => postData("ACCEPTED")}>Accept</button>
                            {row.approve_payment != "WAITING" && <Status status={row.approve_payment as string}/>} */}
            </div>
          </div>
          <a
            href={
              row.submissions.length == 0
                ? "#"
                : row.submissions[row.submissions.length - 1].url
            }
            className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue hover:scale-105"
          >
            Proposal Submission
          </a>
        </div>
      </div>
    </details>
  );
};

export default GSICParticipantCard;
