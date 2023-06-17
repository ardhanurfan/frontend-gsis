import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import "./style.css";

("use client");

import { Carousel } from "flowbite-react";

const AboutUs = () => {
  // const slides = [
  //     {

  //     },
  // ]
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-cover bg-[url(./assets/Background_AboutUs.svg)]">
        <div className="pt-[285px] w-[64.5vw] mx-auto text-center">
          <h1 className="w-auto mx-auto inline-block header1 text-primaryText">
            About Us
          </h1>
          <p className="mt-[75px] text-justify text-primaryText body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-[90.3vw] h-[auto] lg:h-[615px] bg-slate-100 mt-[250px] mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30 overflow-auto lg:overflow-visible">
          <div className="w-[350px] h-[450px] my-[83px] lg:ml-[59px] lg:mr-[74px] mx-auto rounded-xl lg:float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryBlue to-seccondaryBlue">
            <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600 relative">
              <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
              </div>
              <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[272px] shadow-sm shadow-slate-700 body-text">
                Nama Anggota
              </div>
            </div>
            <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
              [JABATAN JABATAN JABATAN JABATAN]
            </h3>
          </div>
          <div className="lg:pt-[98px] clear-left lg:clear-none">
            <h1 className="text-primaryText header1  text-center lg:text-start px-12 lg:px-0 lg:pr-2 mb-[37px]">
              Warm Regards
            </h1>
            <p className="text-primaryText pb-5 lg:mr-[97px] px-12 lg:px-0 body-text text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odio
              voluptatum a assumenda saepe maiores cupiditate, deleniti labore
              incidunt? Enim voluptates, itaque facere minus impedit porro
              eaque, et eos officiis dolorem assumenda ducimus. Itaque possimus
              natus animi doloremque dicta, blanditiis esse odio, nostrum nemo
              dignissimos veritatis earum, praesentium illum delectus.
            </p>
          </div>
        </div>
        <div className="w-auto h-auto">
          <div className="mt-[296px]">
            <h1 className="text-center header1 text-primaryText">Goals</h1>
            <h2 className="text-center header3 mt-[45px] text-primaryText">
              Our Vision
            </h2>
            <div className="relative mt-[31px] w-[62vw] h-[200px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
              <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
              </div>
              <p className="absolute text-primaryText body-text w-[52.5%] text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
                Fastering an environtment when student can spark innovation to
                solve the problem around them
              </p>
            </div>
            <h2 className="text-center header3 mt-[109px] text-primaryText">
              Our Mission
            </h2>
            <div className="w-[1114px] h-[303px] mx-auto -mt-[10px]">
              <Carousel slideInterval={4000} slide={false}>
                <div className="h-[200px] max-w-[945px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <p className="absolute text-primaryText body-text w-[496px] text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat doloremque, blanditiis, exercitationem ab quasi
                    voluptatibus eius incidunt optio accusamus laboriosam sint.
                    Delectus, ratione dolores? In, hic! Sint beatae repudiandae
                    odio?
                  </p>
                </div>
                <div className="h-[200px] max-w-[945px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <p className="absolute text-primaryText body-text w-[496px] text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat doloremque, blanditiis, exercitationem ab quasi
                    voluptatibus eius incidunt optio accusamus laboriosam sint.
                    Delectus, ratione dolores? In, hic! Sint beatae repudiandae
                    odio?
                  </p>
                </div>
                <div className="h-[200px] max-w-[945px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <p className="absolute text-primaryText body-text w-[496px] text-justify flex items-center h-full mx-auto top-0 bottom-0 left-0 right-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat doloremque, blanditiis, exercitationem ab quasi
                    voluptatibus eius incidunt optio accusamus laboriosam sint.
                    Delectus, ratione dolores? In, hic! Sint beatae repudiandae
                    odio?
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="w-auto h-auto">
          <div className="mt-[290px]">
            <h1 className="mx-auto text-center header1 text-primaryText">
              Timeline
            </h1>
            <div className="relative max-w-[1300px] h-[2140px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30 ">
              <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div>
                  <img
                    className=" ml-[33.3%] pt-[133px] float-left"
                    src="../src/assets/Timeline1.svg"
                    alt="p"
                  />
                  <h3 className="pt-[235px] header3 text-primaryBlue">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryBlue mr-[103px]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className=" mr-[33.3%] -mt-[40px] float-right"
                    src="../src/assets/Timeline2.svg"
                    alt="p"
                  />
                  <h3 className="pt-[155px] header3 text-primaryGreen text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryGreen mr-[103px] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className=" ml-[33.3%] -mt-[40px] float-left"
                    src="../src/assets/Timeline3.svg"
                    alt="p"
                  />
                  <h3 className="pt-[155px] header3 text-primaryOrange">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryOrange mr-[103px]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className=" mr-[33.3%] -mt-[40px] float-right"
                    src="../src/assets/Timeline4.svg"
                    alt="p"
                  />
                  <h3 className="pt-[155px] header3 text-primaryYellow text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryYellow mr-[103px] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className=" ml-[33.3%] -mt-[40px] float-left"
                    src="../src/assets/Timeline1.svg"
                    alt="p"
                  />
                  <h3 className="pt-[155px] header3 text-primaryBlue">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryBlue mr-[103px]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className=" mr-[33.3%] -mt-[40px] float-right"
                    src="../src/assets/Timeline2.svg"
                    alt="p"
                  />
                  <h3 className="pt-[155px] header3 text-primaryGreen text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryGreen mr-[103px] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className=" ml-[33.3%] -mt-[40px] float-left"
                    src="../src/assets/Timeline3.svg"
                    alt="p"
                  />
                  <h3 className="pt-[155px] header3 text-primaryOrange">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryOrange mr-[103px]">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
                <div>
                  <img
                    className=" mr-[33.3%] -mt-[40px] float-right"
                    src="../src/assets/Timeline4.svg"
                    alt="p"
                  />
                  <h3 className="pt-[155px] header3 text-primaryYellow text-right">
                    PRE-EVENT
                  </h3>
                  <h3 className="mt-[12px] header3 text-primaryYellow mr-[103px] text-right">
                    NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                    EVENT
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto w-auto mt-[120px]">
          <h1 className=" mx-auto text-center header1 text-primaryBlue">
            People Behind GSIS
          </h1>
          <div className="h-[945px] w-[1180px] mx-auto flex flex-wrap justify-evenly mt-[45px] mb-[60px]">
            <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryYellow to-seccondaryYellow mb-[50px]">
              <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600 relative">
                <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                </div>
                <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[272px] shadow-sm shadow-slate-700 body-text">
                  Nama Anggota
                </div>
              </div>
              <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                [JABATAN JABATAN JABATAN JABATAN]
              </h3>
            </div>
            <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryBlue to-seccondaryBlue mb-[50px]">
              <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600 relative">
                <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                </div>
                <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[272px] shadow-sm shadow-slate-700 body-text">
                  Nama Anggota
                </div>
              </div>
              <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                [JABATAN JABATAN JABATAN JABATAN]
              </h3>
            </div>
            <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryOrange to-seccondaryOrange mb-[50px]">
              <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600 relative">
                <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                </div>
                <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[272px] shadow-sm shadow-slate-700 body-text">
                  Nama Anggota
                </div>
              </div>
              <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                [JABATAN JABATAN JABATAN JABATAN]
              </h3>
            </div>
            <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryBlue to-seccondaryBlue mb-[50px]">
              <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600 relative">
                <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                </div>
                <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[272px] shadow-sm shadow-slate-700 body-text">
                  Nama Anggota
                </div>
              </div>
              <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                [JABATAN JABATAN JABATAN JABATAN]
              </h3>
            </div>
            <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryGreen to-seccondaryGreen mb-[10px]">
              <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600 relative">
                <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                  <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                </div>
                <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[272px] shadow-sm shadow-slate-700 body-text">
                  Nama Anggota
                </div>
              </div>
              <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                [JABATAN JABATAN JABATAN JABATAN]
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
