import React from "react";
import styles from "./benifitSection.module.scss"


export default function BenifitSection({Title, contentRight, contentLeft}: any) {
    console.log('BENN==',contentLeft);
    return(
        <div className={styles.benifitSection}>
            <div className={`container`}>
                <div className={styles.benifitBlock}>
                    <div className={styles.title}>
                        <h2 className={`headingFont`}>{Title}</h2>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-6 gap-4`}>
                        {contentLeft.map((element: any, index: any)=>(
                            <div className={styles.bCard} key={index}>
                             <h4>{element.title}</h4>
                             <div  dangerouslySetInnerHTML={{ __html: element.content }} />
                            </div>
                        ))}
                        </div>
                        <div className={`col-md-6 pt-5`}>
                            {contentRight.map((element: any, index: any)=>(
                                <div className={styles.bCard} key={index}>
                                <h4>{element.title}</h4>
                                <div  dangerouslySetInnerHTML={{ __html: element.content }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}