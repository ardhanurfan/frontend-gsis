import ContactList from "../../../../components/contact_list";
import SubmissionCard from "../../../../components/dashboard_peserta/exhibition/participant_information/submission-card";

const DashboardExhibition = () => {
  return (
    <>
      <div className="w-full px-[70px] pt-[200px] pb-[100px]">
        <h1 className="header1 text-primaryText mb-7">
          Participant Exhibition Information
        </h1>
        <SubmissionCard />
        <SubmissionCard />
        <SubmissionCard />
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="header2 text-primaryText mb-[34px]">
          If you're having trouble, please contact
        </h2>
        <ContactList/>
      </div>
    </>
  );
};

export default DashboardExhibition;
