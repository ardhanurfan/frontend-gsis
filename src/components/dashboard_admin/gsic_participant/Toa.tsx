import { AnnouncementContext } from "../../../pages/dashboardAdmin/announcement/announcementContext"
import {useContext} from "react";
import toa from "../../../assets/toa.svg";

const Toa = () =>{
    const announContext = useContext(AnnouncementContext);
    return (
        <button onClick={() => announContext?.setAnnounce(true)}>
            <img src={toa} alt="" className="w-[80px] h-[80px] mr-6" />
        </button>
    )
}

export default Toa;