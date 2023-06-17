import Intro from "../../components/homepage/intro";
import Event from "../../components/homepage/events";
import Benefit from "../../components/homepage/benefit";
import Supported from "../../components/homepage/support";
import Sponsored from "../../components/homepage/sponsor";

import "./style.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-cover bg-[url(./assets/background_homepage.svg)]">
        <Intro />
        <Event />
        <Benefit />
        <Supported />
        <Sponsored />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
