import up from "../../../assets/upload.svg";

interface TeamLeaderCardProps {
    name:string;
    email:string;
    phone:string;
    university:string;
    major:string;
    year:string;
}

const TeamLeaderCard = ({name,email,phone,university,major,year}:TeamLeaderCardProps) => {
    return(
        
            <div className="border-2 border-[#005CBA] rounded-md h-[auto]">
                    <div className="m-2">
                    <div className="flex flex-row justify-between">
                        <p className="text-[#015CBA] body-text">Name</p>
                        <div className="w-32 h-4 mr-1 rounded-2xl flex items-center justify-center bg-[#4B3979]">
                            <p className="small text-[#FCFCFC]">Team Leader</p>
                        </div>
                    </div>
                    <p className="text-[#4F9BFD] small mb-4">{name}</p>
                    <p className="text-[#015CBA] body-text">Email</p>
                    <p className="text-[#4F9BFD] small mb-4">{email}</p>
                    <p className="text-[#015CBA] body-text">Phone Number</p>
                    <p className="text-[#4F9BFD] small mb-4">{phone}</p>
                    <div className="flex gap-3 mb-4">
                        <div className="flex flex-col w-[120px]">
                            <p className="text-[#015CBA] body-text">University</p>
                            <p className="text-[#4F9BFD] small">
                            {university}
                            </p>
                        </div>
                        <div className="flex flex-col w-[100px]">
                            <p className="text-[#015CBA] body-text">Major</p>
                            <p className="text-[#4F9BFD] small">
                            {major}
                            </p>
                        </div>
                        <div className="flex flex-col w-[120px]">
                            <p className="text-[#015CBA] body-text">Year</p>
                            <p className="text-[#4F9BFD] small">{year}</p>
                        </div>
                    </div>
                    <div className="w-[240px] h-auto">
                        <div className="small text-[#015CBA] flex gap-1 mb-2">
                            Student ID Card
                            <img src={up} className="h-[14px]" />
                        </div>
                        <div className="flex gap-1">
                        <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#BD1B1B]">
                            <p className="button-text-mobile md:button-text text-[#FCFCFC]">Decline</p>
                        </button>
                        <button className="w-20 h-7 rounded-lg flex items-center justify-center bg-[#1B8E27]">
                            <p className="button-text-mobile md:button-text small text-[#FCFCFC]">Accept</p>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TeamLeaderCard;