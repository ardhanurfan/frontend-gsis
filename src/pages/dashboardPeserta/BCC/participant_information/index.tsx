import Navbar from "../../../../components/navbar/Navbar";
import up from "../../../../assets/upload.svg";
import ContactList from "../../../../components/contact_list";
import "./style.css"

const ParticipantBCC = () => {
    return(
        <>
        <Navbar/>
            <div className="w-full h-auto overflow-auto">
                <div className="mt-[182px] mx-auto w-[1024px] border-2 border-primaryBlue rounded-lg p-5 flex flex-col gap-[5px]">
                    <div className="flex flex-col gap-[5px]">
                        <h3 className="header3 text-primaryBlue">
                            Nama
                        </h3>
                        <p className="body-text text-primaryBlue">
                            Nama Peserta
                        </p>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <h3 className="header3 text-primaryBlue">
                                Streams
                        </h3>
                        <div>
                            <span className="flex gap-2 items-center">
                                <img src="../../../../../src/assets/stream_pict.svg" alt="" />
                                <p className="small text-primaryBlue">
                                    Technology
                                </p>
                            </span>
                        </div>
                        </div>
                    <div className="flex gap-[20px] mb-[14px]">
                        <h3 className="header3 text-primaryBlue">Student ID Card</h3>
                        <div className="px-10 text-white bg-success rounded-full">
                            Accepted
                        </div>
                    </div>
                    <div className="flex gap-[20px] mb-[14px]">
                        <h3 className="header3 text-primaryBlue">Proof of Following GSIS Instagram</h3>
                        <div className="px-10 text-white bg-success rounded-full">
                            Accepted
                        </div>
                    </div>
                    <div className="flex gap-[20px] mb-[14px]">
                        <h3 className="header3 text-primaryBlue">Proof of Poster Upload</h3>
                        <div className="px-10 text-white bg-success rounded-full">
                            Accepted
                        </div>
                    </div>
                    <div className="flex gap-[20px] mb-[14px]">
                        <h3 className="header3 text-primaryBlue">Payment Proof</h3>
                        <div className="px-10 text-white bg-success rounded-full">
                            Accepted
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex mx-auto w-[1024px] justify-between mt-[30px]">
                        <h1 className="header1 text-primaryBlue">
                            Team Information
                        </h1>
                        <button className="disable-button self-center w-[204px] h-[40px] text-white button-text py-[10px] px-[50px] rounded-lg shade shadow-lg">
                            Create Team
                        </button>
                    </div>
                    <div className="mt-[20px] mx-auto w-[1024px] border-2 border-primaryBlue rounded-lg p-5 flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[5px]">
                            <h3 className="header3 text-primaryBlue">
                                Team Name
                            </h3>
                            <p className="body-text text-primaryBlue">
                                Nama Team
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-[45px] p-2 rounded-b-xl">
                            <div className="border-2 border-[#005CBA] rounded-md h-[auto]">
                                <div className="m-2">
                                    <div className="flex flex-row justify-between">
                                        <p className="text-[#015CBA] body-text">Name</p> 
                                        <div className="w-32 h-4 mr-1 rounded-2xl flex items-center justify-center bg-[#4B3979]">
                                            <p className="small text-[#FCFCFC]">Team Leader</p>
                                        </div>
                                    </div>
                                    <p className="text-[#4F9BFD] small mb-4">Dhanika Novlisariyanti</p> 
                                    <p className="text-[#015CBA] body-text">Email</p> 
                                    <p className="text-[#4F9BFD] small mb-4">13521132@std.stei.itb.ac.id</p> 
                                    <p className="text-[#015CBA] body-text">Phone Number</p> 
                                    <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p> 
                                    <div className="flex gap-3 mb-4">
                                        <div className="flex flex-col w-[120px]">
                                            <p className="text-[#015CBA] body-text">University</p> 
                                            <p className="text-[#4F9BFD] small">Institut Technology of Bandung</p> 
                                        </div>
                                        <div className="flex flex-col w-[100px]">
                                            <p className="text-[#015CBA] body-text">Major</p> 
                                            <p className="text-[#4F9BFD] small">Informatics Engineering</p> 
                                        </div>
                                        <div className="flex flex-col w-[120px]">
                                            <p className="text-[#015CBA] body-text">Year</p> 
                                            <p className="text-[#4F9BFD] small">2021/2022</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-[#005CBA] rounded-md h-[auto]">
                                <div className="m-2">
                                    <p className="text-[#015CBA] body-text">Name</p> 
                                    <p className="text-[#4F9BFD] small mb-4">Dhanika Novlisariyanti</p> 
                                    <p className="text-[#015CBA] body-text">Email</p> 
                                    <p className="text-[#4F9BFD] small mb-4">13521132@std.stei.itb.ac.id</p> 
                                    <p className="text-[#015CBA] body-text">Phone Number</p> 
                                    <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p> 
                                    <div className="flex gap-3 mb-4">
                                        <div className="flex flex-col w-[120px]">
                                            <p className="text-[#015CBA] body-text">University</p> 
                                            <p className="text-[#4F9BFD] small">Institut Technology of Bandung</p> 
                                        </div>
                                        <div className="flex flex-col w-[100px]">
                                            <p className="text-[#015CBA] body-text">Major</p> 
                                            <p className="text-[#4F9BFD] small">Informatics Engineering</p> 
                                        </div>
                                        <div className="flex flex-col w-[120px]">
                                            <p className="text-[#015CBA] body-text">Year</p> 
                                            <p className="text-[#4F9BFD] small">2021/2022</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-[#005CBA] rounded-md h-[auto]">
                                <div className="m-2">
                                    <p className="text-[#015CBA] body-text">Name</p> 
                                    <p className="text-[#4F9BFD] small mb-4">Dhanika Novlisariyanti</p> 
                                    <p className="text-[#015CBA] body-text">Email</p> 
                                    <p className="text-[#4F9BFD] small mb-4">13521132@std.stei.itb.ac.id</p> 
                                    <p className="text-[#015CBA] body-text">Phone Number</p> 
                                    <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p> 
                                    <div className="flex gap-3 mb-4">
                                        <div className="flex flex-col w-[120px]">
                                            <p className="text-[#015CBA] body-text">University</p> 
                                            <p className="text-[#4F9BFD] small">Institut Technology of Bandung</p> 
                                        </div>
                                        <div className="flex flex-col w-[100px]">
                                            <p className="text-[#015CBA] body-text">Major</p> 
                                            <p className="text-[#4F9BFD] small">Informatics Engineering</p> 
                                        </div>
                                        <div className="flex flex-col w-[120px]">
                                            <p className="text-[#015CBA] body-text">Year</p> 
                                            <p className="text-[#4F9BFD] small">2021/2022</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-14">
                    <h2 className="header2 text-primaryText mb-9">
                        If you’re having trouble, please contact
                    </h2>
                    <ContactList />
                </div>
            </div>
        </>
    )
}

export default ParticipantBCC;