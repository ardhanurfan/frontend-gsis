interface submissionCardProps {
  row: any;
}

const SubmissionCard = ({ row }: submissionCardProps) => {
  return (
    <>
      <div className="w-full rounded-[10px] px-9 pt-[30px] pb-[50px] border border-primaryBlue mb-4">
        <div className="w-full flex justify-between mb-[26px]">
          <h2 className="header3 text-primaryText">Work</h2>
          <a
            className="cursor-pointer bg-success hover:bg-primaryGreen text-white w-auto rounded px-[21px] py-[6px] flex justify-around items-center"
            href="/dashboard-exhibition-edit"
          >
            Edit
          </a>
        </div>
        <div className="w-full flex justify-between mb-3">
          <div className="flex gap-[100px]">
            <div>
              <h3 className="body-text text-primaryText">Stream</h3>
              <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                {row.category}
              </p>
            </div>
            <div>
              <h3 className="body-text text-primaryText">Year Created</h3>
              <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                {row.year}
              </p>
            </div>
            <div>
              <h3 className="body-text text-primaryText">Size</h3>
              <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                {row.size}
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <a
              className="cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded px-[21px] py-[6px] flex justify-around items-center"
              href={row.documentation[0].url}
            >
              Document
            </a>
          </div>
        </div>
        <div>
          <h3 className="body-text text-primaryText">Description</h3>
          <p className=" text-seccondaryBlue font-monserrat text-[12px] text-justify">
            {row.description}
          </p>
        </div>
        <div className="w-full flex justify-between my-3">
          <div className="flex gap-[100px]">
            <div>
              <h3 className="body-text text-primaryText">Instagram</h3>
              <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                {row.instagram}
              </p>
            </div>
            <div>
              <h3 className="body-text text-primaryText">Youtube</h3>
              <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                {row.youtube}
              </p>
            </div>
            <div>
              <h3 className="body-text text-primaryText">Twitter</h3>
              <p className=" text-seccondaryBlue font-monserrat text-[12px]">
                {row.twitter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubmissionCard;
