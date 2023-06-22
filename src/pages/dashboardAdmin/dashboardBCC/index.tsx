import "./style.css";
import toa from "../../../assets/toa.svg";
import BCCParticipantCard from "../../../components/dashboard_admin/gsic_participant/BCCParticipantCard";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";

const DashboardBCC = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-14 mt-32 mb-10 inline-block header1 text-primaryText">
          BCC Participant
        </h1>
        <div className="px-14 w-full h-auto flex justify-center items-center">
          <div className="ml-0 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-16 mb-10">
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
            <BCCParticipantCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" streams="Technology"/>
          </div>
        </div>
        <div className="fixed bottom-16 right-6">
          <button>
            <img src={toa} alt="" className="w-[80px] h-[80px] mr-6" />
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DashboardBCC;
