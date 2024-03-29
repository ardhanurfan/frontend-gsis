import { useState } from "react";
import Dot from "../../../components/account/dot";
import TextField from "../../../components/account/text-field";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { post } from "../../../API/api";
import { Toaster } from "react-hot-toast";
import { NotifyStatus } from "../../../components/toast_pop_up/toast";
import SelectComponent from "../../../components/SelectComponent";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  // const [isSucces, setIsSucces] = useState(false);
  // const [messages, setMessages] = useState("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (check) {
        const response = await post("register", {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          username: username,
          phone: phone,
          university: university,
          major: major,
          year: year,
        });
        const access_token = response?.data?.data?.acess_token;
        localStorage.setItem("access_token", access_token);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUsername("");
        setPhone("");
        setUniversity("");
        setMajor("");
        setYear("");
        // setIsSucces(true);
        // setMessages("Sign Up Succesfully!");
        navigate("/");
      } else {
        NotifyStatus("Please Check the Statement", false);
      }
    } catch (error) {
      console.log(error);
      const mess = error as any;
      // setIsSucces(false);
      // setMessages(mess.response.data.data.error as string);
      NotifyStatus(mess.response.data.data.error, false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-auto w-full bg-white p-4 xl:py-[62px] xl:px-[70px]">
        <div className="w-full h-full rounded-[10px]  items-center shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] px-[45px] lg:px-[30%]  flex flex-col justify-center items-center bg-white">
            <Dot></Dot>
            <h1 className="header1-mobile lg:header1 text-primaryText mb-[62px] mt-[50px]">
              Sign Up
            </h1>
            <Toaster />
            <form
              onSubmit={(e) => handleSignup(e)}
              className="w-full field-text-mobile lg:field-text"
            >
              <TextField
                value={name}
                onChange={(val) => setName(val.target.value)}
                label={"Name"}
                placeholder={"Enter Name"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                value={email}
                onChange={(val) => setEmail(val.target.value)}
                label={"Email"}
                placeholder={"Enter Email"}
                type={"email"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                value={password}
                onChange={(val) => setPassword(val.target.value)}
                label={"Password"}
                placeholder={"Enter Password"}
                type={"password"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                value={confirmPassword}
                onChange={(val) => setConfirmPassword(val.target.value)}
                label={"Confirm Password"}
                placeholder={"Reenter Password"}
                type={"password"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                value={username}
                onChange={(val) => setUsername(val.target.value)}
                label={"Username"}
                placeholder={"Enter Username"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                value={phone}
                onChange={(val) => setPhone(val.target.value)}
                label={"Phone Number"}
                placeholder={"Enter Phone Number (+62)"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <div className="flex flex-col mb-[38px]">
                <label htmlFor="university" className="text-primaryText mb-2">
                  University/Institution
                </label>
                <SelectComponent
                  placeholder="Select your university"
                  type={"University"}
                  onChange={(e: string) => setUniversity(e)}
                />
              </div>
              <div className="flex flex-col mb-[38px]">
                <label htmlFor="major" className="text-primaryText  mb-2">
                  Major
                </label>
                <input
                  type="text"
                  id="major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  placeholder="Enter your major (english)"
                  className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-full"
                />
              </div>
              <div className="flex flex-col mb-[60px]">
                <label htmlFor="year" className="text-primaryText mb-2">
                  Year
                </label>
                <SelectComponent
                  placeholder="Select year"
                  type={"Year"}
                  onChange={(e: string) => setYear(e)}
                />
              </div>
              <div className="flex mb-[60px] items-center">
                <input
                  required
                  type="checkbox"
                  checked={check}
                  onChange={(e) => setCheck(e.target.checked)}
                />
                <p className="text-primaryOrange ml-4">
                  We will use your data for event and partner needs
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  disabled={loading}
                  type="submit"
                  className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue"
                >
                  {loading && (
                    <div className="flex justify-center items-center">
                      <img
                        className="mr-2"
                        src="assets/Loading.svg"
                        alt="spinner"
                      />
                      Loading
                    </div>
                  )}
                  {!loading && "Sign Up"}
                </button>
              </div>
            </form>
            <p className="button-text-mobile lg:button-text text-primaryBlue mb-[80px] text-center">
              Already have an Account?{" "}
              <span>
                <a href="/login" className="text-primaryOrange">
                  Log in now!
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
