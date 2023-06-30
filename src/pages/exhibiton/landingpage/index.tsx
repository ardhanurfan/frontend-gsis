import "./style.css";
import Navbar from "../../../components/navbar/Navbar";
// import ModalNotLogin from "../../../components/modalNotLogin/modalNotLogin";
import Footer from "../../../components/footer";
import ContactList from "../../../components/contact_list";
import Slides from "../../../components/gsic/Slides";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getWithAuth } from "../../../API/api";
// import TimelineItem from "../../../components/gsic/TimelineItem";
// import CarouselElement from "../../../components/gsic/Carousel";
// import as from '../../../assets/BillGates.svg'
// import d from '../../../assets/VectorAdminProfile.svg'

const Exhibition = () => {
  const navigate = useNavigate();

  function goToRegistration() {
    navigate("/register-exhibition");
  }

  const [isRegistered, setRegistered] = useState(false);

  const token = localStorage.getItem("access_token");

  const cekUser = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const cekRegister = await getWithAuth(
          "exhibition?user_id=" + id,
          token
        );
        setRegistered(cekRegister.data.data != null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    cekUser();
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <div className="w-full h-auto bg-cover bg-[url(./assets/Background_Exhibition.svg)]">
        <div className="pt-[200px] text-center">
          <h1 className="w-auto header1-mobile lg:header1 text-primaryText text-center">
            EXHIBITION
          </h1>
        </div>
        <div className="mt-12 w-[70%] max-w-[1300px] mx-auto bg-slate-100 bg-opacity-30 rounded-xl shadow-lg shadow-slate-500 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full py-5 lg:p-10 flex items-center">
            <p className="px-5 lg:px-20 body-text-mmobile lg:body-text text-primaryText text-center lg:text-justify">
              This exhibition is a platform for students and the general public
              to showcase their work and demonstrate their skills and talents in
              the fields of art, technology, and business. The purpose of this
              exhibition is to give visitors the opportunity to gain exposure
              and also appreciate the works of industry players in these fields.
            </p>
          </div>
        </div>

        <div className="w-auto h-auto overflow-auto">
          <div className="mt-[100px] lg:mt-[100px] mb-[125px]">
            <h1 className="mx-auto text-center header1-mobile lg:header1 text-primaryText">
              Timeline
            </h1>
            <div className="overflow-auto w-full mx-auto pb-[22px]">
              <div className="relative w-[355px] md:w-[760px] lg:w-[975px] 2xl:w-[1300px] h-[1605px] 2xl:h-[1000px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30">
                <div className="h-auto w-[38px] flex justify-between absolute m-[4%] lg:m-[2%]">
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                </div>
                <div className="relative">
                  <div className="pt-[25%] md:pt-[15.25%] lg:pt-[10.25%] relative">
                    <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[37%] mt-[9%] md:mt-[5%] lg:mt-[3.5%] 2xl:mt-[3%]">
                      <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">
                        15-31
                      </span>
                      <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">
                        July, 2023
                      </span>
                    </div>
                    <img
                      className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] float-left"
                      src="../src/assets/Timeline1.svg"
                      alt="p"
                    />
                    <h3 className="pt-[19.5%] md:pt-[9%] lg:pt-[7%] 2xl:pt-[7%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue">
                      Open <br />
                      Registrasi <br /> Karya
                    </h3>
                    {/* <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue 2xl:mr-[9.923%]">
                        OPENING/ <br className="md:hidden"/> CLOSING <br /> CEREMONY
                      </h3> */}
                  </div>
                  <div className="pt-[1.25%] relative">
                    <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[10.25%] md:mr-[31.5%] lg:mr-[35.6%] 2xl:mr-[35%] mt-[14%] md:mt-[9%] lg:mt-[6.5%] 2xl:mt-[7.5%]">
                      <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">
                        1
                      </span>
                      <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryGreen text-center">
                        September, 2023
                      </span>
                    </div>
                    <img
                      className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                      src="../src/assets/Timeline2.svg"
                      alt="p"
                    />
                    <h3 className="pt-[23.75%] md:pt-[12.75%] lg:pt-[9.75%] 2xl:pt-[11.5%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                      Pengumuman
                      <br />
                      Pemilihan
                      <br />
                      Karya
                    </h3>
                    {/* <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen 2xl:ml-[9.923%] text-right">
                        SOCIAL <br className="md:hidden"/> IMPACT <br /> CHALLENGE
                      </h3> */}
                  </div>
                  <div className="pt-[1.25%] relative">
                    <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[35%] mt-[13%] md:mt-[9%] lg:mt-[6.56%] 2xl:mt-[8%]">
                      <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">
                        28-30
                      </span>
                      <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">
                        September, 2023
                      </span>
                    </div>
                    <img
                      className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                      src="../src/assets/Timeline3.svg"
                      alt="p"
                    />
                    <h3 className="pt-[23.85%] md:pt-[12.5%] lg:pt-[9.85%] 2xl:pt-[11.25%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange">
                      D-Day
                      <br />
                      Exhibition
                    </h3>
                    {/* <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange 2xl:mr-[9.923%]">
                        INDIVIDUAL <br className="md:hidden"/> CASE <br /> CHALLENGE
                      </h3> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto h-auto mt-20">
          <Slides className="" />
        </div>
        <div className="w-auto h-auto mt-20">
          <div className="text-center">
            <h1 className="w-auto header1-mobile lg:header1 text-primaryText">
              Submit Here
            </h1>
          </div>
          <div className="flex justify-center items-center mt-5 lg:mt-10">
            {isRegistered ? (
              <button
                disabled
                className="button-text-mobile lg:button-text bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center"
              >
                Registered
              </button>
            ) : (
              <button
                type="button"
                className="cursor-pointer button-text-mobile lg:button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
                onClick={goToRegistration}
              >
                Register Here
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center mt-28 pb-20">
          <h1 className="header1-mobile lg:header1 pb-10 text-primaryBlue text-center">
            Contact Person
          </h1>
          <ContactList line="felizhabalqis_" wa="081223216737" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exhibition;
