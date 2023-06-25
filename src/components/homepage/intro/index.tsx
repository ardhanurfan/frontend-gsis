import { Fragment } from "react"

const Intro = () => {
    return (
        <Fragment>
            <div className="flex justify-between ">
                <div className="font-montserrat relative z-10 pt-[264px] w-[46%] ml-[145px] ">
                    <h1 className=" font-bold  text-6xl text-primaryBlue">
                        Ganesha Student Innovation Summit
                    </h1>
                    <p className="mt-[15px] text-justify text-primaryBlue font-normal text-base">
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
                    tetangga.
                    </p>
                </div>
            </div>
            <img src="./src/assets/theme_elaboration.svg" alt="" className="pt-[62px] relative mx-auto"/>
        </Fragment>
    )
}

export default Intro