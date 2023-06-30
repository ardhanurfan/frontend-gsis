import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
import "./style.css";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-[url(./src/assets/Background_FAQ.svg)] bg-cover">
        <div className="flex flex-col justify-center py-4">
          <h1 className="pt-[150px] text-7xl font-bold text-center text-[#005CBA] title mb-16">
            FAQ
          </h1>
          <div className="mt-9.5 space-y-4">
            <details className="px-5 lg:px-52 pb-5 hover:cursor-pointer rounded-xl">
              <summary className="w-full h-auto lg:h-[70px] py-2 lg:py-0 text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-[5%] mx-auto flex items-center justify-between shadow-lg hover:">
                How do I join the program?
              </summary>
              <p className="w-auto h-auto bg-white rounded-b-xl flex items-center justify-between shadow-lg px-[5%] py-5">
                We have 4 main events that you can join, business case
                competition, ganesha social impact challenge, exhibition, and
                grand summit. You can register for these events.
              </p>
            </details>

            <details className="px-5 lg:px-52 pb-5 hover:cursor-pointer rounded-xl">
              <summary className="w-full h-auto lg:h-[70px] py-2 lg:py-0 text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-[5%] mx-auto flex items-center justify-between shadow-lg ">
                What minimum requirement / age to join competition / events?
              </summary>
              <p className="w-auto h-auto bg-white rounded-b-xl flex items-center justify-between shadow-lg px-[5%] py-5">
                Minimum requirement / age depends on the event you are
                participating in. You can read back on each event on this web.
              </p>
            </details>

            <details className="px-5 lg:px-52 pb-5 hover:cursor-pointer rounded-xl">
              <summary className="w-full h-auto lg:h-[70px] py-2 lg:py-0 text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-[5%] mx-auto flex items-center justify-between shadow-lg">
                Can I join more than 1 program?
              </summary>
              <p className="w-auto h-auto bg-white rounded-b-xl flex items-center justify-between shadow-lg px-[5%] py-5">
                Yes, of course
              </p>
            </details>

            <details className="px-5 lg:px-52 pb-5 hover:cursor-pointer rounded-xl">
              <summary className="w-full h-auto lg:h-[70px] py-2 lg:py-0 text-lg bg-gradient-to-l from-[#060B81] to-[#005CBA] rounded-xl text-white px-[5%] mx-auto flex items-center justify-between shadow-lg">
                Lorem ipsum dolor sit amet.
              </summary>
              <p className="w-auto h-auto bg-white rounded-b-xl flex items-center justify-between shadow-lg px-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                illum. Enim quidem necessitatibus officiis ducimus? Ex, alias,
                aliquam optio rerum, architecto perspiciatis aspernatur libero
                placeat delectus cumque quibusdam temporibus pariatur?
              </p>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
