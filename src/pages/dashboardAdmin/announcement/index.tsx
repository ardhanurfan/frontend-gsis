import "./style.css";
import React, { useState } from "react";

const Announcement = () => {
  const [charCount, setCharCount] = useState("");
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCharCount(e.target.value);
  };
  return (
    <>
      {/* <div className="w-full h-screen bg-[url(./src/assets/dashboard_overview.svg)] bg-cover"></div> */}
      <div className="fixed bg-primaryBlue bg-opacity-30 w-screen h-screen z-0 flex items-center justify-center">
          <div className="fixed bg-white w-[80%] mx-auto h-auto rounded-2xl z-10 text-center">
            <h1 className="text-[#015CBA] header1 w-auto pt-5">
              CREATE ANNOUNCEMENT
            </h1>
            <div className="pt-5 grid grid-cols-2 gap-1">
              <div>
                <form action="" className="px-20">
                  <label className="title">
                    <span className="body-text text-primaryText block text-left">
                      Title <span className="text-red-600">*</span>
                    </span>
                    <input
                      type="text"
                      id="text"
                      placeholder="Text"
                      className="w-full h-[60px] block px- py-2 text-sm rounded-md bg-slate-100 focus:placeholder-[#4F9BFD] border-none placeholder:text-seccondaryBlue"
                    />
                  </label>
                </form>
              </div>

              <div>
                <label htmlFor="">
                  <span className="block text-left text-[#015CBA] font-semibold">
                    Type
                  </span>
                  <div className="select relative h-[60px] flex w-full pr-52">
                    <select
                      className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg flex items-center justify-between"
                      name="select"
                      id="format"
                    >
                      <option className="text-seccondaryBlue" selected disabled>
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

              <div>
                <div className="w-full px-20">
                  <h2 className="body-text text-primaryText text-left">
                    Description<span className=" text-error"> *</span>
                  </h2>
                  <textarea
                    value={charCount}
                    onChange={(e) => handleChange(e)}
                    name=""
                    id=""
                    placeholder="Desctiption"
                    className="text-area w-full h-[295px] resize-none text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none"
                  ></textarea>
                  <p className="text-seccondaryBlue text-xs font-medium text-right">
                    {charCount.length}/150
                  </p>
                </div>
              </div>

              <div className="mt-10 mb-5 w-full h-auto col-span-2">
                <div className="grid grid-cols-2">
                  <div className="pr-80">
                    <button className="bg-[#BD1B1B] w-auto h-auto text-white rounded-lg hover:bg-red-600">
                      <div className="m-2 px-2">Cancel</div>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-0">
                    <div className="px-16">
                      <button className="bg-primaryBlue w-auto h-auto text-white rounded-lg shadow-lg hover:bg-seccondaryBlue">
                        <div className="m-2 px-2">Save</div>
                      </button>
                    </div>
                    <div className="px-10">
                      <button className="bg-white w-auto h-auto rounded-lg border-2 border-[#005CBA] text-[#005CBA] shadow-lg hover:bg-slate-300">
                        <div className="m-2">Announce Now</div>
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
