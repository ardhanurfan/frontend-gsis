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
        const user = await getWithAuth("user", token);
        const id = user.data?.data.id;
        const response = await getWithAuth("bcc-user?user_id=" + id, token);
        console.log(response);
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
    <>
      <NavbarDashboard />
      {data == null ? (
        <Nothing /> ) : (
          <Overview />)}
        <Footer></Footer>
    </>
  );
};

export default DashboardOverview;
