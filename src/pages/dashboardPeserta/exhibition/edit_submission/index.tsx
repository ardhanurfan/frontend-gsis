import Footer from "../../../../components/footer/index";
import { useEffect, useState } from "react";
import UploadFile from "../../../../components/upload-file/upload-file";
import "./style.css";
import { getWithAuth, postWithAuth } from "../../../../API/api";
import { NotifyStatus } from "../../../../components/toast_pop_up/toast";
import { useNavigate } from "react-router-dom";
import SelectComponent from "../../../../components/SelectComponent";
import { Toaster } from "react-hot-toast";
import NavbarDashboard from "../../../../components/navbarDashboard/NavbarDashboard";
import Nothing from "../../../addingPages/nothing";

const EditSubmissionExhibition = () => {
  const [data, setData] = useState<any | null>(null);
  const [category, setCategory] = useState("INDIVIDU");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [size, setSize] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [doc, setDoc] = useState<File | null>(null);
  const [urlDoc, setUrlDoc] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const getData = async () => {
    if (token) {
      try {
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const response = await getWithAuth("exhibition?user_id=" + id, token);
        console.log(response);
        setData(response?.data?.data);
        setCategory(response?.data?.data.category);
        setDescription(response?.data?.data.description);
        setYear(response?.data?.data.year);
        setUrlDoc(response?.data?.data.documentation[0].url);
        setSize(response?.data?.data.size);
        setInstagram(response?.data?.data.instagram);
        setYoutube(response?.data?.data.youtube);
        setTwitter(response?.data?.data.twitter);
        const splitSize = size.split(" ");
        setWidth(splitSize[0]);
        setHeight(splitSize[2]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const childToParent = (childdata: File) => {
    setDoc(childdata);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await postWithAuth(
        "edit-exhibition-user",
        {
          category: category,
          description: description,
          year: year,
          width: width,
          height: height,
          url: doc,
          instagram: instagram,
          youtube: youtube,
          twitter: twitter,
        },
        token ?? ""
      );
      navigate("/dashboard-exhibition");
      NotifyStatus("Registration Successfully!", true);
    } catch (error) {
      const mess = error as any;
      NotifyStatus(mess.response.data.data.error, false);
    } finally {
      setLoading(false);
    }
  };

  console.log(width);

  return (
    <>
      {data == null ? (
        <Nothing />
      ) : (
        <>
          <Toaster />
          <NavbarDashboard />
          <div className="mt-32 mb-10 px-2 md:px-10 xl:px-10 ">
            <div className="kelas-bayangan relative bg-white w-full h-[auto] rounded-2xl ">
              <div className="h-auto w-[38px] flex justify-between absolute m-[2%] lg:m-[2%]">
                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
              </div>
              <h1 className="header1-mobile lg:header1 text-primaryBlue text-center py-10">
                EXHIBITION
              </h1>
              <div className="flex flex-col lg:flex-row justify-between gap-3 xl:gap-5 md:px-10 px-6">
                <div className="w-full flex flex-col lg:pl-20 gap-5 ">
                  <div className="relative kicik">
                    <label
                      htmlFor="cat"
                      className="body-text text-primaryText block text-left"
                    >
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      id="cat"
                      placeholder="Enter Category"
                      className=" w-full block py-4 rounded-md bg-primaryBlue focus:placeholder-[#4F9BFD] border-none text-white"
                    >
                      <option value="INDIVIDU">Individu</option>
                      <option value="TEAM">Team</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="desc"
                      className="body-text text-primaryText text-left"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      name="desc"
                      id="desc"
                      value={description}
                      placeholder="Desctiption"
                      className="text-area w-full h-20 lg:h-[200px] resize-none text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none"
                    ></textarea>
                    <p className="text-seccondaryBlue text-xs font-medium text-right">
                      {description.length}/150
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="ig"
                      className="body-text text-primaryText text-left"
                    >
                      Instagram
                    </label>
                    <input
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      name="ig"
                      id="ig"
                      placeholder="Instagram"
                      className="text-area w-full py-4 px-4 resize-none text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none"
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="yt"
                      className="body-text text-primaryText text-left"
                    >
                      Youtube
                    </label>
                    <input
                      value={youtube}
                      onChange={(e) => setYoutube(e.target.value)}
                      name="yt"
                      id="yt"
                      placeholder="Youtube"
                      className="text-area w-full py-4 px-4 resize-none text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none"
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="tweet"
                      className="body-text text-primaryText text-left"
                    >
                      Twitter
                    </label>
                    <input
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      name="tweet"
                      id="tweet"
                      placeholder="Twitter"
                      className="text-area w-full py-4 px-4 resize-none text-primaryBlue text-xs placeholder:text-seccondaryBlue rounded-lg bg-slate-100 border-none"
                    ></input>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-5 lg:pr-20">
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-5 lg:gap-5">
                    <div className="mb-4 lg:mb-0">
                      <span className="block text-left text-[#015CBA] body-text">
                        Year Created <span className="text-error">*</span>
                      </span>
                      <div className="relative h-10 lg:h-[60px] flex justify-start w-ful">
                        <SelectComponent
                          placeholder={"Select year created"}
                          type={"Year"}
                          onChange={(e: string) => setYear(e)}
                          value={year}
                        />
                      </div>
                    </div>
                    <div className="w-ful flex gap-5">
                      <form action="" className="">
                        <label className="title">
                          <span className="body-text text-primaryText block text-left">
                            Width
                          </span>
                          <input
                            value={width}
                            type="text"
                            id="text"
                            onChange={(e) => setWidth(e.target.value)}
                            className="w-full h-10 lg:h-[60px] block py-2 text-sm rounded-md bg-slate-100 focus:placeholder-[#4F9BFD] border-none placeholder:text-seccondaryBlue"
                          />
                        </label>
                      </form>
                      <form action="" className="">
                        <label className="title">
                          <span className="body-text text-primaryText block text-left">
                            Height
                          </span>
                          <input
                            value={height}
                            type="text"
                            id="text"
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full h-10 lg:h-[60px] block py-2 text-sm rounded-md bg-slate-100 focus:placeholder-[#4F9BFD] border-none placeholder:text-seccondaryBlue"
                          />
                        </label>
                      </form>
                    </div>
                  </div>

                  <div className="mx-auto w-[70%]">
                    <span className="body-text text-primaryText block text-left">
                      Photo / Video
                    </span>
                    <div className="flex flex-col items-center">
                      <h3 className="py-2 text-primaryBlue text-center header3-mobile lg:header3">
                        UPLOAD FILES
                      </h3>
                      <div className="w-full">
                        <UploadFile
                          childToParent={childToParent}
                          type={"photo/video"}
                          value={urlDoc}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-5">
                <button
                  disabled={loading}
                  onClick={handleSubmit}
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
                  {!loading && "Submit"}
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default EditSubmissionExhibition;
