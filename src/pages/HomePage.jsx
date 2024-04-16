import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import GetStarted from "../components/GetStarted";

export default function HomePage() {
    return (
        <div>
            <HomeHero />
            <GetStarted />
            <AboutUs />
        </div>
    )
}