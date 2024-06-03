import React from "react";
import styles from "./leftContent.module.scss"


export default function LeftContent({Title, content}: any) {
    // console.log('SUBBBB=',subTitle)
    return(
        <div className={styles.leftContent}>
            <div className={`container`}>
                <div className={`row`}> 
                    <div className={`col-md-6`}>
                        <h3>{Title}</h3>
                    </div>
                    <div className={`col-md-6`}>
                    <div dangerouslySetInnerHTML={{ __html: content }}/>
                    </div>
                </div>

            </div>
        </div>
    )
}