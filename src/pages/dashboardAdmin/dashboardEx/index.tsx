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
  const[dataTeam,setDataTeam] = useState([]);
  const[dataIndividu,setDataIndividu] = useState([]);
  const[type,setType] = useState("");

  const getData = async () => {
    try{
      const response = await get("exhibition");
      console.log(response);
      setData(response?.data?.data);
      let tempTeam:any = [];
      let tempIndividu:any = [];
      console.log(response?.data?.data);
      response?.data?.data.forEach((e:any) => {
        if(e.category === 'TEAM'){  
          tempTeam.push(e);
        }
        else{
          tempIndividu.push(e);
        }
      });
      setDataIndividu(tempIndividu);
      setDataTeam(tempTeam);
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
        <div className="w-full flex items-center justify-between pt-[100px] px-20">
          <h1 className="header1-mobile lg:header1 font-bold text-left text-[#005CBA] title">
            Exhibition Participant
          </h1>
          <div className="kecil relative">
            <select
              className="body-text w-auto bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg body-text-mobile xl:body-text"
              name=""
              id=""
              onChange={(val) => setType(val.target.value)}
              value={type}
            >
              <option value="" selected disabled className="">
                Category
              </option>
              <option value="All">All</option>
              <option value="Team">Team</option>
              <option value="Individu">Individual</option>
            </select>
          </div>
        </div>
        <div className="mt-10 pb-5 space-y-4 h-">
          {type == 'Individu'?
          dataIndividu.map((row:any)=>{
            return(
              <ExhibitionParticipantCard row = {row}/>
            )
          }):type == 'Team'? dataTeam.map((row:any) => {
            return(
              <ExhibitionParticipantCard row = {row}/>
            )
          }): data.map((row:any) => {
            return(
              <ExhibitionParticipantCard row = {row}/>
            )
          })
        }
          </div>
      </div>
      <div className="fixed bottom-16 right-6">
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardEx;
