import "/styles/global.scss";

import InsightSection from "../components/insightSection/insightSection";
import HireSection from "../components/hireSection/hireSection";
import FooterSection from "../components/footerSection/footerSection";
import Nav from "../components/navigation/nav";

export default function Home() {
    return(
        <div>
            <Nav/>

            <InsightSection/>
            <HireSection/>
            <FooterSection/>
        </div>
        )
}