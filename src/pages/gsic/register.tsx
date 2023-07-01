import { Toaster } from "react-hot-toast";
import UploadFile from "../../components/upload-file/upload-file";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import { NotifyStatus } from "../../components/toast_pop_up/toast";
import SelectComponent from "../../components/SelectComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWithAuth } from "../../API/api";

// import ContactList from "../../components/contact_list";

const RegisterGSIC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState("");
  const [member, setMember] = useState<Array<any>>([]);
  const [ktmLeader, setKtmLeader] = useState<File | null>(null);
  const [followLeader, setFollowLeader] = useState<File | null>(null);
  const [posterLeader, setPosterLeader] = useState<File | null>(null);
  const [ktmUser1, setKtmUser1] = useState<File | null>(null);
  const [followUser1, setFollowUser1] = useState<File | null>(null);
  const [posterUser1, setPosterUser1] = useState<File | null>(null);
  const [ktmUser2, setKtmUser2] = useState<File | null>(null);
  const [followUser2, setFollowUser2] = useState<File | null>(null);
  const [posterUser2, setPosterUser2] = useState<File | null>(null);
  const [payment, setPayment] = useState<File | null>(null);
  const token = localStorage.getItem("access_token");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await postWithAuth(
        "register-gsic",
        {
          team_name: team,
          ktm_url_leader: ktmLeader,
          ktm_url_1: ktmUser1,
          ktm_url_2: ktmUser2,
          ss_follow_url_leader: followLeader,
          ss_follow_url_1: followUser1,
          ss_follow_url_2: followUser2,
          ss_poster_url_leader: posterLeader,
          ss_poster_url_1: posterUser1,
          ss_poster_url_2: posterUser2,
          payment_url: payment,
          email_user_1: member[0].value,
          email_user_2: member[1].value,
        },
        token ?? ""
      );
      navigate("/gsic");
      NotifyStatus("Registration Successfully!", true);
    } catch (error) {
      const mess = error as any;
      NotifyStatus(mess.response.data.data.error, false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <div className="w-full px-[5.3472%] lg:px-[130px] pt-[130px] pb-[100px]">
        <h1 className="header1-mobile lg:header1 text-primaryText mb-7 text-center">
          Ganesha Social Impact <br /> Challenge (GSIC) Registration
        </h1>
        <div className="flex flex-col gap-[106px]">
          <div className="flex flex-col">
            <div className="w-[90%] max-w-sm mx-auto pt[14px] flex flex-col justify-center">
              <form action="">
                <label
                  htmlFor="teamname"
                  className="field-text text-primaryBlue block mb-[5px] after:content-['*'] after:text-error after:ml-0.5"
                >
                  <h3 className="header3-mobile lg:header3">Team Name</h3>
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamname"
                  onChange={(e) => setTeam(e.target.value)}
                  placeholder="Enter name"
                  className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%]"
                />
              </form>
            </div>
            <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
              <h3 className="header3-mobile lg:header3 text-primaryBlue">
                Team Leader
              </h3>
              <label
                className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                htmlFor=""
              >
                Student ID Card
              </label>
              <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                UPLOAD FILES
              </h3>
              <UploadFile
                childToParent={(e: File) => setKtmLeader(e)}
                type={"image"}
              />
            </div>
            <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
              <label
                className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                htmlFor=""
              >
                Poster Upload
              </label>
              <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                UPLOAD FILES
              </h3>
              <UploadFile
                childToParent={(e: File) => setPosterLeader(e)}
                type={"image"}
              />
            </div>
            <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
              <label
                className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                htmlFor=""
              >
                Proof of Following Instagram
              </label>
              <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                UPLOAD FILES
              </h3>
              <UploadFile
                childToParent={(e: File) => setFollowLeader(e)}
                type={"image"}
              />
            </div>
            <div className="my-[40px] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
              <form className="lg:w-full" action="">
                <label
                  htmlFor="invite"
                  className="field-text text-primaryBlue block mb-[5px]"
                >
                  <h3 className="header3-mobile lg:header3 text-center">
                    Invite Team Member
                  </h3>
                </label>
                <SelectComponent
                  multiple
                  placeholder="Find Member"
                  type={"Member Gsic"}
                  onChange={(e: any) => setMember(e)}
                />
              </form>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[106px] lg:gap-12 ">
            <div className="flex flex-col w-full mx-auto">
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  First Member
                </h3>
                <label
                  className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                  htmlFor=""
                >
                  Student ID Card
                </label>
                <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile
                  childToParent={(e: File) => setKtmUser1(e)}
                  type={"image"}
                />
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                  htmlFor=""
                >
                  Poster Upload
                </label>
                <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile
                  childToParent={(e: File) => setPosterUser1(e)}
                  type={"image"}
                />
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                  htmlFor=""
                >
                  Proof of Following Instagram
                </label>
                <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile
                  childToParent={(e: File) => setFollowUser1(e)}
                  type={"image"}
                />
              </div>
            </div>
            <div className="flex flex-col w-full mx-auto">
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <h3 className="header3-mobile lg:header3 text-primaryBlue">
                  Second Member
                </h3>
                <label
                  className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                  htmlFor=""
                >
                  Student ID Card
                </label>
                <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile
                  childToParent={(e: File) => setKtmUser2(e)}
                  type={"image"}
                />
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                  htmlFor=""
                >
                  Poster Upload
                </label>
                <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile
                  childToParent={(e: File) => setPosterUser2(e)}
                  type={"image"}
                />
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text-mobile lg:button-text mb-2 text-primaryBlue after:content-['*'] after:text-error after:ml-0.5"
                  htmlFor=""
                >
                  Proof of Following Instagram
                </label>
                <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile
                  childToParent={(e: File) => setFollowUser2(e)}
                  type={"image"}
                />
              </div>
            </div>
          </div>
          <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
            <h3 className="header3-mobile lg:header3 mb-2 text-primaryBlue">
              Payment Proof
            </h3>
            <h3 className="header3-mobile lg:header3 text-primaryText self-center mb-3">
              UPLOAD FILES
            </h3>
            <UploadFile
              childToParent={(e: File) => setPayment(e)}
              type={"image"}
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue shadow-lg shadow-primaryBlue"
          >
            {loading && (
              <div className="flex justify-center items-center">
                <img className="mr-2" src="assets/Loading.svg" alt="spinner" />
                Loading
              </div>
            )}
            {!loading && "Submit"}
          </button>
        </div>
        {/* <div className="flex flex-col items-center mt-14 mb-[30px]">
          <ContactList line={"131341"} wa={"124312341"} />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default RegisterGSIC;
