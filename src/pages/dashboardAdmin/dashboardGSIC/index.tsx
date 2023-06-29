import "./style.css";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import GSICParticipantCard from "../../../components/dashboard_admin/admin/GSICParticipantCard";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";
import { get } from "../../../API/api";

const DashboardGSIC = () => {
  const announContext = useContext(AnnouncementContext);
  const[data,setData] = useState([]);

  const getData = async () => {
    try{
      const response = await get("gsic");
      setData(response?.data?.data);
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
      <div className="h-auto flex flex-col bg-[#FCFCFC]">
        <h1 className="mt-32 header1-mobile md:header1 text-left text-[#005CBA] title mb-5 md:mb-10 pl-5 lg:pl-40">
          GSIC Participant
        </h1>
        <div className="mt-2 pb-5 space-y-4">
          {data.map((row:any)=>{
            return(
              <GSICParticipantCard row = {row}/>
            )
          })}
        </div>
        <div className="fixed bottom-16 right-6">
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardGSIC;
