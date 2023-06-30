import Status from "./status"

interface ParticipantCardProps {
    name: string
    email: string
    phone: string
    university: string
    major: string
    year: string
    statusktm: string
    statusposter: string
    statusfollow: string
    hidden: boolean
    leader:boolean
}

const ParticipantCard = ({name, email, phone, university, major, year, statusktm, statusposter, statusfollow,hidden,leader}: ParticipantCardProps) => {
    return(
        <div className="border-2 border-primaryBlue rounded-md h-[auto] p-2 ">
            <div className="flex flex-row justify-between">
                <p className="text-primaryText body-text">Name</p> 
                <div className={leader ? "w-32 h-4 mr-1 rounded-2xl flex items-center justify-center bg-[#4B3979]" : "hidden"}>
                    <p className="small text-white">Team Leader</p>
                </div>
            </div>
            <p className="text-seccondaryBlue small mb-4">{name}</p> 
            <p className="text-primaryText body-text">Email</p> 
            <p className="text-seccondaryBlue small mb-4">{email}</p> 
            <p className="text-primaryText body-text">Phone Number</p> 
            <p className="text-seccondaryBlue small mb-4">{phone}</p> 
            <div className="flex flex-col lg:flex-row gap-3 mb-4">
                <div className="flex flex-col w-[120px]">
                    <p className="text-primaryText body-text">University</p> 
                    <p className="text-seccondaryBlue small">{university}</p> 
                </div>
                <div className="flex flex-col w-[100px]">
                    <p className="text-primaryText body-text">Major</p> 
                    <p className="text-seccondaryBlue small">{major}</p> 
                </div>
                <div className="flex flex-col w-[120px]">
                    <p className="text-primaryText body-text">Year</p> 
                    <p className="text-seccondaryBlue small">{year}</p> 
                </div>
            </div>
            <div className={hidden ? "hidden" : "flex flex-col gap-1"}>
                <p className="text-primaryBlue body-text">Status</p>
                <p className="text-seccondaryBlue small">Student ID Card</p>
                <Status status={statusktm}/>
                <p className="text-seccondaryBlue small">Approve of Poster Upload</p>
                <Status status={statusposter}/>
                <p className="text-seccondaryBlue small">Approve of Following GSIS Instagram</p>
                <Status status={statusfollow}/>
            </div>
        </div>
    )
}

export default ParticipantCard