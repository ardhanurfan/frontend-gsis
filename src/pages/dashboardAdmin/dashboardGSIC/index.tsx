import "./style.css";
import Toa from "../../../components/dashboard_admin/admin/Toa";
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
      setData(response?.data);
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
              <GSICParticipantCard teamname={row.team_name} status={row.status} teamid={row.team_id} name1="Alan" email1="alan@gmail.com" phone1="081234567890" uni1="ITB" major1="STI" year1="2021/2022" name2="Antum" email2="antum@gmail.com" phone2="081023123124" uni2="ITB" major2="IF" year2="2021/2022" name3="Ana" email3="ana@gmail.com" phone3="081231231231" uni3="IPB" major3="UI" year3="2021/2022"/>
            )
          })}
          <GSICParticipantCard teamname="ANDROMEDA" status="ACTIVE" teamid={12345} name1="Alan" email1="alan@gmail.com" phone1="081234567890" uni1="ITB" major1="STI" year1="2021/2022" name2="Antum" email2="antum@gmail.com" phone2="081023123124" uni2="ITB" major2="IF" year2="2021/2022" name3="Ana" email3="ana@gmail.com" phone3="081231231231" uni3="IPB" major3="UI" year3="2021/2022"/>
          <GSICParticipantCard teamname="ANDROMEDA" status="ACTIVE" teamid={12345} name1="Alan" email1="alan@gmail.com" phone1="081234567890" uni1="ITB" major1="STI" year1="2021/2022" name2="Antum" email2="antum@gmail.com" phone2="081023123124" uni2="ITB" major2="IF" year2="2021/2022" name3="Ana" email3="ana@gmail.com" phone3="081231231231" uni3="IPB" major3="UI" year3="2021/2022"/>
          <GSICParticipantCard teamname="ANDROMEDA" status="ACTIVE" teamid={12345} name1="Alan" email1="alan@gmail.com" phone1="081234567890" uni1="ITB" major1="STI" year1="2021/2022" name2="Antum" email2="antum@gmail.com" phone2="081023123124" uni2="ITB" major2="IF" year2="2021/2022" name3="Ana" email3="ana@gmail.com" phone3="081231231231" uni3="IPB" major3="UI" year3="2021/2022"/>
          {/* <details className="px-5 xl:px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-5 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-row items-center justify-center gap-0 md:gap-3">
                <div className="w-auto h-auto flex flex-col">
                  <h2 className="header2-mobile md:header2">Team Name</h2>
                  <p className="small ml-2">Team Id</p>
                </div>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
              </div>
            </summary>
            <div className="flex flex-col p-2 bg-white shadow-2xl rounded-b-xl">
              <div className="flex flex-col lg:grid lg:grid-cols-3 p-2 gap-3 ">
                <TeamLeaderCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022"/>
                <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>
                <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>  
              </div>
              <div className="flex flex-row items-center gap-1 justify-between px-1">
                <div className="flex flex-row items-center gap-1">
                  <button className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue">Payment Proof</button>
                  <div className="flex flex-col sm:flex-row gap-1">
                    <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2">Decline</button>
                    <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2">Accept</button>
                  </div>
                </div>
                <button className="box-shadow w-auto bg-white border-2 border-primaryBlue button-text-mobile md:button-text rounded-lg p-2 text-primaryBlue">Proposal Submission</button>
              </div>
            </div>
          </details> */}
          
        </div>
        <div className="fixed bottom-16 right-6">
          <Toa/>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardGSIC;
