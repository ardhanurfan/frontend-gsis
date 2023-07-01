import { Fragment } from "react";

const Intro = () => {
  return (
    <Fragment>
      <div className="flex justify-center lg:justify-between items-center">
        <div className="font-montserrat pt-[150px] lg:pt-[130px] w-[80%] lg:w-[47%] lg:ml-24">
          <h1 className="header3 lg:header1 text-primaryBlue lg:pt-16 text-center">
            Ganesha Student Innovation Summit
          </h1>
          <p className="mt-[15px] text-justify text-primaryBlue body-text-mobile rounded-xl p-6 bg-slate-100 shadow-lg backdrop-blur-sm shadow-slate-500 bg-opacity-30 lg:body-text lg:shadow-none lg:bg-transparent">
            Ganesha Student Innovation Summit (GSIS) is an annual event
            organized by Keluarga Mahasiswa Institut Teknologi Bandung (KM ITB)
            to facilitate students and students from various schools and
            universities in Indonesia to develop creative and innovative ideas
            in various fields, related to technology, science, social, arts, and
            culture. The event aims to encourage participants to develop their
            innovation and entrepreneurship skills as well as expand their
            professional network. The event includes a series of activities such
            as innovation and business case competitions, exhibitions, and an
            international conference attended by participants from various
            universities in Indonesia and neighboring countries.
          </p>
        </div>
        <div className="hidden lg:block pt-[150px] sm:pt-[140px] lg:pt-[130px] w-2/6 2xl:w-fit ">
          <img src="assets/title_ilustration.svg" alt="" className="relative" />
        </div>
      </div>
      <h1 className="text-center header3 lg:header1 text-primaryBlue mt-20">
        GSIS Theme Elaboration
      </h1>
      <h1 className="text-center header3-mobile lg:header2 text-primaryBlue py-6 lg:py-12">
        'Futurizing' Sustainability : <br /> Collaborative Revolution
      </h1>
      <img src="assets/theme.svg" alt="" className="relative px-4 lg:mx-auto" />
    </Fragment>
  );
};

export default Intro;
