import up from "../../../assets/upload.svg";
// import str from "../../../assets/tech.svg";
// import art from "../../../assets/art.svg";
// import bis from "../../../assets/business.svg";
import { post } from "../../../API/api";
import Status from "../../dashboard_peserta/bcc/status";
import { useState } from "react";

interface BCCParticipantCardProps {
  row: any;
}

const BCCParticipantCard = ({ row }: BCCParticipantCardProps) => {
  const [visible1, setVisible1] = useState(row.approve_ktm);
  const [visible2, setVisible2] = useState(row.approve_follow);
  const [visible3, setVisible3] = useState(row.approve_poster);
  const [visible4, setVisible4] = useState(row.approve_payment);
  const postData = async ({
    approve,
    approve_name,
  }: {
    approve: string;
    approve_name: string;
  }) => {
    try {
      const response = await post("edit-bcc-user-from-admin", {
        user_id: row.user.id,
        [approve_name]: approve,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(visible1);
  return (
    <>
      <details className="w-auto md:w-[500px] lg:w-[510px] xl:w-[530px] hover:cursor-pointer rounded-xl">
        <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
          <div className="w-auto h-auto flex flex-col items-center">
            <h2 className="mobile-header2 lg:header2 lg:text-[36px] mb-2">
              {row.user.name}
            </h2>
            <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
              <p className="small text-[#FCFCFC]">ACTIVE</p>
            </div>
          </div>
        </summary>
        <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
          <p className="text-[#015CBA] body-text">Name</p>
          <p className="text-[#4F9BFD] small mb-4">{row.user.name}</p>
          <p className="text-[#015CBA] body-text">Email</p>
          <p className="text-[#4F9BFD] small mb-4">{row.user.email}</p>
          <p className="text-[#015CBA] body-text">Phone Number</p>
          <p className="text-[#4F9BFD] small mb-4">{row.user.phone}</p>
          <div className="flex gap-3 mb-4">
            <div className="flex flex-col w-[120px]">
              <p className="text-[#015CBA] body-text">University</p>
              <p className="text-[#4F9BFD] small">{row.user.university}</p>
            </div>
            <div className="flex flex-col w-[100px]">
              <p className="text-[#015CBA] body-text">Major</p>
              <p className="text-[#4F9BFD] small">{row.user.major}</p>
            </div>
            <div className="flex flex-col w-[120px]">
              <p className="text-[#015CBA] body-text">Year</p>
              <p className="text-[#4F9BFD] small">{row.user.year}</p>
            </div>
          </div>
          <div className="w-full h-auto grid grid-cols-2 gap-y-6 gap-x-6 mb-4">
            <div className="w-[240px] h-auto">
              <div className="small text-[#015CBA] flex gap-1 mb-2">
                <a href={row.ktm_url} className="hover:underline">
                  Student ID Card
                </a>
                <img src={up} className="h-[14px]" />
              </div>
              <div className="flex gap-1">
                {visible1 == "WAITING" ? (
                  <>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "REJECTED",
                          approve_name: "approve_ktm",
                        });
                        setVisible1("REJECTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Decline
                      </p>
                    </button>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "ACCEPTED",
                          approve_name: "approve_ktm",
                        });
                        setVisible1("ACCEPTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Accept
                      </p>
                    </button>
                  </>
                ) : (
                  <Status status={visible1} />
                )}
              </div>
            </div>
            <div className="w-[240px] h-auto">
              <div className="small text-[#015CBA] flex gap-1 mb-2">
                <a href={row.ss_follow_url} className="hover:underline">
                  Proof of Following GSIS Instagram
                </a>
                <img src={up} className="h-[14px]" />
              </div>
              <div className="flex gap-1">
                {visible2 == "WAITING" ? (
                  <>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "REJECTED",
                          approve_name: "approve_follow",
                        });
                        setVisible2("REJECTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Decline
                      </p>
                    </button>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "ACCEPTED",
                          approve_name: "approve_follow",
                        });
                        setVisible2("ACCEPTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Accept
                      </p>
                    </button>
                  </>
                ) : (
                  <Status status={visible2} />
                )}
              </div>
            </div>
            <div className="w-[240px] h-auto">
              <div className="small text-[#015CBA] flex gap-1 mb-2">
                <a href={row.ss_poster_url} className="hover:underline">
                  Proof of Poster Upload
                </a>
                <img src={up} className="h-[14px]" />
              </div>
              <div className="flex gap-1">
                {visible3 == "WAITING" ? (
                  <>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "REJECTED",
                          approve_name: "approve_poster",
                        });
                        setVisible3("REJECTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Decline
                      </p>
                    </button>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "ACCEPTED",
                          approve_name: "approve_poster",
                        });
                        setVisible3("ACCEPTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Accept
                      </p>
                    </button>
                  </>
                ) : (
                  <Status status={visible3} />
                )}
              </div>
            </div>
            <div className="w-[180px] h-auto">
              <div className="small text-[#015CBA] flex gap-1 mb-2">
                <a href={row.payment_url} className="hover:underline">
                  Proof of Payment
                </a>
                <img src={up} className="h-[14px]" />
              </div>
              <div className="flex gap-1">
                {visible4 == "WAITING" ? (
                  <>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "REJECTED",
                          approve_name: "approve_payment",
                        });
                        setVisible4("REJECTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Decline
                      </p>
                    </button>
                    <button
                      className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27] hover:scale-105"
                      onClick={() => {
                        postData({
                          approve: "ACCEPTED",
                          approve_name: "approve_payment",
                        });
                        setVisible4("ACCEPTED");
                      }}
                    >
                      <p className="button-text-mobile md:button-text text-[#FCFCFC]">
                        Accept
                      </p>
                    </button>
                  </>
                ) : (
                  <Status status={visible4} />
                )}
              </div>
            </div>
            <div className="flex flex-col w-[120px]">
              <p className="text-[#015CBA] body-text">Referral Code</p>
              <p className="text-[#4F9BFD] small">
                {row.referral ?? "Not have referral code"}
              </p>
            </div>
          </div>
          <p className="text-[#015CBA] body-text">Submission</p>
          <div className="flex items-center gap-1 text-[#4F9BFD] small mb-4">
            <div className="small text-[#015CBA] flex gap-1 mb-2">
              <a href={row.papper_url} className="font-bold hover:underline">
                Download
              </a>
              <img src={up} className="h-[14px]" />
            </div>
          </div>
        </div>
      </details>
    </>
  );
};

export default BCCParticipantCard;
