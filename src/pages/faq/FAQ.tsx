const FAQ = () => {
    return(
        <>
        <div className="w-full h-[1602px] bg-[url(./src/assets/Background.svg)] bg-cover">
            <div className="pt-[241px] text-7xl font-bold text-center text-[#005CBA] title">FAQ</div>
            <div className="flex flex-col place-items-center mt-20">
                <div className="w-auto h-[70px] text-lg mb-3 bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-center text-white flex items-center justify-between px-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    <img src="./src/assets/dropdown.svg " className="pl-5 w-[44px] h-[35px]" />
                </div>
                <div className="w-auto h-[70px] text-lg mb-3 bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-center text-white flex items-center justify-between px-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    <img src="./src/assets/dropdown.svg " className="pl-5 w-[44px] h-[35px]" />
                </div>
                <details>
                    <summary>Epcot Center</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                </details>
            </div>
            
        </div>
        </>
    )
}

export default FAQ;