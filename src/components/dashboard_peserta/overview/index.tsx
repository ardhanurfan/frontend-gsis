import { useEffect, useState } from "react";
import AnnouncementCard from "./card";
import "./style.css";
import { getWithAuth } from "../../../API/api";

const Overview = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("access_token");

  const getData = async () => {
    if (token) {
      try {
        const response = await getWithAuth("announcement-by-user", token);
        setData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="w-[90vw] mx-auto px-[5.681%] lg:px-[70px] pb-24">
        <h1 className="pt-[130px] lg:pt-[130px] text-center lg:text-start header1-mobile lg:header1 text-primaryText mb-[30px] lg:mb-[20px]">
          Announcement
        </h1>
        {data.map((row: any) => {
          var dateFormat = new Date(row.updated_at);
          var date =
            dateFormat.getDate() +
            "/" +
            (dateFormat.getMonth() + 1) +
            "/" +
            dateFormat.getFullYear() +
            " " +
            dateFormat.getHours() +
            ":" +
            dateFormat.getMinutes() +
            ":" +
            dateFormat.getSeconds();

          var desc = row.description.split("\n").map(function (item: string) {
            return (
              <span>
                {item}
                <br />
              </span>
            );
          });
          return (
            <AnnouncementCard
              title={row.title}
              date={date}
              content={desc}
              link={row.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default Overview;
