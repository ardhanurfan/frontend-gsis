import { useEffect, useState } from "react";
import { getWithAuth } from "../../../API/api";
import Footer from "../../../components/footer";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import { Toaster } from "react-hot-toast";

const ProfilePeserta = () => {
  const [user, setUser] = useState<any | null>(null);
  const [exhibition, setExhibition] = useState(false);
  const [ceremony, setCeremony] = useState(false);
  const [gsic, setGsic] = useState(false);
  const [bcc, setBcc] = useState(false);

  const token = localStorage.getItem("access_token");

  const getUser = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        setUser(user.data?.data);
        const cekExhibition = await getWithAuth(
          "exhibition?user_id=" + id,
          token
        );
        const cekCeremony = await getWithAuth("ceremony?user_id=" + id, token);
        const cekBcc = await getWithAuth("bcc-user?user_id=" + id, token);
        setExhibition(cekExhibition.data.data != null);
        setCeremony(cekCeremony.data.data != null);
        setBcc(cekBcc.data.data != null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user == null ? null : (
        <>
          <Toaster />
          <NavbarDashboard></NavbarDashboard>
          <div className="w-full h-auto">
            <div className="pt-[130px] w-[85vw] mx-auto">
              <h1 className="header1 text-center lg:text-start text-primaryBlue">
                Profile
              </h1>
              <div className="hidden lg:flex justify-end mt-[27px] lg:mt-0">
                <a
                  href="/profile-edit"
                  className="button-text normal-button text-white bg-primaryBlue hover:bg-seccondaryBlue"
                >
                  Edit
                </a>
              </div>
              <div className="clear-both flex flex-col gap-[25px] items-center lg:items-start lg:flex-row justify-between mt-[27px] mb-[67px]">
                <img
                  src={user.profile_photo_url}
                  className="h-[250px] w-[250px] rounded-full shrink-0 border-2 border-primaryBlue"
                  alt=""
                />
                <div className="flex justify-end w-[80vw] lg:hidden mx-auto mt-[15px] lg:mt-0">
                  <a
                    href="/profile-edit"
                    className="button-text-mobile small-button text-white bg-primaryBlue hover:bg-seccondaryBlue"
                  >
                    Edit
                  </a>
                </div>
                <div className="h-auto lg:h-[561px] max-w-[908px] w-[80vw] bg-slate-100 bg-opacity-30 shadow-sm rounded-lg border-primaryBlue border-2 shadow-slate-700 flex flex-col gap-3 pt-[19px] px-[1.32%] pb-[5%] lg:pb-0">
                  <div className="flex flex-col gap-[5px]">
                    <h3 className="header3 text-primaryBlue">Nama</h3>
                    <p className="body-text text-primaryBlue">{user.name}</p>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <h3 className="header3 text-primaryBlue">Email</h3>
                    <p className="body-text text-primaryBlue">{user.email}</p>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <h3 className="header3 text-primaryBlue">Phone Number</h3>
                    <p className="body-text text-primaryBlue">{user.phone}</p>
                  </div>
                  <div className="flex lg:gap-[11.78%] lg:flex-row gap-3 flex-col flex-wrap">
                    <div className="flex flex-col gap-[5px]">
                      <h3 className="header3 text-primaryBlue">University</h3>
                      <p className="body-text text-primaryBlue">
                        {user.university}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <h3 className="header3 text-primaryBlue">Major</h3>
                      <p className="body-text text-primaryBlue">{user.major}</p>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <h3 className="header3 text-primaryBlue">Year</h3>
                      <p className="body-text text-primaryBlue">{user.year}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <h3 className="header3 text-primaryBlue">Event</h3>
                    <div className="flex flex-wrap gap-6">
                      {exhibition && (
                        <div className="body-text bg-primaryGreen text-white rounded-full py-px px-[33px]">
                          Exhibition
                        </div>
                      )}
                      {ceremony && (
                        <div className="body-text bg-primaryYellow text-white rounded-full py-px px-[33px]">
                          Ceremony
                        </div>
                      )}
                      {gsic && (
                        <div className="body-text bg-primaryBlue text-white rounded-full py-px px-[33px]">
                          GSIC
                        </div>
                      )}
                      {bcc && (
                        <div className="body-text bg-primaryOrange text-white rounded-full py-px px-[33px]">
                          BCC
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default ProfilePeserta;
