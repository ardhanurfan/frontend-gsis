import Dot from "../../../components/account/dot";
import TextField from "../../../components/account/text-field";

const ForgotPassword = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white py-[62px] px-[70px]">
        <div className="w-full h-full rounded-[10px] shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] flex flex-col justify-center items-center bg-white">
            <Dot></Dot>
            <h1 className="header1 text-primaryText mb-[16px]">
              FORGOT YOUR PASSWORD?
            </h1>
            <p className="body-text text-primaryBlue mb-9">
              Hang on we'll get you right back in
            </p>
            <form className="w-full field-text px-[425px]">
              <TextField
                label={"Email"}
                placeholder={"Enter Email"}
                type={"email"}
                style={"mb-[38px]"}
              ></TextField>
              <div className="flex justify-center mt-[50px]">
                <button
                  type="submit"
                  className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:opacity-50"
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
