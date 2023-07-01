import "./style.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo_gsis.svg";

const Footer = () => {
  return (
    <div className="relative bottom-0 clear-both">
      <div className="custom-shadow px-[5px] lg:px-[35px] flex justify-between items-center w-full h-[50px] bg-slate-100 bg-opacity-30 backdrop-blur-sm mx-auto overflow-hidden border-2 border-white border-opacity-20">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="flex justify-between lg:justify-center gap-[5px] items-center">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM5.8418 9.1582C4.92773 8.24414 4.92773 6.75879 5.8418 5.84473C6.75586 4.93066 8.24121 4.93066 9.15527 5.84473C9.43066 6.12012 9.87598 6.12012 10.1484 5.84473C10.4209 5.56934 10.4238 5.12402 10.1484 4.85156C8.68359 3.38672 6.31055 3.38672 4.8457 4.85156C3.38086 6.31641 3.38086 8.68945 4.8457 10.1543C6.31055 11.6191 8.68359 11.6191 10.1484 10.1543C10.4238 9.87891 10.4238 9.43359 10.1484 9.16113C9.87305 8.88867 9.42773 8.88574 9.15527 9.16113C8.24121 10.0752 6.75586 10.0752 5.8418 9.16113V9.1582Z"
              fill="#015CBA"
            />
          </svg>
          <p className="font-montserrat font-normal text-[12px] tracking-[0.01em] leading-[1.4] lg:text-[16px] text-primaryBlue">
            Ganesha Student <br className="md:hidden" /> Innovation Summit
          </p>
        </div>
        <div className="flex gap-[11px] text-primaryBlue">
          <a
            className="text-[22px] lg:text-[28px] justify-end flex items-center text-primaryBlue hover:text-seccondaryBlue"
            href="https://www.linkedin.com/company/ganesha-student-innovation-summit/"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-[22px] lg:text-[28px] justify-end flex items-center hover:text-seccondaryBlue"
            href="https://www.instagram.com/ganeshasummit/?hl=en"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
