import Dot from "../../../components/account/dot";
import TextField from "../../../components/account/text-field";

const Login = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white py-[62px] px-[70px]">
        <div className="w-full h-full rounded-[10px] shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] px-[425px] flex flex-col justify-center items-center bg-white">
            <Dot></Dot>
            <h1 className="header1 text-primaryText mb-[62px] text-center">
              Log In
            </h1>
            <form className="w-full field-text">
              <TextField
                label={"Username"}
                placeholder={"Your Username"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                label={"Password"}
                placeholder={"Your Password"}
                type={"password"}
                style={"mb-[20px]"}
              ></TextField>
              <a href="" className="text-error">
                Forgot Password?
              </a>
              <div className="flex justify-center mt-[50px]">
                <button
                  type="submit"
                  className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:opacity-50"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="button-text text-primaryBlue">
              Don't have an account?{" "}
              <span>
                <a href="/sign-up" className="text-primaryOrange">
                  Register now!
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
