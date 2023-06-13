import "./App.css";
import AboutUs from "./pages/aboutUs/index";
import FAQ from "./pages/faq";
import Footer from "./components/footer/index";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Navbar />
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<FAQ />} />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
