interface ContactListProps {
  line: string;
  wa: string;
}
const ContactList = ({ line, wa }: ContactListProps) => {
  return (
    <>
      <div className="w-[70vw] flex flex-col gap-8 lg:gap-0 lg:flex-row">
        <div className="flex lg:w-full md:px-20">
          <div className="flex-wrap w-full flex flex-col items-center">
            <img src="assets/line.svg" alt="" />
            <p className="body-text-mobile lg:body-text text-center font-montserrat text-primaryText">
              {line}
            </p>
          </div>
          <div className=" flex-wrap w-full flex flex-col items-center">
            <img src="assets/whatsapp.svg" alt="" />
            <p className="body-text-mobile lg:body-text break-all text-center font-montserrat text-primaryText">
              {wa}
            </p>
          </div>
        </div>
        {/* <div className="flex lg:w-1/2">
          <div className="flex-wrap w-1/2 flex flex-col items-center">
            <img src="./src/assets/line.svg" alt="" />
            <p className="body-text-mobile lg:body-text text-center font-montserrat text-primaryText">
              ID Line (Nama )
            </p>
          </div>
          <div className=" flex-wrap w-1/2 flex flex-col items-center">
            <img src="./src/assets/whatsapp.svg" alt="" />
            <p className="body-text-mobile lg:body-text break-all text-center font-montserrat text-primaryText">
              +XXXXXXXXXXXXXX
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ContactList;
