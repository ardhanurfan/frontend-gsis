import "./style.css";
import toa from "../../../assets/toa.svg";

const Overview = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-14 mt-32 inline-block header1 text-primaryText">
          Dashboard Overview
        </h1>
        <div className="flex flex-col justify-center gap-5 py-6 ml-14 mr-16 mb-4">
          <div className="w-auto h-auto flex justify-between items-center px-7 py-3 rounded-lg shadow-slate-400 shadow-lg bg-white">
            <div className="">
              <div className="w-20 h-7 mb-1 rounded-2xl flex items-center justify-center bg-[#BD1B1B] border-[1.5px] border-[#ED6010]">
                <p className="small text-[#FCFCFC]">DRAFT</p>
              </div>
              <h2 className="header2 text-[#015CBA]">Announcement Name</h2>
              <p className="small text-[#015CBA]">DD/MM/YY 00:00:00</p>
            </div>
            <div className="flex gap-4">
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                <p className="small text-[#FCFCFC]">DELETE</p>
              </button>
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                <p className="small text-[#FCFCFC]">EDIT</p>
              </button>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-between items-center px-7 py-3 rounded-lg shadow-slate-400 shadow-lg bg-white">
            <div className="">
              <div className="w-20 h-7 mb-1 rounded-2xl flex items-center justify-center bg-[#BD1B1B] border-[1.5px] border-[#ED6010]">
                <p className="small text-[#FCFCFC]">DRAFT</p>
              </div>
              <h2 className="header2 text-[#015CBA]">Announcement Name</h2>
              <p className="small text-[#015CBA]">DD/MM/YY 00:00:00</p>
            </div>
            <div className="flex gap-4">
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                <p className="small text-[#FCFCFC]">DELETE</p>
              </button>
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                <p className="small text-[#FCFCFC]">EDIT</p>
              </button>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-between items-center px-7 py-3 rounded-lg shadow-slate-400 shadow-lg bg-white">
            <div className="">
              <div className="w-20 h-7 mb-1 rounded-2xl flex items-center justify-center bg-[#BD1B1B] border-[1.5px] border-[#ED6010]">
                <p className="small text-[#FCFCFC]">DRAFT</p>
              </div>
              <h2 className="header2 text-[#015CBA]">Announcement Name</h2>
              <p className="small text-[#015CBA]">DD/MM/YY 00:00:00</p>
            </div>
            <div className="flex gap-4">
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                <p className="small text-[#FCFCFC]">DELETE</p>
              </button>
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                <p className="small text-[#FCFCFC]">EDIT</p>
              </button>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-between items-center px-7 py-3 rounded-lg shadow-slate-400 shadow-lg bg-white">
            <div className="">
              <div className="w-20 h-7 mb-1 rounded-2xl flex items-center justify-center bg-[#BD1B1B] border-[1.5px] border-[#ED6010]">
                <p className="small text-[#FCFCFC]">DRAFT</p>
              </div>
              <h2 className="header2 text-[#015CBA]">Announcement Name</h2>
              <p className="small text-[#015CBA]">DD/MM/YY 00:00:00</p>
            </div>
            <div className="flex gap-4">
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                <p className="small text-[#FCFCFC]">DELETE</p>
              </button>
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                <p className="small text-[#FCFCFC]">EDIT</p>
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-16 right-6">
          <button>
            <img src={toa} alt="" className="w-[80px] h-[80px] mr-6" />
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default Overview;
