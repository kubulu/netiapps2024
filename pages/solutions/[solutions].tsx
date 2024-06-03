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
    console.log('Solu=',props);
    let serviceTitle = props.solution[0].acf.title; 
    let menuList  = props.menuList;
   

    return(
        <div>
            <Nav/>      
            <InnerHero banner={props.solution[0].acf}/>
            {props.solution[0].acf?.content_section?.map((element: any, index: any)=>(
                <div key={index}>
                    {element.acf_fc_layout == 'image' && (
                    <SingleFullImage image={element}/>
                    )}
                    {element.acf_fc_layout == 'title' && <PageSubTitleComponent subTitle={element.title}/> }
                    {element.acf_fc_layout == 'content_section' && <LeftContent Title={element.title} content={element.content}/> }
                    {element.acf_fc_layout == 'content_section__benifit' && <BenifitSection Title={element.title} contentLeft= {element.content_left} contentRight={element.content_right}/> }
                    {element.acf_fc_layout == 'content_section__two_' && 
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
                    <RelatedTechnology menuList={menuList} mainmenu={'solutions'} title={'Solutions'} mobileTitle={serviceTitle} subMenu={'solutions'}/>
            <CasestudySection casestudy={props.home[0].acf.casestudies} />
            <InsightSection industries={props.industries}/>
            <HireSection/>
            <FooterSection/>
        </div>
        )
}

export async function getServerSideProps(context: { query: { solutions: any; }; }) {
    const baseUrl = new ApiService();
    const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/home-page`);
    const home = await response.json(); 

    const resIndustries = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/industries`);
    const industries = await resIndustries.json();

    const { solutions } = context.query;
    const resSolution = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/solutions?slug=${solutions}`);
    const solution = await resSolution.json()


    const resMenu = await fetch(baseUrl.getBaseUrl() + '/wp-json/wp/v2/solutions?filter[orderby]=id&order=asc')
    const menu = await resMenu.json()

    // const resMenu = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/service-detail?filter[orderby]=id&order=asc&categories='+category.id+'&id!='+category.id`);
    // const menu = await resMenu.json(); 

  
  if (home && home.length > 0) {
    return {props: {home, industries, solution, menu, menuList: menu, slug:solutions}}
  }
  else {
    return {props: {}}
  }
  
  }  