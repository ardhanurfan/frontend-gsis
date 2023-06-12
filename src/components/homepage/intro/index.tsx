import { Fragment } from "react"

const Intro = () => {
    return (
        <Fragment>
            <div className="flex flex-row justify-between">
                <div className="font-montserrat relative pt-[264px] w-[666px] ml-[145px] ">
                    <h1 className=" font-bold  text-6xl text-primaryBlue">
                        Ganesha Student Innovation Summit
                    </h1>
                    <p className="mt-[15px] text-justify text-primaryBlue font-normal text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                </div>
                <img src="./src/assets/title_ilustration.svg" alt="" className="pt-[130px]"/>
            </div>
            <img src="./src/assets/theme_elaboration.svg" alt="" className="pt-[62px] relative mx-auto"/>
        </Fragment>
    )
}

export default Intro