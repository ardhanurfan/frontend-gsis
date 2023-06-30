import Dot from "../../../components/account/dot";
import TextField from "../../../components/account/text-field";

const ForgotPassword = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white p-4 xl:py-[62px] xl:px-[70px]">
        <div className="w-full h-full rounded-[10px] shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] px-[45px] lg:px-[30%] flex flex-col justify-center items-center bg-white">
            <Dot></Dot>
            <h1 className="header1-mobile xl:header1 text-primaryText mb-[16px] text-center">
              FORGOT YOUR PASSWORD?
            </h1>
            <p className="body-text-mobile lg:body-text text-primaryBlue mb-9">
              Hang on we'll get you right back in
            </p>
            <form className="w-full field-text-mobile lg:field-text">
              <TextField
                label={"Email"}
                placeholder={"Enter Email"}
                type={"email"}
                style={"mb-[38px]"}
              ></TextField>
              <div className="flex justify-center mt-[50px]">
                <button
                  type="submit"
                  className="mb-[16px] py-[10px] px-[50px] rounded-[10px] button-text-mobile lg:button-text text-white bg-primaryBlue transition duration-500 ease-in-out hover:opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
