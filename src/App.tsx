import "./App.css";
import FAQ from "./pages/faq";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/account/login";
import SignUp from "./pages/account/signUp";
import ForgotPassword from "./pages/account/forgot";
import ForgotSent from "./pages/account/forgotSent";
import AboutUs from "./pages/aboutus";
import NotFound from "./pages/addingPages/notFound";
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
import ProfilePeserta from "./pages/dashboardPeserta/profilePeserta";
import EditProfile from "./pages/dashboardPeserta/profilePeserta/edit";
import ParticipantCer from "./pages/dashboardPeserta/ceremony/participant_information";
import EditSubmissionCer from "./pages/dashboardPeserta/ceremony/edit_submission";
import ParticipantBCC from "./pages/dashboardPeserta/BCC/participant_information";
import EditSubmissionBCC from "./pages/dashboardPeserta/BCC/edit_submission";
import CreateTeamBCC from "./pages/dashboardPeserta/BCC/create_team";
import HomePageGSIC from "./pages/gsic/home";
import RegisterGSIC from "./pages/gsic/register";
import RegisterBCC from "./pages/bcc/registration";
import ProtectedRoute from "./API/ProtectedRoute";
import Ceremony from "./pages/ceremony";
import ParticipantGSIC from "./pages/dashboardPeserta/GSIC/participant_information";
import EditDocumentBCC from "./pages/dashboardPeserta/BCC/edit_document";
import EditSubmissionGSIC from "./pages/dashboardPeserta/GSIC/edit_submission";
import EditDocumentGSIC from "./pages/dashboardPeserta/GSIC/edit_document";

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
        {/* CEREMONY */}
        <Route path="/ceremony" element={<Ceremony />} />
        {/* BCC */}
        <Route path="/bcc" element={<BCC />} />
        <Route
          path="/register-bcc"
          element={
            <ProtectedRoute>
              <RegisterBCC />
            </ProtectedRoute>
          }
        />
        {/* EXHIBITION */}
        <Route path="/exhibition" element={<Exhibition />} />
        <Route
          path="/register-exhibition"
          element={
            <ProtectedRoute>
              <RegistrationExhibition />
            </ProtectedRoute>
          }
        />
        {/* GSIC */}
        <Route path="/gsic" element={<HomePageGSIC />} />
        <Route
          path="/gsic-register"
          element={
            <ProtectedRoute>
              <RegisterGSIC />
            </ProtectedRoute>
          }
        />

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
          path="/profile-edit"
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
        {/* BCC */}
        <Route
          path="/dashboard-bcc"
          element={
            <ProtectedRoute>
              <ParticipantBCC />
            </ProtectedRoute>
          }
        />
        <Route
          path="/submission-bcc"
          element={
            <ProtectedRoute>
              <EditSubmissionBCC />
            </ProtectedRoute>
          }
        />
        <Route
          path="/document-bcc"
          element={
            <ProtectedRoute>
              <EditDocumentBCC />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createteam-bcc"
          element={
            <ProtectedRoute>
              <CreateTeamBCC />
            </ProtectedRoute>
          }
        />
        {/* Ceremony */}
        <Route
          path="/submission-ceremony"
          element={
            <ProtectedRoute>
              <EditSubmissionCer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-ceremony"
          element={
            <ProtectedRoute>
              <ParticipantCer />
            </ProtectedRoute>
          }
        />
        {/* GSIC */}
        <Route
          path="/dashboard-gsic"
          element={
            <ProtectedRoute>
              <ParticipantGSIC />
            </ProtectedRoute>
          }
        />
        <Route
          path="/submission-gsic"
          element={
            <ProtectedRoute>
              <EditSubmissionGSIC />
            </ProtectedRoute>
          }
        />
        <Route
          path="/document-gsic"
          element={
            <ProtectedRoute>
              <EditDocumentGSIC />
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
