import HireSection from "../components/hireSection/hireSection";
import FooterSection from "../components/footerSection/footerSection";
import Nav from "../components/navigation/nav";
import InsightPage from "../components/insightPage/insightPage";

export default function Home() {
    return(
        <div>
            <Nav/>
            <InsightPage/>
            <HireSection/>
            <FooterSection/>
        </div>
        )
}