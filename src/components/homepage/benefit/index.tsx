import './style.css';

const benefits = [
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
    {
      description:
        "Foster and enable interpersonal relationship with students and innovators from all over Indonesia",
    },
];


const Benefit = () => {
    return (
        <div className="flex flex-col items-center space-y-16">
            <h1 className="w-auto mt-[250px]  font-bold text-6xl text-primaryBlue">
                Benefit
            </h1>
            <div className="grid grid-cols-2 gap-x-11 gap-y-14 w-[66%]] h-[450px] mx-auto ">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card h-[200px] w-[130px] sm:w-[450px] mx-auto p-[15%]">
                        <p className="text-primaryBlue text-xs sm:text-base">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefit