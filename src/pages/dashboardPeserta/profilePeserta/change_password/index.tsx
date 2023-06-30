import { useState } from "react";
import Dot from "../../../../components/account/dot";
import TextField from "../../../../components/account/text-field";
import { useNavigate } from "react-router-dom";
import { post } from "../../../../API/api";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await post("login", {
        newPassword: newPassword,
        reenterPassword: reenterPassword,
      });
      const access_token = response?.data?.data?.acess_token;
      localStorage.setItem("access_token", access_token);
      setNewPassword("");
      setReenterPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-white p-4 xl:py-[62px] xl:px-[70px]">
        <div className="w-full h-full rounded-[10px] shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] px-[45px] lg:px-[30%] flex flex-col justify-center items-center bg-white">
            <Dot></Dot>
            <h1 className="header1-mobile lg:header1 lg:w-screen text-primaryText mb-[62px] text-center">
              Change Password
            </h1>
            <form
              onSubmit={(e) => handleLogin(e)}
              className="w-full field-text-mobile lg:field-text"
            >
              <TextField
                value={newPassword}
                onChange={(val) => setNewPassword(val.target.value)}
                label={"New Password"}
                placeholder={"Enter new password"}
                type={"password"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                value={reenterPassword}
                onChange={(val) => setReenterPassword(val.target.value)}
                label={"Reenter Password"}
                placeholder={"Reenter new Password"}
                type={"password"}
                style={"mb-[20px]"}
              ></TextField>
              <div className="flex justify-center mt-[50px]">
                <button
                  disabled={loading}
                  type="submit"
                  className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue"
                >
                  {loading && (
                    <div className="flex justify-center">
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
            <p className="button-text-mobile lg:button-text text-primaryBlue text-center">
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

export default ChangePassword;
