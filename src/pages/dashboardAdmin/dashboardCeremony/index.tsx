import "./style.css";
import CeremonyCard from "../../../components/dashboard_admin/admin/CeremonyCard";
import { useContext, useEffect, useState } from "react";
import Announcement from "../announcement";
import { AnnouncementContext } from "../announcement/announcementContext";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";
import { get } from "../../../API/api";

const DashboardCeremony = () => {
  const announContext = useContext(AnnouncementContext);
  const[data,setData] = useState([]);

  const getData = async () => {
    try{
      const response = await get("ceremony");
      console.log(response);
      setData(response.data?.data);
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
      <NavbarDashboard/>
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-6 lg:ml-14 mt-32 mb-10 inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText">
          Ceremony Participant
        </h1>
        <div className="px-4 xl:px-14 w-full h-auto flex justify-center items-center">
          <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-16 mb-10">
            {data.map((row:any)=>{
              return(
                <CeremonyCard id={row.user.id} name={row.user.name} email={row.user.email} phone={row.user.phone} university={row.user.university} major={row.user.major} year={row.user.year} url = {row.ss_poster_url} category="masterpiece" approve={row.approve_poster}/>
              )
            })}

          </div>
        </div>
        <div className="fixed bottom-16 right-6">
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardCeremony;
