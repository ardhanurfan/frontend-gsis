import ContactList from "../../../../components/contact_list";
import Footer from "../../../../components/footer";
import ParticipantCard from "../../../../components/dashboard_peserta/bcc/participant_card";
import Status from "../../../../components/dashboard_peserta/bcc/status";
import TeamCard from "../../../../components/dashboard_peserta/bcc/team_card";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";

const ParticipantGSIC = () => {
    return(
        <>
        <NavbarDashboard/>
            <div className="pt-[130px] lg:pt-[171px] w-full h-auto mx-auto">
                <div className="header1-mobile lg:header1 text-center lg:text-start w-[89.744%] max-w-[1204px] mx-auto text-primaryBlue">
                    Team Information
                </div>
                <TeamCard status={true} hidden={false} state={false} leader={false} link="/submission-gsic"/>
            </div>
            <div className="flex flex-col items-center mt-14 pb-28">
                <h2 className="header2-mobile lg:header2 text-center text-primaryText mb-9">
                    If you're having trouble, please contact
                </h2>
                <ContactList />
            </div>
        <Footer/>
        </>
    )
}

export default ParticipantGSIC;