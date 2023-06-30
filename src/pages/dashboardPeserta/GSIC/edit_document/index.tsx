import { Toaster } from "react-hot-toast";
import UploadFile from "../../../../components/upload-file/upload-file";
import Footer from "../../../../components/footer";
import ContactList from "../../../../components/contact_list";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWithAuth, postWithAuth } from "../../../../API/api";

const EditDocumentGSIC = () => {
  const[ktmLeader,setKtmLeader] = useState<File | null>(null);
  const[ktm1,setKtm1] = useState<File | null>(null);
  const[ktm2,setKtm2] = useState<File | null>(null);
  const[followLeader,setFollowLeader] = useState<File | null>(null);
  const[follow1,setFollow1] = useState<File | null>(null);
  const[follow2,setFollow2] = useState<File | null>(null);
  const[posterLeader,setPosterLeader] = useState<File | null>(null);
  const[poster1,setPoster1] = useState<File | null>(null);
  const[poster2,setPoster2] = useState<File | null>(null);
  const[payment,setPayment] = useState<File | null>(null);
  const[loading, setLoading] = useState(false);
  const[idx1,setIdx1] = useState(0);
  const[idx2,setIdx2] = useState(0);
  const[idxLeader,setIdxLeader] = useState(0);
      

  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const getData = async () => {
    if (token) {
        try {
            const response = await getWithAuth(
            "gsic-myteam",
            token
            );
            console.log(response);
            let temp = 1;
            for(let i = 0;i<3;i++){
                if(response?.data?.data.users[i].user_id != response?.data?.data.leader_id && temp == 1){
                    setIdx1(response?.data?.data.users[i].user_id);
                    temp++;
                }else if(response?.data?.data.users[i].user_id != response?.data?.data.leader_id && temp == 2){
                    setIdx2(response?.data?.data.users[i].user_id);
                }else{
                    setIdxLeader(response?.data?.data.users[i].user_id);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
};

  const editData = async () => {
    setLoading(true);
    if(token){
      try {
        const response = await postWithAuth(
          "edit-gsic-user",
          {
            leader_id:idxLeader,
            user_id_1:idx1,
            user_id_2:idx2,
            ktm_url_leader: ktmLeader,
            ss_follow_url_leader:followLeader,
            ss_poster_url_leader:posterLeader,
            ktm_url_user_1: ktm1,
            ss_follow_url_user_1:follow1,
            ss_poster_url_user_1:poster1,
            ktm_url_user_2: ktm2,
            ss_follow_url_user_2:follow2,
            ss_poster_url_user_2:poster2,
            payment_url:payment,
          },
          token
          );
          console.log(response);
          navigate("/dashboard-gsic");
          NotifyStatus("Edit Successfully!", true);
        } catch (error) {
          const mess = error as any;
          NotifyStatus(mess.response.data.data.error, false);
        }finally{
          setLoading(false);
        }
      }
    };
    useEffect (() => {
      getData();
    },[]);
  return (
    <>
      <Toaster/>
      <NavbarDashboard />
      <div className="w-full px-[5.3472%] lg:px-[130px] pt-[130px] lg:pt-[200px] pb-[100px]">
        <h1 className="header1-mobile lg:header1 text-primaryText mb-7">
          Registration Document
        </h1>
        <div className="flex flex-col gap-[106px]">
          <div className="flex flex-col">
            <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
              <h3 className="header3 text-primaryBlue">Team Leader</h3>
              <label
                className="button-text mb-[21px] text-primaryBlue"
                htmlFor=""
              >
                Student ID Card
              </label>
              <h3 className="header3 text-primaryText self-center mb-3">
                UPLOAD FILES
              </h3>
              <UploadFile childToParent={(e:File) => setKtmLeader(e)} type={""}/>
            </div>
            <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
              <label
                className="button-text mb-[21px] text-primaryBlue"
                htmlFor=""
              >
                Poster Upload
              </label>
              <h3 className="header3 text-primaryText self-center mb-3">
                UPLOAD FILES
              </h3>
              <UploadFile childToParent={(e:File) => setPosterLeader(e)} type={""}/>
            </div>
            <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
              <label
                className="button-text mb-[21px] text-primaryBlue"
                htmlFor=""
              >
                Proof of Following Instagram
              </label>
              <h3 className="header3 text-primaryText self-center mb-3">
                UPLOAD FILES
              </h3>
              <UploadFile childToParent={(e:File) => setFollowLeader(e)} type={""}/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[106px] lg:gap-12 ">
            <div className="flex flex-col w-full mx-auto">
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <h3 className="header3 text-primaryBlue">First Member</h3>
                <label
                  className="button-text mb-[21px] text-primaryBlue"
                  htmlFor=""
                >
                  Student ID Card
                </label>
                <h3 className="header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile childToParent={(e:File) => setKtm1(e)} type={""}/>
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text mb-[21px] text-primaryBlue"
                  htmlFor=""
                >
                  Poster Upload
                </label>
                <h3 className="header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile childToParent={(e:File) => setPoster1(e)} type={""}/>
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text mb-[21px] text-primaryBlue"
                  htmlFor=""
                >
                  Proof of Following Instagram
                </label>
                <h3 className="header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile childToParent={(e:File) => setFollow1(e)} type={""}/>
              </div>
            </div>
            <div className="flex flex-col w-full mx-auto">
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <h3 className="header3 text-primaryBlue">Second Member</h3>
                <label
                  className="button-text mb-[21px] text-primaryBlue"
                  htmlFor=""
                >
                  Student ID Card
                </label>
                <h3 className="header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile childToParent={(e:File) => setKtm2(e)} type={""}/>
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text mb-[21px] text-primaryBlue"
                  htmlFor=""
                >
                  Poster Upload
                </label>
                <h3 className="header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile childToParent={(e:File) => setPoster2(e)} type={""}/>
              </div>
              <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
                <label
                  className="button-text mb-[21px] text-primaryBlue"
                  htmlFor=""
                >
                  Proof of Following Instagram
                </label>
                <h3 className="header3 text-primaryText self-center mb-3">
                  UPLOAD FILES
                </h3>
                <UploadFile childToParent={(e:File) => setFollow2(e)} type={""}/>
              </div>
            </div>
          </div>
          <div className="w-[90%] max-w-sm mx-auto pt-[14px] flex flex-col justify-center">
            <h3 className="header3 mb-[21px] text-primaryBlue">
              Payment Proof
            </h3>
            <h3 className="header3 text-primaryText self-center mb-3">
              UPLOAD FILES
            </h3>
            <UploadFile childToParent={(e:File) => setPayment(e)} type={""}/>
          </div>
        </div>
        <div className="flex justify-center">
          <button
              disabled={loading}
              onClick={editData}
              className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue shadow-lg shadow-primaryBlue"
            >
              {loading && (
                <div className="flex justify-center items-center">
                  <img
                    className="mr-2"
                    src="../src/assets/Loading.svg"
                    alt="spinner"
                  />
                  Loading
                </div>
              )}
              {!loading && "Submit"}
            </button>
        </div>
        <div className="flex flex-col items-center mt-14 mb-[30px]">
          <h2 className="header2-mobile lg:header2 text-primaryText text-center mb-9">
            If you're having trouble, please contact
          </h2>
          <ContactList line={""} wa={""} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditDocumentGSIC;
