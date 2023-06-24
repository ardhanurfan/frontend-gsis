import "./style.css";
import BCCParticipantCard from "../../../components/dashboard_admin/admin/BCCParticipantCard";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";
import Toa from "../../../components/dashboard_admin/admin/Toa";
import { useContext } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";

const DashboardBCC = () => {
  const announContext = useContext(AnnouncementContext);
  return (
    <>
    {announContext?.isAnnounce? <Announcement/> : ""} 
      <Navbar/>
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-6 lg:ml-14 mt-32 mb-10 inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText">
          BCC Participant
        </h1>
        <div className="px-4 xl:px-14 w-full h-auto flex justify-center items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-16 mb-10">
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
          <Toa/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DashboardBCC;
