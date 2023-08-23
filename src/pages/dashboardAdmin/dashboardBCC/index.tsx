import "./style.css";
import BCCParticipantCard from "../../../components/dashboard_admin/admin/BCCParticipantCard";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";
import { get } from "../../../API/api";
import Nothing from "../../addingPages/nothing";
import { ExportToExcel } from "../../../components/export/ExportToExcel";

const DashboardBCC = () => {
  const announContext = useContext(AnnouncementContext);
  const [data, setData] = useState([]);
  const [dataExport, setDataExport] = useState([]);

  const getData = async () => {
    try {
      const response = await get("bcc-user");
      console.log(response);
      setData(response?.data?.data);

      const exportData = response.data?.data.map((row: any) => ({
        name: row.user.name,
        email: row.user.email,
        phone: row.user.phone,
        university: row.user.university,
        submissions: row.papper_url,
        payment_url: row.payment_url,
        ktm_url: row.ktm_url,
        ss_follow_url: row.ss_follow_url,
        ss_poster_url: row.ss_poster_url,
      }));
      setDataExport(exportData as any);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <NavbarDashboard />
      {data.length == 0 ? (
        <Nothing />
      ) : (
        <>
          {announContext?.isAnnounce ? <Announcement /> : ""}
          <div className="w-full h-auto bg-[#FCFCFC]">
            <div className="flex flex-col lg:flex-row justify-between items-center mx-6 lg:mx-14 mt-32 mb-10">
              <h1 className="w-auto inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText text-center mb-4 lg:mb-0">
                GICCC Participant {`(${data.length})`}
              </h1>
              <ExportToExcel apiData={dataExport} fileName={"Giccc"} />
            </div>
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
      <div className="grow flex flex-col justify-end">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardBCC;
