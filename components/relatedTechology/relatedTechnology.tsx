import React, { useState, useEffect } from 'react';
import styles from "./relatedTechnology.module.scss"
import Link from "next/link";
import { ApiService } from "../../services/api.service";
import { setCookie, getCookie } from 'cookies-next';
// import Link from 'next/link'
import { useRouter } from 'next/router';

interface Props {
    menuList: any,
    mainmenu: any,
    title: any,
    mobileTitle: any,
    subMenu: any
}

export default function RelatedTechnology(props: any) {
console.log('MEnuu=',props);


const baseUrl = new ApiService();
const router = useRouter();
let menu_list = props.menuList;
let mainmenu = props.mainmenu;



const [sectionTitle, setSectionTitle] = useState(props.menuList[0].acf.title);
let lastPart = router.asPath.substring(router.asPath.lastIndexOf('/') + 1);


    return(
        <div className={styles.relatedTechnology}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-10`}>
                        <div className={styles.listSection}>
                            <h2 className={`headingFont text-start`}>The Power of Technology in the Palm of Your Hand</h2>
                                {menu_list?.map((element: any, index: any)=>(
                                    <div key={index} className={styles.listBorder}>
                                        {(element.slug == 'blogs' || element.slug == 'careers')?
                                <a href={baseUrl.getSiteUrl() + element.slug}
                                    onClick={() => {
                                        setCookie('landing-page', 'false');
                                        setSectionTitle(element.acf.title);
                                    }}
                                >
                                    <li className={lastPart == element.slug ? 'active' : ''}>
                                        {element.acf.title} <img src={`/images/arrowRound.svg`} />
                                    </li>
                                </a> :
                                            <a href={baseUrl.getSiteUrl() + mainmenu + `/` + element.slug} className='row'
                                                onClick={() => {
                                                    setCookie('landing-page', 'false');
                                                }} >
                                                    <div className={`col-md-3`}>
                                                        <h4 className={lastPart == element.slug ? 'active' : ''}>
                                                            {element.acf.title} </h4>
                                                    </div>
                                                    
                                                    <div className="col-md-6">
                                                    {element.acf.content_section.map((ele: any, ind: any) => (
                                                           ele.acf_fc_layout === 'sub_title' && <p key={ind}>{ele.sub_title}</p>
                                                          ))}
                                                    </div>
                                                    
                                                    <div className={`col text-end`}>
                                                        <img src={`/images/arrowRound.svg`} />
                                                    </div>
                                            </a>}
                                    
                                    </div>


                                ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}