import "./style.css";
import CeremonyCard from "../../../components/dashboard_admin/admin/CeremonyCard";
import { useContext, useEffect, useState } from "react";
import Announcement from "../announcement";
import { AnnouncementContext } from "../announcement/announcementContext";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../components/footer";
import { get } from "../../../API/api";
import Nothing from "../../addingPages/nothing";
import { ExportToExcel } from "../../../components/export/ExportToExcel";

const DashboardCeremony = () => {
  const announContext = useContext(AnnouncementContext);
  const [data, setData] = useState([]);
  const [dataExport, setDataExport] = useState([]);

  const getData = async () => {
    try {
      const response = await get("ceremony");
      setData(response.data?.data);

      const exportData = response.data?.data.map((row: any) => ({
        id: row.user.id,
        name: row.user.name,
        email: row.user.email,
        phone: row.user.phone,
        university: row.user.university,
        major: row.user.major,
        year: row.user.year,
        url: row.ss_poster_url,
        approve: row.approve_poster,
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
    <>
      <NavbarDashboard />
      {data.length == 0 || dataExport.length == 0 ? (
        <Nothing />
      ) : (
        <>
          {announContext?.isAnnounce ? <Announcement /> : ""}
          <div className="w-full h-auto bg-[#FCFCFC]">
            <div className="flex flex-col lg:flex-row justify-between items-center mx-6 lg:mx-14 mt-32 mb-10">
              <h1 className="w-auto inline-block mobile-header1 lg:header1 lg:text-[64px] text-primaryText text-center mb-4 lg:mb-0">
                Ceremony Participant {`(${data.length})`}
              </h1>
              <ExportToExcel apiData={dataExport} fileName={"Ceremony"} />
            </div>
            <div className="px-4 xl:px-14 w-full h-auto flex justify-center items-center">
              <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-16 mb-10">
                {data.map((row: any) => {
                  return (
                    <CeremonyCard
                      id={row.user.id}
                      name={row.user.name}
                      email={row.user.email}
                      phone={row.user.phone}
                      university={row.user.university}
                      major={row.user.major}
                      year={row.user.year}
                      url={row.ss_poster_url}
                      approve={row.approve_poster}
                    />
                  );
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

export default DashboardCeremony;
