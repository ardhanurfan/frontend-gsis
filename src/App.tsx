import "./App.css";
import AboutUs from "./pages/aboutus/index";
import FAQ from "./pages/faq/FAQ";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/index";
import ProfilePeserta from "./pages/dashboardPeserta/profilePeserta";

function App() {
  return (
        <>
      <Navbar />
      <ProfilePeserta/>
      <Footer/>
      {/* <FAQ /> */}
    </>
  );
}

export default App;
