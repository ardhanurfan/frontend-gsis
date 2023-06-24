const ContactList = () => {
  return (
    <>
    <div className="w-full flex justify-center">
      <div className="w-full grid grid-cols-2 mx-auto md:flex">
        <div className="flex-wrap w-full md:w-1/4 flex flex-col justify-center items-center">
          <img src="./src/assets/line.svg" alt="" />
          <p className="body-text-mobile lg:body-text font-montserrat text-primaryText">
            ID Line (Nama )
          </p>
        </div>
        <div className=" flex-wrap w-full md:w-1/4 flex flex-col items-center">
          <img src="./src/assets/whatsapp.svg" alt="" />
          <p className="body-text-mobile lg:body-text font-montserrat text-primaryText">
            +XXXXXXXXXXXXXX
          </p>
        </div>
        <div className="flex-wrap w-full md:w-1/4 flex flex-col items-center">
          <img src="./src/assets/line.svg" alt="" />
          <p className="body-text-mobile lg:body-text font-montserrat text-primaryText">
            ID Line (Nama )
          </p>
        </div>
        <div className=" flex-wrap w-full md:w-1/4 flex flex-col items-center">
          <img src="./src/assets/whatsapp.svg" alt="" />
          <p className="body-text-mobile lg:body-text font-montserrat text-primaryText">
            +XXXXXXXXXXXXXX
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactList;
