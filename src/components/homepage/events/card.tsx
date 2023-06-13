import './style.css'

interface EventCardProps {
    image: string;
    label: string;
}


const EventCard = ({
    image,
    label
}: EventCardProps) => {
    return (
        <div className="event-card w-[350px] h-[450px] overflow-hidden mb-[50px]">
            <div className=" h-[350px] rounded-xl shadow-md shadow-slate-600">
            </div>  
            <h2 className="font-montserrat text-white text-4xl font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                {label}
            </h2>
        </div>
    )
}

export default EventCard