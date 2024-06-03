// import "/styles/global.scss";
import Navigation from "../components/navigation/nav";
import Hero from "../components/mainHero/hero";
import OverviewSection from "../components/overviewSection/overviewSection";
import TestimonialsSection from "../components/testimonialsSection/testimonialsSection";
import InsightSection from "../components/insightSection/insightSection";
import HireSection from "../components/hireSection/hireSection";
import FooterSection from "../components/footerSection/footerSection";
import Nav from "../components/navigation/nav";
import { ApiService } from "../services/api.service";
import axios from 'axios';


export default function Home(props: any) {
  console.log('Home:',props);
    return(
        <div>
            {/*<Navigation/>*/}
            <Nav/>
            <Hero hero={props.home[0].acf} />
            <OverviewSection home={props.home[0].acf} industries={props.industries} />
            <TestimonialsSection testimonials={props.testimonials[0].acf} />
            <InsightSection industries={props.industries} blogs={props.blogs}/>
            <HireSection/>
            <FooterSection/>
        </div>
        )
}

export async function getServerSideProps() {
    const baseUrl = new ApiService();
    const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/home-page`);
    const home = await response.json(); 

    const resIndustries = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/industries`);
    const industries = await resIndustries.json(); 

    const resTestimonials = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/testimonials`);
    const testimonials = await resTestimonials.json(); 

    const resBlogs = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/blog-detail`);
    const blogs = await resBlogs.json(); 
  
  
  
  if (home && home.length > 0) {
    return {props: {home, industries, testimonials, blogs}}
  }
  else {
    return {props: {}}
  }
  
  }  