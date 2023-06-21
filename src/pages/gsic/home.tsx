import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer'

function HomePageGSIC() {
    return (
        <div className='bg-[url(./assets/Background_GSIC.svg)] bg-cover'>
            <Navbar />
            <h1 className="mt-36 px-56 text-center font-bold  text-6xl text-primaryBlue">
                Ganesha Social Impact Challenge (GSIC)
            </h1>
            <div className="w-[90.3vw] h-[auto] lg:h-[615px] mt-12 overflow-auto lg:overflow-visible bg-slate-100 bg-opacity-30 rounded-xl mx-auto shadow-lg shadow-slate-500 flex flex-col lg:flex-row gap-[30px] lg:gap-[65px]">
                <div className="w-[300px] lg:w-[350px] h-[400px] lg:h-[450px] bg-gradient-to-l from-primaryBlue to-seccondaryBlue mx-auto lg:mr-0 lg:ml-[59px] mt-[60px] lg:my-[83px] shrink-0 rounded-xl shadow-md shadow-slate-700">

                </div>
                <div className="lg:pt-[98px] w-full clear-left lg:clear-none">
                    <p className="text-primaryText pb-5 lg:mr-[97px] px-12 lg:px-0 body-text text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis maxime qui modi molestiae optio vero aliquid assumenda sequi eligendi.

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptas reprehenderit ipsa dignissimos eaque, unde nemo doloremque voluptatum libero mollitia adipisci. Cumque assumenda culpa, veniam id laborum esse nisi in!
                    </p>
                </div>
            </div>
            <h1 className="mx-auto mt-24 text-center header1 text-primaryText">
                Timeline
            </h1>
            <div className="overflow-auto w-[95vw] mx-auto pb-[22px]">
                <div className="relative w-[90vw] min-w-[975px] max-w-[1300px] h-[1605px] lg:h-[2140px] mt-[45px] bg-slate-100 mx-auto rounded-xl shadow-lg shadow-slate-500 bg-opacity-30">
                <div className="h-auto w-[38px] flex justify-between float-left m-[2%]">
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                    <div>
                    <span></span>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] pt-[10.25%] float-left"
                        src="../src/assets/Timeline1.svg"
                        alt="p"
                    />
                    <h3 className="pt-[18%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue mr-[7.923%]">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                    <div>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                        src="../src/assets/Timeline2.svg"
                        alt="p"
                    />
                    <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen text-right">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen ml-[7.923%] text-right">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                    <div>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] -mt-[3.12%] float-left"
                        src="../src/assets/Timeline3.svg"
                        alt="p"
                    />
                    <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange mr-[7.923%]">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                    <div>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                        src="../src/assets/Timeline4.svg"
                        alt="p"
                    />
                    <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow text-right">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow ml-[7.923%] text-right">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                    <div>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] -mt-[3.12%] float-left"
                        src="../src/assets/Timeline1.svg"
                        alt="p"
                    />
                    <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryBlue mr-[7.923%]">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                    <div>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                        src="../src/assets/Timeline2.svg"
                        alt="p"
                    />
                    <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen text-right">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryGreen ml-[7.923%] text-right">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                    <div>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] ml-[33.7%] -mt-[3.12%] float-left"
                        src="../src/assets/Timeline3.svg"
                        alt="p"
                    />
                    <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryOrange mr-[7.923%]">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                    <div>
                    <img
                        className="w-[16.85%] h-[12.94%] min-h-[207.75px] min-w-[164.25px] mr-[33.7%] -mt-[3.12%] float-right"
                        src="../src/assets/Timeline4.svg"
                        alt="p"
                    />
                    <h3 className="pt-[8.7%] lg:pt-[8.9%] xl:pt-[9%] 2xl:pt-[9.4%] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow text-right">
                        PRE-EVENT
                    </h3>
                    <h3 className="mt-[12px] font-montserrat text-[20px] font-bold tracking-[0.2em] leading-none xl:text-[24px] text-primaryYellow ml-[7.923%] text-right">
                        NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA EVENT NAMA
                        EVENT
                    </h3>
                    </div>
                </div>
                </div>
            </div>
            <h1 className="mt-12 px-64 text-center font-bold  text-6xl text-primaryBlue">
                Are You Ready To Be The Next Winner?
            </h1>
            <h4 className='text-center text-error'>*To participate in any event, first you must create an account</h4>
            <div className='w-full mt-4 flex justify-center'>
                <a href='/gsic/register'>
                    <button className='bg-primaryBlue px-8 py-1 text-white font-semibold rounded-lg shadow-lg shadow-slate-400 hover:shadow-none duration-100'>
                        Register Here
                    </button>
                </a>
            </div>
            <h1 className="mt-12 px-64 text-center font-bold  text-6xl text-primaryBlue">
                Contact Person
            </h1>
            <div className='flex mb-12'>
                <div className='w-16 h-16 flex justify-center items-center bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-white shadow-xl shadow-primaryGreen hover:shadow-none duration-100 cursor-pointer'>
                    <div className='w-12 h-12 rounded-full bg-white blur-sm'>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default HomePageGSIC