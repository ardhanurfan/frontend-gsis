import { useEffect, useState } from "react";
import AnnouncementCard from "./card";
import "./style.css";
import { getWithAuth } from "../../../API/api";

const Overview = () => {
  const[data,setData] = useState([]);

  const token = localStorage.getItem("access_token");

  const getData = async () => {
    if(token){
      try{
        const response = await getWithAuth("announcement-by-user",token);
        setData(response?.data?.data);
      }catch(error){
        console.log(error);
      }
    }
  };

  useEffect (() => {
    getData();
  },[]);
  return (
    <>
      <div className="w-[90vw] mx-auto px-[5.681%] lg:px-[70px] pb-24">
        <h1 className="pt-[130px] lg:pt-[130px] text-center lg:text-start header1-mobile lg:header1 text-primaryText mb-[30px] lg:mb-[20px]">
          Announcement
        </h1>
        {data.map((row:any) => {
          return (
            <AnnouncementCard
            title={row.title}
            date="12/12/22 10:12:02"
            content={row.description}
          />
          )
        })}
      </div>
    </>
  );
};

export default Overview;
