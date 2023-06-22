import up from "../../../assets/upload.svg";
import str from "../../../assets/tech.svg";

interface BCCParticipantCardProps {
    name:string;
    email:string;
    phone:string;
    university:string;
    major:string;
    year:string;
    streams:string;
}

const BCCParticipantCard = ({name,email,phone,university,major,year,streams}:BCCParticipantCardProps) => {
    return (
        <>
         <details className="w-auto md:w-[500px] lg:w-[510px] xl:w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="mobile-header2 lg:header2 lg:text-[36px] mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  {name}
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  {email}
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">{phone}</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      {university}
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      {major}
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">{year}</p>
                  </div>
                </div>
                <div className="w-full h-auto grid grid-cols-2 gap-y-6 gap-x-6 mb-4">
                  <div className="w-[240px] h-auto">
                    <div className="small text-[#015CBA] flex gap-1 mb-2">
                      Student ID Card
                      <img src={up} className="h-[14px]" />
                    </div>
                    <div className="flex gap-1">
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                        <p className="small text-[#FCFCFC]">Decline</p>
                      </button>
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                        <p className="small text-[#FCFCFC]">Accept</p>
                      </button>
                    </div>
                  </div>
                  <div className="w-[240px] h-auto">
                    <div className="small text-[#015CBA] flex gap-1 mb-2">
                      Proof of Following GSIS Instagram
                      <img src={up} className="h-[14px]" />
                    </div>
                    <div className="flex gap-1">
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                        <p className="small text-[#FCFCFC]">Decline</p>
                      </button>
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                        <p className="small text-[#FCFCFC]">Accept</p>
                      </button>
                    </div>
                  </div>
                  <div className="w-[240px] h-auto">
                    <div className="small text-[#015CBA] flex gap-1 mb-2">
                      Proof of Poster Upload
                      <img src={up} className="h-[14px]" />
                    </div>
                    <div className="flex gap-1">
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                        <p className="small text-[#FCFCFC]">Decline</p>
                      </button>
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                        <p className="small text-[#FCFCFC]">Accept</p>
                      </button>
                    </div>
                  </div>
                  <div className="w-[180px] h-auto">
                    <div className="small text-[#015CBA] flex gap-1 mb-2">
                      Proof of Payment
                      <img src={up} className="h-[14px]" />
                    </div>
                    <div className="flex gap-1">
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                        <p className="small text-[#FCFCFC]">Decline</p>
                      </button>
                      <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                        <p className="small text-[#FCFCFC]">Accept</p>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-[#015CBA] body-text">Streams</p>
                <div className="flex items-center gap-1 text-[#4F9BFD] small mb-4">
                  <img src={str} />
                  {streams}
                </div>
              </div>
            </details>
        </>
    )
}

export default BCCParticipantCard;