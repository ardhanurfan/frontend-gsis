interface BigCardProps{
    name: string;
    title: string;
    jabatan: string;
    paragraph: string;
    foto: string | undefined;
}

const BigCard = ({name, title, jabatan, paragraph, foto}: BigCardProps) =>{
    return(
      <div className="w-[90.3vw] h-[auto] lg:h-[615px] overflow-auto lg:overflow-visible bg-slate-100 bg-opacity-30 rounded-xl mx-auto mt-[120px] lg:mt-[250px] shadow-lg shadow-slate-500 flex flex-col lg:flex-row gap-[30px] lg:gap-[65px]">
        <div className="w-[300px] lg:w-[350px] h-[400px] lg:h-[450px] bg-gradient-to-l from-primaryBlue to-seccondaryBlue mx-auto lg:mr-0 lg:ml-[59px] mt-[60px] lg:my-[83px] shrink-0 rounded-xl shadow-md shadow-slate-700">
          <div className="inner-card h-[77.78%] rounded-xl shadow-md shadow-slate-600 relative">
            <div className="h-auto w-[38px] flex justify-between float-left m-[4%]">
              <div className="h-[10px] w-[10px] rounded-full bg-primaryGreen"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryYellow"></div>
              <div className="h-[10px] w-[10px] rounded-full bg-primaryOrange"></div>
            </div>
            <img src={foto} className="absolute h-full w-full bottom-[22%]" alt="" />
            <div className="badge-name w-[85.7%] h-[55px] mx-auto flex justify-center items-center rounded-md absolute bottom-0 left-0 right-0 top-[77.71%] shadow-sm shadow-slate-700 body-text">
              {name}
            </div>
          </div>
          <h3 className="text-white header3 h-[58px] w-[246px] mx-auto text-center mt-[20px]">
            {jabatan}
          </h3>
        </div>
        <div className="lg:pt-[98px] w-full clear-left lg:clear-none">
          <h1 className="text-primaryText header1 text-center lg:text-start px-12 lg:px-0 lg:pr-2 mb-[37px]">
            {title}
          </h1>
          <p className="text-primaryText pb-5 lg:mr-[97px] px-12 lg:px-0 body-text text-justify">
            {paragraph}
          </p>
        </div>
      </div>
    )
}

export default BigCard;