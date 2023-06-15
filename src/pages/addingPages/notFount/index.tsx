const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img src="../src/assets/404.svg" alt="404" />
      <h1 className="header2 text-primaryText">Page Not Found...</h1>
      <a
        href="/"
        className="mt-[50px] mb-[16px] py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:opacity-50"
      >
        Go Back
      </a>
    </div>
  );
};

export default NotFound;
