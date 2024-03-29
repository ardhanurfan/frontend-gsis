import ContactList from "../../../../components/contact_list";
import { useEffect, useState } from "react";
import "./style.css";
import Status from "../../../../components/dashboard_peserta/bcc/status";
import Footer from "../../../../components/footer";
// import TeamCard from "../../../../components/dashboard_peserta/bcc/team_card";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import { getWithAuth } from "../../../../API/api";
import { Toaster } from "react-hot-toast";
// import str from "../../../../assets/tech.svg";
// import art from "../../../../assets/art.svg";
// import bus from "../../../../assets/business.svg";
import Nothing from "../../../addingPages/nothing";

const ParticipantBCC = () => {
  // const [state, setState] = useState(false);
  const [data, setData] = useState<any | null>(null);
  const token = localStorage.getItem("access_token");

  const getData = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const response = await getWithAuth("bcc-user?user_id=" + id, token);
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
          <div className="w-full h-auto overflow-auto">
            <h1 className="header1-mobile lg:header1 w-[89.744%] max-w-[1204px] mx-auto text-center lg:text-start text-primaryText mt-[130px]">
              Participant Information
            </h1>
            <div className="mt-[30px] mx-auto w-[89.744%] max-w-[1204px] border-2 border-primaryBlue rounded-lg p-5 flex flex-col gap-[5px]">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[5px]">
                  <h3 className="header3-mobile lg:header3 text-primaryBlue">
                    Nama
                  </h3>
                  <p className="small lg:body-text text-primaryBlue">
                    {data.user.name}
                  </p>
                </div>
                <a
                  href="/document-bcc"
                  className={
                    "bg-primaryBlue hover:bg-seccondaryBlue flex items-center justify-center text-center w-[20%] max-w-[134px] h-[30px] lg:h-[40px] lg:button-text button-text-mobile text-white rounded-lg"
                  }
                >
                  Edit
                </a>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  University
                </h3>
                <p className="small lg:body-text text-primaryBlue">
                  {data.user.university}
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Email
                </h3>
                <p className="small lg:body-text text-primaryBlue">
                  {data.user.email}
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Phone
                </h3>
                <p className="small lg:body-text text-primaryBlue">
                  {data.user.phone}
                </p>
              </div>
              {/* <div className="flex flex-col gap-[5px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Streams
                </h3>
                <div>
                  <span className="flex gap-2 items-center">
                    <img
                      src={
                        data.stream == "TECHNOLOGY"
                          ? str
                          : data.stream == "ART"
                          ? art
                          : bus
                      }
                    />
                    <p className="small text-primaryBlue">{data.stream}</p>
                  </span>
                </div>
              </div> */}
              <div className="flex flex-col lg:flex-row gap-[5px] lg:gap-[20px] mb-[14px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Student ID Card
                </h3>
                <Status status={data.approve_ktm} />
              </div>
              <div className="flex flex-col lg:flex-row gap-[5px] lg:gap-[20px] mb-[14px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Proof of Following GSIS Instagram
                </h3>
                <Status status={data.approve_follow} />
              </div>
              <div className="flex flex-col lg:flex-row gap-[5px] lg:gap-[20px] mb-[14px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Proof of Poster Upload
                </h3>
                <Status status={data.approve_poster} />
              </div>
              <div className="flex flex-col lg:flex-row gap-[5px] lg:gap-[20px] mb-[14px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Payment Proof
                </h3>
                <Status status={data.approve_payment} />
              </div>
              <div className="flex flex-col gap-[5px] mb-[14px]">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Referral Code
                </h3>
                <p className="text-primaryBlue">
                  {data.referral ?? "Not have referral code"}
                </p>
              </div>
              <a
                href="/submission-bcc"
                className="bg-primaryBlue hover:bg-seccondaryBlue flex justify-center items-center mx-auto w-60 h-[25px] lg:h-[40px] button-text-mobile lg:button-text text-white rounded-lg py-4"
              >
                {data.papper_url == null ? "Submit Proposal" : "Edit Proposal"}
              </a>
            </div>
            {/* <div>
          <div className="flex flex-col lg:flex-row mx-auto w-[89.744%] max-w-[1204px] gap-2 justify-between mt-[30px]">
            <h1 className="header1-mobile lg:header1 text-primaryBlue">
              Team Information
            </h1>
            <a 
            href="/createteam-bcc"
            onClick={() => setState(!state)}
            className={!state ? "bg-primaryBlue hover:bg-seccondaryBlue shade text-center cursor-pointer lg:self-center w-[35%] max-w-[204px] h-[7.143%] max-h-[40px] text-white button-text-mobile lg:button-text py-[5px] lg:py-[10px] px-[10px] md:px-[15px] lg:px-[50px] rounded-lg " : "bg-slate-400 shade text-center cursor-pointer lg:self-center w-[35%] max-w-[204px] h-[7.143%] max-h-[40px] text-white button-text-mobile lg:button-text py-[5px] lg:py-[10px] px-[10px] md:px-[15px] lg:px-[50px] rounded-lg "}>
              Create Team
            </a>
          </div>
          <TeamCard status={true} hidden={true} state={true} leader={true} link={"/submission-bcc"}/>
        </div> */}
            <div className="flex flex-col items-center mt-14 mb-14">
              <h2 className="header2-mobile lg:header2 text-primaryText text-center mb-9">
                If you're having trouble, please contact
              </h2>
              <ContactList wa={"Amanda Daniswara: 085921543278"} />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ParticipantBCC;
