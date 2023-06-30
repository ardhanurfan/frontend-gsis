import Intro from "../../components/homepage/intro";
import Event from "../../components/homepage/events";
import Supported from "../../components/homepage/support";
import Sponsored from "../../components/homepage/sponsor";
import "./style.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer";
import Benefit from "../../components/homepage/benefit";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-cover bg-[url(./assets/background_homepage.svg)]">
        <Intro />
        <Event />
        <Benefit  title="Benefit" b1="Get a platform to collaborate" b2="Gain relationships within the national to international scope" b3="Gain relationships within the national to international scope" b4="Get new insigtht " b5="Upgrading skills through events from GSIS"/>
        <Supported />
        <Sponsored />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
