import Overview from "../../../components/dashboard_peserta/overview";
import Footer from "../../../components/footer";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDashboard";

const DashboardOverview = () => {
  return (
    <>
      <NavbarDashboard />
      <Overview />
      <Footer></Footer>
    </>
  );
};

export default DashboardOverview;
