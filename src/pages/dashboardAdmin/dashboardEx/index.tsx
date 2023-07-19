import "./style.css";
import Footer from "../../../components/footer";
import { useContext, useEffect, useState } from "react";
import { AnnouncementContext } from "../announcement/announcementContext";
import Announcement from "../announcement";
import ExhibitionParticipantCard from "../../../components/dashboard_admin/admin/ExhibitionParticipantCard";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import { get } from "../../../API/api";
import Nothing from "../../addingPages/nothing";
import { ExportToExcel } from "../../../components/export/ExportToExcel";

const DashboardEx = () => {
  const announContext = useContext(AnnouncementContext);
  const [data, setData] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [dataTech, setDataTech] = useState([]);
  const [dataArt, setDataArt] = useState([]);
  const [dataBus, setDataBus] = useState([]);
  const [type, setType] = useState("");

  const getData = async () => {
    try {
      const response = await get("exhibition");
      console.log(response);
      setData(response?.data?.data);
      let tempArt: any = [];
      let tempBus: any = [];
      let tempTech: any = [];
      console.log(response?.data?.data);
      response?.data?.data.forEach((e: any) => {
        if (e.category === "ART") {
          tempArt.push(e);
        } else if (e.category === "BUSINESS") {
          tempBus.push(e);
        } else {
          tempTech.push(e);
        }
      });
      setDataArt(tempArt);
      setDataTech(tempTech);
      setDataBus(tempBus);

      const exportData = response.data?.data.map((row: any) => ({
        id: row.user.id,
        name: row.user.name,
        email: row.user.email,
        phone: row.user.phone,
        university: row.user.university,
        major: row.user.major,
        year: row.user.year,
        stream: row.category,
        description: row.description,
        document: row.documentation[row.documentation.length - 1].url,
        size: row.size,
        create_karya: row.year,
        instagram: row.instagram,
        youtube: row.youtube,
        twitter: row.twitter,
        status: row.status,
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
          <div className="flex flex-col justify-center py-4 bg-white">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-[100px] px-20">
              <h1 className="header1-mobile lg:header1 font-bold text-[#005CBA] title text-center mb-4 lg:mb-0">
                Exhibition Participant {`(${data.length})`}
              </h1>

              <div className="kecil relative mb-4 lg:mb-0">
                <select
                  className="body-text w-auto bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg body-text-mobile xl:body-text"
                  name=""
                  id=""
                  onChange={(val) => setType(val.target.value)}
                  value={type}
                  defaultValue={"All"}
                >
                  <option value="All">All</option>
                  <option value="Art">Art</option>
                  <option value="Business">Business</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>
              <ExportToExcel apiData={dataExport} fileName={"Exhibition"} />
            </div>
            <div className="mt-10 pb-5 space-y-4 h-">
              {type == "Art"
                ? dataArt.map((row: any) => {
                    return <ExhibitionParticipantCard row={row} />;
                  })
                : type == "Business"
                ? dataBus.map((row: any) => {
                    return <ExhibitionParticipantCard row={row} />;
                  })
                : type == "Technology"
                ? dataTech.map((row: any) => {
                    return <ExhibitionParticipantCard row={row} />;
                  })
                : data.map((row: any) => {
                    return <ExhibitionParticipantCard row={row} />;
                  })}
            </div>
          </div>
          <div className="fixed bottom-16 right-6"></div>
        </>
      )}
      <div className="grow flex flex-col justify-end">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardEx;
