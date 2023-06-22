import "./style.css";
import CeremonyCard from "../../../components/dashboard_admin/gsic_participant/CeremonyCard";
import { useContext } from "react";
import Announcement from "../announcement";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";
import { AnnouncementContext } from "../announcement/announcementContext";
import Toa from "../../../components/dashboard_admin/gsic_participant/Toa";

const DashboardCeremony = () => {
  const announContext = useContext(AnnouncementContext);
  return (
    <>
      {announContext?.isAnnounce? <Announcement/> : ""} 
      <Navbar/>
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-6 lg:ml-14 mt-32 mb-10 inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText">
          Ceremony Participant
        </h1>
        <div className="px-4 xl:px-14 w-full h-auto flex justify-center items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-16 mb-10">
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
          <Toa/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DashboardCeremony;
