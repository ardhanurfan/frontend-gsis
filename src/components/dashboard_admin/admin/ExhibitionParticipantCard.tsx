interface ExhibitionParticipantCardProps {
    team_name:string;
    status:string;
    teamid:number;
    name_profile:string;
    email_profile:string;
    phone_profile:string;
    uni_profile:string;
    major_profile:string;
    year_profile:string;
    name_cp:string;
    phone_cp:string;
    category_work:string;
    year_created_work:string;
    size_work:string;
    desc_work:string;
}

const ExhibitionParticipantCard = ({team_name,status,teamid,name_profile,email_profile,phone_profile,uni_profile,major_profile,year_profile,name_cp,phone_cp,category_work,year_created_work,size_work,desc_work}:ExhibitionParticipantCardProps) => {
    return(
        <details className="px-5 xl:px-44  hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl bg-white text-white px-5 sm:px-10 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-col">
                    <div className="w-auto h-auto flex flex-row items-center">
                        <h2 className="header2-mobile lg:header2 mb-2">{team_name}</h2>
                        <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                            <p className="small text-[#FCFCFC]">{status}</p>
                        </div>
                    </div>
                    <p className="small ml-2">{teamid}</p>
                </div>
            </summary>
            <div className="bg-white flex flex-col xl:grid xl:grid-cols-3 p-2 shadow-2xl rounded-b-xl">
                <div className="rounded-md h-[auto]">
                    <div className="py-5 pl-5">
                        <h3 className="header3 text-[#015CBA]">Profile</h3>
                        <p className="text-[#015CBA] body-text">Name</p>
                        <p className="text-[#4F9BFD] small mb-4">{name_profile}
                        </p>
                        <p className="text-[#015CBA] body-text">Email</p>
                        <p className="text-[#4F9BFD] small mb-4">{email_profile}</p>
                        <p className="text-[#015CBA] body-text">Phone Number</p>
                        <p className="text-[#4F9BFD] small mb-4">{phone_profile}</p>
                        <div className="flex gap-3 mb-4">
                            <div className="flex flex-col w-[120px]">
                                <p className="text-[#015CBA] body-text">University</p>
                                <p className="text-[#4F9BFD] small">
                                {uni_profile}</p>
                            </div>
                            <div className="flex flex-col w-[100px]">
                                <p className="text-[#015CBA] body-text">Major</p>
                                <p className="text-[#4F9BFD] small">
                                {major_profile}</p>
                            </div>
                            <div className="flex flex-col w-[120px]">
                                <p className="text-[#015CBA] body-text">Year</p>
                                <p className="text-[#4F9BFD] small">{year_profile}</p>
                            </div>
                        </div>
                        <h3 className="header3 text-[#015CBA]">Contact Person</h3>
                        <p className="text-[#015CBA] body-text">Name</p>
                        <p className="text-[#4F9BFD] small mb-4">{name_cp}</p>
                        <p className="text-[#015CBA] body-text">Phone Number</p>
                        <p className="text-[#4F9BFD] small mb-4">{phone_cp}</p>
                    </div>
                </div>
                <div className="col-span-2 rounded-md h-[auto]">
                    <div className="pb-5 xl:py-5 pl-5">
                        <h3 className="header3 text-[#015CBA]">Work</h3>
                        <div className="flex gap-2 sm:gap-16 my-5">
                            <div>
                                <div className="flex flex-col w-auto">
                                    <p className="text-[#015CBA] body-text">Category</p>
                                    <p className="text-[#4F9BFD] small">{category_work}</p>
                                </div>
                                <div className="flex flex-col w-auto">
                                    <p className="text-[#015CBA] body-text">Year Created</p>
                                    <p className="text-[#4F9BFD] small">{year_created_work}</p>
                                </div>
                                <div className="flex flex-col w-auto mr-10">
                                    <p className="text-[#015CBA] body-text">Size</p>
                                    <p className="text-[#4F9BFD] small">{size_work}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-1 w-[120px]">
                                    <button className="text-[#FCFCFC] button-text-mobile sm:button-text bg-success w-full rounded-lg px-5">Photo</button>
                                    <button className="text-[#FCFCFC] button-text-mobile sm:button-text bg-success w-full rounded-lg px-5">Video</button>
                                </div>
                            </div>
                        </div>
                        <p className="text-[#015CBA] body-text">Description</p>
                        <p className="text-[#4F9BFD] small text-justify">
                        {desc_work}
                        </p>
                    </div>
                </div>
            </div>
        </details>
    )

}

export default ExhibitionParticipantCard