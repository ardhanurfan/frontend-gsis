import Dot from "../../../components/account/dot";
import TextField from "../../../components/account/text-field";
import "./style.css";

const SignUp = () => {
  return (
    <>
      <div className="h-auto w-full bg-white py-[62px] px-[70px]">
        <div className="w-full h-full rounded-[10px]  items-center shadow-lg shadow-primaryBlue bg-gradient-to-br from-primaryBlue to-white p-[3px]">
          <div className="relative w-full h-full rounded-[10px] px-[425px]  flex flex-col justify-center items-center bg-white">
            <Dot></Dot>
            <h1 className="header1 text-primaryText mb-[62px] mt-[50px]">
              Sign Up
            </h1>
            <form className="w-full field-text">
              <TextField
                label={"Name"}
                placeholder={"Enter Name"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                label={"Email"}
                placeholder={"Enter Email"}
                type={"email"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                label={"Password"}
                placeholder={"Enter Password"}
                type={"password"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                label={"Confirm Password"}
                placeholder={"Reenter Password"}
                type={"password"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                label={"Username"}
                placeholder={"Enter Username"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <TextField
                label={"Phone Number"}
                placeholder={"Enter Phone Number (+62)"}
                type={"text"}
                style={"mb-[38px]"}
              ></TextField>
              <div className="flex flex-col mb-[38px]">
                <label htmlFor="university" className="text-primaryText mb-2">
                  University/Institution
                </label>
                <div className="select relative h-[60px] flex w-full bg-primaryBlue rounded-lg">
                  <select
                    className="body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 flex-1 rounded-lg"
                    name="select"
                    id="university"
                  >
                    <option className="text-seccondaryBlue" selected disabled>
                      Choose a university
                    </option>
                    <option value="Institut Teknologi Bandung">
                      Institut Teknologi Bandung
                    </option>
                    <option value="Universitas Gadjah Mada">
                      Universitas Gadjah Mada
                    </option>
                    <option value="Universitas Indonesia">
                      Universitas Indonesia
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mb-[38px]">
                <label htmlFor="major" className="text-primaryText mb-2">
                  Major
                </label>
                <div className="select relative h-[60px] flex w-full bg-primaryBlue rounded-lg">
                  <select
                    className="body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 flex-1 rounded-lg"
                    name="select"
                    id="major"
                  >
                    <option className="text-seccondaryBlue" selected disabled>
                      Choose a major
                    </option>
                    <option value="Information System and Technology">
                      Information System and Technology
                    </option>
                    <option value="Informatics">Informatics</option>
                    <option value="Jogja Solo">Jogja Solo</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mb-[60px]">
                <label htmlFor="year" className="text-primaryText mb-2">
                  Year
                </label>
                <div className="select relative h-[60px] flex w-full bg-primaryBlue rounded-lg">
                  <select
                    className="body-text bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 flex-1 rounded-lg"
                    name="select"
                    id="year"
                  >
                    <option className="text-seccondaryBlue" selected disabled>
                      Choose a year
                    </option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="button-text text-primaryBlue mb-[80px]">
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
