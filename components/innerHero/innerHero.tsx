import React from "react";
import styles from "./innerHero.module.scss"
import { title } from "process";


export default function InnerHero(banner: any) {
    // console.log('Innn=',banner);
    return(
        <div className={styles.innerHero}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-1`}>

                    </div>
                    {banner.banner.content_section.map((element: any, index: any)=>(
                     <>{element.acf_fc_layout == 'sub_title' && ( 
                    <div className={`col-8 pl-5`}>                   
                        <h2>{element.title}</h2><p>{element.sub_title}</p>                      
                    </div>
                    )}</>
                    ))}
                   
                    <div className={`col-3`}>
                        <div className={styles.round}>
                            <img src={`/images/software.svg`} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}