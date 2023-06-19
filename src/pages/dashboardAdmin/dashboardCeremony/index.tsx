import "./style.css";
import toa from "../../../assets/toa.svg";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer";

const DashboardCeremony = () => {
  return (
    <>
      <Navbar/>
      <div className="w-full h-auto bg-[#FCFCFC]">
        <h1 className="w-auto ml-14 mt-32 mb-10 inline-block header1 text-primaryText">
          Ceremony Participant
        </h1>
        <div className="px-14 w-full h-auto flex">
          <div className="ml-0 grid grid-cols-2 gap-y-6 gap-x-16">
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
            <details className="w-[530px] hover:cursor-pointer rounded-xl">
              <summary className="w-auto h-auto text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-6 pt-4 pb-2 mx-auto flex items-center justify-between shadow-lg hover:">
                <div className="w-auto h-auto flex flex-col items-center">
                  <h2 className="header2 mb-2">Participant Name</h2>
                  <div className="w-20 h-4 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
              </summary>
              <div className="w-auto h-auto bg-white rounded-b-xl flex flex-col justify-between shadow-lg px-10 py-5">
                <p className="header3 text-[#015CBA] mb-3">Profile</p>
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">
                  Dhanika Novlisariyanti
                </p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">
                  13521132@std.stei.itb.ac.id
                </p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                <div className="flex gap-3 mb-4">
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">University</p>
                    <p className="text-[#4F9BFD] small">
                      Institut Technology of Bandung
                    </p>
                  </div>
                  <div className="flex flex-col w-[100px]">
                    <p className="text-[#015CBA] body-text">Major</p>
                    <p className="text-[#4F9BFD] small">
                      Informatics Engineering
                    </p>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <p className="text-[#015CBA] body-text">Year</p>
                    <p className="text-[#4F9BFD] small">2021/2022</p>
                  </div>
                </div>
                <p className="header3 text-[#015CBA] mb-3">Works</p>
                <p className="text-[#015CBA] body-text">Category</p>
                <p className="text-[#4F9BFD] small">Masterpiece</p>
              </div>
            </details>
          </div>
        </div>
        <div className="w-full h-auto flex justify-end">
          <button>
            <img src={toa} alt="" className="w-[80px] h-[80px] mr-6" />
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DashboardCeremony;
