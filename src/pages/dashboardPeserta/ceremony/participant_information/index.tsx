import ContactList from "../../../../components/contact_list";
import Status from "../../../../components/dashboard_peserta/bcc/status";
import Footer from "../../../../components/footer";
import Navbar from "../../../../components/navbar/Navbar";

const ParticipantCer = () => {
    return (
        <>
        <Navbar/>
        <div className="w-full pt-[130px] lg:pt-[200px] pb-[100px]">
            <h1 className="header1-mobile lg:header1 text-primaryText mb-7 text-center lg:text-left lg:pl-[70px]">
                Participant Information
            </h1>
            <div className="w-full flex justify-center px-[6%] lg:px-[70px]">
                <div className="w-full rounded-[10px] px-6 pt-[30px] pb-12 border border-primaryBlue mb-4">
                    <div className="w-full flex justify-between mb-2">
                        <div className="flex flex-col gap-y-1">
                            <h2 className="header3-mobile lg:header3 text-primaryText">Name</h2>
                            <p className="body-text-mobile lg:body-text text-seccondaryBlue">Dhanika Novlisariyanti</p>
                        </div>
                        <a
                            className="cursor-pointer bg-primaryBlue text-white w-[17.5%] max-w-[80px] h-5 lg:h-7 body-text-mobile lg:small rounded-lg flex items-center justify-center"
                            href=""
                        >
                            Edit
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-y-1 gap-x-4 mt-1">
                        <h2 className="header3-mobile lg:header3 text-primaryText">Proof of Poster Upload</h2>
                        <Status status="accepted"/>
                    </div>
                    <h2 className="header3-mobile lg:header3 text-primaryText mt-3">Ceremony Information</h2>
                    <p className="body-text-mobile lg:body-text text-primaryText mt-4">Event Name</p>
                    <p className="body-text-mobile lg:small text-seccondaryBlue">Dhanika Novlisariyanti</p>
                    <p className="body-text-mobile lg:body-text text-primaryText mt-4">Date</p>
                    <p className="body-text-mobile lg:small text-seccondaryBlue">XX/XX/XX HH:MM</p>
                    <p className="body-text-mobile lg:body-text text-primaryText mt-4">Link</p>
                    <p className="body-text-mobile lg:small text-seccondaryBlue">Dhanika Novlisariyanti</p>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <h2 className="header2-mobile lg:header2 text-primaryText text-center mb-[34px]">
                    If you’re having trouble, please contact
                </h2>
                <ContactList/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ParticipantCer;