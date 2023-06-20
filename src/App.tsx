import "./App.css";
import FAQ from "./pages/faq";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/account/login";
import SignUp from "./pages/account/signUp";
import ForgotPassword from "./pages/account/forgot";
import ForgotSent from "./pages/account/forgotSent";
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/addingPages/notFount";
import ComingSoon from "./pages/addingPages/comingSoon";
import BCC from "./pages/bcc/landingpage";
import Exhibition from "./pages/exhibiton/landingpage";
import RegistrationExhibition from "./pages/exhibiton/registration";
import DashboardBCC from "./pages/dashboardAdmin/dashboardBCC";
import DashboardCeremony from "./pages/dashboardAdmin/dashboardCeremony";
import DashboardEx from "./pages/dashboardAdmin/dashboardEx";
import DashboardGSIC from "./pages/dashboardAdmin/dashboardGSIC";
import Overview from "./pages/dashboardAdmin/overview";
import DashboardExhibition from "./pages/dashboardPeserta/exhibition/participant_information";
import EditSubmissionExhibition from "./pages/dashboardPeserta/exhibition/edit_submission";
import DashboardOverview from "./pages/dashboardPeserta/overview";
import ProfilePeserta from "./pages/dashboardPeserta/profilePeserta/profile";
import EditProfile from "./pages/dashboardPeserta/profilePeserta/edit";
import HomePageGSIC from "./pages/gsic/home";
import RegisterGSIC from "./pages/gsic/register";
import RegisterBCC from "./pages/bcc/registration";
import Announcement from "./pages/dashboardAdmin/announcement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/bcc" element={<BCC />} />
        <Route path="/register-bcc" element={<RegisterBCC />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/register-exhibition" element={<RegistrationExhibition />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-sent" element={<ForgotSent />} />

        {/* Dashboard Peserta */}
        <Route path="/dashboard" element={<DashboardOverview />} />
        {/* PROFILE */}
        <Route path="/profile" element={<ProfilePeserta />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        {/* EXHIBITION */}
        <Route path="/dashboard-exhibition" element={<DashboardExhibition />} />
        <Route
          path="/dashboard-exhibition-edit"
          element={<EditSubmissionExhibition />}
        />

        {/* Dashboard Admin */}
        <Route path="/dashboard-admin" element={<Overview />} />
        <Route
          path="/dashboard-ceremony-admin"
          element={<DashboardCeremony />}
        />
        <Route path="/dashboard-announcement-admin" element={<Announcement />} />
        <Route path="/dashboard-exhibition-admin" element={<DashboardEx />} />
        <Route path="/dashboard-bcc-admin" element={<DashboardBCC />} />
        <Route path="/dashboard-gsic-admin" element={<DashboardGSIC />} />

        {/* GSIC */}
        <Route path="/gsic" element={<HomePageGSIC/>}/>
        <Route path="/gsic/register" element={<RegisterGSIC/>}/>

        {/* Adding */}
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
