import FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportToExcel = ({
  apiData,
  fileName,
}: {
  apiData: unknown[];
  fileName: string;
}) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const current = new Date();
  const date = `${current.getDate()}${
    current.getMonth() + 1
  }${current.getFullYear()}${current.getHours()}${current.getMinutes()}${current.getSeconds()}`;

  const exportToCSV = (apiData: unknown[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + `${"_" + date}` + fileExtension);
  };

  return (
    <button
      className="w-auto py-[10px] px-[50px] rounded-[10px] text-button text-white bg-primaryBlue transition duration-500 ease-in-out hover:bg-seccondaryBlue shadow-lg shadow-primaryBlue"
      onClick={() => exportToCSV(apiData, fileName)}
    >
      Download
    </button>
  );
};
