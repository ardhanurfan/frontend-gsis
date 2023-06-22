import "./style.css";
import TeamLeaderCard from "../../../components/dashboard_admin/gsic_participant/teamLeaderCard";
import TeamParticipantCard from "../../../components/dashboard_admin/gsic_participant/teamParticipantCard";
import Toa from "../../../components/dashboard_admin/gsic_participant/Toa";
import { useContext } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";

const DashboardGSIC = () => {
  const announContext = useContext(AnnouncementContext);
  return (
    <>
      {announContext?.isAnnounce? <Announcement/> : ""} 
      <Navbar/>
      <div className="flex flex-col justify-center py-4 bg-[#FCFCFC]">
        <h1 className="pt-[100px] text-7xl font-bold text-left text-[#005CBA] title mb-10 pl-40">
          GSIC Participant
        </h1>
        <div className="mt-2 space-y-4">
          <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto flex flex-row items-center">
                  <h2 className="header2 mb-2">Team Name</h2>
                  <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
                <p className="text-sm ml-2">Team Id</p>
              </div>
            </summary>
            {/* team leader */}
            <div className="grid grid-cols-3 gap-3 p-2 shadow-2xl rounded-b-xl">
              <TeamLeaderCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022"/>
              <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>
              <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>  
            </div>
          </details>
          
          <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto flex flex-row items-center">
                  <h2 className="header2 mb-2">Team Name</h2>
                  <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
                <p className="text-sm ml-2">Team Id</p>
              </div>
            </summary>
            {/* team leader */}
            <div className="grid grid-cols-3 gap-3 p-2 shadow-2xl rounded-b-xl">
              <TeamLeaderCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022"/>
              <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>
              <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>  
            </div>
          </details>

          <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto flex flex-row items-center">
                  <h2 className="header2 mb-2">Team Name</h2>
                  <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
                <p className="text-sm ml-2">Team Id</p>
              </div>
            </summary>
            {/* team leader */}
            <div className="grid grid-cols-3 gap-3 p-2 shadow-2xl rounded-b-xl">
              <TeamLeaderCard name="Ani" email="18221135@std.stei.itb.ac.id" phone="081320020190" university="ITB" major="STI" year="2021/2022"/>
              <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>
              <TeamParticipantCard name="anip" email="asdfadfada@gmail.com" phone="081234213412" university="IPB" major="Biomedis" year="2021/2022"/>  
            </div>
          </details>
          
        </div>
        <div className="fixed bottom-16 right-6">
          <Toa/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DashboardGSIC;
