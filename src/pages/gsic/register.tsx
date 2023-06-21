import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer'

function RegisterGSIC() {
  return (
    <div>
        <Navbar/>
        <div className="overflow-auto w-[95vw] mx-auto pb-[22px]">
            <h1 className="mx-auto mt-36 text-center header1 text-primaryText">
                Chalenge (GSIC) Registration
            </h1>
        </div>
        <Footer/>
    </div>
  )
}

export default RegisterGSIC