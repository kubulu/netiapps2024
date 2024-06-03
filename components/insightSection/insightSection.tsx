import React, { useState, useEffect } from 'react';
import styles from "./insightSection.module.scss"
import { motion, useAnimation } from 'framer-motion';
import { setCookie, getCookie } from 'cookies-next';
import axios from 'axios';
import { ApiService } from "../../services/api.service";
import moment from 'moment'; 


export default function InsightSection({industries, blogs}: any) {
   
    const [insights, setInsights] = useState(Array);
    const [blogId, setBlogId] = useState(Number);
    const baseUrl = new ApiService();
    {useEffect(()=>{
        axios.get(baseUrl.getBaseUrl()+`/wp-json/wp/v2/blog-detail?orderby=date&order=desc&per_page=2`).then((response) => {
            setInsights(response.data);
        });
       
    },[blogId])}

    console.log('bloggg=',insights);

    return(
        <motion.div
            className={`${styles.insightSection} backgroundColorChange`}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-10`}>
                        <div className={styles.insightTitle}>
                            <h2 className={`headingFont`}>Easily integrate our solutions to your projects</h2>
                        </div>
                        <div className={styles.industryBlock}>
                            <ul>
                                {industries.map((element: any, index: any)=>(
                                <li key={index}><img src={element.acf.image} /> {element.acf.title} </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.insightBlock}>
                            <div className={`row`}>
                            {insights?.map((element:any, index:any)=>(                                    
                                <div className={`col-6`} key={index}>
                                    <div className={styles.insightCard}>
                                        <a href={baseUrl.getSiteUrl()+`blogs/`+element.slug}>
                                        <div className={styles.insightImg}>
                                            <img src={element.acf.image} />
                                        </div>
                                        </a>
                                        <a href={baseUrl.getSiteUrl()+`blogs/`+element.slug}>
                                        <div className={styles.insightContent}>
                                            <h5>{element.acf.title}</h5>
                                            <p>{ moment(element.date).format('DD MMMM YYYY') }</p>
                                        </div>
                                        </a>
                                    </div>
                                </div>                                   
                            ))} 
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}