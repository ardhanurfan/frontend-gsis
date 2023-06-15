import "./style.css"

const Announcement = () => {
    return (
        <>
            {/* <div className="w-full h-screen bg-[url(./src/assets/dashboard_overview.svg)] bg-cover"></div> */}
            <div className="bg-[#005CBA] w-full h-[1011px] z-0">
                <div className="px-32 pt-14 ">
                    <div className="bg-white w-full h-[813px] rounded-xl z-10 text-center">
                        <h1 className="text-[#015CBA] header1 w-auto mx-auto pt-5">CREATE ANNOUNCEMENT</h1>
                        <div className="pt-10 grid grid-cols-2 gap-1">
                            <div>
                                <form action="" className="px-20">
                                    <label className="title">
                                        <span className="block text-left font-semibold">Title <span className="text-red-600">*</span></span>
                                        <input type="text" id="text" placeholder="Text" className="w-full h-[60px] block px- py-2 text-sm shadow rounded-md bg-[#F2F4FF] focus:placeholder-[#4F9BFD]"/>
                                    </label>
                                </form>
                            </div>

                            <div>
                                <label htmlFor="">
                                    <span className="block text-left font-semibold">Type</span>
                                    <div className="select h-[60px] flex w-full pr-52">
                                        <select className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg flex items-center justify-between" name="select" id="format">
                                            <option className="text-seccondaryBlue" selected disabled>Choose type</option>
                                            <option value="Institut Teknologi Bandung">BCC</option>
                                            <option value="Universitas Gadjah Mada">Ceremony</option>
                                            <option value="Universitas Indonesia">Exhibition</option>
                                            <option value="Universitas Indonesia">GSIC</option>
                                        </select>
                                    </div>
                                </label>
                            </div>

                            <div>
                                <form action="" className="px-20">
                                    <label className="title">
                                        <span className="block text-left font-semibold">Description <span className="text-red-600">*</span></span>
                                        <input type="text" id="text" placeholder="Text" className="w-full h-[270px] block px- py-2 text-sm shadow rounded-md bg-[#F2F4FF] focus:placeholder-[#4F9BFD]"/>
                                    </label>
                                </form>
                            </div>

                            <div className="pr-24">
                                <div className="flex flex-col">
                                    <div className="mb-5 w-full font-semibold text-primaryBlue text-left ">Publish later</div>
                                    <div className="grid grid-cols-3">
                                        <label className="pr-12">
                                            <span className="block text-left">Year <span className="text-red-600">*</span></span>
                                            <div>
                                                <select className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg" name="" id="">
                                                    <option className="text-seccondaryBlue" selected disabled>Year</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </label>
                                        <label className="pr-12">
                                            <span className="block text-left">Month <span className="text-red-600">*</span></span>
                                            <div>
                                                <select className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg" name="" id="">
                                                    <option className="text-seccondaryBlue" selected disabled>Month</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </label>
                                        <label className="pr-12">
                                            <span className="block text-left">Day <span className="text-red-600">*</span></span>
                                            <div>
                                                <select className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg" name="" id="">
                                                    <option className="text-seccondaryBlue" selected disabled>Day</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </label>
                                        <label className="pr-12">
                                            <span className="block text-left">Hour <span className="text-red-600">*</span></span>
                                            <div>
                                                <select className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg" name="" id="">
                                                    <option className="text-seccondaryBlue" selected disabled>Hour</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </label>
                                        <label className="pr-12">
                                            <span className="block text-left">Minute <span className="text-red-600">*</span></span>
                                            <div>
                                                <select className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg" name="" id="">
                                                    <option className="text-seccondaryBlue" selected disabled>Minute</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </label>
                                        <label className="pr-12">
                                            <span className="block text-left">Second <span className="text-red-600">*</span></span>
                                            <div>
                                                <select className="body-text w-full bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg" name="" id="">
                                                    <option className="text-seccondaryBlue">Second</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </label>
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>

                            <div className="mt-40 w-full h-auto col-span-2">
                                <div className="grid grid-cols-2">
                                    <div className="pr-80 px-20">
                                        <button className="bg-[#BD1B1B] w-full h-[40px] text-white rounded-lg">Cancel</button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-0">
                                        <div className="px-24">
                                            <button className="bg-primaryBlue w-full h-[40px] text-white rounded-lg shadow-lg">Save</button>
                                        </div>
                                        <div className="px-20">
                                            <button className="bg-white w-full h-[40px] rounded-lg border-2 border-[#005CBA] text-[#005CBA] shadow-lg">Announce Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Announcement;