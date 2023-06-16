const ContactList = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="flex-wrap w-1/4 flex flex-col items-center">
          <img src="./src/assets/line.svg" alt="" />
          <p>ID Line (Nama )</p>
        </div>
        <div className=" flex-wrap w-1/4 flex flex-col items-center">
          <img src="./src/assets/whatsapp.svg" alt="" />
          <p>+XXXXXXXXXXXXXX</p>
        </div>
        <div className="flex-wrap w-1/4 flex flex-col items-center">
          <img src="./src/assets/line.svg" alt="" />
          <p>ID Line (Nama )</p>
        </div>
        <div className=" flex-wrap w-1/4 flex flex-col items-center">
          <img src="./src/assets/whatsapp.svg" alt="" />
          <p>+XXXXXXXXXXXXXX</p>
        </div>
      </div>
    </>
  );
};

export default ContactList;
