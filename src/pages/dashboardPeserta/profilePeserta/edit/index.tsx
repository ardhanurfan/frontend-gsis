//EDIT PROFILE
import { useEffect, useState } from "react";
import SelectComponent from "../../../../components/SelectComponent";
import Footer from "../../../../components/footer";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import { getWithAuth, postWithAuth } from "../../../../API/api";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const getUser = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        setName(user.data?.data.name);
        setPhone(user.data?.data.phone);
        setUniversity(user.data?.data.university);
        setMajor(user.data?.data.major);
        setYear(user.data?.data.year);
        setPhotoUrl(user.data?.data.profile_photo_url);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await postWithAuth(
        "edit-profile",
        {
          name: name,
          phone: phone,
          university: university,
          year: year,
          major: major,
        },
        token ?? ""
      );
      navigate("/profile");
      NotifyStatus("Edit Profile Successfully!", true);
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
      <NavbarDashboard></NavbarDashboard>
      <div className="w-full h-auto overflow-hidden">
        <div className="py-[130px] w-[85vw] mx-auto">
          <h1 className="header1 text-center lg:text-start text-primaryBlue">
            Profile
          </h1>
          <div className="hidden lg:flex justify-end mt-[27px] lg:mt-0">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="button-text normal-button text-white bg-primaryBlue flex items-center  hover:bg-seccondaryBlue"
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
              {!loading && "Save"}
            </button>
          </div>
          <div className="clear-both flex flex-col gap-[30px] items-center lg:items-start lg:flex-row justify-between mt-[27px] mb-[67px]">
            <div className="picture-container items-center flex flex-col gap-6">
              <img
                src={photoUrl}
                className="h-[250px] w-[250px] rounded-full shrink-0 border-2 border-primaryBlue"
                alt=""
              />
              <a href="/change-password" className="text-error hover:underline">
                Change Password
              </a>
            </div>
            <div className="flex justify-end w-[80vw] lg:hidden mx-auto mt-[15px] lg:mt-0">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="button-text-mobile small-button text-white bg-primaryBlue hover:bg-seccondaryBlue flex items-center"
              >
                {loading && (
                  <img
                    className="object-bottom"
                    src="../src/assets/Loading.svg"
                    alt="spinner"
                  />
                )}
                {!loading && "Save"}
              </button>
            </div>
            <div className="h-[561px] lg:w-[908px] w-[80vw] bg-slate-100 bg-opacity-30 shadow-sm rounded-lg border-primaryBlue border-2 shadow-slate-700 flex flex-col gap-3 pt-[19px] px-[1.32%]">
              <div>
                <form action="">
                  <label
                    htmlFor="name"
                    className="header3 text-primaryBlue block mb-[5px]"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2"
                  />
                </form>
              </div>
              <div className="flex flex-col gap-[5px]">
                <form action="">
                  <label
                    htmlFor="number"
                    className="header3 text-primaryBlue block mb-[5px]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-[100%] lg:w-1/2"
                  />
                </form>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">University</h3>
                <div className="relative h-auto w-[100%] lg:w-1/2 rounded-lg">
                  {university != "" && (
                    <SelectComponent
                      placeholder="Select your university"
                      type={"University"}
                      value={university}
                      onChange={(e: string) => setUniversity(e)}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="relative h-auto w-[100%] lg:w-1/2 rounded-lg">
                  <form action="">
                    <label
                      htmlFor="major"
                      className="header3 text-primaryBlue block mb-[5px]"
                    >
                      Major
                    </label>
                    <input
                      type="text"
                      id="major"
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      placeholder="Enter your major"
                      className="body-text text-primaryBlue bg-slate-200 border-none placeholder:text-primaryBlue rounded-lg h-[60px] w-full"
                    />
                  </form>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="header3 text-primaryBlue">Year</h3>
                <div className="relative h-auto w-[100%] lg:w-1/2 rounded-lg">
                  {year != "" && (
                    <SelectComponent
                      placeholder="Select year"
                      type={"Year"}
                      value={year}
                      onChange={(e: string) => setYear(e)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default EditProfile;
