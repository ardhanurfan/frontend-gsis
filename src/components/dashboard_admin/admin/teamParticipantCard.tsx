import { useState } from "react";
import { post } from "../../../API/api";
import up from "../../../assets/upload.svg";
import Status from "../../dashboard_peserta/bcc/status";

interface TeamParticipantCardProps {
    id: string,
    leader_id:number,
    user_id_1:number,
    user_id_2:number,
    name:string;
    email:string;
    phone:string;
    university:string;
    major:string;
    year:string;
    url:string;
    approve:string;
}

const TeamParticipantCard = ({id,leader_id,user_id_1,user_id_2,name,email,phone,university,major,year,url,approve}:TeamParticipantCardProps) => {
    const[visible,setVisible] =useState(approve);
    const postData = async (approve:string, approve_idk:string) => {
        try{
          const response = await post("edit-gsic-admin",{
            leader_id:leader_id,
            user_id_1:user_id_1,
            user_id_2:user_id_2,
            [approve_idk]:approve,
          })
          console.log(response);
        }catch(error){
          console.log(error);
        }
      }
    return(
        <div className="border-2 border-[#005CBA] rounded-md h-[auto]">
                <div className="m-2">
                <p className="text-[#015CBA] body-text">Name</p>
                <p className="text-[#4F9BFD] small mb-4">{name}</p>
                <p className="text-[#015CBA] body-text">Email</p>
                <p className="text-[#4F9BFD] small mb-4">{email}</p>
                <p className="text-[#015CBA] body-text">Phone Number</p>
                <p className="text-[#4F9BFD] small mb-4">{phone}</p>
                <div className="flex gap-3 mb-4">
                    <div className="flex flex-col w-[120px]">
                        <p className="text-[#015CBA] body-text">University</p>
                        <p className="text-[#4F9BFD] small">
                        {university}
                        </p>
                    </div>
                    <div className="flex flex-col w-[100px]">
                        <p className="text-[#015CBA] body-text">Major</p>
                        <p className="text-[#4F9BFD] small">
                        {major}
                        </p>
                    </div>
                    <div className="flex flex-col w-[120px]">
                        <p className="text-[#015CBA] body-text">Year</p>
                        <p className="text-[#4F9BFD] small">{year}</p>
                    </div>
                </div>
                <div className="w-[240px] h-auto mb-2">
                    <div className="small text-[#015CBA] flex gap-1 mb-1">
                        <a href={url} className="hover:underline">Student ID Card</a>
                        <img src={up} className="h-[14px]" />
                    </div>
                    <div className="flex gap-1">
                        {visible == "WAITING" ? 
                        <>
                            <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("REJECTED", "approve-ktm-"+id); setVisible("REJECTED")}}>Decline</button> 
                            <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("ACCEPTED", "approve-ktm-"+id); setVisible("ACCEPTED")}}>Accept</button>
                        </> 
                        : <Status status={visible}/> }
                    </div>
                </div>
                <div className="w-[240px] h-auto mb-2">
                    <div className="small text-[#015CBA] flex gap-1 mb-1">
                        <a href={url} className="hover:underline">Proof of Following GSIS Instagram</a>
                        <img src={up} className="h-[14px]" />
                    </div>
                    <div className="flex gap-1">
                        {visible == "WAITING" ? 
                        <>
                            <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("REJECTED", "approve-follow-"+id); setVisible("REJECTED")}}>Decline</button> 
                            <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("ACCEPTED", "approve-follow-"+id); setVisible("ACCEPTED")}}>Accept</button>
                        </> 
                        : <Status status={visible}/> }
                    </div>
                </div>
                <div className="w-[240px] h-auto mb-2">
                    <div className="small text-[#015CBA] flex gap-1 mb-1">
                        <a href={url} className="hover:underline">Proof of Poster Upload</a>
                        <img src={up} className="h-[14px]" />
                    </div>
                    <div className="flex gap-1">
                        {visible == "WAITING" ? 
                        <>
                            <button className="w-auto bg-error text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("REJECTED", "approve-poster-"+id); setVisible("REJECTED")}}>Decline</button> 
                            <button className="w-auto bg-success text-white button-text-mobile md:button-text rounded-lg px-2 hover:scale-105" onClick={() => {postData("ACCEPTED", "approve-poster-"+id); setVisible("ACCEPTED")}}>Accept</button>
                        </> 
                        : <Status status={visible}/> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamParticipantCard;