import './style.css'

interface BenefitWebinarCardProps {
    title:string;
    b1:string;
    b2:string;
    b3:string;
    b4:string;
    b5:string;
    b6:string;
}

const BenefitWebinarCard = ({title,b1,b2,b3,b4,b5,b6}:BenefitWebinarCardProps) => {
    return (
        <div className="flex flex-col items-center space-y-16">
            <h1 className="w-auto mt-28 font-bold text-6xl text-primaryBlue">
                {title}
            </h1>
            <div className="grid grid-cols-2 gap-x-11 gap-y-14 w-[945px] h-[auto] mx-auto relative ">
                <div className="benefit-card h-[200px] w-[450px] mx-auto flex justify-center px-[20%]">
                    <p className="text-primaryBlue body-text ">
                        {b1}
                    </p>
                </div>
                <div className="benefit-card h-[200px] w-[450px] mx-auto flex justify-center">
                    <p className="text-primaryBlue body-text">
                        {b2}
                    </p>
                </div>
                <div className="benefit-card h-[200px] w-[450px] mx-auto flex justify-center px-[20%]">
                    <p className="text-primaryBlue body-text">
                        {b3}
                    </p>
                </div>
                <div className="benefit-card h-[200px] w-[450px] mx-auto flex justify-center">
                    <p className="text-primaryBlue body-text">
                        {b4}
                    </p>
                </div>
                <div className="benefit-card h-[200px] w-[450px] mx-auto flex justify-center">
                    <p className="text-primaryBlue body-text">
                        {b5}
                    </p>
                </div>
                <div className="benefit-card h-[200px] w-[450px] mx-auto flex justify-center">
                    <p className="text-primaryBlue body-text">
                        {b6}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BenefitWebinarCard;