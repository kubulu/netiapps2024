import HireSection from "../../components/hireSection/hireSection";
import FooterSection from "../../components/footerSection/footerSection";
import Nav from "../../components/navigation/nav";
import InsightPage from "../../components/insightPage/insightPage";
import { ApiService } from "../../services/api.service";
import React from "react";
import axios from 'axios';


export default function Home(props: any) {
    console.log('Bprops=',props);

    // let blogData = props.blog_detail[0];
   
    return(
        <div>
            <Nav/>
            {/* <InsightPage blog={blog}/> */}
            <HireSection/>
            <FooterSection/>
        </div>
        )
}

export async function getServerSideProps(context: { query: { blogs: any; }; }) {
    const baseUrl = new ApiService();
    const resmenu = await axios.get(baseUrl.getBaseUrl() + `wp-json/wp/v2/menusection`);
    const menu = resmenu.data[0].acf.menu.header_section;


    const { blogs } = context.query;
    const resblog = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/blog-detail?slug=${blogs}`);
    const blog = await resblog.json()


  
  if (menu && menu.length > 0) {
    return {props: {menu, blog_detail: blog}}
  }
  else {
    return {
        props: {blog_detail: ''}
    }
  }
  
  }  