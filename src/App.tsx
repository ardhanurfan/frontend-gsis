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
import ProtectedRoute from "./API/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-sent" element={<ForgotSent />} />
        {/* BCC */}
        <Route path="/bcc" element={<BCC />} />
        <Route path="/register-bcc" element={<RegisterBCC />} />
        {/* EXHIBITION */}
        <Route path="/exhibition" element={<Exhibition />} />
        <Route
          path="/register-exhibition"
          element={<RegistrationExhibition />}
        />
        {/* GSIC */}
        <Route path="/gsic" element={<HomePageGSIC />} />
        <Route path="/gsic/register" element={<RegisterGSIC />} />

        {/* Dashboard Peserta : Harus login pakek protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardOverview />
            </ProtectedRoute>
          }
        />
        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePeserta />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        {/* EXHIBITION */}
        <Route
          path="/dashboard-exhibition"
          element={
            <ProtectedRoute>
              <DashboardExhibition />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-exhibition-edit"
          element={
            <ProtectedRoute>
              <EditSubmissionExhibition />
            </ProtectedRoute>
          }
        />

        {/* Dashboard Admin : Harus login pakek protected route */}
        <Route
          path="/dashboard-admin"
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-ceremony-admin"
          element={
            <ProtectedRoute>
              <DashboardCeremony />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-exhibition-admin"
          element={
            <ProtectedRoute>
              <DashboardEx />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-bcc-admin"
          element={
            <ProtectedRoute>
              <DashboardBCC />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-gsic-admin"
          element={
            <ProtectedRoute>
              <DashboardGSIC />
            </ProtectedRoute>
          }
        />

        {/* Adding */}
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
