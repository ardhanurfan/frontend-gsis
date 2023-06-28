import "./style.css";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import OverviewCard from "../../../components/dashboard_admin/admin/overviewCard";
import Toa from "../../../components/dashboard_admin/admin/Toa";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";
import { get } from "../../../API/api";

const Overview = () => {
  const[data,setData] = useState([]);
  const announContext = useContext(AnnouncementContext);

  const getData = async () => {
    try{
      const response = await get("announcement");
      setData(response?.data?.data);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  };
  
  useEffect (() => {
    getData();
  },[]);
  return (
    <>
    {announContext?.isAnnounce? <Announcement/> : ""}
      <NavbarDashboard></NavbarDashboard>
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-6 lg:ml-14 mt-32 inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText">
          Dashboard Overview
        </h1>
        <div className="flex flex-col justify-center gap-5 py-6 mb-4 px-6 lg:px-14">
          {data.map((row:any) => {
            return(
              <OverviewCard row = {row}/>
            )
          })}
        </div>
        <div className="fixed bottom-16 right-6">
          <Toa/>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Overview;
