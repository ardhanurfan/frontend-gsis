import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./style.css";
import UploadFile from "../../../../components/dashboard_peserta/exhibition/edit_submission/upload-file";

const EditSubmissionExhibition = () => {
  const [charCount, setCharCount] = useState("");
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCharCount(e.target.value);
  };

  const notifySuccess = () => toast.success("Succesfully submitted");
  const notifyFailed = () => toast.error("Failed to Submit");

  return (
    <>
      <div className="w-full px-[149px] pt-[200px] pb-[60px]">
        <h1 className="header1 text-primaryText mb-[54px] text-center">
          Edit Submission
        </h1>
        <div className=" flex justify-between mb-[40px]">
          <form action="" className="w-2/5">
            <label
              htmlFor="category"
              className=" body-text text-primaryBlue block mb-[5px]"
            >
              Category <span className=" text-error">*</span>
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter Category"
              className=" text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none w-full p-[13px]"
            />
          </form>
          <div className="flex">
            <div>
              <h2 className="body-text text-primaryText mb-[5px]">
                Year Created <span className=" text-error">*</span>
              </h2>
              <div className="select flex justify-center relative min-w-[100px] mr-16">
                <select
                  className=" w-full body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-none rounded-lg appearance-none"
                  name="year"
                  id="year"
                  required
                >
                  <option className="text-seccondaryBlue" selected disabled>
                    xxxx
                  </option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
            <form action="" className="mr-4">
              <label
                htmlFor="width"
                className=" body-text text-primaryBlue block mb-[5px]"
              >
                Width <span className=" text-error">*</span>
              </label>
              <input
                type="text"
                id="width"
                placeholder="1080"
                className=" text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none w-[100px] p-[13px]"
              />
            </form>
            <form action="">
              <label
                htmlFor="height"
                className=" body-text text-primaryBlue block mb-[5px]"
              >
                Height <span className=" text-error">*</span>
              </label>
              <input
                type="text"
                id="height"
                placeholder="1920"
                className=" text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none w-[100px] p-[13px]"
              />
            </form>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-2/5">
            <h2 className="body-text text-primaryText mb-[5px]">
              Description <span className=" text-error">*</span>
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
          <div className="w-2/5">
            <h2 className=" body-text text-primaryText mb-[5px] text-start">
              Photo/Video <span className=" text-error">*</span>
            </h2>
            <div className="pt-[14px]px-[40px] flex flex-col items-center">
              <h3 className="header3 text-primaryText mb-3">UPLOAD FILES</h3>
              <UploadFile />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[100px]">
          <a
            className="cursor-pointer bg-error hover:bg-red-500 text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center"
            href=""
          >
            Cancel
          </a>
          <button
            onClick={notifySuccess}
            className="cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center"
          >
            SAVE
          </button>
          <Toaster />
        </div>
        <div className="flex flex-col items-center mt-14">
          <h2 className="header2 text-primaryText mb-9">
            If you’re having trouble, please contact
          </h2>
          <h2 className="header1">LIST CONTACT</h2>
        </div>
      </div>
    </>
  );
};

export default EditSubmissionExhibition;
