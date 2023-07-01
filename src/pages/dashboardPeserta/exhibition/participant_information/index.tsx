import { useEffect, useState } from "react";
import ContactList from "../../../../components/contact_list";
import SubmissionCard from "../../../../components/dashboard_peserta/exhibition/participant_information/submissionCard";
import Footer from "../../../../components/footer";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import { getWithAuth } from "../../../../API/api";
import { Toaster } from "react-hot-toast";
import Nothing from "../../../addingPages/nothing";

const DashboardExhibition = () => {
  const [data, setData] = useState<any | null>(null);
  const token = localStorage.getItem("access_token");

  const getData = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const response = await getWithAuth("exhibition?user_id=" + id, token);
        console.log(response);
        setData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavbarDashboard />
      {data == null ? (
        <Nothing />
      ) : (
        <>
          <Toaster />
          <div className="w-full px-[70px] pt-[130px] pb-[100px]">
            <h1 className="header1 text-primaryText mb-7">
              Participant Exhibition Information
            </h1>
            <SubmissionCard row={data} />
          </div>
          <div className="w-full flex flex-col items-center">
            <h2 className="header2 text-primaryText mb-[34px]">
              If you're having trouble, please contact
            </h2>
            <ContactList line="felizhabalqis_" wa="081223216737" />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default DashboardExhibition;
