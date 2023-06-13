import "./App.css";
import AboutUs from "./pages/aboutus/index";
import FAQ from "./pages/faq/FAQ";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/index";

function App() {
  return (
        <>
      <Navbar />
      <AboutUs/>
      <Footer/>
      {/* <FAQ /> */}
    </>
  );
}

export default App;
