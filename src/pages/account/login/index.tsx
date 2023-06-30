import { useState } from "react";
import Dot from "../../../components/account/dot";
import TextField from "../../../components/account/text-field";
import { useNavigate } from "react-router-dom";
import { post } from "../../../API/api";
import { Toaster } from "react-hot-toast";
import { NotifyStatus } from "../../../components/toast_pop_up/toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const [isSucces, setIsSucces] = useState(true);
  // const [messages, setMessages] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await post("login", {
        email: email,
        password: password,
      });
      const access_token = response?.data?.data?.acess_token;
      console.log(access_token);
      localStorage.setItem("access_token", access_token);
      setEmail("");
      setPassword("");
      // setIsSucces(true);
      // setMessages("Login Succesfully!");
      navigate("/");
    } catch (error) {
      const mess = error as any;
      // setIsSucces(false);
      // setMessages(mess.response.data.data.error as string);
      NotifyStatus(mess.response.data.data.error as string, false);
    } finally {
      setLoading(false);
      // notifyStatus as any;
    }
  };

  return (
    <>
      <Toaster />
      <div className="h-screen lg:h-auto w-full bg-white p-4 xl:py-[62px] xl:px-[70px]">
        <div className="w-full h-full rounded-[10px] shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] px-[45px] lg:px-[30%] flex flex-col justify-center items-center bg-white">
            <Dot></Dot>
            <h1 className="header1-mobile lg:header1 text-primaryText mb-[62px] mt-[50px] text-center">
              Log In
            </h1>
            <form
              onSubmit={(e) => handleLogin(e)}
              className="w-full field-text-mobile lg:field-text"
            >
              <TextField
                value={email}
                onChange={(val) => setEmail(val.target.value)}
                label={"Email"}
                placeholder={"Your Email"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                value={password}
                onChange={(val) => setPassword(val.target.value)}
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
                  disabled={loading}
                  type="submit"
                  className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue"
                >
                  {loading && (
                    <div className="flex justify-center items-center">
                      <img
                        className="mr-2"
                        src="../src/assets/Loading.svg"
                        alt="spinner"
                      />
                      Loading
                    </div>
                  )}
                  {!loading && "Login"}
                </button>
              </div>
            </form>
            <p className="button-text-mobile lg:button-text text-primaryBlue text-center mb-[50px]">
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
