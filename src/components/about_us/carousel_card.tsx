interface BigCardProps{
    content: string;
}

const CarouselCard = ({content}: BigCardProps) => {
    return(
        <div className="relative h-[150px] lg:h-[200px] w-full rounded-xl mx-auto bg-slate-100 shadow-md shadow-slate-500 bg-opacity-30">
            <div className="h-auto w-[38px] flex justify-between absolute m-[4%] lg:m-[2%]">
                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <p className="relative text-primaryText small lg:body-text w-[52.5%] h-full mx-auto text-center lg:text-justify flex items-center">
                {content}    
            </p>
        </div>
    )
}

export default CarouselCard;