import Footer from "../../../components/footer";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";

const ProfilePeserta = () => {
  return (
    <>
      <NavbarDashboard></NavbarDashboard>
      <div className="w-full h-auto">
        <div className="pt-[195px] w-[85vw] mx-auto">
          <h1 className="header1 text-center lg:text-start text-primaryBlue">
            Profile
          </h1>
          <div className="flex justify-center lg:justify-end mt-[27px] lg:mt-0">
            <button className="button-text normal-button text-white bg-primaryBlue">
              Edit
            </button>
          </div>
          <div className="clear-both flex flex-col gap-[30px] items-center lg:items-start lg:flex-row justify-between mt-[27px] mb-[67px]">
            <div className="bg-[url(../../../src/assets/placeholder_picture.svg)] h-[250px] w-[250px] rounded-full shrink-0"></div>
            <div className="h-[561px] lg:w-[908px] w-auto bg-slate-100 bg-opacity-30 shadow-sm rounded-lg border-primaryBlue border-2 shadow-slate-700 flex flex-col gap-3 pt-[19px] px-[1.32%]">
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">Nama</h3>
                <p className="body-text text-primaryBlue">Nama Peserta</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">Email</h3>
                <p className="body-text text-primaryBlue">Email Peserta</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">Phone Number</h3>
                <p className="body-text text-primaryBlue">+62XXXXXXXXXXX</p>
              </div>
              <div className="flex lg:gap-[11.78%] lg:flex-row gap-3 flex-col flex-wrap">
                <div className="flex flex-col gap-[5px]">
                  <h3 className="header3 text-primaryBlue">University</h3>
                  <p className="body-text text-primaryBlue">
                    Bandung Institute of Technology
                  </p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="header3 text-primaryBlue">Major</h3>
                  <p className="body-text text-primaryBlue">
                    Informatics engineering
                  </p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="header3 text-primaryBlue">Year</h3>
                  <p className="body-text text-primaryBlue">2022/2023</p>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">Event</h3>
                <div className="flex flex-wrap gap-6">
                  <div className="body-text bg-primaryGreen text-white rounded-full py-px px-[33px]">
                    Exhibition
                  </div>
                  <div className="body-text bg-primaryYellow text-white rounded-full py-px px-[33px]">
                    Ceremony
                  </div>
                  <div className="body-text bg-primaryBlue text-white rounded-full py-px px-[33px]">
                    GSIC
                  </div>
                  <div className="body-text bg-primaryOrange text-white rounded-full py-px px-[33px]">
                    BCC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProfilePeserta;
