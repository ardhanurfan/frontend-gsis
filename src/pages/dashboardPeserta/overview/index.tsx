import { useEffect, useState } from "react";
import Overview from "../../../components/dashboard_peserta/overview";
import Footer from "../../../components/footer";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";
import Nothing from "../../addingPages/nothing";
import { getWithAuth } from "../../../API/api";

const DashboardOverview = () => {
  const [data, setData] = useState<any | null>(null);
  const token = localStorage.getItem("access_token");

  const getData = async () => {
    if (token) {
      try {
        const response = await getWithAuth("announcement-by-user", token);
        setData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full h-min-screen">
      <NavbarDashboard />
      {data == null || data.length == 0 ? <Nothing /> : <Overview />}
      <Footer></Footer>
    </div>
  );
};

export default DashboardOverview;
