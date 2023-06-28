import { post } from "../../../API/api";
import { AnnouncementContext } from "../../../pages/dashboardAdmin/announcement/announcementContext";
import { useContext } from "react";

interface overviewProps{
    row: any;
}
const OverviewCard = ({row}:overviewProps) => {
    const announContext = useContext(AnnouncementContext);

    const deleteData = async () => {
    const response = await post("delete-announcement",{
        id:row.id,
      })
      console.log(response);
      window.location.reload();
    }
    return (
        <>
        <div className="w-auto h-auto flex justify-between items-center px-4 lg:px-7 py-3 rounded-lg shadow-slate-400 shadow-lg bg-white">
            <div className="">
              <div className={`w-20 h-7 mb-1 rounded-2xl flex items-center justify-center ${row.status=== "DRAFT"?'bg-[#BD1B1B]' : 'bg-[#1B8E27]'}`}>
                <p className="small text-[#FCFCFC]">{row.status}</p>
              </div>
              <h2 className ="mobile-header2 lg:header2 lg:text-[36px] text-[#015CBA]">{row.title}</h2>
              <p className="small text-[#015CBA]">DD/MM/YY 00:00:00</p>
            </div>
            {row.status === "DRAFT" && <div className="flex gap-4">
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]" onClick={deleteData}>
                <p className="small text-[#FCFCFC]">DELETE</p>
              </button>
              <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]"  onClick={() => {announContext?.setAnnounce(true);announContext?.setToa(false);announContext?.setDataRow(row)}}>
                <p className="small text-[#FCFCFC]">EDIT</p>
              </button>
            </div>}
          </div>
          </>
    )
}

export default OverviewCard;