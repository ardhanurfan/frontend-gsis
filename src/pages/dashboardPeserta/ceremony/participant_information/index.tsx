import ContactList from "../../../../components/contact_list";
import Footer from "../../../../components/footer";
import Navbar from "../../../../components/navbar/Navbar";

const ParticipantCer = () => {
    return (
        <>
        <Navbar/>
        <div className="w-full px-[70px] pt-[200px] pb-[100px]">
            <h1 className="header1 text-primaryText mb-7">
                Participant Information
            </h1>
            <div className="w-full rounded-[10px] px-6 pt-[30px] pb-12 border border-primaryBlue mb-4">
                <div className="w-full flex justify-between mb-2">
                    <div className="flex flex-col gap-y-1">
                        <h2 className="header3 text-primaryText">Name</h2>
                        <p className="body-text text-seccondaryBlue">Dhanika Novlisariyanti</p>
                    </div>
                    <a
                        className="cursor-pointer bg-primaryBlue text-white w-20 h-7 rounded-lg flex items-center justify-center"
                        href=""
                    >
                        Edit
                    </a>
                </div>
                <div className="flex items-center gap-x-4 mt-1">
                    <h2 className="header3 text-primaryText">Proof of Poster Upload</h2>
                    <div className="w-28 h-auto rounded-2xl flex items-center justify-center bg-success">
                        <p className="small text-[#FCFCFC]">Accepted</p>
                    </div>
                </div>
                <h2 className="header3 text-primaryText mt-3">Ceremony Information</h2>
                <p className="body-text text-primaryText mt-4">Event Name</p>
                <p className="small text-seccondaryBlue">Dhanika Novlisariyanti</p>
                <p className="body-text text-primaryText mt-4">Date</p>
                <p className="small text-seccondaryBlue">XX/XX/XX HH:MM</p>
                <p className="body-text text-primaryText mt-4">Link</p>
                <p className="small text-seccondaryBlue">Dhanika Novlisariyanti</p>
            </div>
            <div className="w-full flex flex-col items-center">
                <h2 className="header2 text-primaryText mb-[34px]">
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