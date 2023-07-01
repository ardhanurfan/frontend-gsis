const EmptyOverview = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <img
          className="h-[200px] mb-8"
          src="assets/dashboard_overview_empty.svg"
          alt=""
        />
        <p className="text-primaryText header1">There is nothing here...</p>
      </div>
    </>
  );
};

export default EmptyOverview;
