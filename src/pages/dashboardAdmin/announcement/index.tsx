import { AnnouncementContext } from "./announcementContext";
import "./style.css";
import React, { useContext, useState } from "react";

const Announcement = () => {
  const [charCount, setCharCount] = useState("");
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCharCount(e.target.value);
  };

  const announContext = useContext(AnnouncementContext);

  return (
    <>
      {/* {isAnnounce?  */}
      <div className="fixed bg-primaryBlue bg-opacity-30 w-screen h-screen z-50 flex items-center justify-center">
          <div className="fixed bg-white w-[70%] mx-auto h-auto rounded-2xl z-70 text-center">
            <h1 className="text-[#015CBA] header1-mobile xl:header1 w-auto pt-5">
              CREATE ANNOUNCEMENT
            </h1>
            <div className="flex flex-col">
              <div className="pt-5 px-10 xl:px-32 flex flex-col lg:flex-row justify-between gap-0 lg:gap-5 ">
                <div className="w-full">
                  <form action="" className="">
                    <label className="title">
                      <span className="body-text text-primaryText block text-left">
                        Title <span className="text-red-600">*</span>
                      </span>
                      <input
                        type="text"
                        id="text"
                        placeholder="Text"
                        className="w-full h-10 lg:h-[60px] block py-2 text-sm rounded-md bg-slate-100 focus:placeholder-[#4F9BFD] border-none placeholder:text-seccondaryBlue"
                      />
                    </label>
                  </form>
                  <div className="w-full">
                    <h2 className="body-text text-primaryText text-left">
                      Description<span className=" text-error"> *</span>
                    </h2>
                    <textarea
                      value={charCount}
                      onChange={(e) => handleChange(e)}
                      name=""
                      id=""
                      placeholder="Desctiption"
                      className="text-area w-full h-20 lg:h-[200px] resize-none text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none"
                    ></textarea>
                    <p className="text-seccondaryBlue text-xs font-medium text-right">
                      {charCount.length}/150
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="">
                    <span className="block text-left text-[#015CBA] font-semibold">
                      Type
                    </span>
                    <div className="select relative h-10 lg:h-[50px] flex justify-start w-[250px]">
                      <select
                        className="small w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg flex items-center justify-between"
                        name="select"
                        id="format"
                      >
                        <option className="text-seccondaryBlue " selected disabled>
                          Choose type
                        </option>
                        <option value="BCC">BCC</option>
                        <option value="Ceremony">Ceremony</option>
                        <option value="Exhibition">Exhibition</option>
                        <option value="GSIC">GSIC</option>
                      </select>
                    </div>
                  </label>
                </div>  
              </div>
              <div className="px-20 py-10">
                  <div className=" flex flex-col gap-5 sm:gap-10 sm:flex-row justify-between pt-10 pb-5 w-full h-auto">
                    <div className="">
                      <button className="bg-error w-auto h-auto text-white rounded-lg hover:bg-red-600" onClick={() => announContext?.setAnnounce(false)}>
                        <div className="button-text-mobile lg:button-text p-2 px-5">Cancel</div>
                      </button>
                    </div>
                    <div className="flex flex-row justify-center gap-10">
                      <div className="">
                        <button className="bg-primaryBlue w-auto h-auto text-white rounded-lg shadow-lg hover:bg-seccondaryBlue">
                          <div className="button-text-mobile lg:button-text p-2 px-5">Save</div>
                        </button>
                      </div>
                      <div className="">
                        <button className="bg-white w-auto h-auto rounded-lg border-2 border-[#005CBA] text-[#005CBA] shadow-lg hover:bg-slate-300">
                          <div className="button-text-mobile lg:button-text p-2">Announce Now</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
      </div> 
    </>
  );
};

export default Announcement;
