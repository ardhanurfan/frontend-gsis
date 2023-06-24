import "./style.css";
import Toa from "../../../components/dashboard_admin/admin/Toa";
import Footer from "../../../components/footer";
import { useContext } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import ExhibitionParticipantCard from "../../../components/dashboard_admin/admin/ExhibitionParticipantCard";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";

const DashboardEx = () => {
  const announContext = useContext(AnnouncementContext);
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
          <ExhibitionParticipantCard team_name="ANDARA" status="ACTIVE" teamid={123421} name_profile="Ana" email_profile="xxx@gmail.com" phone_profile="+62xxxxxxxxxxx" uni_profile="ITB" major_profile="STI" year_profile="2021/2022" name_cp="Ana" phone_cp="+62xxxxxxxxxxx" category_work="Masterpiece" year_created_work="2022" size_work="1028x1960" desc_work="Lorem50adfadhfhajdhgjahdj ajdfhjahfjhahdfuiahduif ahjahdjfhajfhjahfdjia "/>
          <ExhibitionParticipantCard team_name="ANDARA" status="ACTIVE" teamid={123421} name_profile="Ana" email_profile="xxx@gmail.com" phone_profile="+62xxxxxxxxxxx" uni_profile="ITB" major_profile="STI" year_profile="2021/2022" name_cp="Ana" phone_cp="+62xxxxxxxxxxx" category_work="Masterpiece" year_created_work="2022" size_work="1028x1960" desc_work="Lorem50adfadhfhajdhgjahdj ajdfhjahfjhahdfuiahduif ahjahdjfhajfhjahfdjia "/>
          <ExhibitionParticipantCard team_name="ANDARA" status="ACTIVE" teamid={123421} name_profile="Ana" email_profile="xxx@gmail.com" phone_profile="+62xxxxxxxxxxx" uni_profile="ITB" major_profile="STI" year_profile="2021/2022" name_cp="Ana" phone_cp="+62xxxxxxxxxxx" category_work="Masterpiece" year_created_work="2022" size_work="1028x1960" desc_work="Lorem50adfadhfhajdhgjahdj ajdfhjahfjhahdfuiahduif ahjahdjfhajfhjahfdjia "/>
          <ExhibitionParticipantCard team_name="ANDARA" status="ACTIVE" teamid={123421} name_profile="Ana" email_profile="xxx@gmail.com" phone_profile="+62xxxxxxxxxxx" uni_profile="ITB" major_profile="STI" year_profile="2021/2022" name_cp="Ana" phone_cp="+62xxxxxxxxxxx" category_work="Masterpiece" year_created_work="2022" size_work="1028x1960" desc_work="Lorem50adfadhfhajdhgjahdj ajdfhjahfjhahdfuiahduif ahjahdjfhajfhjahfdjia "/>
          

        </div>
      </div>
      <div className="fixed bottom-16 right-6">
        <Toa/>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardEx;
