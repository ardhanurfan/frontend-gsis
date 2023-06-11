import "./style.css"

const FAQ = () => {
    return(
        <>
        <div className="w-full h-[1602px] bg-[url(./src/assets/Background.svg)] bg-cover">
        <div className="flex flex-col items-center py-4">
            <h1 className="pt-[241px] text-7xl font-bold text-center text-[#005CBA] title mb-16">FAQ</h1>
            <div className="mt-9.5 space-y-4">

                <details className="pb-5 hover:cursor-pointer rounded-xl">
                    <summary className="w-[1230px] h-[70px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white flex items-center justify-between px-5">Lorem ipsum dolor sit amet.</summary>
                    <p className="w-[1230px] h-[70px] bg-white rounded-b-xl flex items-center justify-between px-5 shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illum. Enim quidem necessitatibus officiis ducimus? Ex, alias, aliquam optio rerum, architecto perspiciatis aspernatur libero placeat delectus cumque quibusdam temporibus pariatur?</p>
                </details>

                <details className="pb-5 hover:cursor-pointer">
                    <summary className="w-[1230px] h-[70px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white flex items-center justify-between px-5">Lorem ipsum dolor sit amet.</summary>
                    <p className="w-[1230px] h-[70px] bg-white rounded-b-xl flex items-center justify-between px-5 shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illum. Enim quidem necessitatibus officiis ducimus? Ex, alias, aliquam optio rerum, architecto perspiciatis aspernatur libero placeat delectus cumque quibusdam temporibus pariatur?</p>
                </details>

                <details className="pb-5 hover:cursor-pointer">
                    <summary className="w-[1230px] h-[70px] text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white flex items-center justify-between px-5">Lorem ipsum dolor sit amet.</summary>
                    <p className="w-[1230px] h-[70px] bg-white rounded-b-xl flex items-center justify-between px-5 shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illum. Enim quidem necessitatibus officiis ducimus? Ex, alias, aliquam optio rerum, architecto perspiciatis aspernatur libero placeat delectus cumque quibusdam temporibus pariatur?</p>
                </details>
                

            </div>
        </div>
        </div>
        </>
    )
}

export default FAQ;