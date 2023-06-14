import "./App.css";
import AboutUs from "./pages/aboutus/index";
import FAQ from "./pages/faq";
import Footer from "./components/footer/index";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from "./pages/dashboardPeserta/profilePeserta/edit";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/faq" element={<FAQ />} />
    //     <Route path="/about-us" element={<AboutUs />} />
    //     <Route path="*" element={<FAQ />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <EditProfile/>
  );
}

export default App;
