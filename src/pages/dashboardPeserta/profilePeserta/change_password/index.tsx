import { useState } from "react";
import Dot from "../../../../components/account/dot";
import TextField from "../../../../components/account/text-field";
import { useNavigate } from "react-router-dom";
import { postWithAuth } from "../../../../API/api";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import Footer from "../../../../components/footer";
import { Toaster } from "react-hot-toast";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await postWithAuth(
        "change-password",
        {
          password: newPassword,
          confirmPassword: reenterPassword,
        },
        token ?? ""
      );
      const access_token = response?.data?.data?.acess_token;
      localStorage.setItem("access_token", access_token);
      setNewPassword("");
      setReenterPassword("");
      navigate("/profile");
      NotifyStatus("Change Password Successfully!", true);
    } catch (error) {
      const mess = error as any;
      NotifyStatus(mess.response.data.data.error, false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <NavbarDashboard />
      <div className="h-screen w-screen bg-white px-4 xl:px-[70px] mt-[130px] mb-[50px]">
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
                        src="assets/Loading.svg"
                        alt="spinner"
                      />
                      Loading
                    </div>
                  )}
                  {!loading && "Change Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChangePassword;
