import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer'
import CarouselElement from '../../components/gsic/Carousel'
import TimelineItem from '../../components/gsic/TimelineItem'
import ContactItem from '../../components/gsic/ContactItem'
import Slides from '../../components/gsic/Slides'
import AnimatedElement from '../../components/gsic/Test'

function HomePageGSIC() {
    return (
        <div className='bg-[url(./assets/Background_GSIC.svg)] bg-cover'>
            <Navbar />
            <h1 className="mt-36 px-56 text-center font-bold  text-6xl text-primaryBlue">
                Ganesha Social Impact Challenge (GSIC)
            </h1>
            <div className="mt-12 mx-16 bg-slate-100 bg-opacity-30 rounded-xl shadow-lg shadow-slate-500 flex overflow-hidden">
                <div className='w-1/3 py-12 flex justify-end items-center'>
                    <div className='w-80 h-96'>
                        <CarouselElement 
                            className='' 
                            images={[
                                "https://images.unsplash.com/photo-1687204388066-702f259abdad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                                "https://plus.unsplash.com/premium_photo-1666899940579-6c931e34d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
                                "https://images.unsplash.com/photo-1687463221020-b8769b32c622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            ]} 
                        />
                    </div>
                </div>
                <div className="w-2/3 pl-8 flex items-center">
                    <p className='text-primaryText'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur ducimus quos! Fugiat inventore ut doloribus sed soluta architecto, quia quibusdam itaque repudiandae odit sit quo fugit nisi quaerat ea.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem dolor, tempore delectus, veniam, atque iure aliquid iste alias error exercitationem odio quod. Corrupti ex dicta provident possimus earum doloribus!
                    </p>
                </div>
            </div>
            <h1 className="mx-auto mt-24 text-center header1 text-primaryText">
                Timeline
            </h1>
            <div className="mx-16 mt-10 bg-slate-100 py-20 rounded-xl shadow-lg shadow-slate-500 bg-opacity-30">
                <TimelineItem
                    orientation='left'
                    date='XX-XX'
                    dateDetail='Jan - Mar, 2023'
                    eventName='Apa Hayo'
                    eventDesc='ffiuerwhf woeifj oweifhw efiwefoi'
                />
                <TimelineItem
                    orientation='right'
                    date='XX-XX'
                    dateDetail='Jan - Mar, 2023'
                    eventName='Apa Hayo'
                    eventDesc='ffiuerwhf woeifj oweifhw efiwefoi'
                    className='mt-[-70px]'
                />
                <TimelineItem
                    orientation='left'
                    date='XX-XX'
                    dateDetail='Jan - Mar, 2023'
                    eventName='Apa Hayo'
                    eventDesc='ffiuerwhf woeifj oweifhw efiwefoi'
                    className='mt-[-70px]'
                />
                <TimelineItem
                    orientation='right'
                    date='XX-XX'
                    dateDetail='Jan - Mar, 2023'
                    eventName='Apa Hayo'
                    eventDesc='ffiuerwhf woeifj oweifhw efiwefoi'
                    className='mt-[-70px]'
                />
            </div>
            <Slides className='mt-48'/>
            <h1 className="mt-12 px-64 text-center font-bold  text-6xl text-primaryBlue">
                Submit Here
            </h1>
            <div className='w-full mt-4 flex justify-center'>
                <a href='/gsic/register'>
                    <button className='bg-primaryBlue px-8 py-1 text-white font-semibold rounded-lg shadow-lg shadow-slate-400 hover:shadow-none duration-100'>
                        Submit
                    </button>
                </a>
            </div>
            <h1 className="mt-48 px-64 text-center font-bold  text-6xl text-primaryBlue">
                Contact Person
            </h1>
            <div className='w-min flex my-10 mx-auto'>
                <ContactItem type="line" desc="ganeshaaaaa"/>
                <ContactItem type="whatsapp" desc="082376543274532"/>
            </div>
            <Footer />
        </div >
    )
}

export default HomePageGSIC