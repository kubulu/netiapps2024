import React from "react";
import styles from "./overviewSection.module.scss"
import {useScroll} from "framer-motion";
import CasestudySection from "../casestudySection/casestudySection";
import TopTechnology from "../topTechnology/topTechnology";
import { ApiService } from "../../services/api.service";
import { setCookie, getCookie } from 'cookies-next';


export default function OverviewSection({home, industries}: any) {

    const { scrollYProgress } = useScroll()
    let services = home.services;
    console.log('SERR:',industries);
    const baseUrl = new ApiService();
    return(
        <div className={`${styles.overviewSection} bg-color-blue`}>
            <div className={`${styles.blur} dark-hidden`}></div>
            <div className={`container`}>
            <div className={`row tabNav`}>
                    <div className="d-flex align-items-start col-md-6">
                        <div className={styles.leftPanel}>
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <h2 className={`headingFont`}>Create Visually, Customize to Your Hearts Content.</h2>
                            {services?.map((element:any, index: any)=>(
                                                <button key={index} 
                                                 className={ (index == 0)? "nav-link active" :"nav-link"} id="v-pills-home-tab"
                                                 data-bs-toggle="pill" data-bs-target={"#v-pills-"+index} 
                                                 type="button" role="tab" aria-controls="v-pills-home" 
                                                 aria-selected="true" 
                                                >{element.service_title} <img src={`/images/arrow-right.svg`} /> </button> 
                                            ))}
                        </div>
                        </div>

                    </div>
                    <div className={`col-md-6 tab-content`} id="v-pills-tabContent">
                        {services?.map((element:any, index: any)=>(
                            <div key={index} className={(index == 0) ?"tab-pane fade show active":"tab-pane fade"} id={"v-pills-"+index} role="tabpanel" aria-labelledby={"v-pills-"+index+"-tab"}>
                                <div className={styles.rightPanel}>
                                    <h3>{element.service_title}</h3>
                                    <p>{element.service_description}</p> 
                                    <ul>
                                        {element.related_serives?.map((ele:any, ind:any)=>(
                                                <li key={ind}>
                                                    <a href={baseUrl.getSiteUrl()+`services/`+ele.link} className={`linkIcon`}
                                                    onClick={() =>{ 
                                                        setCookie('main-menu','services')
                                                        setCookie('sub-menu',element.service_slug)
                                                        setCookie('landing-page','true')
                                                        }}
                                                        
                                                    >{ele.title} <img src={`/images/arrow.svg` } alt="arrow-black"/> </a>
                                                </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                                            
                    </div>
                </div>
            </div>


            <CasestudySection casestudy={home.casestudies}/>
            <TopTechnology/>
        </div>
    )
}