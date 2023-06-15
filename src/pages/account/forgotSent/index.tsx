import Dot from "../../../components/account/dot";

const ForgotSent = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white py-[62px] px-[70px]">
        <div className="w-full h-full rounded-[10px] shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] flex flex-col justify-center items-center bg-white px-[296px]">
            <Dot></Dot>
            <img
              src="../src/assets/check.svg"
              className="h-[224px] w-auto"
              alt="Sent Success"
            />
            <h1 className="header1 text-primaryText mb-[16px] text-center">
              YOUR REQUEST HAS BEEN SENT
            </h1>
            <p className="body-text text-primaryBlue mb-9">
              Please check your email
            </p>
            <a
              href="/login"
              className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:opacity-50"
            >
              Back To Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotSent;
