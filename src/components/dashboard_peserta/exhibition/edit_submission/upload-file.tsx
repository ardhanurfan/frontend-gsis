import { useDropzone, FileWithPath } from "react-dropzone";

const UploadFile = () => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [],
      "video/*": [],
    },
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="wrapper w-full bg-slate-200 rounded-xl py-3 flex flex-col gap-1 items-center border-2 border-primaryBlue border-dashed">
          <img src="./src/assets/upload-file.svg" alt="" />
          <p className=" text-primaryText font-normal text-xs font-monserrat">
            Drag and Drop Your Files Here
          </p>
          <p className="text-primaryText font-normal text-xs font-monserrat">
            or
          </p>
          <button
            type="button"
            onClick={open}
            className="cursor-pointer bg-primaryBlue hover:bg-seccondaryBlue text-white w-auto rounded-lg px-[21px] py-[6px] flex justify-around items-center font-monserrat"
          >
            Browse File
          </button>
        </div>
      </div>
      <aside>
        <h4 className="text-primaryText font-normal text-xs font-monserrat">
          Uploaded files:
        </h4>
        <ul className="text-primaryText font-semibold text-xs font-monserrat">
          {files}
        </ul>
      </aside>
    </div>
  );
};

export default UploadFile;
