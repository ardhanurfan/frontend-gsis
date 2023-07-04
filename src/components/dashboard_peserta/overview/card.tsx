interface AnnouncementCardProps {
  title: string;
  date: string;
  content: string;
  link?: string
}

const AnnouncementCard = ({ title, date, content, link }: AnnouncementCardProps) => {
  return (
    <>
      <div className="card-announcement rounded-[10px] p-[1px] mb-[26px]">
        <div className="py-[30px] px-[40px] lg:pl-[40px] lg:pr-[98px] rounded-[10px] h-full w-full bg-white">
          <h2 className="header2-mobile lg:header2 text-primaryText">{title}</h2>
          <h3 className=" font-monserrat font-normal text-xs text-seccondaryBlue">
            Created at {date}
          </h3>
          <p className=" font-monserrat body-text-mobile lg:body-text mt-4 text-primaryText text-justify">
            {content}
          </p>
          {link != null && <h3 className="header3-mobile mt-6 text-primaryBlue">Link</h3>}
          {link != null && <a href={link} className=" font-monserrat font-normal text-xs text-seccondaryBlue hover:text-primaryBlue">
            {link}
          </a>}
        </div>
      </div>
    </>
  );
};

export default AnnouncementCard;
