import React, { useState, useEffect } from 'react';
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
import { ApiService } from "../services/api.service";
import axios from 'axios';

export default function Home(props: any) {

    const [blogList, setBlogList] = useState(props.blogList);
    const [filterCategory, setFilterCategory] = useState('');

    return(
        <div>
            <Nav/>
            {/* <InnerHero/> */}
            <InsightList setFilterCategory={setFilterCategory} blogPage={props.blogPage} blogList={blogList} filterCategory={filterCategory} />
            <HireSection/>
            <FooterSection/>
        </div>
        )
}

export async function getServerSideProps() {
    const baseUrl = new ApiService();
    const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/home-page`);
    const home = await response.json(); 

    const blogs = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/blog-detail?per_page=100&&orderby=date&order=desc`);
    const resblogs = await blogs.json()

    const blog = await axios.get(baseUrl.getBaseUrl() + `/wp-json/wp/v2/pages?slug=blogs`);
    const blogPage = blog.data[0];


  
  if (home && home.length > 0) {
    return {props: {home, blogList: resblogs, blogPage: blogPage}}
  }
  else {
    return {props: {}}
  }
  
  } 