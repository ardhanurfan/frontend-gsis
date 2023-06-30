interface ExhibitionParticipantCardProps {
   row:any;
}

const ExhibitionParticipantCard = ({row}:ExhibitionParticipantCardProps) => {
    return(
        <details className="px-5 xl:px-44  hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl bg-white text-white px-5 sm:px-10 mx-auto flex items-center justify-between shadow-lg">
                <div className="w-auto h-auto flex flex-col">
                    <div className="w-auto h-auto flex flex-row items-center">
                        <h2 className="header2-mobile lg:header2 mb-2">{row.user.name}</h2>
                        <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                            <p className="small text-[#FCFCFC]">{row.status}</p>
                        </div>
                    </div>
                    <p className="small ml-2">{row.user_id}</p>
                </div>
            </summary>
            <div className="bg-white flex flex-col xl:grid xl:grid-cols-3 p-2 shadow-2xl rounded-b-xl">
                <div className="rounded-md h-[auto]">
                    <div className="py-5 pl-5">
                        <h3 className="header3 text-[#015CBA]">Profile</h3>
                        <p className="text-[#015CBA] body-text">Name</p>
                        <p className="text-[#4F9BFD] small mb-4">{row.user.name}
                        </p>
                        <p className="text-[#015CBA] body-text">Email</p>
                        <p className="text-[#4F9BFD] small mb-4">{row.user.email}</p>
                        <p className="text-[#015CBA] body-text">Phone Number</p>
                        <p className="text-[#4F9BFD] small mb-4">{row.user.phone}</p>
                        <div className="flex gap-3 mb-4">
                            <div className="flex flex-col w-[120px]">
                                <p className="text-[#015CBA] body-text">University</p>
                                <p className="text-[#4F9BFD] small">
                                {row.user.university}</p>
                            </div>
                            <div className="flex flex-col w-[100px]">
                                <p className="text-[#015CBA] body-text">Major</p>
                                <p className="text-[#4F9BFD] small">
                                {row.user.major}</p>
                            </div>
                            <div className="flex flex-col w-[120px]">
                                <p className="text-[#015CBA] body-text">Year</p>
                                <p className="text-[#4F9BFD] small">{row.user.year}</p>
                            </div>
                        </div>
                        <h3 className="header3 text-[#015CBA]">Contact Person</h3>
                        <p className="text-[#015CBA] body-text">Name</p>
                        <p className="text-[#4F9BFD] small mb-4">{row.user.name}</p>
                        <p className="text-[#015CBA] body-text">Phone Number</p>
                        <p className="text-[#4F9BFD] small mb-4">{row.user.phone}</p>
                    </div>
                </div>
                <div className="col-span-2 rounded-md h-[auto]">
                    <div className="pb-5 xl:py-5 px-5">
                        <h3 className="header3 text-[#015CBA]">Work</h3>
                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 my-5">
                                <div className="flex flex-col w-auto">
                                    <p className="text-[#015CBA] body-text">Category</p>
                                    <p className="text-[#4F9BFD] small">{row.category}</p>
                                </div>
                                <div className="flex flex-col w-auto">
                                    <p className="text-[#015CBA] body-text">Year Created</p>
                                    <p className="text-[#4F9BFD] small">{row.year}</p>
                                </div>
                                <div className="flex flex-col w-auto mr-10">
                                    <p className="text-[#015CBA] body-text">Size</p>
                                    <p className="text-[#4F9BFD] small">{row.size}</p>
                                </div>
                            <div>
                                <div className="flex flex-row gap-1 w-[150px]">
                                        <a href={row.documentation[0].url} className="text-[#FCFCFC] button-text-mobile sm:button-text bg-success w-full rounded-xl hover:font-bold py-2 px-5 hover:scale-105">Photo/Video</a>
                                </div>
                            </div>
                        </div>
                        <p className="text-[#015CBA] body-text">Description</p>
                        <p className="text-[#4F9BFD] small text-justify">
                        {row.description}
                        </p>
                    </div>
                </div>
            </div>
        </details>
    )

}

export default ExhibitionParticipantCard