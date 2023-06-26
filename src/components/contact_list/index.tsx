const ContactList = () => {
  return (
    <>
      <div className="w-[70vw] flex flex-col gap-8 lg:gap-0 lg:flex-row">
        <div className="flex lg:w-1/2">
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
        </div>
        <div className="flex lg:w-1/2">
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
        </div>
      </div>
    </>
  );
};

export default ContactList;
