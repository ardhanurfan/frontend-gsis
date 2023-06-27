import Footer from "../../../components/footer/index";
import Navbar from "../../../components/navbar/Navbar";
import React, { useState } from "react";
import UploadFile from "../../../components/upload-file/upload-file";
import "./style.css"

const RegistrationExhibition = () => {
    const [charCount, setCharCount] = useState("");
    const handleChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
    setCharCount(e.target.value);
    };
    return (
        <>
            <Navbar/>
            <div className="mt-32 mb-10 px-10 xl:px-10 ">
                <div className="kelas-bayangan relative bg-white w-full h-[auto] rounded-2xl ">
                    <div className="h-auto w-[38px] flex justify-between absolute m-[2%] lg:m-[2%]">
                        <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                        <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                        <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                    </div>
                    <h1 className="header1-mobile lg:header1 text-primaryBlue text-center py-10">EXHIBITION</h1>
                    <div className="flex flex-col lg:flex-row justify-between px-10 gap-3 xl:gap-5">
                        <div className="w-full flex flex-col lg:pl-20 gap-5">
                            <form action="" className="">
                                <label className="category">
                                    <span className="body-text text-primaryText block text-left">Category <span className="text-red-600">*</span></span>
                                    <input
                                        type="text"
                                        id="text"
                                        placeholder="Enter Category"
                                        className="w-full h-10 lg:h-[60px] block py-2 text-sm rounded-md bg-slate-100 focus:placeholder-[#4F9BFD] border-none placeholder:text-seccondaryBlue"
                                    />
                                </label>
                            </form>
                            <div>
                                <h2 className="body-text text-primaryText text-left">Description<span className=" text-error"> *</span></h2>
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

                        <div className="w-full flex flex-col gap-5 px-10 lg:pr-20">
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-5 lg:gap-5">
                                <label htmlFor="" className="md:px-10">
                                    <span className="block text-left text-[#015CBA] body-text">
                                    Year Created <span className="text-error">*</span></span>
                                    <div className="kicik relative h-10 lg:h-[60px] flex justify-start w-ful">
                                        <select className="small w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg flex items-center justify-between"
                                        name="select"
                                        id="format">
                                            <option className="text-seccondaryBlue " selected disabled>
                                            YYYY
                                            </option>
                                            <option value="2020">2017</option>
                                            <option value="2020">2018</option>
                                            <option value="2020">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                        </select>
                                    </div>
                                </label>
                                <div className="w-ful flex gap-5">
                                    <form action="" className="">
                                        <label className="title">
                                            <span className="body-text text-primaryText block text-left">Width <span className="text-red-600">*</span></span>
                                            <input type="text" id="text" placeholder="1080" className="w-full h-10 lg:h-[60px] block py-2 text-sm rounded-md bg-slate-100 focus:placeholder-[#4F9BFD] border-none placeholder:text-seccondaryBlue"/>
                                        </label>
                                    </form>
                                    <form action="" className="">
                                        <label className="title">
                                            <span className="body-text text-primaryText block text-left">Height <span className="text-red-600">*</span></span>
                                            <input type="text" id="text" placeholder="1920" className="w-full h-10 lg:h-[60px] block py-2 text-sm rounded-md bg-slate-100 focus:placeholder-[#4F9BFD] border-none placeholder:text-seccondaryBlue"/>
                                        </label>
                                    </form>
                                </div>
                            </div>

                            <div className="mx-auto w-[70%]">
                                <span className="body-text text-primaryText block text-left">Photo / Video <span className="text-red-600">*</span></span>
                                <div className="flex flex-col items-center">
                                    <h3 className="py-2 text-primaryBlue text-center header3-mobile lg:header3">UPLOAD FILES</h3>
                                    <div className="w-full">
                                        <UploadFile/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-5">
                        <button className="bg-primaryBlue object-center rounded-lg px-5 py-1 text-white w-[auto] button-text-mobile lg:button-text">Submit</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RegistrationExhibition;