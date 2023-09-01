import "./style.css";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import GSICParticipantCard from "../../../components/dashboard_admin/admin/GSICParticipantCard";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";
import { get } from "../../../API/api";
import Nothing from "../../addingPages/nothing";
import { ExportToExcel } from "../../../components/export/ExportToExcel";

const DashboardGSIC = () => {
  const announContext = useContext(AnnouncementContext);
  const [data, setData] = useState([]);
  const [dataExport, setDataExport] = useState([]);

  const getData = async () => {
    try {
      const response = await get("gsic");
      setData(response?.data?.data);

      const exportData = response.data?.data.map((row: any) => ({
        team_id: row.id,
        team_name: row.team_name,
        submissions:
          row.submissions.length == 0 ? null : row.submissions[0].url,
        payment_url: row.payment_url,
        leader_id: row.leader_id,
        status: row.status,
        id_peserta_1: row.users[0].user.id,
        name_peserta_1: row.users[0].user.name,
        email_peserta_1: row.users[0].user.email,
        phone_peserta_1: row.users[0].user.phone,
        university_peserta_1: row.users[0].user.university,
        id_peserta_2: row.users[1].user.id,
        name_peserta_2: row.users[1].user.name,
        email_peserta_2: row.users[1].user.email,
        phone_peserta_2: row.users[1].user.phone,
        university_peserta_2: row.users[1].user.university,
        id_peserta_3: row.users[2].user.id,
        name_peserta_3: row.users[2].user.name,
        email_peserta_3: row.users[2].user.email,
        phone_peserta_3: row.users[2].user.phone,
        university_peserta_3: row.users[2].user.university,
        referral: row.referral,
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
      <NavbarDashboard></NavbarDashboard>
      {data.length == 0 ? (
        <Nothing />
      ) : (
        <>
          {announContext?.isAnnounce ? <Announcement /> : ""}
          <div className="h-auto flex flex-col bg-[#FCFCFC]">
            <div className="flex flex-col lg:flex-row justify-between items-center mx-6 lg:mx-14 mt-32 mb-10">
              <h1 className="w-auto inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText text-center mb-4 lg:mb-0">
                GSIC Participant {`(${data.length})`}
              </h1>
              <ExportToExcel apiData={dataExport} fileName={"Gsic"} />
            </div>
            <div className="mt-2 pb-5 space-y-4">
              {data.map((row: any) => {
                return <GSICParticipantCard row={row} />;
              })}
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

export default DashboardGSIC;
