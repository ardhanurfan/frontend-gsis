import { Fragment } from "react"

const Intro = () => {
    return (
        <Fragment>
            <div className="flex justify-between">
                <div className="font-montserrat pt-[150px] lg:pt-[130px] w-[53%] lg:w-[47%] ml-[9%] ">
                    <h1 className=" header1-mobile lg:header1 text-primaryBlue lg:pt-16">
                        Ganesha Student Innovation Summit
                    </h1>
                    <p className="mt-[15px] text-justify text-primaryBlue body-text-mobile lg:body-text">
                    Ganesha Student Innovation Summit (GSIS) adalah acara tahunan yang
                    diselenggarakan oleh Keluarga Mahasiswa Institut Teknologi Bandung (KM ITB)
                    untuk memfasilitasi siswa dan mahasiswa dari berbagai sekolah dan perguruan
                    tinggi di Indonesia untuk mengembangkan ide kreatif dan inovatif dalam
                    berbagai bidang, terkait teknologi, sains, sosial, seni dan budaya. Acara ini
                    bertujuan untuk mendorong para peserta untuk mengembangkan kemampuan
                    inovasi dan kewirausahaan mereka serta memperluas jaringan profesional
                    mereka. Acara ini meliputi serangkaian kegiatan seperti kompetisi inovasi dan
                    business case, pameran, dan konferensi internasional yang diikuti oleh para
                    peserta dari berbagai perguruan tinggi di Indonesia dan negara-negara
                    tetangga
                    </p>
                </div>
                <div className="pt-[150px] sm:pt-[140px] lg:pt-[130px] w-2/6 2xl:w-fit ">
                    <img src="./src/assets/title_ilustration.svg" alt="" className="relative"/>
                </div>
            </div>
            <img src="./src/assets/theme_elaboration.svg" alt="" className="pt-[62px] relative px-4 lg:mx-auto"/>
        </Fragment>
    )
}

export default Intro