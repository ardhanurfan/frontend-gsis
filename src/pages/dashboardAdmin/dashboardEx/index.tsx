import "./style.css";
import Footer from "../../../components/footer";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import ExhibitionParticipantCard from "../../../components/dashboard_admin/admin/ExhibitionParticipantCard";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import { get } from "../../../API/api";

const DashboardEx = () => {
  const announContext = useContext(AnnouncementContext);
  const[data,setData] = useState([]);

  const getData = async () => {
    try{
      const response = await get("exhibition");
      console.log(response);
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
    <NavbarDashboard/>
      <div className="flex flex-col justify-center py-4 bg-white">
        <div className="w-full flex items-center justify-between pt-[100px] px-40">
          <h1 className="text-7xl font-bold text-left text-[#005CBA] title mb-10">
            Exhibition Participant
          </h1>
          <div className="kecil relative">
            <select
              className="body-text w-auto bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg body-text-mobile xl:body-text"
              name=""
              id=""
            >
              <option value="" selected disabled className="">
                Category
              </option>
              <option value="">Team</option>
              <option value="">Individual</option>
            </select>
          </div>
        </div>
        <div className="mt-10 pb-5 space-y-4 h-">
          {data.map((row:any)=>{
            return(
              <ExhibitionParticipantCard row = {row}/>
            )
          })}
          </div>
      </div>
      <div className="fixed bottom-16 right-6">
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardEx;
