interface StatusProps{
    status: string
}

const Status = ({status}: StatusProps) => {
    return(
        <div className={status === "accepted" ? "flex items-center px-[33px] small lg:body-text w-fit text-white bg-success rounded-full" : (status === "rejected" ? "flex items-center px-[33px] small lg:body-text w-fit text-white bg-error rounded-full": "px-[33px] small lg:body-text w-fit text-white bg-primaryYellow rounded-full")}>
            {status==="accepted" ? "Accepted" : (status==="rejected" ? "Rejected" : "Waiting")}
        </div>
    )
}

export default Status;