import "./style.css";
import toa from "../../../assets/toa.svg";
import CeremonyCard from "../../../components/dashboard_admin/gsic_participant/CeremonyCard";

const DashboardCeremony = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-14 mt-32 mb-10 inline-block header1 text-primaryText">
          Ceremony Participant
        </h1>
        <div className="px-14 w-full h-auto flex justify-center items-center">
          <div className="ml-0 grid grid-cols-2 gap-y-6 gap-x-16">
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
            <CeremonyCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022" category="masterpiece"/>
          </div>
        </div>
        <div className="fixed bottom-16 right-6">
          <button>
            <img src={toa} alt="" className="w-[80px] h-[80px] mr-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardCeremony;
