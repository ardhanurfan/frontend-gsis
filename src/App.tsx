import "./App.css";
import AboutUs from "./pages/aboutus/index";
import FAQ from "./pages/faq";
import Footer from "./components/footer/index";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/dashboardAdmin/overview";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
