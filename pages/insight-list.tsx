import InsightSection from "../components/insightSection/insightSection";
import HireSection from "../components/hireSection/hireSection";
import FooterSection from "../components/footerSection/footerSection";
import Nav from "../components/navigation/nav";
import InnerHero from "../components/innerHero/innerHero";
import SingleFullImage from "../components/singleFullImage/singleFullImage";
import LeftContent from "../components/leftContent/leftContent";
import BenifitSection from "../components/benifitSection/benifitSection";
import CasestudySection from "../components/casestudySection/casestudySection";
import TwoSectionContent from "../components/twoSectionContent/twoSectionContent";
import RelatedTechnology from "../components/relatedTechology/relatedTechnology";
import InsightList from "../components/insightList/insightList";

export default function Home() {
    return(
        <div>
            <Nav/>
            <InnerHero/>
            <InsightList/>
            <HireSection/>
            <FooterSection/>
        </div>
        )
}