import "./App.css";
import AboutUs from "./pages/aboutus/index";
import FAQ from "./pages/faq/FAQ";
import Navbar from "./components/common/navbar/Navbar";
import Homepage from "./pages/homepage";
import Footer from "./components/common/footer";

function App() {
  return (
    <>
      <Homepage/>
      <Navbar />
      <Footer/>
    </>
  );
}

export default App;
