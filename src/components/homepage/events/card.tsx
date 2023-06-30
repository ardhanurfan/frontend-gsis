import "./style.css";

interface EventCardProps {
  image: string;
  label: string;
}

const EventCard = ({ image, label }: EventCardProps) => {
  return (
    <div className="event-card w-[171px] h-[220px] xl:w-[350px] xl:h-[450px] overflow-hidden mb-[50px] cursor-pointer">
      <div className=" h-[171px] xl:h-[350px] rounded-xl shadow-md shadow-slate-600">
        <img src={image} alt="" className="p-4" />
      </div>
      <h2 className="font-montserrat text-white header3-mobile lg:header3 h-auto w-[171px] xl:w-[350px] mx-auto text-center mt-[20px]">
        {label}
      </h2>
    </div>
  );
};

export default EventCard;
