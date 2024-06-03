import React from "react";
import { ApiService } from "../../services/api.service";
import InsightSection from "../../components/insightSection/insightSection";
import HireSection from "../../components/hireSection/hireSection";
import FooterSection from "../../components/footerSection/footerSection";
import Nav from "../../components/navigation/nav";
import InnerHero from "../../components/innerHero/innerHero";
import SingleFullImage from "../../components/singleFullImage/singleFullImage";
import LeftContent from "../../components/leftContent/leftContent";
import BenifitSection from "../../components/benifitSection/benifitSection";
import CasestudySection from "../../components/casestudySection/casestudySection";
import TwoSectionContent from "../../components/twoSectionContent/twoSectionContent";
import RelatedTechnology from "../../components/relatedTechology/relatedTechnology";
import ImageLeftComponent from "../../components/imageLeft/imageLeft.component";
import ImageRightComponent from "../../components/imageRight/imageRight.component";
import PageSubTitleComponent from "../../components/PageSubTitle/pageSubTitleSection.component";


export default function Home(props: any) {
    console.log('Serrr=',props);
    let serviceTitle = props.service[0].acf.title;
    let menuList  = props.menuList;
   

    return(
        <div>
            <Nav/>      
            <InnerHero banner={props.service[0].acf}/>
            {props.service[0].acf?.content_section?.map((element: any, index: any)=>(
                <div key={index}>
                    {element.acf_fc_layout == 'single_image' && (
                    <SingleFullImage image={element}/>
                    )}
                    {element.acf_fc_layout == 'title' && <PageSubTitleComponent subTitle={element.title}/> }
                    {element.acf_fc_layout == 'content_section' && <LeftContent Title={element.title} content={element.content}/> }
                    {element.acf_fc_layout == 'content_section___benifit' && <BenifitSection Title={element.title} contentLeft= {element.content_left} contentRight={element.content_right}/> }
                    {element.acf_fc_layout == 'content_section___two_' && 
                                    <TwoSectionContent  Title={element.title}
                                    contentLeft= {element.content_left} 
                                    contentRight={element.content_right}/>}
                                    {element.acf_fc_layout == 'left_image_section' && 
                                          <ImageLeftComponent image={element.image} content={element.text}/>
                                    }
                                    {element.acf_fc_layout == 'right_image_section' && 
                                          <ImageRightComponent image={element.image} content={element.text}/>
                                    }
                     </div>
            ))}
                    {/* <LeftContent/> */}
                    {/* <LeftContent/> */}
                    {/* <BenifitSection/> */}
                    {/* <TwoSectionContent/> */}
                    <RelatedTechnology menuList={menuList} mainmenu={'services'} title={props.title} mobileTitle={serviceTitle} subMenu={props.slug}/>
            <CasestudySection casestudy={props.home[0].acf.casestudies} />
            <InsightSection industries={props.industries}/>
            <HireSection/>
            <FooterSection/>
        </div>
        )
}

export async function getServerSideProps(context: { query: { services: any; }; }) {
    const baseUrl = new ApiService();
    const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/home-page`);
    const home = await response.json(); 

    const resIndustries = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/industries`);
    const industries = await resIndustries.json();

    const { services } = context.query;
    const resServices = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/service-detail?slug=${services}`);
    const service = await resServices.json()

    const categories = await fetch(baseUrl.getBaseUrl() + '/wp-json/wp/v2/categories/'+service[0].categories[0])
    const category = await categories.json()

    const resMenu = await fetch(baseUrl.getBaseUrl() + '/wp-json/wp/v2/service-detail?filter[orderby]=id&order=asc&categories='+category.id+'&id!='+category.id)
    const menu = await resMenu.json()

    // const resMenu = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/service-detail?filter[orderby]=id&order=asc&categories='+category.id+'&id!='+category.id`);
    // const menu = await resMenu.json(); 

  
  if (home && home.length > 0) {
    return {props: {home, industries, service, menu, menuList: menu, title:category.name, slug:services}}
  }
  else {
    return {props: {}}
  }
  
  }  