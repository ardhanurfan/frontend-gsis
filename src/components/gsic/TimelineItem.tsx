import clsx from "clsx";

type TimelineItemProps = {
  orientation: "left" | "right";
  date: string;
  dateDetail: string;
  eventName: string;
  eventDesc: string;
  className?: string;
};

function TimelineItem({
  orientation,
  date,
  dateDetail,
  eventDesc,
  eventName,
  className,
}: TimelineItemProps) {
  return (
    <div
      className={clsx(
        "relative flex w-[40rem] mx-auto items-center",
        orientation === "right" && "flex-row-reverse right-6",
        className
      )}
    >
      <div
        className={clsx(
          "absolute text-center top-20",
          orientation == "left" && "left-[50px]",
          orientation == "right" && "right-[50px]"
        )}
      >
        <h4 className="text-4xl text-primaryBlue font-bold">{date}</h4>
        <p className="text-xl text-primaryBlue font-medium">{dateDetail}</p>
      </div>
      {orientation === "left" ? (
        <img className="w-[20rem]" src="assets/Timeline1.svg" alt="p" />
      ) : (
        <img className="w-[20rem]" src="assets/Timeline2.svg" alt="p" />
      )}
      <div className="w-[20rem]">
        <h3 className="font-montserrat text-md font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue">
          {eventName}
        </h3>
        <h3 className="font-montserrat text-md font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue mr-[7.923%]">
          {eventDesc}
        </h3>
      </div>
    </div>
  );
}

export default TimelineItem;
