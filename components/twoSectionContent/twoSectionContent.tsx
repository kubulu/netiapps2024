import React from "react";
import styles from "./twoSectionContent.module.scss"


export default function TwoSectionContent({Title, contentLeft, contentRight}:any) {
    console.log('Two=',contentLeft);
    return(
        <div className={styles.twoSectionContent}>
            <div className={`container`}>
                <div className={styles.paddingLeft}>
                <h2 className={`headingFont text-start`}>{Title}</h2>
                <div className={`row`}>
                        <div className={`col-md-5`}>
                        <div  dangerouslySetInnerHTML={{ __html: contentRight }} />
                        </div>
                        <div className={`col-md-5`}>
                            <div  dangerouslySetInnerHTML={{ __html: contentLeft }} />
                        </div>
                    </div>
                       
                    {/* <h2 className={`headingFont text-start`}>{Title}</h2>

                       
                        </div>
                        <div className={`col-md-6`}>
                            <div className="row">
                        <div className="col-md-6"  dangerouslySetInnerHTML={{ __html: contentRight }} />
                        <div className="col-md-6"   dangerouslySetInnerHTML={{ __html: contentLeft }} />
                        </div> */}
                </div>
                    

            </div>
        </div>
    )
}