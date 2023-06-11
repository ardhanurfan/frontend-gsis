import "./style.css"

'use client';

import { Carousel } from "flowbite-react";

const AboutUs = () => {
    // const slides = [
    //     {
            
    //     },
    // ]
    return(
        <div className="w-full h-auto bg-cover bg-[url(./assets/Background_AboutUs.svg)]">
        <div className="font-montserrat relative pt-[285px] w-[928px] mx-auto text-center">
            <h1 className="w-auto font-bold mx-auto inline-block text-6xl text-[#005CBA]">
                About Us
            </h1>
            <p className="mt-[75px] text-justify text-[#005CBA] font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
        </div>
        <div className="w-[1300px] h-[615px] relative bg-slate-100 mt-[250px] mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30">
            <div className="w-[350px] h-[450px] bg-blue-700 my-[83px] ml-[59px] mr-[74px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-[#005CBA] to-[#4F9BFD]">
                <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600">
                    <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                </div>
                <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                    [JABATAN JABATAN
                    JABATAN JABATAN]
                </h6>
            </div>
            <div className="relative pt-[98px]">
                <h1 className="relative text-[#005CBA] font-bold text-[64px] mb-[37px]">Warm Regards</h1>
                <p className="text-[#005CBA] mr-[97px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
        </div>
        <div className="w-auto h-auto relative">
            <div className="mt-[296px]">
                <h1 className="text-center text-[64px] font-bold text-[#005CBA]">Goals</h1>
                <h2 className="text-center text-[24px] font-bold mt-[45px] text-[#005CBA]">Our Vision</h2>
                <div className="mt-[31px] w-[945px] h-[200px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30 flex justify-center items-center">
                    <p className="text-[#005CBA] w-[496px]">
                        Fastering an environtment when student can spark innovation to solve the problem around them
                    </p>
                </div>
                <h2 className="text-center text-[24px] font-bold mt-[109px] text-[#005CBA]">Our Mission</h2>
                <div className="w-[1114px] h-[303px] mx-auto relative -top-[10px]">
                    <Carousel slideInterval={4000}>
                        <div className="h-[200px] max-w-[945px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30 flex justify-center items-center">
                            <p className="text-[#005CBA] w-[496px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque, blanditiis, exercitationem ab quasi voluptatibus eius incidunt optio accusamus laboriosam sint. Delectus, ratione dolores? In, hic! Sint beatae repudiandae odio?
                            </p>
                        </div>
                        <div className="h-[200px] max-w-[945px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30 flex justify-center items-center">
                            <p className="text-[#005CBA] w-[496px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque, blanditiis, exercitationem ab quasi voluptatibus eius incidunt optio accusamus laboriosam sint. Delectus, ratione dolores? In, hic! Sint beatae repudiandae odio?
                            </p>
                        </div>
                        <div className="h-[200px] max-w-[945px] rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30 flex justify-center items-center">
                            <p className="text-[#005CBA] w-[496px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque, blanditiis, exercitationem ab quasi voluptatibus eius incidunt optio accusamus laboriosam sint. Delectus, ratione dolores? In, hic! Sint beatae repudiandae odio?
                            </p>
                        </div>
                    </Carousel>
                </div>
            </div> 
        </div>
        <div className="w-auto h-auto">
            <div className="mt-[290px]">
                <h1 className="mx-auto text-center text-[64px] font-bold text-[#005CBA]">Timeline</h1>
                <div className="max-w-[1300px] h-[2140px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30 ">
                    <div>
                        <img className=" ml-[33.3%] pt-[133px] float-left" src="../src/assets/Timeline1.svg" alt="p" />
                        <h1 className="pt-[235px] header3 text-primaryBlue">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryBlue mr-[103px]">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                    <div>
                        <img className=" mr-[33.3%] -mt-[40px] float-right" src="../src/assets/Timeline2.svg" alt="p" />
                        <h1 className="pt-[155px] header3 text-primaryGreen text-right">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryGreen mr-[103px] text-right">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                    <div>
                        <img className=" ml-[33.3%] -mt-[40px] float-left" src="../src/assets/Timeline3.svg" alt="p" />
                        <h1 className="pt-[155px] header3 text-primaryOrange">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryOrange mr-[103px]">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                    <div>
                        <img className=" mr-[33.3%] -mt-[40px] float-right" src="../src/assets/Timeline4.svg" alt="p" />
                        <h1 className="pt-[155px] header3 text-primaryYellow text-right">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryYellow mr-[103px] text-right">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                    <div>
                        <img className=" ml-[33.3%] -mt-[40px] float-left" src="../src/assets/Timeline1.svg" alt="p" />
                        <h1 className="pt-[155px] header3 text-primaryBlue">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryBlue mr-[103px]">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                    <div>
                        <img className=" mr-[33.3%] -mt-[40px] float-right" src="../src/assets/Timeline2.svg" alt="p" />
                        <h1 className="pt-[155px] header3 text-primaryGreen text-right">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryGreen mr-[103px] text-right">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                    <div>
                        <img className=" ml-[33.3%] -mt-[40px] float-left" src="../src/assets/Timeline3.svg" alt="p" />
                        <h1 className="pt-[155px] header3 text-primaryOrange">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryOrange mr-[103px]">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                    <div>
                        <img className=" mr-[33.3%] -mt-[40px] float-right" src="../src/assets/Timeline4.svg" alt="p" />
                        <h1 className="pt-[155px] header3 text-primaryYellow text-right">
                            PRE-EVENT
                        </h1>
                        <h2 className="mt-[12px] header3 text-primaryYellow mr-[103px] text-right">
                            NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-auto w-auto mt-[120px]">
            <h1 className=" mx-auto text-center text-[64px] font-bold text-primaryBlue">
                People Behind GSIS
            </h1>
            <div className="h-[945px] w-[1180px] mx-auto flex flex-wrap justify-evenly mt-[45px]">
                <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryYellow to-seccondaryYellow mb-[50px]">
                    <div className="inner-card-yellow h-[350px] rounded-xl shadow-md shadow-slate-600">
                        <div className="badge-name-yellow w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                    </div>
                    <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                        [JABATAN JABATAN
                        JABATAN JABATAN]
                    </h6>
                </div>
                <div className="w-[350px] h-[450px] bg-blue-700 rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-[#005CBA] to-[#4F9BFD] mb-[50px]">
                    <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600">
                        <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                    </div>
                    <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                        [JABATAN JABATAN
                        JABATAN JABATAN]
                    </h6>
                </div>
                <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryOrange to-seccondaryOrange mb-[50px]">
                    <div className="inner-card-red h-[350px] rounded-xl shadow-md shadow-slate-600">
                        <div className="badge-name-red w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                    </div>
                    <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                        [JABATAN JABATAN
                        JABATAN JABATAN]
                    </h6>
                </div>
                <div className="w-[350px] h-[450px] bg-blue-700 rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-[#005CBA] to-[#4F9BFD] mb-[50px]">
                    <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600">
                        <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                    </div>
                    <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                        [JABATAN JABATAN
                        JABATAN JABATAN]
                    </h6>
                </div>
                <div className="w-[350px] h-[450px] rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-primaryGreen to-seccondaryGreen mb-[10px]">
                    <div className="inner-card-green h-[350px] rounded-xl shadow-md shadow-slate-600">
                        <div className="badge-name-green w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                    </div>
                    <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                        [JABATAN JABATAN
                        JABATAN JABATAN]
                    </h6>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default AboutUs;