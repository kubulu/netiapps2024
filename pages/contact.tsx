import HireSection from "../components/hireSection/hireSection";
import FooterSection from "../components/footerSection/footerSection";
import Nav from "../components/navigation/nav";
import InsightPage from "../components/insightPage/insightPage";
import ContactForm from "../components/contactForm/contactForm";

export default function Home() {
    return(
        <div>
            <Nav/>
            <ContactForm/>
            <FooterSection/>
        </div>
        )
}