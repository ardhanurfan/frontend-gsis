import "./style.css";
import BCCParticipantCard from "../../../components/dashboard_admin/admin/BCCParticipantCard";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";
import { get } from "../../../API/api";
import Nothing from "../../addingPages/nothing";

const DashboardBCC = () => {
  const announContext = useContext(AnnouncementContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await get("bcc-user");
      console.log(response);
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavbarDashboard />
      {data.length == 0 ? (
        <Nothing />
      ) : (
        <>
          {announContext?.isAnnounce ? <Announcement /> : ""}
          <div className="w-full h-auto bg-[#FCFCFC]">
            <h1 className="w-auto ml-6 lg:ml-14 mt-32 mb-10 inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText">
              BCC Participant
            </h1>
            <div className="px-4 xl:px-14 w-full h-auto flex justify-center items-center">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-16 mb-10">
                {data.map((row: any) => {
                  return <BCCParticipantCard row={row} />;
                })}
              </div>
            </div>
            <div className="fixed bottom-16 right-6"></div>
          </div>
        </>
      )}
      <Footer></Footer>
    </>
  );
};

export default DashboardBCC;
