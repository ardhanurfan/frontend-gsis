import { useDropzone, FileWithPath } from "react-dropzone";

interface DropzoneProps {
  childToParent: any;
  type: string;
  value? : string;
}

const UploadFile = ({ type, childToParent, value }: DropzoneProps) => {
  let accept = {};
  if (type == "image") {
    accept = {
      "image/*": [],
    };
  } else if (type == "video") {
    accept = {
      "video/*": [],
    };
  } else if (type == "file") {
    accept = {
      "application/*": [".pdf"],
    };
  } else {
    accept = {
      "video/*": [],
      "image/*": [],
    };
  }

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    maxFiles: 1,
    accept: accept,
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file: FileWithPath) => {
    childToParent(acceptedFiles[0]);
    return (
      <li key={file.path}>
        {(acceptedFiles[0] != null) ? <div className="flex">
          <img src="./src/assets/doc-upload-success.svg" alt="" />
          <div className=" ml-1">
            <p>
              {file.path} - {file.size} bytes
            </p>
            <p className=" text-success font-[8px]">Successfully uploaded!</p>
          </div>
        </div> : (value!=null && value != "") ? <a href={value} className="flex">
          <img src="./src/assets/doc-upload-success.svg" alt="" />
          <div className=" ml-1">
            <p>
              {value}
            </p>
            <p className=" text-success font-[8px]">Successfully uploaded!</p>
          </div>
        </a> : null}
      </li>
    );
  });

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="wrapper w-full bg-slate-200 rounded-xl py-[5.34%] flex flex-col gap-2 items-center border-2 border-primaryBlue border-dashed">
          <img src="./src/assets/upload-file.svg" alt="" />
          <p
            className={
              " text-primaryText text-center font-normal text-xs font-monserrat"
            }
          >
            Drag and Drop Your Files Here
          </p>
          <p className={" text-primaryText font-normal text-xs font-monserrat"}>
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
          <div>{files}</div>
        </ul>
      </aside>
    </div>
  );
};

export default UploadFile;
