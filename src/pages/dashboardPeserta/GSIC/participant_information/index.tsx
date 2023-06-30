import ContactList from "../../../../components/contact_list";
import Footer from "../../../../components/footer";
// import Status from "../../../../components/dashboard_peserta/bcc/status";
import TeamCard from "../../../../components/dashboard_peserta/bcc/team_card";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import { useEffect, useState } from "react";
import { getWithAuth } from "../../../../API/api";
import { Toaster } from "react-hot-toast";

const ParticipantGSIC = () => {
    const[data,setData] = useState<any | null>(null);
    const token = localStorage.getItem("access_token");

    const getData = async () => {
        if (token) {
            try {
                const response = await getWithAuth(
                "gsic-myteam",
                token
                );
                console.log(response);
                setData(response?.data?.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect (() => {
        getData();
      },[]);
    return(
        <>{data == null ? null :
        <>
        <Toaster/>
        <NavbarDashboard/>
            <div className="pt-[130px] w-full h-auto mx-auto">
                <div className="header1-mobile lg:header1 text-center lg:text-start w-[89.744%] max-w-[1204px] mx-auto text-primaryBlue">
                    Team Information
                </div>
                <TeamCard status = {true} hidden = {false} state = {false} row = {data} link="/submission-gsic"/>
            </div>
            <div className="flex flex-col items-center mt-14 pb-28">
                <h2 className="header2-mobile lg:header2 text-center text-primaryText mb-9">
                    If you're having trouble, please contact
                </h2>
                <ContactList line="" wa=""/>
            </div>
        <Footer/>
        </>}
        </>
    )
}

export default ParticipantGSIC;