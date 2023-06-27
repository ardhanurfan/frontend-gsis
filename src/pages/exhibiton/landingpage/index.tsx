import "./style.css";
import Navbar from "../../../components/navbar/Navbar";
// import ModalNotLogin from "../../../components/modalNotLogin/modalNotLogin";
import Footer from "../../../components/footer";
import ContactList from "../../../components/contact_list";
import Slides from "../../../components/gsic/Slides";
// import TimelineItem from "../../../components/gsic/TimelineItem";
import CarouselElement from "../../../components/gsic/Carousel";
import as from '../../../assets/BillGates.svg'
import d from '../../../assets/VectorAdminProfile.svg'

const Exhibition = () => {

  function goToRegistration(){
    window.open("/register-exhibition", "_blank");
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-cover bg-[url(./assets/Background_Exhibition.svg)]">
        <div className="pt-[200px] text-center">
          <h1 className="w-auto header1-mobile lg:header1 text-primaryText text-center">
              EXHIBITION
          </h1>

       </div>
       <div className="w-auto h-auto mx-auto pt-5 flex">
        </div>
          <div className="mt-12 mx-16 bg-slate-100 bg-opacity-30 rounded-xl shadow-lg shadow-slate-500 flex flex-col lg:flex-row overflow-hidden">
            <div className='w-full lg:w-1/3 pb-0 lg:py-12 px-5 flex justify-center lg:justify-end items-center'>
              <div className='w-80 h-96'>
                <CarouselElement className='' images={[as, d, as]} />
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-5 pb-5 lg:p-10 flex items-center">
              <p className='body-text-mmobile lg:body-text text-primaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus cupiditate asperiores incidunt eos itaque repellendus animi autem expedita sed?
              </p>
            </div>
          </div>

          <div className="w-auto h-auto overflow-auto">
            <div className="mt-[150px] lg:mt-[290px] mb-[125px]">
              <h1 className="mx-auto text-center header1-mobile lg:header1 text-primaryText">
                Timeline
              </h1>
              <div className="overflow-auto w-full mx-auto pb-[22px]">
                <div className="relative w-[355px] md:w-[760px] lg:w-[975px] 2xl:w-[1300px] h-[1605px] 2xl:h-[2140px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30">
                  <div className="h-auto w-[38px] flex justify-between absolute m-[4%] lg:m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                  </div>
                  <div className="relative">
                    <div className="pt-[25%] md:pt-[15.25%] lg:pt-[10.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[35%] mt-[9%] md:mt-[5%] lg:mt-[3.5%] 2xl:mt-[3.5%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">W1/W4</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">Jul/Sep, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] float-left"
                        src="../src/assets/Timeline1.svg"
                        alt="p"
                      />
                      <h3 className="pt-[19.5%] md:pt-[9%] lg:pt-[7%] 2xl:pt-[7%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue 2xl:mr-[9.923%]">
                        OPENING/ <br className="md:hidden"/> CLOSING <br /> CEREMONY
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[10.25%] md:mr-[31.5%] lg:mr-[35.6%] 2xl:mr-[35%] mt-[14%] md:mt-[9%] lg:mt-[6.5%] 2xl:mt-[7.5%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">W2-W2</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryGreen text-center">Jul-Ags, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="../src/assets/Timeline2.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.75%] md:pt-[12.75%] lg:pt-[9.75%] 2xl:pt-[10.75%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen 2xl:ml-[9.923%] text-right">
                        SOCIAL <br className="md:hidden"/> IMPACT <br /> CHALLENGE
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[10.25%] md:ml-[31.5%] lg:ml-[35.6%] 2xl:ml-[35%] mt-[13%] md:mt-[9%] lg:mt-[6.56%] 2xl:mt-[7%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">W2-W4</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">July, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                        src="../src/assets/Timeline3.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.85%] md:pt-[12.5%] lg:pt-[9.85%] 2xl:pt-[11.25%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange 2xl:mr-[9.923%]">
                        INDIVIDUAL <br className="md:hidden"/> CASE <br /> CHALLENGE
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[10.25%] md:mr-[31.5%] lg:mr-[35.6%] 2xl:mr-[35%] mt-[13%] md:mt-[9%] lg:mt-[6%] 2xl:mt-[6.75%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">W1-W4</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryYellow text-center">August, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="../src/assets/Timeline4.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.85%] md:pt-[13%] lg:pt-[9.5%] 2xl:pt-[10.5%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow 2xl:ml-[9.923%] text-right">
                        TEAM <br className="md:hidden"/> CASE <br /> CHALLENGE
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[11.25%] md:ml-[32.5%] lg:ml-[36%] mt-[13%] md:mt-[9%] lg:mt-[6.56%] 2xl:mt-[7%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryBlue text-center">W2</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryBlue text-center">August, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                        src="../src/assets/Timeline1.svg"
                        alt="p"
                      />
                      <h3 className="pt-[23.85%] md:pt-[12.75%] lg:pt-[9.85%] 2xl:pt-[11%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryBlue 2xl:mr-[9.923%]">
                        COLOUR <br className="md:hidden"/> RUN
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[8.25%] md:mr-[30.5%] lg:mr-[35%] mt-[19%] md:mt-[11%] lg:mt-[8%] 2xl:mt-[8.8%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryGreen text-center">W1</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryGreen text-center">September, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="../src/assets/Timeline2.svg"
                        alt="p"
                      />
                      <h3 className="pt-[28.55%] md:pt-[15.25%] lg:pt-[11.55%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen text-right">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryGreen 2xl:ml-[9.923%] text-right">
                      YOUTH <br className="md:hidden"/> CONFERENCE <br /> (HMJ, UKM, <br className="md:hidden"/>ComPart)
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center ml-[8.25%] md:ml-[30.5%] lg:ml-[35%] mt-[8%] lg:mt-[6%] 2xl:mt-[7.3%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryOrange text-center">W4</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryOrange text-center">September, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] ml-[5%] md:ml-[29%] lg:ml-[33.7%] -mt-[35px] float-left"
                        src="../src/assets/Timeline3.svg"
                        alt="p"
                      />
                      <h3 className="pt-[18.85%] md:pt-[12.85%] lg:pt-[9.85%] 2xl:pt-[11%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryOrange 2xl:mr-[9.923%]">
                        EXHIBITION 
                      </h3>
                    </div>
                    <div className="pt-[1.25%] relative">
                      <div className="absolute flex flex-col items-center text-primaryBlue justify-center right-0 mr-[8.25%] md:mr-[30.5%] lg:mr-[35%] mt-[24%] md:mt-[11%] lg:mt-[8%] 2xl:mt-[8.8%]">
                        <span className="font-montserrat 2xl:text-[36px] font-bold text-[24px] text-primaryYellow text-center">W4</span>
                        <span className="font-montserrat font-normal text-[12px] 2xl:text-[16px] text-primaryYellow text-center">September, 2023</span>
                      </div>
                      <img
                        className="2xl:w-[219px] 2xl:h-[277px] h-[207.75px] w-[164.25px] mr-[5%] md:mr-[29%] lg:mr-[33.7%] -mt-[35px] float-right"
                        src="../src/assets/Timeline4.svg"
                        alt="p"
                      />
                      <h3 className="pt-[33.25%] md:pt-[15.25%] lg:pt-[11.25%] 2xl:pt-[12.75%] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow text-right">
                        PRE-EVENT
                      </h3>
                      <h3 className="mt-[12px] font-montserrat text-[18px] font-bold tracking-[0.2em] leading-none 2xl:text-[24px] text-primaryYellow 2xl:ml-[9.923%] text-right">
                        GRAND <br className="md:hidden"/> SUMMIT
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto mt-20">
            <Slides className=""/>
          </div>
          <div className="w-auto h-auto mt-20">
            <div className="text-center">
              <h1 className="w-auto header1-mobile lg:header1 text-primaryText">Submit Here</h1>
            </div>
            <div className="flex justify-center items-center mt-5 lg:mt-10">
                <button
                  type="button"
                  className="cursor-pointer button-text-mobile lg:button-text bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center shadow-lg shadow-blue-500"
                  onClick={goToRegistration}
                >
                  Register Here
                </button>
              </div>
          </div>
          <div className="flex flex-col items-center mt-28 pb-20">
            <h1 className="header1-mobile lg:header1 pb-10 text-primaryBlue text-center">Contact Person</h1>
            <ContactList/>
          </div>
      </div>

      <Footer />
    </>
  );
};

export default Exhibition; 
