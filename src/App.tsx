import "./App.css";
import FAQ from "./pages/faq";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/account/login";
import SignUp from "./pages/account/signUp";
import ForgotPassword from "./pages/account/forgot";
import ForgotSent from "./pages/account/forgotSent";
import AboutUs from "./pages/aboutus";
import NotFound from "./pages/addingPages/notFount";
import ComingSoon from "./pages/addingPages/comingSoon";
import EditSubmissionExhibition from "./pages/dashboardPeserta/exhibition/edit_submission";
import ParticipantCer from "./pages/dashboardPeserta/ceremony/participant_information";
import EditSubmissionCer from "./pages/dashboardPeserta/ceremony/edit_submission";

function App() {
  return (
    <BrowserRouter>
      {/* <EditSubmissionExhibition /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-sent" element={<ForgotSent />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/parcer" element={<EditSubmissionCer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
