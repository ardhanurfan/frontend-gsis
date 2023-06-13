// import "./style.css"

const Footer = () => {
    return (
        <div className="relative shadow-md shadow-slate-600 bottom-0">
            <div className="px-[35px] flex justify-between items-center w-full h-[50px] bg-slate-100 bg-opacity-20 backdrop-blur-lg mx-auto top-[40px] border-2 border-white border-opacity-20 shadow-md ">
                <img src="./src/assets/logo_gsis.svg" alt="" />
                <div className="flex gap-[5px] items-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM5.8418 9.1582C4.92773 8.24414 4.92773 6.75879 5.8418 5.84473C6.75586 4.93066 8.24121 4.93066 9.15527 5.84473C9.43066 6.12012 9.87598 6.12012 10.1484 5.84473C10.4209 5.56934 10.4238 5.12402 10.1484 4.85156C8.68359 3.38672 6.31055 3.38672 4.8457 4.85156C3.38086 6.31641 3.38086 8.68945 4.8457 10.1543C6.31055 11.6191 8.68359 11.6191 10.1484 10.1543C10.4238 9.87891 10.4238 9.43359 10.1484 9.16113C9.87305 8.88867 9.42773 8.88574 9.15527 9.16113C8.24121 10.0752 6.75586 10.0752 5.8418 9.16113V9.1582Z" fill="#015CBA"/>
                </svg>

                    <p className="body text text-primaryBlue">
                        Ganesha Student Innovation Summit
                    </p>
                </div>
                <div className="flex gap-[11px] text-primaryBlue">  
                    <a className="h-6 w-8 justify-end flex items-center hover:text-seccondaryBlue" href="https://www.linkedin.com/company/ganesha-student-innovation-summit/">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z">
                            </path>
                        </svg>
                    </a>  
                    <a className="h-6 w-6 justify-end flex items-center hover:text-seccondaryBlue" href="https://www.instagram.com/ganeshasummit/?hl=en">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;