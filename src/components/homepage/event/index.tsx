import { Carousel } from "flowbite-react";

const Event = () => {
    return (
        <div>
            <h1 className="w-auto justify-center font-bold mx-auto inline-block text-6xl text-[#005CBA]">
                OUR EVENT
            </h1>
            <div className="w-[1114px] h-[450px] mx-auto relative -top-[10px]">
                <Carousel slideInterval={4000}>
                    <div className="w-[350px] h-[450px] bg-blue-700 rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-[#005CBA] to-[#4F9BFD] mb-[50px]">
                        <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600">
                            <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                        </div>  
                        <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                            [JABATAN JABATAN
                            JABATAN JABATAN]
                        </h6>
                    </div>
                    <div className="w-[350px] h-[450px] bg-blue-700 rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-[#005CBA] to-[#4F9BFD] mb-[50px]">
                        <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600">
                            <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                        </div>
                        <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                            [JABATAN JABATAN
                            JABATAN JABATAN]
                        </h6>
                    </div>
                    <div className="w-[350px] h-[450px] bg-blue-700 rounded-xl float-left shadow-md shadow-slate-700 overflow-hidden bg-gradient-to-l from-[#005CBA] to-[#4F9BFD] mb-[50px]">
                        <div className="inner-card h-[350px] rounded-xl shadow-md shadow-slate-600">
                            <div className="badge-name w-[300px] h-[55px] mx-auto flex justify-center items-center rounded-md relative top-[272px] shadow-sm shadow-slate-700">Nama Anggota</div>
                        </div>
                        <h6 className="font-montserrat text-white font-bold h-[58px] w-[246px] mx-auto text-center mt-[20px]">
                            [JABATAN JABATAN
                            JABATAN JABATAN]
                        </h6>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Event