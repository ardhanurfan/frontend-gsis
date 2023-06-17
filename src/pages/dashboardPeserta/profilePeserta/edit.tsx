//EDIT PROFILE
import "./edit.css"

const EditProfile = () => {
    return(
        <div className="w-full h-auto">
            <div className="pt-[195px] w-[85vw] mx-auto">
                <h1 className="header1 text-center lg:text-start text-primaryBlue">
                    Profile
                </h1>
                <div className="flex justify-center lg:justify-end mt-[27px] lg:mt-0">
                    <button className="button-text normal-button text-white bg-primaryBlue">
                        Save
                    </button>
                </div>
                <div className="clear-both flex flex-col gap-[30px] items-center lg:items-start lg:flex-row justify-between mt-[27px] mb-[67px]">
                    <div className="picture-container flex flex-col gap-6">
                        <div className="bg-[url(../../../src/assets/placeholder_picture.svg)] h-[250px] w-[250px] rounded-full shrink-0"></div>
                        <button className="text-primaryOrange hover:underline">Change Password</button>
                    </div>
                    <div className="h-[561px] lg:w-[908px] w-[80vw] bg-slate-100 bg-opacity-30 shadow-sm rounded-lg border-primaryBlue border-2 shadow-slate-700 flex flex-col gap-3 pt-[19px] px-[1.32%]">
                        <div>
                            <form action="">
                                <label htmlFor="name" className="header3 text-primaryBlue block mb-[5px]">Nama</label>
                                <input type="text" id="name" placeholder="Enter name" className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2" />
                            </form>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <form action="">
                                <label htmlFor="number" className="header3 text-primaryBlue block mb-[5px]">Phone Number</label>
                                <input type="text" id="number" placeholder="Enter phone number" className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2" />
                            </form>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <h3 className="header3 text-primaryBlue">University</h3>
                            <div className="select relative h-[60px] flex w-[100%] lg:w-1/2 bg-primaryBlue rounded-lg">
                                <select className="body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 flex-1 rounded-lg" name="select" id="format">
                                    <option className="text-seccondaryBlue" selected disabled>Choose a university</option>
                                    <option value="Institut Teknologi Bandung">Institut Teknologi Bandung</option>
                                    <option value="Universitas Gadjah Mada">Universitas Gadjah Mada</option>
                                    <option value="Universitas Indonesia">Universitas Indonesia</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <h3 className="header3 text-primaryBlue">Major</h3>
                            <div className="select relative h-[60px] flex w-[100%] lg:w-1/2 bg-primaryBlue rounded-lg">
                                <select className="body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 flex-1 rounded-lg" name="select" id="format">
                                    <option className="text-seccondaryBlue" selected disabled>Choose a major</option>
                                    <option value="Institut Teknologi Bandung">Informatics Engineering</option>
                                    <option value="Universitas Gadjah Mada">Mechanical Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <h3 className="header3 text-primaryBlue">Year</h3>
                            <div className="select relative h-[60px] flex w-1/2 lg:w-1/4 bg-primaryBlue rounded-lg">
                                <select className="body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 flex-1 rounded-lg" name="select" id="format">
                                    <option className="text-seccondaryBlue" selected disabled>Choose a year</option>
                                    <option value="Institut Teknologi Bandung">2023</option>
                                    <option value="Universitas Gadjah Mada">2022</option>
                                    <option value="Universitas Gadjah Mada">2021</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;