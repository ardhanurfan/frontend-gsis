import "./style.css";
import toa from "../../../assets/toa.svg";

const DashboardEx = () => {
  return (
    <>
      <div className="flex flex-col justify-center py-4 bg-white">
        <div className="w-full flex items-center justify-between pt-[100px] px-40">
          <h1 className="text-7xl font-bold text-left text-[#005CBA] title mb-10">
            Exhibition Participant
          </h1>
          <div className="select">
            <select
              className="body-text w-auto bg-primaryBlue text-white cursor-pointer outline-none shadow-none border-0 rounded-lg"
              name=""
              id=""
            >
              <option value="" selected disabled>
                Category
              </option>
              <option value="">Team</option>
              <option value="">Individual</option>
            </select>
          </div>
        </div>
        <div className="mt-2 space-y-4">
          <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto flex flex-row items-center">
                  <h2 className="header2 mb-2">Team Name</h2>
                  <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
                <p className="text-sm ml-2">Team Id</p>
              </div>
            </summary>
            <div className="grid grid-cols-3 p-2 shadow-2xl rounded-b-xl">
              <div className="rounded-md h-[auto]">
                <div className="my-5 ml-5">
                  <h3 className="header3 text-[#015CBA]">Profile</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Email</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    13521132@std.stei.itb.ac.id
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                  <div className="flex gap-3 mb-4">
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">University</p>
                      <p className="text-[#4F9BFD] small">
                        Institut Technology of Bandung
                      </p>
                    </div>
                    <div className="flex flex-col w-[100px]">
                      <p className="text-[#015CBA] body-text">Major</p>
                      <p className="text-[#4F9BFD] small">
                        Informatics Engineering
                      </p>
                    </div>
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">Year</p>
                      <p className="text-[#4F9BFD] small">2021/2022</p>
                    </div>
                  </div>
                  <h3 className="header3 text-[#015CBA]">Contact Person</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                </div>
              </div>
              <div className="col-span-2 rounded-md h-[auto]">
                <div className="my-5 mr-5">
                  <h3 className="header3 text-[#015CBA]">Work</h3>
                  <div className="flex gap-16 my-5">
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Category</p>
                      <p className="text-[#4F9BFD] small">Masterpiece</p>
                    </div>
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Year Created</p>
                      <p className="text-[#4F9BFD] small">203</p>
                    </div>
                    <div className="flex flex-col w-auto mr-10">
                      <p className="text-[#015CBA] body-text">Size</p>
                      <p className="text-[#4F9BFD] small">1028x1960</p>
                    </div>
                    <div className="flex flex-row gap-5 w-[120px]">
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Photo
                      </button>
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Video
                      </button>
                    </div>
                  </div>
                  <p className="text-[#015CBA] body-text">Description</p>
                  <p className="text-[#4F9BFD] small text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam pariatur ratione nesciunt? Nesciunt nostrum aperiam
                    in, unde, odio illo incidunt alias consequatur est
                    laboriosam vel sapiente maxime repudiandae consequuntur id
                    laborum. Incidunt consequatur esse saepe eius, pariatur fuga
                    nemo animi. Corporis a quo repellat, modi totam aliquid
                    nesciunt illum voluptas.
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto flex flex-row items-center">
                  <h2 className="header2 mb-2">Team Name</h2>
                  <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
                <p className="text-sm ml-2">Team Id</p>
              </div>
            </summary>
            <div className="grid grid-cols-3 p-2 shadow-2xl rounded-b-xl">
              <div className="rounded-md h-[auto]">
                <div className="my-5 ml-5">
                  <h3 className="header3 text-[#015CBA]">Profile</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Email</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    13521132@std.stei.itb.ac.id
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                  <div className="flex gap-3 mb-4">
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">University</p>
                      <p className="text-[#4F9BFD] small">
                        Institut Technology of Bandung
                      </p>
                    </div>
                    <div className="flex flex-col w-[100px]">
                      <p className="text-[#015CBA] body-text">Major</p>
                      <p className="text-[#4F9BFD] small">
                        Informatics Engineering
                      </p>
                    </div>
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">Year</p>
                      <p className="text-[#4F9BFD] small">2021/2022</p>
                    </div>
                  </div>
                  <h3 className="header3 text-[#015CBA]">Contact Person</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                </div>
              </div>
              <div className="col-span-2 rounded-md h-[auto]">
                <div className="my-5 mr-5">
                  <h3 className="header3 text-[#015CBA]">Work</h3>
                  <div className="flex gap-16 my-5">
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Category</p>
                      <p className="text-[#4F9BFD] small">Masterpiece</p>
                    </div>
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Year Created</p>
                      <p className="text-[#4F9BFD] small">203</p>
                    </div>
                    <div className="flex flex-col w-auto mr-10">
                      <p className="text-[#015CBA] body-text">Size</p>
                      <p className="text-[#4F9BFD] small">1028x1960</p>
                    </div>
                    <div className="flex flex-row gap-5 w-[120px]">
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Photo
                      </button>
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Video
                      </button>
                    </div>
                  </div>
                  <p className="text-[#015CBA] body-text">Description</p>
                  <p className="text-[#4F9BFD] small text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam pariatur ratione nesciunt? Nesciunt nostrum aperiam
                    in, unde, odio illo incidunt alias consequatur est
                    laboriosam vel sapiente maxime repudiandae consequuntur id
                    laborum. Incidunt consequatur esse saepe eius, pariatur fuga
                    nemo animi. Corporis a quo repellat, modi totam aliquid
                    nesciunt illum voluptas.
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto flex flex-row items-center">
                  <h2 className="header2 mb-2">Team Name</h2>
                  <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
                <p className="text-sm ml-2">Team Id</p>
              </div>
            </summary>
            <div className="grid grid-cols-3 p-2 shadow-2xl rounded-b-xl">
              <div className="rounded-md h-[auto]">
                <div className="my-5 ml-5">
                  <h3 className="header3 text-[#015CBA]">Profile</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Email</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    13521132@std.stei.itb.ac.id
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                  <div className="flex gap-3 mb-4">
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">University</p>
                      <p className="text-[#4F9BFD] small">
                        Institut Technology of Bandung
                      </p>
                    </div>
                    <div className="flex flex-col w-[100px]">
                      <p className="text-[#015CBA] body-text">Major</p>
                      <p className="text-[#4F9BFD] small">
                        Informatics Engineering
                      </p>
                    </div>
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">Year</p>
                      <p className="text-[#4F9BFD] small">2021/2022</p>
                    </div>
                  </div>
                  <h3 className="header3 text-[#015CBA]">Contact Person</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                </div>
              </div>
              <div className="col-span-2 rounded-md h-[auto]">
                <div className="my-5 mr-5">
                  <h3 className="header3 text-[#015CBA]">Work</h3>
                  <div className="flex gap-16 my-5">
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Category</p>
                      <p className="text-[#4F9BFD] small">Masterpiece</p>
                    </div>
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Year Created</p>
                      <p className="text-[#4F9BFD] small">203</p>
                    </div>
                    <div className="flex flex-col w-auto mr-10">
                      <p className="text-[#015CBA] body-text">Size</p>
                      <p className="text-[#4F9BFD] small">1028x1960</p>
                    </div>
                    <div className="flex flex-row gap-5 w-[120px]">
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Photo
                      </button>
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Video
                      </button>
                    </div>
                  </div>
                  <p className="text-[#015CBA] body-text">Description</p>
                  <p className="text-[#4F9BFD] small text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam pariatur ratione nesciunt? Nesciunt nostrum aperiam
                    in, unde, odio illo incidunt alias consequatur est
                    laboriosam vel sapiente maxime repudiandae consequuntur id
                    laborum. Incidunt consequatur esse saepe eius, pariatur fuga
                    nemo animi. Corporis a quo repellat, modi totam aliquid
                    nesciunt illum voluptas.
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details className="px-44 pb-5 hover:cursor-pointer rounded-xl">
            <summary className="w-full h-[113px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-10 mx-auto flex items-center justify-between shadow-lg">
              <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto flex flex-row items-center">
                  <h2 className="header2 mb-2">Team Name</h2>
                  <div className="w-20 h-4 ml-2 rounded-2xl flex items-center justify-center bg-[#F8DB25]">
                    <p className="small text-[#FCFCFC]">ACTIVE</p>
                  </div>
                </div>
                <p className="text-sm ml-2">Team Id</p>
              </div>
            </summary>
            <div className="grid grid-cols-3 p-2 shadow-2xl rounded-b-xl">
              <div className="rounded-md h-[auto]">
                <div className="my-5 ml-5">
                  <h3 className="header3 text-[#015CBA]">Profile</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Email</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    13521132@std.stei.itb.ac.id
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                  <div className="flex gap-3 mb-4">
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">University</p>
                      <p className="text-[#4F9BFD] small">
                        Institut Technology of Bandung
                      </p>
                    </div>
                    <div className="flex flex-col w-[100px]">
                      <p className="text-[#015CBA] body-text">Major</p>
                      <p className="text-[#4F9BFD] small">
                        Informatics Engineering
                      </p>
                    </div>
                    <div className="flex flex-col w-[120px]">
                      <p className="text-[#015CBA] body-text">Year</p>
                      <p className="text-[#4F9BFD] small">2021/2022</p>
                    </div>
                  </div>
                  <h3 className="header3 text-[#015CBA]">Contact Person</h3>
                  <p className="text-[#015CBA] body-text">Name</p>
                  <p className="text-[#4F9BFD] small mb-4">
                    Dhanika Novlisariyanti
                  </p>
                  <p className="text-[#015CBA] body-text">Phone Number</p>
                  <p className="text-[#4F9BFD] small mb-4">+628XXXXXXXX</p>
                </div>
              </div>
              <div className="col-span-2 rounded-md h-[auto]">
                <div className="my-5 mr-5">
                  <h3 className="header3 text-[#015CBA]">Work</h3>
                  <div className="flex gap-16 my-5">
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Category</p>
                      <p className="text-[#4F9BFD] small">Masterpiece</p>
                    </div>
                    <div className="flex flex-col w-auto">
                      <p className="text-[#015CBA] body-text">Year Created</p>
                      <p className="text-[#4F9BFD] small">203</p>
                    </div>
                    <div className="flex flex-col w-auto mr-10">
                      <p className="text-[#015CBA] body-text">Size</p>
                      <p className="text-[#4F9BFD] small">1028x1960</p>
                    </div>
                    <div className="flex flex-row gap-5 w-[120px]">
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Photo
                      </button>
                      <button className="text-[#FCFCFC] body-text bg-success w-full rounded-lg px-5">
                        Video
                      </button>
                    </div>
                  </div>
                  <p className="text-[#015CBA] body-text">Description</p>
                  <p className="text-[#4F9BFD] small text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam pariatur ratione nesciunt? Nesciunt nostrum aperiam
                    in, unde, odio illo incidunt alias consequatur est
                    laboriosam vel sapiente maxime repudiandae consequuntur id
                    laborum. Incidunt consequatur esse saepe eius, pariatur fuga
                    nemo animi. Corporis a quo repellat, modi totam aliquid
                    nesciunt illum voluptas.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div className="fixed bottom-16 right-6">
        <button>
          <img src={toa} alt="" className="w-[80px] h-[80px] mr-6" />
        </button>
      </div>
    </>
  );
};

export default DashboardEx;
