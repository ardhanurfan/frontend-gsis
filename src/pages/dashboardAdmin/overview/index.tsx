import "./style.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";
import { useContext } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import OverviewCard from "../../../components/dashboard_admin/gsic_participant/overviewCard";
import Toa from "../../../components/dashboard_admin/gsic_participant/Toa";

const Overview = () => {
  const announContext = useContext(AnnouncementContext);
  return (
    <>
      <Navbar/>
      {announContext?.isAnnounce? <Announcement/> : ""}
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-6 lg:ml-14 mt-32 inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText">
          Dashboard Overview
        </h1>
        <div className="flex flex-col justify-center gap-5 py-6 mb-4 px-6 lg:px-14">
          <OverviewCard name = "Announcement Name"/>
          <OverviewCard name = "Announcement Name"/>
          <OverviewCard name = "Announcement Name"/>
          <OverviewCard name = "Announcement Name"/>
        </div>
        <div className="fixed bottom-16 right-6">
          <Toa/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Overview;
