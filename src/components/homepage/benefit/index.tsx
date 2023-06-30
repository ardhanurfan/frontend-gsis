import './style.css'

interface BenefitProps {
    title:string;
    b1:string;
    b2:string;
    b3:string;
    b4:string;
    b5:string;
}

const Benefit = ({title,b1,b2,b3,b4,b5}:BenefitProps) => {
    return (
        <div className="flex flex-col items-center space-y-10 lg:space-y-16">
            <h1 className="w-full mt-28 header1-mobile lg:header1 text-primaryBlue text-center">
                {title}
            </h1>
            <div className=" flex flex-col items-center  lg:grid lg:grid-cols-2 gap-y-5 lg:gap-x-5 w-[70vw]  h-[auto] mx-auto relative ">
                <div className="benefit-card h-auto lg:h-[200px] w-full mx-auto flex justify-center p-[5%] lg:p-[10%]">
                    <p className="text-primaryBlue body-text-mobile lg:body-text text-center">
                        {b1}
                    </p>
                </div>
                <div className="benefit-card h-auto lg:h-[200px] w-full mx-auto flex justify-center   p-[5%] lg:p-[10%]">
                    <p className="text-primaryBlue body-text-mobile lg:body-text text-center">
                        {b2}
                    </p>
                </div>
                <div className="benefit-card h-auto lg:h-[200px] w-full mx-auto flex justify-center   p-[5%] lg:p-[10%]">
                    <p className="text-primaryBlue body-text-mobile lg:body-text text-center">
                        {b3}
                    </p>
                </div>
                <div className="benefit-card h-auto lg:h-[200px] w-full mx-auto flex justify-center   p-[5%] lg:p-[10%]">
                    <p className="text-primaryBlue body-text-mobile lg:body-text text-center">
                        {b4}
                    </p>
                </div>
                <div className=" col-span-2 benefit-card h-auto lg:h-[200px] w-full lg:w-auto mx-auto flex justify-center   p-[5%] lg:p-[10%]">
                    <p className="text-primaryBlue body-text-mobile lg:body-text text-center">
                        {b5}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Benefit;