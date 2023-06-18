import "./style.css"
import toa from "../../../assets/toa.svg"
import up from "../../../assets/upload.svg";

const DashboardGSIC = () => {
    return (
        <>
        <div className="flex flex-col justify-center py-4 bg-[#FCFCFC]">
            <h1 className="pt-[100px] text-7xl font-bold text-left text-[#005CBA] title mb-10 pl-40">
            GSIC Participant
            </h1>
            <div className="mt-2 space-y-4">

            <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
                <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-col">
                    <div className="w-auto h-auto flex flex-row items-center">
                        <h2 className="header2 mb-2">Team Name</h2>
                        <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                            <p className="small text-[#FCFCFC]">ACTIVE</p>
                        </div>
                    </div>
                    <p className="text-sm ml-2">Team Id</p>
                </div>
                </summary>
                <div className="grid grid-cols-3 gap-3 p-2 shadow-2xl rounded-b-xl">
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
            <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
                <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-col">
                    <div className="w-auto h-auto flex flex-row items-center">
                        <h2 className="header2 mb-2">Team Name</h2>
                        <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                            <p className="small text-[#FCFCFC]">ACTIVE</p>
                        </div>
                    </div>
                    <p className="text-sm ml-2">Team Id</p>
                </div>
                </summary>
                <div className="grid grid-cols-3 gap-3 p-2 shadow-2xl rounded-b-xl">
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
            <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
                <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-col">
                    <div className="w-auto h-auto flex flex-row items-center">
                        <h2 className="header2 mb-2">Team Name</h2>
                        <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                            <p className="small text-[#FCFCFC]">ACTIVE</p>
                        </div>
                    </div>
                    <p className="text-sm ml-2">Team Id</p>
                </div>
                </summary>
                <div className="grid grid-cols-3 gap-3 p-2 shadow-2xl rounded-b-xl">
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
            <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
                <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-col">
                    <div className="w-auto h-auto flex flex-row items-center">
                        <h2 className="header2 mb-2">Team Name</h2>
                        <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                            <p className="small text-[#FCFCFC]">ACTIVE</p>
                        </div>
                    </div>
                    <p className="text-sm ml-2">Team Id</p>
                </div>
                </summary>
                <div className="grid grid-cols-3 gap-3 p-2 shadow-2xl rounded-b-xl">
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
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
                            <div className="w-[240px] h-auto">
                                <div className="small text-[#015CBA] flex gap-1 mb-2">
                                    Student ID Card
                                    <img src = {up} className="h-[14px]"/>
                                </div>
                                <div className="flex gap-1">
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                                        <p className="small text-[#FCFCFC]">Decline</p>
                                    </button>
                                    <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                                        <p className="small text-[#FCFCFC]">Accept</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
            </div>
            <div className="fixed bottom-16 right-6">
                <button>
                    <img src={toa} alt="" className="w-[80px] h-[80px] mr-6"/>
                </button>
            </div>
        </div>
        </>
    )
}

export default DashboardGSIC;