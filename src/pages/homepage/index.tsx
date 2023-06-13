import Intro from "../../components/homepage/intro"
import Supported from "../../components/homepage/support"
import Sponsored from "../../components/homepage/sponsor"
import Event from "../../components/homepage/event"

const Homepage = () => {
    return (
        <div className="w-full h-auto bg-cover  bg-[url(./assets/background_homepage.svg)]">
            <Intro/>
            <Event/>
            <Supported/>
            <Sponsored/>
        </div>
    )
}

export default Homepage