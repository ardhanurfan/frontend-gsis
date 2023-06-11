const Navbar = () => {
    return (
        <>
        <div className="w-full h-[1602px] bg-[url(./src/assets/Background.svg)] bg-cover">
            <div className="w-[1300px] h-[89px] bg-transparent m-auto relative top-[40px] rounded-full border-2 border-white shadow-md">
                <img src="./src/assets/logo_gsis.svg" alt="" className="absolute left-[0.85%] right-[92.31%] top-0 bottom-0"/>
                <div className="flex flex-row flex- gap-[50px] absolute left-[29%] right-[16.7%] top-[39.33%] bottom-[38.2%]">
                    <a>Home</a>
                    <a>About Us</a>
                    <a>Ceremnony</a>
                </div>
            </div>

        </div>
        </>

    )
}

export default Navbar;