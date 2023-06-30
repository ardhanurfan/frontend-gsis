interface StatusProps{
    status: string
}

const Status = ({status}: StatusProps) => {
    return(
        <div className={status === "ACCEPTED" ? "flex items-center px-[33px] small lg:body-text w-fit text-white bg-success rounded-full" : (status === "REJECTED" ? "flex items-center px-[33px] small lg:body-text w-fit text-white bg-error rounded-full": "px-[33px] small lg:body-text w-fit text-white bg-primaryYellow rounded-full")}>
            {status==="ACCEPTED" ? "Accepted" : (status==="REJECTED" ? "Rejected" : "Waiting")}
        </div>
    )
}

export default Status;