import "./style.css";

const Ceremony = () => {
    return(
        <>
        <div className="w-full h-[3852px] bg-[url(./src/assets/Background_Ceremony.svg)] bg-cover">
            <div className="pt-[150px] w-[64.5vw] mx-auto text-center">
                <h1 className="w-auto mx-auto inline-block header1 text-primaryText">JUDUL WEBINAR</h1>
                <div className="w-full h-auto bg-black">
                    <div className="flex flex-row items-center gap-5 px-10 pt-10">
                        <div className="bg-white w-full h-[484px] rounded-xl m-10">
                            <div className="flex flex-row gap-1 m-5">
                                <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
                                <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
                                <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
                            </div>
                        </div>
                        <div className="bg-white w-full">1</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ceremony;